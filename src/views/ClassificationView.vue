<template>
  <div class="phone-frame">
    
    <!-- Top Header -->
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/detect')"><i class="fa-solid fa-arrow-left"></i></button>
      <h3>ফুল শনাক্তকরণ ফলাফল</h3>
      <div style="width: 20px;"></div>
    </div>

    <!-- Page Body -->
    <div class="page-body">
      <!-- Flower Image Card -->
      <div style="width: 100%; height: 160px; border-radius: 12px; overflow: hidden; border: 1px solid #e2e8f0;">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500&auto=format&fit=crop" style="width: 100%; height: 100%; object-fit: cover;" />
      </div>

      <!-- Flower Title & Confidence -->
      <div>
        <h3 style="margin: 0 0 4px; font-size: 15px; font-weight: 800; color: #0f172a;">Rose (গোলাপ)</h3>
        <span class="badge-green">Confidence: 96.4%</span>
      </div>

      <!-- Flower Details Info Card -->
      <div class="custom-card">
        <h4 style="margin: 0 0 8px; font-size: 12px; color: #0f172a; font-weight: 800;">ফুলের বিবরণ</h4>
        <div style="display: flex; flex-direction: column; gap: 6px; font-size: 11px; color: #334155;">
          <div style="display: flex;"><span style="width: 80px; font-weight: 700; color: #64748b;">বৈশিষ্ট্য:</span> <span style="flex: 1;">কাঁটযুক্ত গাছ, বিভিন্ন রঙের ফুল</span></div>
          <div style="display: flex;"><span style="width: 80px; font-weight: 700; color: #64748b;">ফুল ফোটার সময়:</span> <span style="flex: 1;">সারা বছর (প্রধানত শীত-গ্রীষ্ম)</span></div>
          <div style="display: flex;"><span style="width: 80px; font-weight: 700; color: #64748b;">ব্যবহার:</span> <span style="flex: 1;">সৌন্দর্য, সুগন্ধি, বাণিজ্যিক চাষ</span></div>
        </div>
      </div>

      <!-- More Info Link Card -->
      <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" @click="$router.push('/treatment')">
        <span style="font-size: 12px; font-weight: 700; color: #0f172a;">আরও তথ্য দেখুন</span>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #64748b;"></i>
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