<template>
  <div class="phone-frame">
    
    
    <div class="page-header" style="background: #ffffff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9;">
      <button class="back-btn" @click="$router.push('/home')" style="background: none; border: none; font-size: 14px; cursor: pointer; color: #0f172a;"><i class="fa-solid fa-arrow-left"></i></button>
      <h3 style="font-size: 14px; margin: 0; font-weight: 800; color: #0f172a;">আবহাওয়া ও পরিবেশ</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body" style="padding: 12px 14px; display: flex; flex-direction: column; gap: 12px; background: #ffffff;">
      <!-- Location Header -->
      <div style="display: flex; align-items: center; gap: 6px; font-size: 12px; font-weight: 800; color: #0f172a;">
        <i class="fa-solid fa-location-dot" style="color: #16a34a;"></i> Godkhali, Jhikargachha
      </div>

      <!-- Weather Main Card -->
      <div class="custom-card" style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 14px; padding: 16px; display: flex; align-items: center; justify-content: space-between;">
        <div style="display: flex; align-items: center; gap: 14px;">
          <i class="fa-solid fa-sun" style="font-size: 38px; color: #eab308;"></i>
          <div>
            <h2 style="margin: 0; font-size: 22px; font-weight: 800; color: #14532d;">32°C</h2>
            <p style="margin: 2px 0 0; font-size: 11px; font-weight: 700; color: #15803d;">আকাশ পরিষ্কার</p>
          </div>
        </div>
      </div>

      <!-- Weather Stats Grid -->
      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; text-align: center;">
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 4px;">
          <i class="fa-solid fa-droplet" style="color: #0284c7; font-size: 14px; margin-bottom: 4px;"></i>
          <p style="margin: 0; font-size: 10px; color: #64748b; font-weight: 700;">আর্দ্রতা</p>
          <p style="margin: 2px 0 0; font-size: 12px; font-weight: 800; color: #0f172a;">78%</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 4px;">
          <i class="fa-solid fa-cloud-rain" style="color: #3b82f6; font-size: 14px; margin-bottom: 4px;"></i>
          <p style="margin: 0; font-size: 10px; color: #64748b; font-weight: 700;">বৃষ্টি</p>
          <p style="margin: 2px 0 0; font-size: 12px; font-weight: 800; color: #0f172a;">0 mm</p>
        </div>
        <div style="background: #f8fafc; border: 1px solid #e2e8f0; border-radius: 10px; padding: 10px 4px;">
          <i class="fa-solid fa-wind" style="color: #64748b; font-size: 14px; margin-bottom: 4px;"></i>
          <p style="margin: 0; font-size: 10px; color: #64748b; font-weight: 700;">বাতাস</p>
          <p style="margin: 2px 0 0; font-size: 12px; font-weight: 800; color: #0f172a;">12 km/h</p>
        </div>
      </div>

      <!-- Today's Advice Card -->
      <div class="custom-card" style="border: 1px solid #e2e8f0; border-radius: 12px; padding: 12px; background: #ffffff;">
        <h4 style="margin: 0 0 6px; font-size: 12px; font-weight: 800; color: #14532d;">আজকের পরামর্শ</h4>
        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #334155; line-height: 1.5; display: flex; flex-direction: column; gap: 4px;">
          <li>অতিরিক্ত পানি দেবেন না</li>
          <li>দুপুরে ছায়া দিন</li>
          <li>মাটির আর্দ্রতা ঠিক রাখুন</li>
        </ul>
      </div>
    </div>

    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>