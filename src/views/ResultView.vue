<template>
  <div class="phone-frame">
    
    
    <!-- Top Header -->
    <div class="page-header" style="background: #ffffff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9;">
      <button class="back-btn" @click="$router.push('/detect')" style="background: none; border: none; font-size: 14px; cursor: pointer;"><i class="fa-solid fa-arrow-left"></i></button>
      <h3 style="font-size: 14px; margin: 0; font-weight: 800; color: #0f172a;">রোগ ও ফুল শনাক্তকরণ ফলাফল</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body" style="padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; background: #ffffff;">
      <!-- Flower Image Display -->
      <div style="width: 100%; height: 160px; border-radius: 12px; overflow: hidden; position: relative; border: 1px solid #e2e8f0;">
        <img :src="flowerData.image" style="width: 100%; height: 100%; object-fit: cover;" />
        <span 
          :style="flowerData.hasDisease ? 'background: #ea580c;' : 'background: #16a34a;'" 
          style="position: absolute; bottom: 8px; right: 8px; color: #ffffff; font-size: 10px; font-weight: 800; padding: 4px 10px; border-radius: 6px;"
        >
          {{ flowerData.hasDisease ? 'রোগ চিহ্নিত' : 'সুস্থ ফুল' }}
        </span>
      </div>

      <!-- Name & Scientific Name Card -->
      <div style="background: #f0fdf4; border: 1px solid #dcfce7; padding: 10px 12px; border-radius: 12px;">
        <div style="display: flex; justify-content: space-between; align-items: start;">
          <div>
            <h3 style="margin: 0; font-size: 15px; font-weight: 800; color: #14532d;">{{ flowerData.banglaName }}</h3>
            <p style="margin: 2px 0 0; font-size: 10px; color: #15803d; font-style: italic; font-weight: 700;">
              Scientific Name: {{ flowerData.scientificName }}
            </p>
          </div>
          <span style="background: #ffffff; color: #15803d; font-size: 10px; font-weight: 800; padding: 3px 8px; border-radius: 6px; border: 1px solid #bbf7d0;">
            Match: {{ flowerData.confidence }}%
          </span>
        </div>
      </div>

      <!-- Disease Details Card (If Disease Exists) -->
      <div v-if="flowerData.hasDisease" style="border: 1px solid #fecaca; background: #fef2f2; border-radius: 12px; padding: 10px 12px;">
        <h4 style="margin: 0 0 4px; font-size: 13px; font-weight: 800; color: #991b1b;">
          <i class="fa-solid fa-virus" style="margin-right: 4px;"></i> {{ flowerData.diseaseName }}
        </h4>
        <p style="margin: 0; font-size: 11px; color: #7f1d1d; font-weight: 600;">
          Severity: <span style="background: #fef08a; color: #854d0e; font-weight: 800; padding: 2px 6px; border-radius: 4px; font-size: 10px;">{{ flowerData.severity }}</span> | আক্রান্ত অংশ: {{ flowerData.affectedPart }}
        </p>
      </div>

      <!-- Details Card -->
      <div class="custom-card" style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; background: #f8fafc; display: flex; flex-direction: column; gap: 6px;">
        <h4 style="margin: 0 0 4px; font-size: 12px; color: #0f172a; font-weight: 800;">ফুলের বিবরণ ও বৈশিষ্ট্য</h4>
        <div style="font-size: 11px; color: #334155; display: flex; flex-direction: column; gap: 4px;">
          <div><strong>গোত্র (Family):</strong> {{ flowerData.family }}</div>
          <div><strong>ফোটার সময়:</strong> {{ flowerData.bloomingSeason }}</div>
          <div><strong>উপযুক্ত মাটি:</strong> {{ flowerData.soilType }}</div>
        </div>
      </div>

      <!-- Action Buttons -->
      <button v-if="flowerData.hasDisease" class="btn-main" style="background: #14532d; color: #ffffff; border: none; padding: 12px; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer;" @click="$router.push('/treatment')">
        চিকিৎসা পরামর্শ দেখুন
      </button>
      <button v-else class="btn-main" style="background: #14532d; color: #ffffff; border: none; padding: 12px; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer;" @click="$router.push('/care')">
        যত্নের পরামর্শ দেখুন
      </button>

      <button style="width: 100%; background: #ffffff; border: 1px solid #14532d; color: #14532d; padding: 10px; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer;" @click="$router.push('/detect')">
        পুনরায় পরীক্ষা করুন
      </button>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn active" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const flowerData = ref({
  image: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500&auto=format&fit=crop',
  banglaName: 'লাল গোলাপ (Rose)',
  scientificName: 'Rosa rubiginosa',
  family: 'Rosaceae (রোজেসি)',
  confidence: 96.4,
  hasDisease: true,
  diseaseName: 'Black Spot (Fungal Disease)',
  severity: 'Moderate',
  affectedPart: 'পাতা (Leaf)',
  bloomingSeason: 'সারা বছর (বিশেষ করে শীতকালে)',
  soilType: 'উর্বর দোআঁশ মাটি'
})

onMounted(() => {
  const savedImage = localStorage.getItem('detected_flower_img')
  if (savedImage) {
    flowerData.value.image = savedImage
  }
})
</script>