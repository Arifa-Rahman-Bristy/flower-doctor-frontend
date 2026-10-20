<template>
  <div class="phone-frame">
    
    
    <div class="page-header" style="background: #ffffff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9;">
      <button class="back-btn" @click="$router.push('/home')" style="background: none; border: none; font-size: 14px; cursor: pointer; color: #0f172a;"><i class="fa-solid fa-arrow-left"></i></button>
      <h3 style="font-size: 14px; margin: 0; font-weight: 800; color: #0f172a;">অফলাইন মোড</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body" style="padding: 20px 16px; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 14px; background: #ffffff;">
      <!-- Offline Icon Circle -->
      <div style="width: 65px; height: 65px; background: #f1f5f9; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin-top: 10px;">
        <i class="fa-solid fa-triangle-exclamation" style="font-size: 28px; color: #ef4444;"></i>
      </div>

      <div>
        <h3 style="margin: 0 0 6px; font-size: 16px; font-weight: 800; color: #0f172a;">আপনি এখন অফলাইন</h3>
        <p style="margin: 0; font-size: 11px; color: #64748b; font-weight: 600; line-height: 1.4;">
          ইন্টারনেট না থাকলেও অফলাইন ফিচারের ব্যবহার করতে পারেন।
        </p>
      </div>

      <!-- Checklist Features -->
      <div style="width: 100%; text-align: left; background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; display: flex; flex-direction: column; gap: 8px; font-size: 11px; color: #334155;">
        <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-check" style="color: #16a34a;"></i> <span>পূর্বের ডাটা বিশ্লেষণ দেখা</span></div>
        <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-check" style="color: #16a34a;"></i> <span>সংরক্ষিত চিকিৎসা পরামর্শ</span></div>
        <div style="display: flex; align-items: center; gap: 8px;"><i class="fa-solid fa-check" style="color: #16a34a;"></i> <span>সাধারণ তথ্য</span></div>
      </div>

      <!-- Action Button -->
      <button class="btn-main" style="width: 100%; background: #14532d; color: #ffffff; border: none; padding: 12px; border-radius: 12px; font-size: 12px; font-weight: 800; cursor: pointer; margin-top: 10px;" @click="$router.push('/home')">
        মূল পাতা
      </button>
    </div>

    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>