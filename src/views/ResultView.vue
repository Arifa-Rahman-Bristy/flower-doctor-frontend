<template>
  <div class="phone-frame">
    <!-- Top Header -->
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h3>শনাক্তকরণ ফলাফল</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body">
      <!-- Detection Result Header Card -->
      <div class="custom-card" style="background: #f0fdf4; border: 1px solid #dcfce7;">
        <div style="display: flex; gap: 12px; align-items: center;">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=150&auto=format&fit=crop" style="width: 60px; height: 60px; border-radius: 10px; object-fit: cover;" />
          <div style="flex: 1;">
            <h4 style="margin: 0 0 2px; font-size: 15px; font-weight: 800; color: #0f172a;">গোলাপ (Rose)</h4>
            <p style="margin: 0 0 4px; font-size: 11px; color: #16a34a; font-style: italic; font-weight: 700;">
              Scientific: Rosa rubiginosa
            </p>
            <span style="font-size: 10px; background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 12px; font-weight: 800;">
              Accuracy: 96.5%
            </span>
          </div>
        </div>
      </div>

      <!-- Problem Identification -->
      <div class="custom-card" style="border-left: 4px solid #ef4444;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h5 style="margin: 0; font-size: 12px; font-weight: 800; color: #991b1b;">
            <i class="fa-solid fa-circle-exclamation"></i> সমস্যা চিহ্নিতকরণ (Problem Identified)
          </h5>
        </div>
        <p style="margin: 0; font-size: 11px; color: #334155; font-weight: 700;">
          রোগের নাম: ব্ল্যাক স্পট (Black Spot Fungus)
        </p>
      </div>

      <!-- Solution & Text-to-Voice Feature -->
      <div class="custom-card" style="background: #ffffff; border: 1px solid #cbd5e1;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
          <h5 style="margin: 0; font-size: 12px; font-weight: 800; color: #0f172a;">
            <i class="fa-solid fa-shield-halved" style="color: #16a34a;"></i> সমাধান ও পরামর্শ (Solution)
          </h5>
          
          <!-- Voice Button -->
          <button @click="speakSolution" style="background: #16a34a; color: #ffffff; border: none; padding: 5px 10px; border-radius: 6px; cursor: pointer; font-size: 10px; font-weight: 800; display: flex; align-items: center; gap: 4px;">
            <i class="fa-solid fa-volume-high"></i> ভয়েস শুনুন
          </button>
        </div>

        <p style="margin: 0; font-size: 11px; color: #475569; line-height: 1.5; font-weight: 600;">
          {{ solutionText }}
        </p>
      </div>

      <!-- Voice Active Alert Box (Appears when voice is clicked) -->
      <div v-if="isSpeaking" style="background: #f0fdf4; border: 1px solid #bbf7d0; padding: 10px; border-radius: 10px; display: flex; align-items: center; gap: 8px; animation: pulse 1.5s infinite;">
        <i class="fa-solid fa-volume-high" style="color: #16a34a; font-size: 16px;"></i>
        <div>
          <p style="margin: 0; font-size: 11px; font-weight: 800; color: #14532d;">এআই ভয়েস চালু আছে...</p>
          <p style="margin: 0; font-size: 9px; color: #16a34a; font-weight: 600;">কৃষকের জন্য সমাধানটি শোনানো হচ্ছে।</p>
        </div>
      </div>

      <!-- Navigation to Care/Treatment Details -->
      <button class="btn-main" @click="$router.push('/care')">
        কীটনাশক ও সার এর তথ্য দেখুন
      </button>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>হোম</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>ইতিহাস</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>স্ক্যান</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>আরও</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const solutionText = ref("আক্রান্ত পাতাগুলো দ্রুত কেটে ফেলে দিন। গাছের গোড়ায় অতিরিক্ত পানি জমতে দেবেন না। প্রটেকশনের জন্য ম্যানকোজেব (Mancozeb) ছত্রাকনাশক প্রতি লিটার পানিতে ২ গ্রাম মিশিয়ে স্প্রে করুন।")
const isSpeaking = ref(false)

const speakSolution = () => {
  isSpeaking.value = true

  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()

    const utterance = new SpeechSynthesisUtterance(solutionText.value)
    
    // Check available voices for Bangla or fallback to default
    const voices = window.speechSynthesis.getVoices()
    const banglaVoice = voices.find(v => v.lang.includes('bn') || v.lang.includes('BN'))
    if (banglaVoice) {
      utterance.voice = banglaVoice
    }
    
    utterance.lang = 'bn-BD'
    utterance.rate = 0.85
    
    utterance.onend = () => {
      isSpeaking.value = false
    }
    
    utterance.onerror = () => {
      isSpeaking.value = false
    }

    window.speechSynthesis.speak(utterance)
    
    // Safety timeout in case speech engine fails to trigger onend
    setTimeout(() => {
      isSpeaking.value = false
    }, 10000)

  } else {
    isSpeaking.value = false
    alert("আপনার ব্রাউজারে ভয়েস সাপোর্ট করছে না।")
  }
}
</script>