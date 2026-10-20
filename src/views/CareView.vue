<template> 
  <div class="phone-frame">
     
    <!-- Top Header -->
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')"><i class="fa-solid fa-arrow-left"></i></button>
      <h3>গাছের যত্নের পরামর্শ</h3>
      <div style="width: 20px;"></div>
    </div>

    <!-- Page Body -->
    <div class="page-body">
      
      <!-- Toggle Tabs -->
      <div style="display: flex; background: #f1f5f9; padding: 3px; border-radius: 10px; gap: 4px;">
        <button 
          :style="activeTab === 'general' ? 'background: #ffffff; color: #14532d; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-weight: 800;' : 'background: transparent; color: #64748b; font-weight: 700;'" 
          style="flex: 1; padding: 8px; border: none; border-radius: 8px; font-size: 11px; cursor: pointer;"
          @click="activeTab = 'general'"
        >
          সাধারণ যত্ন
        </button>
        <button 
          :style="activeTab === 'weather' ? 'background: #ffffff; color: #14532d; box-shadow: 0 1px 3px rgba(0,0,0,0.05); font-weight: 800;' : 'background: transparent; color: #64748b; font-weight: 700;'" 
          style="flex: 1; padding: 8px; border: none; border-radius: 8px; font-size: 11px; cursor: pointer;"
          @click="activeTab = 'weather'"
        >
          আবহাওয়া ভিত্তিক
        </button>
      </div>

      <!-- Tab Content 1: General Care Cards -->
      <div v-if="activeTab === 'general'" style="display: flex; flex-direction: column; gap: 10px;">
        
        <!-- Card 1 -->
        <div class="custom-card" style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; background: #059669; color: #ffffff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <i class="fa-solid fa-droplet" style="font-size: 20px;"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 12px; color: #14532d; font-weight: 800;">পানি ও সেচ</h4>
            <p style="margin: 0; font-size: 10px; color: #475569; font-weight: 600; line-height: 1.3;">প্রতি ২-৩ দিন পরপর<br>(মাটির ধরন অনুযায়ী)</p>
          </div>
        </div>

        <!-- Card 2 -->
        <div class="custom-card" style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; background: #eab308; color: #ffffff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <i class="fa-solid fa-sun" style="font-size: 20px;"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 12px; color: #14532d; font-weight: 800;">সূর্যালোক</h4>
            <p style="margin: 0; font-size: 10px; color: #475569; font-weight: 600; line-height: 1.3;">প্রতিদিন ৬-৮ ঘণ্টা<br>সরাসরি আলো</p>
          </div>
        </div>

        <!-- Card 3 -->
        <div class="custom-card" style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; background: #16a34a; color: #ffffff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <i class="fa-solid fa-seedling" style="font-size: 20px;"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 12px; color: #14532d; font-weight: 800;">মাটি ও সার</h4>
            <p style="margin: 0; font-size: 10px; color: #475569; font-weight: 600; line-height: 1.3;">ঝুরঝুরে দোআঁশ মাটি + জৈব সার<br>(কম্পোস্ট)</p>
          </div>
        </div>

        <!-- Card 4 -->
        <div class="custom-card" style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; background: #f97316; color: #ffffff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <i class="fa-solid fa-temperature-half" style="font-size: 20px;"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 12px; color: #14532d; font-weight: 800;">তাপমাত্রা</h4>
            <p style="margin: 0; font-size: 10px; color: #475569; font-weight: 600; line-height: 1.3;">১৮°C – ৩০°C</p>
          </div>
        </div>

      </div>

      <!-- Tab Content 2: Weather-based Care Cards -->
      <div v-else style="display: flex; flex-direction: column; gap: 10px;">
        <div class="custom-card" style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; background: #0284c7; color: #ffffff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <i class="fa-solid fa-cloud-showers-heavy" style="font-size: 20px;"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 12px; color: #14532d; font-weight: 800;">বর্ষাকালীন যত্ন</h4>
            <p style="margin: 0; font-size: 10px; color: #475569; font-weight: 600; line-height: 1.3;">টবের পানি নিষ্কাশন ব্যবস্থা ভালো রাখুন এবং ছত্রাকনাশক স্প্রে করুন।</p>
          </div>
        </div>

        <div class="custom-card" style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 44px; height: 44px; background: #38bdf8; color: #ffffff; border-radius: 12px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;">
            <i class="fa-solid fa-snowflake" style="font-size: 20px;"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 12px; color: #14532d; font-weight: 800;">শীতকালীন যত্ন</h4>
            <p style="margin: 0; font-size: 10px; color: #475569; font-weight: 600; line-height: 1.3;">কুয়াশা থেকে রক্ষা করতে ভোরে গাছে হালকা পানির ছিটা দিন।</p>
          </div>
        </div>
      </div>

      <!-- Bottom Tip Banner -->
      <div style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 12px; padding: 10px 12px; display: flex; align-items: center; gap: 8px; margin-top: 4px;">
        <div style="width: 20px; height: 20px; background: #16a34a; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 10px;">
          <i class="fa-solid fa-check"></i>
        </div>
        <p style="margin: 0; font-size: 11px; color: #14532d; font-weight: 800;">ফুল ভালো রাখতে নিয়মিত যত্ন নিন।</p>
      </div>

    </div>

    <!-- Bottom Navigation Bar -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const activeTab = ref('general')
</script>