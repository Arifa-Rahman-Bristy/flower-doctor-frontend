<template>
  <div class="phone-frame">
    
    
    <!-- Top Header -->
    <div class="page-header" style="background: #ffffff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9;">
      <button class="back-btn" @click="$router.push('/result')" style="background: none; border: none; font-size: 14px; cursor: pointer;"><i class="fa-solid fa-arrow-left"></i></button>
      <h3 style="font-size: 14px; margin: 0; font-weight: 800; color: #0f172a;">রোগের বিস্তারিত ও চিকিৎসা</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body" style="padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; background: #ffffff;">
      <!-- Disease Header Card -->
      <div style="display: flex; align-items: center; gap: 10px; background: #f8fafc; border: 1px solid #e2e8f0; padding: 10px; border-radius: 12px;">
        <img src="https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?q=80&w=150&auto=format&fit=crop" style="width: 42px; height: 42px; border-radius: 50%; object-fit: cover;" />
        <div>
          <h4 style="margin: 0; font-size: 13px; font-weight: 800; color: #0f172a;">Black Spot <span style="font-size: 10px; color: #64748b; font-weight: 600;">(Fungal Disease)</span></h4>
        </div>
      </div>

      <!-- Toggle Tabs (Roger Tottho / Chikitsa Poramorsho) -->
      <div style="display: flex; background: #f1f5f9; padding: 3px; border-radius: 10px; gap: 4px;">
        <button style="flex: 1; padding: 8px; border: none; background: #ffffff; border-radius: 8px; font-weight: 800; font-size: 11px; color: #14532d; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">রোগের তথ্য</button>
        <button style="flex: 1; padding: 8px; border: none; background: transparent; font-weight: 700; font-size: 11px; color: #64748b; cursor: pointer;" @click="$router.push('/care')">চিকিৎসা পরামর্শ</button>
      </div>

      <!-- Symptoms Section -->
      <div>
        <h4 style="font-size: 12px; font-weight: 800; color: #0f172a; margin: 0 0 4px;">রোগের লক্ষণ</h4>
        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #334155; line-height: 1.4; display: flex; flex-direction: column; gap: 3px;">
          <li>পাতায় কালো দাগ দেখা যায়</li>
          <li>দাগ ধীরে ধীরে বড় হয়</li>
          <li>পাতা ঝরে পড়ে</li>
        </ul>
      </div>

      <!-- Possible Causes Section -->
      <div>
        <h4 style="font-size: 12px; font-weight: 800; color: #0f172a; margin: 0 0 4px;">সম্ভাব্য কারণ</h4>
        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #334155; line-height: 1.4;">
          <li>অতিরিক্ত আর্দ্রতা, বৃষ্টি, স্যাঁতসেঁতে পরিবেশ</li>
        </ul>
      </div>

      <!-- Treatment Methods Section -->
      <div>
        <h4 style="font-size: 12px; font-weight: 800; color: #0f172a; margin: 0 0 4px;">চিকিৎসা পদ্ধতি</h4>
        <ol style="margin: 0; padding-left: 16px; font-size: 11px; color: #334155; line-height: 1.4; display: flex; flex-direction: column; gap: 3px;">
          <li>আক্রান্ত পাতা ও অংশ কেটে ফেলুন</li>
          <li>প্রয়োজনে fungicide ব্যবহার করুন (যেমন: Mancozeb, Carbendazim)</li>
          <li>গাছের চারপাশ পরিষ্কার রাখুন</li>
          <li>নিয়মিত পর্যবেক্ষণ করুন</li>
        </ol>
      </div>

      <!-- Warning Box -->
      <div style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 10px; padding: 10px; display: flex; gap: 8px; align-items: start; margin-top: 4px;">
        <div style="width: 24px; height: 24px; background: #16a34a; color: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; flex-shrink: 0; font-size: 11px;">
          <i class="fa-solid fa-triangle-exclamation"></i>
        </div>
        <div>
          <h5 style="margin: 0 0 2px; font-size: 11px; color: #14532d; font-weight: 800;">সতর্কতা</h5>
          <p style="margin: 0; font-size: 10px; color: #166534; line-height: 1.3; font-weight: 600;">ঔষধ ব্যবহারের আগে লেবেল নির্দেশনা পড়ুন এবং সুরক্ষা সরঞ্জাম ব্যবহার করুন।</p>
        </div>
      </div>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>