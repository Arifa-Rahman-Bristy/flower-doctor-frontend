<template>
  <div class="phone-frame">
    <!-- Header -->
    <div class="page-header" style="background: #ffffff; padding: 10px 16px; display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid #f1f5f9;">
      <button class="back-btn" @click="$router.push('/result')" style="background: none; border: none; font-size: 14px; cursor: pointer; color: #0f172a;"><i class="fa-solid fa-arrow-left"></i></button>
      <h3 style="font-size: 14px; margin: 0; font-weight: 800; color: #0f172a;">AI কেন এটি শনাক্ত করেছে?</h3>
      <div style="width: 20px;"></div>
    </div>

    <!-- Body -->
    <div class="page-body" style="padding: 12px 14px; display: flex; flex-direction: column; gap: 12px; background: #ffffff;">
      
      <!-- Toggle Tabs (Phul Chhobi / Heatmap) -->
      <div style="display: flex; background: #f1f5f9; padding: 3px; border-radius: 10px; gap: 4px;">
        <button 
          :style="showHeatmap ? 'background: transparent; color: #64748b;' : 'background: #14532d; color: #ffffff; box-shadow: 0 1px 3px rgba(0,0,0,0.1); font-weight: 800;'" 
          style="flex: 1; padding: 8px; border: none; border-radius: 8px; font-size: 11px; cursor: pointer;"
          @click="showHeatmap = false"
        >
          মূল ছবি
        </button>
        <button 
          :style="showHeatmap ? 'background: #ffffff; color: #14532d; box-shadow: 0 1px 3px rgba(0,0,0,0.1); font-weight: 800;' : 'background: transparent; color: #64748b;'" 
          style="flex: 1; padding: 8px; border: none; border-radius: 8px; font-size: 11px; cursor: pointer;"
          @click="showHeatmap = true"
        >
          Heatmap
        </button>
      </div>

      <!-- Image Area with Simulated Heatmap Effect -->
      <div style="width: 100%; height: 210px; border-radius: 16px; overflow: hidden; position: relative; border: 1px solid #e2e8f0; background: #000;">
        <img src="https://images.unsplash.com/photo-1518709268805-4e9042af9f23?q=80&w=500&auto=format&fit=crop" style="width: 100%; height: 100%; object-fit: cover;" />
        
        <!-- Heatmap Overlay Simulation -->
        <div 
          v-if="showHeatmap" 
          style="position: absolute; inset: 0; background: radial-gradient(circle at 50% 45%, rgba(239, 68, 68, 0.75) 0%, rgba(234, 179, 8, 0.6) 30%, rgba(59, 130, 246, 0.45) 60%, rgba(0,0,0,0.1) 100%); mix-blend-mode: color-burn; pointer-events: none;"
        ></div>
      </div>

      <!-- Explanation Text Card -->
      <div class="custom-card" style="padding: 12px; border: 1px solid #e2e8f0; border-radius: 12px; background: #f8fafc;">
        <p style="margin: 0; font-size: 11px; color: #334155; font-weight: 700; line-height: 1.4;">
          লাল অংশগুলোতে AI বেশি ফোকাস করছে এবং সেখান থেকেই রোগ শনাক্ত করেছে।
        </p>
      </div>

      <!-- Heatmap Color Scale Indicator -->
      <div style="margin-top: 4px;">
        <div style="height: 10px; border-radius: 6px; background: linear-gradient(90deg, #ef4444 0%, #eab308 50%, #3b82f6 100%); width: 100%;"></div>
        <div style="display: flex; justify-content: space-between; font-size: 10px; color: #475569; font-weight: 700; margin-top: 4px;">
          <span>High attention</span>
          <span>Low attention</span>
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

<script setup>
import { ref } from 'vue'

const showHeatmap = ref(true)
</script>