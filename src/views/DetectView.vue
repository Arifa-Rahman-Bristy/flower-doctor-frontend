<template>
  <div class="phone-frame">
    
    <!-- Main Full Camera UI -->
    <div style="width: 100%; height: 100%; background: #05130b; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden;">
      
      <!-- Top Camera Controls -->
      <div style="padding: 40px 16px 10px; display: flex; justify-content: space-between; align-items: center; z-index: 5;">
        <!-- Working Flash Button -->
        <button @click="toggleFlash" :style="flashOn ? 'background: #eab308; color: #fff;' : 'background: rgba(255,255,255,0.2); color: #fff;'" style="border: none; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: 0.2s;">
          <i class="fa-solid fa-bolt" style="font-size: 13px;"></i>
        </button>
        <!-- Working Settings Button -->
        <button @click="openSettings" style="background: rgba(255,255,255,0.2); border: none; color: #fff; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer;">
          <i class="fa-solid fa-gear" style="font-size: 13px;"></i>
        </button>
      </div>

      <!-- Viewfinder Area -->
      <div style="flex: 1; margin: 0 12px; border-radius: 20px; overflow: hidden; position: relative; background: #000; display: flex; align-items: center; justify-content: center;">
        <video v-if="!capturedImg" ref="videoRef" autoplay playsinline style="width: 100%; height: 100%; object-fit: cover;"></video>
        <img v-else :src="capturedImg" style="width: 100%; height: 100%; object-fit: cover;" />

        <!-- Camera Scanner Corner Frame -->
        <div v-if="!capturedImg" style="position: absolute; top: 40px; left: 30px; right: 30px; bottom: 40px; border: 2px dashed rgba(255,255,255,0.85); border-radius: 16px; pointer-events: none;"></div>
      </div>

      <!-- Mode Selector (Photo / Gallery) -->
      <div style="display: flex; justify-content: center; align-items: center; gap: 20px; margin-top: 10px;">
        <span 
          :style="activeMode === 'camera' ? 'background: #16a34a; color: #fff; font-weight: 800;' : 'color: #94a3b8; font-weight: 600;'" 
          style="padding: 4px 14px; border-radius: 14px; font-size: 11px; cursor: pointer;"
          @click="switchMode('camera')"
        >
          Photo
        </span>
        <span 
          :style="activeMode === 'gallery' ? 'background: #16a34a; color: #fff; font-weight: 800;' : 'color: #94a3b8; font-weight: 600;'" 
          style="padding: 4px 14px; border-radius: 14px; font-size: 11px; cursor: pointer;"
          @click="switchMode('gallery')"
        >
          Gallery
        </span>
      </div>

      <!-- Bottom Capture Control Bar -->
      <div style="padding: 12px 24px 30px; display: flex; justify-content: space-between; align-items: center;">
        <!-- Gallery Thumbnail -->
        <div style="width: 44px; height: 44px; border-radius: 10px; overflow: hidden; border: 2px solid rgba(255,255,255,0.6); cursor: pointer;" @click="triggerGallery">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=150&auto=format&fit=crop" style="width: 100%; height: 100%; object-fit: cover;" />
        </div>

        <!-- Shutter Button -->
        <div 
          style="width: 60px; height: 60px; border-radius: 50%; border: 3px solid #ffffff; display: flex; align-items: center; justify-content: center; cursor: pointer;"
          @click="takePhoto"
        >
          <div style="width: 48px; height: 48px; background: #ffffff; border-radius: 50%;"></div>
        </div>

        <!-- Simulated Quality Test Toggle (For Testing Low Quality Popup) -->
        <button @click="simulatedLowQuality = !simulatedLowQuality" style="background: rgba(255,255,255,0.15); border: none; color: #fff; font-size: 9px; padding: 6px 8px; border-radius: 6px; cursor: pointer;">
          Quality: {{ simulatedLowQuality ? 'Low' : 'Good' }}
        </button>
      </div>

      <!-- Hidden Input for Gallery Upload -->
      <input type="file" ref="fileInput" accept="image/*" style="display: none;" @change="onFileSelected" />

      <!-- LOW QUALITY WARNING POPUP -->
      <div v-if="showWarningModal" style="position: absolute; inset: 0; background: rgba(0,0,0,0.65); z-index: 20; display: flex; align-items: flex-end; justify-content: center;">
        <div style="background: #ffffff; width: 100%; border-radius: 24px 24px 0 0; padding: 20px 20px 30px; text-align: center; display: flex; flex-direction: column; align-items: center; gap: 10px; box-shadow: 0 -10px 25px rgba(0,0,0,0.3); animation: slideUp 0.3s ease-out;">
          
          <!-- Alert Warning Icon -->
          <div style="width: 50px; height: 50px; background: #fef2f2; border-radius: 50%; display: flex; align-items: center; justify-content: center;">
            <i class="fa-solid fa-triangle-exclamation" style="font-size: 26px; color: #dc2626;"></i>
          </div>

          <h3 style="margin: 0; font-size: 16px; font-weight: 800; color: #0f172a;">ছবির মান ভালো না</h3>
          <p style="margin: 0; font-size: 11px; color: #475569; font-weight: 600; line-height: 1.4;">
            ছবিটি ঝাপসা বা অন্ধকার。<br>অনুগ্ৰহ করে আরও পরিষ্কার ছবি তুলুন।
          </p>

          <!-- Instructions Checklist -->
          <div style="text-align: left; width: 100%; background: #f8fafc; border-radius: 12px; padding: 10px 14px; font-size: 11px; color: #334155; display: flex; flex-direction: column; gap: 6px; border: 1px solid #e2e8f0; margin-top: 4px;">
            <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-check" style="color: #16a34a; font-size: 12px;"></i> <span>আলো ভালো রাখুন</span></div>
            <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-check" style="color: #16a34a; font-size: 12px;"></i> <span>ক্যামেরা স্থির রাখুন</span></div>
            <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-check" style="color: #16a34a; font-size: 12px;"></i> <span>ফুল বা পাতার ওপর ফোকাস করুন</span></div>
          </div>

          <!-- Retry Button -->
          <button class="btn-main" style="background: #14532d; color: #ffffff; border: none; padding: 12px; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer; width: 100%; margin-top: 6px;" @click="closeWarning">
            আবার চেষ্টা করুন
          </button>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const activeMode = ref('camera')
const videoRef = ref(null)
const fileInput = ref(null)
const capturedImg = ref(null)
const showWarningModal = ref(false)
const simulatedLowQuality = ref(false)
const flashOn = ref(false)
let stream = null

const toggleFlash = () => {
  flashOn.value = !flashOn.value
}

const openSettings = () => {
  alert("ক্যামেরা সেটিংস এবং রেজোলিউশন কনফিগারেশন এখানে আসবে।")
}

const startCamera = async () => {
  try {
    capturedImg.value = null
    stream = await navigator.mediaDevices.getUserMedia({ video: { facingMode: 'environment' } })
    if (videoRef.value) {
      videoRef.value.srcObject = stream
    }
  } catch (err) {
    console.warn('Camera stream error')
  }
}

const stopCamera = () => {
  if (stream) {
    stream.getTracks().forEach(track => track.stop())
    stream = null
  }
}

const switchMode = (mode) => {
  activeMode.value = mode
  if (mode === 'gallery') {
    triggerGallery()
  } else {
    startCamera()
  }
}

const triggerGallery = () => {
  if (fileInput.value) fileInput.value.click()
}

const takePhoto = () => {
  if (videoRef.value && stream) {
    const canvas = document.createElement('canvas')
    canvas.width = videoRef.value.videoWidth || 400
    canvas.height = videoRef.value.videoHeight || 400
    const ctx = canvas.getContext('2d')
    ctx.drawImage(videoRef.value, 0, 0, canvas.width, canvas.height)
    capturedImg.value = canvas.toDataURL('image/png')
  } else {
    capturedImg.value = 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500&auto=format&fit=crop'
  }

  if (simulatedLowQuality.value) {
    showWarningModal.value = true
  } else {
    processAnalysis()
  }
}

const onFileSelected = (e) => {
  const file = e.target.files[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = (event) => {
      capturedImg.value = event.target.result
      if (simulatedLowQuality.value) {
        showWarningModal.value = true
      } else {
        processAnalysis()
      }
    }
    reader.readAsDataURL(file)
  }
}

const closeWarning = () => {
  showWarningModal.value = false
  capturedImg.value = null
  startCamera()
}

const processAnalysis = () => {
  if (capturedImg.value) {
    try {
      localStorage.setItem('detected_flower_img', capturedImg.value)
    } catch (e) {
      console.warn('Storage limit')
    }
  }
  router.push('/result')
}

onMounted(() => {
  startCamera()
})

onUnmounted(() => {
  stopCamera()
})
</script>

<style scoped>
@keyframes slideUp {
  from { transform: translateY(100%); }
  to { transform: translateY(0); }
}
</style>