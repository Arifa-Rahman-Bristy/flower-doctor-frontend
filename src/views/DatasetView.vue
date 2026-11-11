<template>
  <div class="phone-frame">
    <!-- Top Header -->
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h3>ডেটাবেজ ও এআই ট্রেনিং</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body">
      <!-- Info Header Card -->
      <div class="custom-card" style="background: #f0fdf4; border: 1px solid #dcfce7;">
        <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 800; color: #14532d;">
          ফ্লাওয়ার ডক্টর ট্রেনিং ডেটাসেট
        </h4>
        <p style="margin: 0; font-size: 11px; color: #16a34a; font-weight: 600; line-height: 1.4;">
          মডেলের নির্ভুল রোগ ও জাত শনাক্তকরণের জন্য সুস্থ এবং রোগাক্রান্ত ফুলের সমৃদ্ধ ইমেজ ডেটাসেট ব্যবহার করা হয়েছে।
        </p>
      </div>

      <!-- Healthy Flower Dataset Card -->
      <div class="custom-card" style="border-left: 4px solid #16a34a;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h5 style="margin: 0; font-size: 12px; font-weight: 800; color: #14532d;">
            <i class="fa-solid fa-seedling"></i> সুস্থ ফুলের ডেটাসেট (Healthy Flower Dataset)
          </h5>
          <span style="font-size: 10px; background: #dcfce7; color: #15803d; padding: 2px 8px; border-radius: 10px; font-weight: 800;">৫,০০০+ ছবি</span>
        </div>
        <p style="margin: 0 0 6px; font-size: 11px; color: #334155; line-height: 1.4; font-weight: 600;">
          গোলাপ, গাঁদা, রজনীগন্ধা, এবং ডালিয়া সহ বিভিন্ন জনপ্রিয় ফুলের সুস্থ পাতার ও ফুলের হাই-কোয়ালিটি ইমেজ কালেকশন।
        </p>
        <div style="font-size: 10px; color: #64748b; font-weight: 700;">
          বৈশিষ্ট্য: সঠিক রঙ, উজ্জ্বলতা এবং আদর্শ গঠন যাচাই।
        </div>
      </div>

      <!-- Flower Diseases Dataset Card -->
      <div class="custom-card" style="border-left: 4px solid #dc2626;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 6px;">
          <h5 style="margin: 0; font-size: 12px; font-weight: 800; color: #991b1b;">
            <i class="fa-solid fa-triangle-exclamation"></i> ফুলের রোগ ডেটাসেট (Flower Diseases Dataset)
          </h5>
          <span style="font-size: 10px; background: #fee2e2; color: #b91c1c; padding: 2px 8px; border-radius: 10px; font-weight: 800;">৪,২০০+ ছবি</span>
        </div>
        <p style="margin: 0 0 6px; font-size: 11px; color: #334155; line-height: 1.4; font-weight: 600;">
          ছত্রাকজনিত রোগ (Black Spot, Powdery Mildew), ব্যাকটেরিয়াল পচন এবং পোকার আক্রমণের শিকার হওয়া ফুলের চিত্র।
        </p>
        <div style="font-size: 10px; color: #64748b; font-weight: 700;">
          বৈশিষ্ট্য: দ্রুত সমস্যা ও উপসর্গ চিহ্নিতকরণ (Problem Identification)।
        </div>
      </div>

      <!-- Dataset Link Info for Backend Developer -->
      <div class="custom-card" style="background: #f8fafc; border: 1px solid #cbd5e1;">
        <h5 style="margin: 0 0 4px; font-size: 12px; font-weight: 800; color: #0f172a;">
          <i class="fa-solid fa-code"></i> ব্যাকএন্ড ইন্টিগ্রেশন নোট
        </h5>
        <p style="margin: 0; font-size: 10px; color: #475569; line-height: 1.4; font-weight: 600;">
          পাইথন টেনসরফ্লো/পাইটরচ মডেলের সাথে এই ডেটাসেটগুলোর পাইপলাইন যুক্ত করে পরবর্তীতে লাইভ ক্লাসিফিকেশন করা হবে।
        </p>
      </div>

      <button class="btn-main" @click="$router.push('/home')">
        হোম পেজে ফিরে যান
      </button>
    </div>

    <!-- Bottom Nav (Localized to Bangla) -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>হোম</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>ইতিহাস</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>স্ক্যান</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>আরও</span></div>
    </div>
  </div>
</template>

<script setup>
// ডেটাসেট পেজের লজিক
</script>