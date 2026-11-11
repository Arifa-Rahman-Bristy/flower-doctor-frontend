<template>
  <div class="phone-frame" style="background: #f8fafc;">
    <!-- Top Header -->
    <div class="page-header" style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 12px 16px;">
      <button class="back-btn" @click="$router.push('/home')" style="background: #f1f5f9; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">
        <i class="fa-solid fa-arrow-left" style="color: #0f172a; font-size: 12px;"></i>
      </button>
      <h3 style="margin: 0; font-size: 14px; font-weight: 800; color: #0f172a;">বাজার মূল্য তথ্য</h3>
      <div style="width: 30px;"></div>
    </div>

    <div class="page-body" style="display: flex; flex-direction: column; gap: 12px; padding: 12px; padding-bottom: 80px;">

      <!-- Market / Location Selector Bar -->
      <div style="display: flex; align-items: center; justify-content: space-between; background: #ffffff; padding: 10px 14px; border-radius: 12px; border: 1px solid #e2e8f0; box-shadow: 0 2px 4px rgba(0,0,0,0.02);">
        <div style="display: flex; align-items: center; gap: 8px;">
          <div style="width: 28px; height: 28px; background: #dcfce7; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #16a34a;">
            <i class="fa-solid fa-location-dot" style="font-size: 12px;"></i>
          </div>
          <div>
            <span style="font-size: 9px; color: #64748b; font-weight: 700; display: block;">নির্বাচিত বাজার</span>
            <span style="font-size: 11px; font-weight: 800; color: #0f172a;">গদখালী ফুল বাজার, যশোর</span>
          </div>
        </div>
      </div>

      <!-- Flower Selection Horizontal Tabs -->
      <div style="display: flex; gap: 6px; overflow-x: auto; padding-bottom: 4px;">
        <button 
          v-for="flower in flowers" 
          :key="flower.id"
          @click="selectedFlower = flower"
          :style="selectedFlower.id === flower.id ? 'background: #16a34a; color: #fff; border-color: #16a34a; box-shadow: 0 4px 10px rgba(22,163,74,0.3);' : 'background: #ffffff; color: #334155; border-color: #cbd5e1;'"
          style="padding: 7px 14px; border-radius: 20px; font-size: 10px; font-weight: 800; cursor: pointer; border: 1px solid; white-space: nowrap; transition: 0.2s;"
        >
          {{ flower.nameBn }}
        </button>
      </div>

      <!-- Main Price Card with Modern Styling -->
      <div class="custom-card" style="background: #ffffff; border-radius: 16px; padding: 14px; border: 1px solid #e2e8f0; box-shadow: 0 6px 15px -3px rgba(0,0,0,0.05);">
        
        <!-- Flower Info Header -->
        <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px; border-bottom: 1px solid #f1f5f9; padding-bottom: 10px;">
          <div style="width: 44px; height: 44px; background: linear-gradient(135deg, #dcfce7 0%, #bbf7d0 100%); border-radius: 12px; display: flex; align-items: center; justify-content: center; color: #16a34a; font-size: 18px;">
            <i :class="selectedFlower.icon"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 13px; font-weight: 800; color: #0f172a;">{{ selectedFlower.nameBn }}</h4>
            <span style="font-size: 9px; color: #15803d; font-weight: 800; background: #f0fdf4; padding: 2px 8px; border-radius: 6px;">পাইকারি বাজার দর</span>
          </div>
        </div>

        <!-- Price Table -->
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <div style="display: flex; justify-content: space-between; font-size: 10px; font-weight: 800; color: #64748b; padding-bottom: 6px; border-bottom: 1px solid #f8fafc;">
            <span>মান (Quality)</span>
            <span>দাম (প্রতি ১০০টি)</span>
          </div>

          <div v-for="(price, index) in selectedFlower.prices" :key="index" style="display: flex; justify-content: space-between; align-items: center; padding: 8px 0; border-bottom: 1px dashed #f1f5f9;">
            <div style="display: flex; align-items: center; gap: 6px;">
              <span style="font-size: 11px; font-weight: 800; color: #1e293b;">{{ price.grade }}</span>
              <i :class="price.trend === 'up' ? 'fa-solid fa-arrow-trend-up' : 'fa-solid fa-arrow-trend-down'" :style="price.trend === 'up' ? 'color: #16a34a; font-size: 10px;' : 'color: #dc2626; font-size: 10px;'"></i>
            </div>
            <span style="font-size: 12px; font-weight: 800; color: #16a34a; background: #f0fdf4; padding: 3px 8px; border-radius: 6px;">{{ price.rate }} ৳</span>
          </div>
        </div>

      </div>

      <!-- Additional Note Card -->
      <div style="background: #fffbeb; border: 1px solid #fef3c7; border-radius: 12px; padding: 10px 12px; display: flex; gap: 8px; align-items: flex-start;">
        <i class="fa-solid fa-circle-info" style="color: #d97706; font-size: 12px; margin-top: 2px;"></i>
        <p style="margin: 0; font-size: 9px; color: #92400e; font-weight: 700; line-height: 1.4;">
          দোকানের অবস্থান, মান এবং মৌসুমী চাহিদা (যেমন: উৎসব বা বিয়ে) অনুযায়ী পাইকারি দামে পরিবর্তন হতে পারে।
        </p>
      </div>

      <!-- Last Updated Timestamp -->
      <div style="text-align: center; font-size: 9px; color: #94a3b8; font-weight: 700; margin-top: 4px;">
        <i class="fa-regular fa-clock"></i> সর্বশেষ আপডেট: আজ, সকাল ৯:০০ টা
      </div>

    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')">
        <i class="fa-solid fa-house"></i>
        <span>হোম</span>
      </div>
      <div class="nav-item" @click="$router.push('/history')">
        <i class="fa-regular fa-clock"></i>
        <span>ইতিহাস</span>
      </div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')">
        <div class="big-cam-circle">
          <i class="fa-solid fa-camera" style="font-size: 18px;"></i>
        </div>
        <span>স্ক্যান</span>
      </div>
      <div class="nav-item" @click="$router.push('/datasets')">
        <i class="fa-solid fa-database"></i>
        <span>ডেটাসেট</span>
      </div>
      <div class="nav-item" @click="$router.push('/profile')">
        <i class="fa-solid fa-ellipsis"></i>
        <span>আরও</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const selectedFlower = ref({
  id: 'rose',
  nameBn: 'গোলাপ (Rose)',
  icon: 'fa-solid fa-seedling',
  prices: [
    { grade: 'গ্রেড এ (সেরা মান)', rate: '৩০০ - ৪০০', trend: 'up' },
    { grade: 'গ্রেড বি (মাঝারি)', rate: '২০০ - ২৫০', trend: 'down' },
    { grade: 'গ্রেড সি (সাধারণ)', rate: '১২০ - ১৬০', trend: 'up' }
  ]
})

const flowers = ref([
  {
    id: 'rose',
    nameBn: 'গোলাপ',
    icon: 'fa-solid fa-seedling',
    prices: [
      { grade: 'গ্রেড এ (সেরা মান)', rate: '৩০০ - ৪০০', trend: 'up' },
      { grade: 'গ্রেড বি (মাঝারি)', rate: '২০০ - ২৫০', trend: 'down' },
      { grade: 'গ্রেড সি (সাধারণ)', rate: '১২০ - ১৬০', trend: 'up' }
    ]
  },
  {
    id: 'marigold',
    nameBn: 'গাঁদা',
    icon: 'fa-solid fa-spa',
    prices: [
      { grade: 'গ্রেড এ (প্রতি হাজার)', rate: '৮০০ - ১০০০', trend: 'up' },
      { grade: 'গ্রেড বি (প্রতি হাজার)', rate: '৫০০ - ৭০০', trend: 'down' }
    ]
  },
  {
    id: 'tuberose',
    nameBn: 'রজনীগন্ধা',
    icon: 'fa-solid fa-feather',
    prices: [
      { grade: 'গ্রেড এ (স্টিক প্রতি)', rate: '৩ - ৪', trend: 'up' },
      { grade: 'গ্রেড বি (স্টিক প্রতি)', rate: '১.৫ - ২', trend: 'down' }
    ]
  },
  {
    id: 'gladiolus',
    nameBn: 'গ্ল্যাডিওলাস',
    icon: 'fa-solid fa-sun',
    prices: [
      { grade: 'গ্রেড এ (স্টিক প্রতি)', rate: '৮ - ১০', trend: 'up' },
      { grade: 'গ্রেড বি (স্টিক প্রতি)', rate: '৫ - ৭', trend: 'up' }
    ]
  }
])
</script>