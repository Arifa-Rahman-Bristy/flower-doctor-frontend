<template>
  <div class="phone-frame">
    

    <!-- Header -->
    <div class="page-header" style="background: #ffffff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9;">
      <button class="back-btn" @click="$router.push('/result')" style="background: none; border: none; font-size: 14px; cursor: pointer; color: #0f172a;"><i class="fa-solid fa-arrow-left"></i></button>
      <h3 style="font-size: 14px; margin: 0; font-weight: 800; color: #0f172a;">সম্ভাব্য ফলাফল</h3>
      <div style="width: 20px;"></div>
    </div>

    <!-- Body -->
    <div class="page-body" style="padding: 12px 14px; display: flex; flex-direction: column; gap: 10px; background: #ffffff;">
      
      <!-- Prediction 1 (Highest Confidence) -->
      <div class="custom-card" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1.5px solid #bbf7d0; border-radius: 14px; background: #f0fdf4; cursor: pointer;" @click="$router.push('/result')">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="https://images.unsplash.com/photo-1563241527-3004b7be0ffd?q=80&w=150&auto=format&fit=crop" style="width: 48px; height: 48px; border-radius: 10px; object-fit: cover;" />
          <div>
            <h4 style="margin: 0 0 2px; font-size: 13px; font-weight: 800; color: #14532d;">Marigold</h4>
            <p style="margin: 0; font-size: 11px; font-weight: 800; color: #16a34a;">94.2%</p>
          </div>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #16a34a;"></i>
      </div>

      <!-- Prediction 2 -->
      <div class="custom-card" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 14px; background: #ffffff; cursor: pointer;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=150&auto=format&fit=crop" style="width: 48px; height: 48px; border-radius: 10px; object-fit: cover;" />
          <div>
            <h4 style="margin: 0 0 2px; font-size: 13px; font-weight: 800; color: #0f172a;">Tagetes</h4>
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #64748b;">2.8%</p>
          </div>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #94a3b8;"></i>
      </div>

      <!-- Prediction 3 -->
      <div class="custom-card" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 14px; background: #ffffff; cursor: pointer;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <img src="https://images.unsplash.com/photo-1592417817098-8f3d6eb231fc?q=80&w=150&auto=format&fit=crop" style="width: 48px; height: 48px; border-radius: 10px; object-fit: cover;" />
          <div>
            <h4 style="margin: 0 0 2px; font-size: 13px; font-weight: 800; color: #0f172a;">Calendula</h4>
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #64748b;">1.7%</p>
          </div>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #94a3b8;"></i>
      </div>

      <!-- Other Option -->
      <div class="custom-card" style="display: flex; align-items: center; justify-content: space-between; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 14px; background: #ffffff; cursor: pointer;">
        <div style="display: flex; align-items: center; gap: 12px;">
          <div style="width: 48px; height: 48px; border-radius: 10px; background: #f1f5f9; display: flex; align-items: center; justify-content: center; color: #64748b;">
            <i class="fa-solid fa-leaf" style="font-size: 20px;"></i>
          </div>
          <div>
            <h4 style="margin: 0 0 2px; font-size: 13px; font-weight: 800; color: #0f172a;">Other</h4>
            <p style="margin: 0; font-size: 11px; font-weight: 700; color: #64748b;">1.3%</p>
          </div>
        </div>
        <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #94a3b8;"></i>
      </div>

      <!-- Low Confidence Tip Banner -->
      <div style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 12px; padding: 10px 12px; display: flex; align-items: flex-start; gap: 8px; margin-top: 8px;">
        <i class="fa-solid fa-seedling" style="color: #16a34a; font-size: 14px; margin-top: 2px;"></i>
        <div>
          <h5 style="margin: 0 0 2px; font-size: 11px; color: #14532d; font-weight: 800;">Confidence কম থাকলে</h5>
          <p style="margin: 0; font-size: 10px; color: #166534; font-weight: 600; line-height: 1.3;">নিশ্চিত করতে আরও একটি ছবি তুলুন।</p>
        </div>
      </div>

    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn active" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>