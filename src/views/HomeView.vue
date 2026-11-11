<template>
  <div class="phone-frame" style="background: #f8fafc; position: relative;">
       
    <!-- Header -->
    <div class="page-header" style="background: transparent; border: none; padding: 8px 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 32px; height: 32px; background: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 12px; box-shadow: 0 4px 10px rgba(22,163,74,0.3);">FD</div>
        <h3 style="margin: 0; color: #0f172a; font-weight: 800;">Flower Doctor</h3>
      </div>
      <!-- Notification Button with Click Handler -->
      <button @click="showNotificationModal = true" style="background: #ffffff; border: 1px solid #e2e8f0; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0f172a; box-shadow: 0 2px 5px rgba(0,0,0,0.02); position: relative;">
        <i class="fa-solid fa-bell" style="font-size: 12px;"></i>
        <!-- Red Dot Indicator -->
        <span style="position: absolute; top: 6px; right: 6px; width: 7px; height: 7px; background: #dc2626; border-radius: 50%;"></span>
      </button>
    </div>

    <!-- Page Body with Premium Background Styling -->
    <div class="page-body" style="background: transparent; gap: 12px;">
      
      <!-- Premium Hero Banner -->
      <div style="background: linear-gradient(135deg, #065f46 0%, #10b981 100%); color: #ffffff; border-radius: 16px; padding: 16px; box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4); position: relative; overflow: hidden;">
        <div style="position: absolute; right: -15px; bottom: -15px; opacity: 0.15; font-size: 90px;">
          <i class="fa-solid fa-seedling"></i>
        </div>
        <h4 style="margin: 0 0 4px; font-size: 15px; font-weight: 800;">ফুল ও গাছের সঠিক যত্ন নিন</h4>
        <p style="margin: 0 0 12px; font-size: 10px; opacity: 0.9; line-height: 1.4;">ক্যামেরা দিয়ে স্ক্যান করে ফুলের রোগ ও বাজার মূল্য নিমিষেই জানুন।</p>
        <button style="background: #ffffff; color: #065f46; border: none; padding: 7px 14px; border-radius: 8px; font-size: 10px; font-weight: 800; cursor: pointer; box-shadow: 0 2px 5px rgba(0,0,0,0.1);" @click="$router.push('/detect')">
          এখনই স্ক্যান করুন
        </button>
      </div>

      <!-- Quick Action Grid -->
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 10px;">
        <div class="custom-card" style="display: flex; flex-direction: column; gap: 6px; cursor: pointer; border-radius: 14px; transition: 0.2s;" @click="$router.push('/detect')">
          <div style="width: 36px; height: 36px; background: #dcfce7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #16a34a;">
            <i class="fa-solid fa-camera" style="font-size: 16px;"></i>
          </div>
          <h5 style="margin: 0; font-size: 12px; color: #0f172a; font-weight: 800;">ফুল শনাক্তকরণ</h5>
          <p style="margin: 0; font-size: 9px; color: #64748b; font-weight: 600;">রোগ ও জাত চিনুন</p>
        </div>

        <div class="custom-card" style="display: flex; flex-direction: column; gap: 6px; cursor: pointer; border-radius: 14px;" @click="$router.push('/care')">
          <div style="width: 36px; height: 36px; background: #fef9c3; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #ca8a04;">
            <i class="fa-solid fa-seedling" style="font-size: 16px;"></i>
          </div>
          <h5 style="margin: 0; font-size: 12px; color: #0f172a; font-weight: 800;">যত্নের পরামর্শ</h5>
          <p style="margin: 0; font-size: 9px; color: #64748b; font-weight: 600;">পানি ও সার গাইড</p>
        </div>

        <div class="custom-card" style="display: flex; flex-direction: column; gap: 6px; cursor: pointer; border-radius: 14px;" @click="$router.push('/weather')">
          <div style="width: 36px; height: 36px; background: #e0f2fe; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #0284c7;">
            <i class="fa-solid fa-cloud-sun" style="font-size: 16px;"></i>
          </div>
          <h5 style="margin: 0; font-size: 12px; color: #0f172a; font-weight: 800;">আবহাওয়া</h5>
          <p style="margin: 0; font-size: 9px; color: #64748b; font-weight: 600;">পরিবেশ ও তাপমাত্রা</p>
        </div>

        <div class="custom-card" style="display: flex; flex-direction: column; gap: 6px; cursor: pointer; border-radius: 14px;" @click="$router.push('/market')">
          <div style="width: 36px; height: 36px; background: #f3e8ff; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #9333ea;">
            <i class="fa-solid fa-chart-line" style="font-size: 16px;"></i>
          </div>
          <h5 style="margin: 0; font-size: 12px; color: #0f172a; font-weight: 800;">বাজার মূল্য</h5>
          <p style="margin: 0; font-size: 9px; color: #64748b; font-weight: 600;">ফুলের রেট জানুন</p>
        </div>
      </div>

      <!-- AI Voice & Text Assistant Quick Card -->
      <div class="custom-card" style="display: flex; gap: 10px; align-items: center; cursor: pointer; border-radius: 14px; background: #f0fdf4; border: 1px solid #bbf7d0;" @click="$router.push('/assistant')">
        <div style="width: 40px; height: 40px; background: #16a34a; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #ffffff; flex-shrink: 0;">
          <i class="fa-solid fa-microphone-lines" style="font-size: 18px;"></i>
        </div>
        <div style="flex: 1;">
          <h5 style="margin: 0 0 2px; font-size: 12px; color: #14532d; font-weight: 800;">এআই ভয়েস ও চ্যাট অ্যাসিস্ট্যান্ট</h5>
          <p style="margin: 0; font-size: 10px; color: #16a34a; font-weight: 700;">মুখে বা লিখে আপনার সমস্যার সমাধান নিন</p>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #16a34a;"></i>
      </div>

      <!-- Dataset Quick Access Card -->
      <div class="custom-card" style="display: flex; gap: 10px; align-items: center; cursor: pointer; border-radius: 14px; background: #eff6ff; border: 1px solid #bfdbfe;" @click="$router.push('/datasets')">
        <div style="width: 40px; height: 40px; background: #2563eb; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #ffffff; flex-shrink: 0;">
          <i class="fa-solid fa-database" style="font-size: 18px;"></i>
        </div>
        <div style="flex: 1;">
          <h5 style="margin: 0 0 2px; font-size: 12px; color: #1e3a8a; font-weight: 800;">এআই ট্রেনিং ডেটাসেট (Datasets)</h5>
          <p style="margin: 0; font-size: 10px; color: #2563eb; font-weight: 700;">সুস্থ ও রোগাক্রান্ত ফুলের ডেটাসেট দেখুন</p>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #2563eb;"></i>
      </div>

      <!-- Market Price Quick Access Card -->
      <div class="custom-card" style="display: flex; gap: 10px; align-items: center; cursor: pointer; border-radius: 14px; background: #ffffff;" @click="$router.push('/market')">
        <div style="width: 40px; height: 40px; background: #dcfce7; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: #16a34a; flex-shrink: 0;">
          <i class="fa-solid fa-tags" style="font-size: 18px;"></i>
        </div>
        <div style="flex: 1;">
          <h5 style="margin: 0 0 2px; font-size: 12px; color: #0f172a; font-weight: 800;">গোলাপ ও অন্যান্য ফুলের বাজার দর</h5>
          <p style="margin: 0; font-size: 10px; color: #16a34a; font-weight: 700;">আজকের পাইকারি মূল্য দেখতে ক্লিক করুন</p>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #94a3b8;"></i>
      </div>

    </div>

    <!-- Notification Popup Modal -->
    <div v-if="showNotificationModal" style="position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 200; display: flex; align-items: center; justify-content: center; padding: 20px;">
      <div style="background: #ffffff; width: 100%; border-radius: 16px; padding: 16px; display: flex; flex-direction: column; gap: 12px; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
        
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">
          <h4 style="margin: 0; font-size: 13px; font-weight: 800; color: #0f172a;">
            <i class="fa-solid fa-bell" style="color: #16a34a;"></i> জরুরি নোটিফিকেশন
          </h4>
          <button @click="showNotificationModal = false" style="background: none; border: none; font-size: 14px; cursor: pointer; color: #64748b;">
            <i class="fa-solid fa-xmark"></i>
          </button>
        </div>

        <div style="display: flex; flex-direction: column; gap: 8px; max-height: 250px; overflow-y: auto;">
          <div style="background: #f0fdf4; padding: 10px; border-radius: 10px; border-left: 3px solid #16a34a;">
            <p style="margin: 0 0 2px; font-size: 11px; font-weight: 800; color: #14532d;">বাজার দর আপডেট</p>
            <p style="margin: 0; font-size: 10px; color: #334155; font-weight: 600;">আজ গদখালী বাজারে গোলাপের দাম কিছুটা বৃদ্ধি পেয়েছে। বিস্তারিত দেখতে বাজার মূল্য ট্যাবে যান।</p>
          </div>

          <div style="background: #eff6ff; padding: 10px; border-radius: 10px; border-left: 3px solid #2563eb;">
            <p style="margin: 0 0 2px; font-size: 11px; font-weight: 800; color: #1e3a8a;">আবহাওয়া সতর্কতা</p>
            <p style="margin: 0; font-size: 10px; color: #334155; font-weight: 600;">আগামীকাল বৃষ্টির সম্ভাবনা রয়েছে, তাই ক্ষেতের ড্রেনেজ ব্যবস্থা ঠিক রাখুন।</p>
          </div>
        </div>

        <button @click="showNotificationModal = false" style="background: #16a34a; color: #fff; border: none; padding: 8px; border-radius: 10px; font-size: 11px; font-weight: 800; cursor: pointer;">
          বন্ধ করুন
        </button>

      </div>
    </div>

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
      <div class="nav-item active" @click="$router.push('/home')">
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

const showNotificationModal = ref(false)
</script>