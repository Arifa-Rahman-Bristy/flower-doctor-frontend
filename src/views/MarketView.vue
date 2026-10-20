<template>
  <div class="phone-frame">
    <!-- Top Header -->
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h3>বাজার মূল্য তথ্য</h3>
      <div style="width: 20px;"></div>
    </div>

    <!-- Page Body -->
    <div class="page-body">
      
      <!-- Selected Flower & Market Info Card -->
      <div class="custom-card" style="display: flex; align-items: center; gap: 12px; padding: 10px 12px; background: #f8fafc;">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=150&auto=format&fit=crop" style="width: 52px; height: 52px; border-radius: 10px; object-fit: cover;" />
        <div>
          <h4 style="margin: 0 0 4px; font-size: 14px; font-weight: 800; color: #0f172a;">Rose (গোলাপ)</h4>
          <p style="margin: 0; font-size: 11px; color: #16a34a; font-weight: 700;">Godkhali Flower Market</p>
        </div>
      </div>

      <!-- Market Price Table -->
      <div style="border: 1px solid #dcfce7; border-radius: 12px; overflow: hidden; background: #ffffff;">
        <!-- Table Header -->
        <div style="display: flex; background: #f0fdf4; border-bottom: 1px solid #dcfce7; padding: 10px 12px; font-size: 11px; font-weight: 800; color: #14532d;">
          <div style="flex: 1;">মান (Quality)</div>
          <div style="flex: 1; text-align: right;">দাম (প্রতি ১০০টি)</div>
        </div>

        <!-- Grade A -->
        <div style="display: flex; padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #0f172a; align-items: center;">
          <div style="flex: 1; color: #14532d; font-weight: 800;">Grade A</div>
          <div style="flex: 1; text-align: right;">300 - 400 ৳</div>
        </div>

        <!-- Grade B -->
        <div style="display: flex; padding: 12px; border-bottom: 1px solid #f1f5f9; font-size: 12px; font-weight: 700; color: #0f172a; align-items: center;">
          <div style="flex: 1; color: #14532d; font-weight: 800;">Grade B</div>
          <div style="flex: 1; text-align: right;">200 - 250 ৳</div>
        </div>

        <!-- Grade C -->
        <div style="display: flex; padding: 12px; font-size: 12px; font-weight: 700; color: #0f172a; align-items: center;">
          <div style="flex: 1; color: #14532d; font-weight: 800;">Grade C</div>
          <div style="flex: 1; text-align: right;">120 - 160 ৳</div>
        </div>
      </div>

      <!-- Notice Note -->
      <p style="font-size: 10px; color: #64748b; text-align: center; margin: 0; font-weight: 600; line-height: 1.3;">
        (দোকানের অবস্থান এবং মৌসুমি চাহিদা অনুযায়ী পরিবর্তন হতে পারে)
      </p>

      <!-- Action Button -->
      <button class="btn-main" @click="$router.push('/home')">
        বাজারের আরও তথ্য
      </button>

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