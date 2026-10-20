<template>
  <div class="phone-frame splash-bg">
    <!-- Dark/Light Overlay for Better Text Visibility -->
    <div class="overlay"></div>

    

    <!-- Splash Content Body -->
    <div class="splash-content" style="z-index: 2;">
      
      <!-- Logo & Brand Header -->
      <div class="brand-section">
        <div class="logo-icon">
          <i class="fa-solid fa-seedling" style="font-size: 28px; color: #ff5722;"></i>
        </div>
        <h1 class="brand-title">Flower Doctor</h1>
        <p class="brand-subtitle">
          Healthy Flowers<br>
          Better Harvest<br>
          Brighter Future
        </p>
        <p class="brand-tagline">
          আপনার ফুলের সাথেই সব সময়
        </p>
      </div>

      <!-- Action Buttons at Bottom -->
      <div class="action-section">
        <button class="btn-get-started" @click="$router.push('/home')">
          Get Started
        </button>
        <p class="login-prompt">
          Already have an account? <span @click="$router.push('/login')" class="login-link">Login</span>
        </p>
      </div>

    </div>
  </div>
</template>

<style scoped>
/* Gorgeous Background Style matching your mockup */
.splash-bg {
  background-image: url('https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?q=80&w=600&auto=format&fit=crop');
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

/* Soft overlay so text stands out clearly over the image */
.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(255, 255, 255, 0.92) 0%, rgba(255, 255, 255, 0.75) 50%, rgba(20, 83, 45, 0.85) 100%);
  z-index: 1;
}

.splash-content {
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 16px 24px 28px;
  box-sizing: border-box;
  text-align: center;
}

.brand-section {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10px;
}

.logo-icon {
  width: 60px;
  height: 60px;
  background: #ffffff;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  margin-bottom: 8px;
}

.brand-title {
  font-size: 22px;
  font-weight: 800;
  color: #0f172a;
  margin: 0 0 10px;
}

.brand-subtitle {
  font-size: 13px;
  font-weight: 700;
  color: #334155;
  line-height: 1.4;
  margin: 0 0 14px;
}

.brand-tagline {
  font-size: 13px;
  font-weight: 800;
  color: #14532d;
  margin: 0;
  background: rgba(220, 252, 231, 0.8);
  padding: 4px 12px;
  border-radius: 20px;
}

.action-section {
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
}

.btn-get-started {
  width: 100%;
  background: #14532d;
  color: #ffffff;
  border: none;
  padding: 13px;
  border-radius: 24px;
  font-size: 13px;
  font-weight: 800;
  cursor: pointer;
  box-shadow: 0 4px 12px rgba(20, 83, 45, 0.3);
  transition: 0.2s;
}

.btn-get-started:hover {
  background: #166534;
}

.login-prompt {
  font-size: 11px;
  color: #ffffff;
  font-weight: 600;
  margin: 0;
  text-shadow: 0 1px 2px rgba(0,0,0,0.3);
}

.login-link {
  color: #fde047;
  font-weight: 800;
  cursor: pointer;
  text-decoration: underline;
}
</style>