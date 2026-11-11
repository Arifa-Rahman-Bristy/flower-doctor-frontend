<template>
  <div class="phone-frame">
    <!-- Top Header -->
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h3>সার, কীটনাশক ও মাটি নির্দেশিকা</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body">
      <!-- Flower Selection Info -->
      <div class="custom-card" style="background: #f0fdf4; border: 1px solid #dcfce7;">
        <h4 style="margin: 0 0 2px; font-size: 14px; font-weight: 800; color: #14532d;">
          গবেষণা ও চাষাবাদ গাইডলাইন
        </h4>
        <p style="margin: 0; font-size: 11px; color: #16a34a; font-weight: 600;">
          ফুলের সঠিক বিকাশ এবং রোগ প্রতিরোধের সম্পূর্ণ গাইড
        </p>
      </div>

      <!-- Soil Requirement Card -->
      <div class="custom-card">
        <h5 style="margin: 0 0 6px; font-size: 12px; font-weight: 800; color: #0f172a;">
          <i class="fa-solid fa-mound" style="color: #854d0e;"></i> উপযুক্ত মাটি নির্বাচন (Soil)
        </h5>
        <p style="margin: 0; font-size: 11px; color: #475569; line-height: 1.4; font-weight: 600;">
          <strong>পরামর্শ:</strong> হালকা দোআঁশ ও জৈব পদার্থ সমৃদ্ধ মাটি ফুলের জন্য সবচেয়ে উপযোগী। মাটির pH মাত্রা ৬.০ - ৬.৮ হওয়া উচিত।
        </p>
      </div>

      <!-- Fertilizer Dataset Card -->
      <div class="custom-card">
        <h5 style="margin: 0 0 6px; font-size: 12px; font-weight: 800; color: #0f172a;">
          <i class="fa-solid fa-seedling" style="color: #16a34a;"></i> প্রয়োজনীয় সার (Fertilizers)
        </h5>
        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #334155; line-height: 1.5; font-weight: 600;">
          <li><strong>জৈব সার:</strong> গোবর সার ও কম্পোস্ট মাটি তৈরির সময় প্রয়োগ করুন।</li>
          <li><strong>ইউরিয়া ও পটাশ:</strong> গাছের বৃদ্ধির জন্য প্রতি মাসে ১০-১৫ গ্রাম করে দিন।</li>
          <li><strong>টিএসপি (TSP):</strong> শিকড় মজবুত করতে ও বেশি ফুল ফুটতে সাহায্য করে।</li>
        </ul>
      </div>

      <!-- Pesticide Dataset Card -->
      <div class="custom-card">
        <h5 style="margin: 0 0 6px; font-size: 12px; font-weight: 800; color: #0f172a;">
          <i class="fa-solid fa-flask" style="color: #dc2626;"></i> কীটনাশক নির্দেশিকা (Pesticides)
        </h5>
        <ul style="margin: 0; padding-left: 16px; font-size: 11px; color: #334155; line-height: 1.5; font-weight: 600;">
          <li><strong>ছত্রাকনাশক (Mancozeb):</strong> পাতা পচা ও দাগ রোগের জন্য প্রতি লিটারে ২ গ্রাম স্প্রে করুন।</li>
          <li><strong>কীটনাশক (Imidacloprid):</strong> জাব পোকা ও চোষক পোকা দমনে ব্যবহার করুন।</li>
        </ul>
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
// গাইডলাইন পেজের লজিক
</script>