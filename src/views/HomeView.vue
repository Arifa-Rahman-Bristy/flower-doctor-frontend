<template>
  <div class="phone-frame" style="background: #f8fafc;">
       
    <!-- Header -->
    <div class="page-header" style="background: transparent; border: none; padding: 8px 16px;">
      <div style="display: flex; align-items: center; gap: 8px;">
        <div style="width: 32px; height: 32px; background: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 800; font-size: 12px; box-shadow: 0 4px 10px rgba(22,163,74,0.3);">FD</div>
        <h3 style="margin: 0; color: #0f172a; font-weight: 800;">Flower Doctor</h3>
      </div>
      <button @click="$router.push('/profile')" style="background: #ffffff; border: 1px solid #e2e8f0; width: 32px; height: 32px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; color: #0f172a; box-shadow: 0 2px 5px rgba(0,0,0,0.02);"><i class="fa-solid fa-bell" style="font-size: 12px;"></i></button>
    </div>

    <!-- Page Body with Premium Background Styling -->
    <div class="page-body" style="background: transparent; gap: 12px;">
      
      <!-- Premium Hero Banner -->
      <div style="background: linear-gradient(135deg, #065f46 0%, #10b981 100%); color: #ffffff; border-radius: 16px; padding: 16px; box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4); position: relative; overflow: hidden;">
        <div style="position: absolute; right: -15px; bottom: -15px; opacity: 0.15; font-size: 90px;">
          <i class="fa-solid fa-seedling"></i>
        </div>
        <h4 style="margin: 0 0 4px; font-size: 15px; font-weight: 800;">ফুল ও গাছের সঠিক যত্ন নিন</h4>
        <p style="margin: 0 0 12px; font-size: 10px; opacity: 0.9; line-height: 1.4;">ক্যামেরা দিয়ে স্ক্যান করে ফুলের রোগ ও বাজার মূল্য নিমিষেই জানুন।</p>
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

    <!-- Bottom Navigation -->
    <div class="bottom-nav">
      <div class="nav-item active"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>