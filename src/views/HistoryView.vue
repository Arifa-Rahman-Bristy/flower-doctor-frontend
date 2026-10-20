<template>
  <div class="phone-frame">
       
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')"><i class="fa-solid fa-arrow-left"></i></button>
      <h3>আমার ইতিহাস</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body">
      <!-- Filter Tabs -->
      <div style="display: flex; background: #f1f5f9; padding: 3px; border-radius: 10px; gap: 4px;">
        <button 
          :style="activeTab === 'all' ? 'background: #ffffff; color: #14532d; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-weight: 800;' : 'background: transparent; color: #64748b; font-weight: 700;'"
          style="flex: 1; padding: 6px; border: none; border-radius: 8px; font-size: 11px; cursor: pointer;"
          @click="activeTab = 'all'"
        >
          সকল
        </button>
        <button 
          :style="activeTab === 'flower' ? 'background: #ffffff; color: #14532d; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-weight: 800;' : 'background: transparent; color: #64748b; font-weight: 700;'"
          style="flex: 1; padding: 6px; border: none; border-radius: 8px; font-size: 11px; cursor: pointer;"
          @click="activeTab = 'flower'"
        >
          ফুল শনাক্ত
        </button>
        <button 
          :style="activeTab === 'disease' ? 'background: #ffffff; color: #14532d; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-weight: 800;' : 'background: transparent; color: #64748b; font-weight: 700;'"
          style="flex: 1; padding: 6px; border: none; border-radius: 8px; font-size: 11px; cursor: pointer;"
          @click="activeTab = 'disease'"
        >
          রোগ শনাক্ত
        </button>
      </div>

      <!-- History List -->
      <div style="display: flex; flex-direction: column; gap: 8px; margin-top: 4px;">
        <div 
          v-for="item in filteredHistory" 
          :key="item.id" 
          class="custom-card" 
          style="display: flex; align-items: center; gap: 10px; cursor: pointer;"
          @click="$router.push(item.link)"
        >
          <img :src="item.img" style="width: 45px; height: 45px; border-radius: 8px; object-fit: cover;" />
          <div style="flex: 1;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <h5 style="margin: 0; font-size: 12px; color: #0f172a; font-weight: 800;">{{ item.title }}</h5>
              <span style="font-size: 10px; font-weight: 700; color: #16a34a;">{{ item.match }}</span>
            </div>
            <p style="margin: 3px 0 0; font-size: 10px; color: #64748b; font-weight: 600;">{{ item.date }} • <span :style="item.statusColor">{{ item.status }}</span></p>
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size: 10px; color: #cbd5e1;"></i>
        </div>
      </div>

      <!-- Clear Button -->
      <button class="btn-main" style="background: #ef4444; margin-top: auto;" @click="clearHistory">
        ইতিহাস মুছে ফেলুন
      </button>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item active"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'

const activeTab = ref('all')

const historyList = ref([
  { id: 1, type: 'disease', title: 'Rose (গোলাপ)', date: '10 Aug 2026', match: '96%', status: 'Black Spot', statusColor: 'color: #dc2626;', img: 'https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=150', link: '/result' },
  { id: 2, type: 'flower', title: 'Marigold (গাদা)', date: '8 Aug 2026', match: '93%', status: 'Healthy', statusColor: 'color: #16a34a;', img: 'https://images.unsplash.com/photo-1606041008023-472dfb5e530f?q=80&w=150', link: '/classification' },
  { id: 3, type: 'flower', title: 'Gerbera (গেরবেরা)', date: '5 Aug 2026', match: '90%', status: 'Healthy', statusColor: 'color: #16a34a;', img: 'https://images.unsplash.com/photo-1563245372-f21724e3856d?q=80&w=150', link: '/classification' },
  { id: 4, type: 'disease', title: 'Tuberose (রজনীগন্ধা)', date: '2 Aug 2026', match: '88%', status: 'Powdery Mildew', statusColor: 'color: #dc2626;', img: 'https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=150', link: '/treatment' }
])

const filteredHistory = computed(() => {
  if (activeTab.value === 'flower') {
    return historyList.value.filter(item => item.type === 'flower')
  } else if (activeTab.value === 'disease') {
    return historyList.value.filter(item => item.type === 'disease')
  }
  return historyList.value
})

const clearHistory = () => {
  historyList.value = []
}
</script>