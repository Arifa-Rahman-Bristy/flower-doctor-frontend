<template>
  <div class="phone-frame">
    

    <div class="register-header">
      <button class="back-btn" @click="$router.push('/login')">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h3>অ্যাকাউন্ট তৈরি করুন</h3>
      <div class="placeholder-icon"></div>
    </div>

    <div class="register-body">
      <div class="top-info">
        <div class="logo-box">
          <svg viewBox="0 0 100 100" class="flower-logo">
            <path d="M50 30 C40 10, 20 20, 35 40 C20 45, 20 65, 40 60 C45 75, 65 70, 60 50 C75 45, 70 25, 50 30 Z" fill="#e11d48"/>
            <path d="M50 40 C45 25, 30 30, 40 45 C30 50, 30 65, 45 60 C50 70, 60 65, 55 50 C65 45, 60 30, 50 40 Z" fill="#f97316"/>
            <circle cx="50" cy="48" r="8" fill="#facc15"/>
            <path d="M50 65 Q45 80 30 85 Q48 80 50 65 Z" fill="#16a34a"/>
            <path d="M50 65 Q55 80 70 85 Q52 80 50 65 Z" fill="#16a34a"/>
          </svg>
        </div>
        <h2>Flower Doctor</h2>
        <p class="sub">নতুন অ্যাকাউন্ট খুলে আমাদের সাথে যুক্ত হন</p>
      </div>

      <div class="form">
        <div class="input-field">
          <i class="fa-regular fa-user icon"></i>
          <input type="text" placeholder="আপনার নাম (Full Name)" />
        </div>

        <div class="input-field">
          <i class="fa-regular fa-mobile-screen icon"></i>
          <input type="text" placeholder="মোবাইল নম্বর (Phone Number)" />
        </div>

        <div class="input-field">
          <i class="fa-solid fa-lock icon"></i>
          <input :type="showPassword ? 'text' : 'password'" placeholder="পাসওয়ার্ড (Password)" />
          <i class="fa-regular fa-eye eye-icon" @click="showPassword = !showPassword"></i>
        </div>

        <div class="input-field">
          <i class="fa-solid fa-shield-halved icon"></i>
          <input :type="showConfirmPassword ? 'text' : 'password'" placeholder="কনফার্ম পাসওয়ার্ড" />
          <i class="fa-regular fa-eye eye-icon" @click="showConfirmPassword = !showConfirmPassword"></i>
        </div>

        <div class="terms-option">
          <label class="terms">
            <input type="checkbox" checked /> আমি শর্তাবলী ও গোপনীয়তা নীতি মেনে নিচ্ছি
          </label>
        </div>

        <button class="btn-register" @click="$router.push('/home')">রেজিস্ট্রেশন সম্পন্ন করুন</button>
      </div>

      <p class="bottom-login">
        আগে থেকেই অ্যাকাউন্ট আছে? <span @click="$router.push('/login')">Login</span>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
const showPassword = ref(false)
const showConfirmPassword = ref(false)
</script>

<style scoped>
.phone-frame {
  width: 360px;
  height: 720px;
  background: #f8fafc;
  border-radius: 36px;
  box-shadow: 0 12px 30px rgba(0,0,0,0.15);
  margin: 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  font-family: system-ui, sans-serif;
  border: 10px solid #1a1a1a;
}
.status-bar {
  display: flex;
  justify-content: space-between;
  padding: 8px 18px 4px;
  font-size: 11px;
  font-weight: 600;
}
.register-header {
  padding: 10px 16px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #ffffff;
  border-bottom: 1px solid #e2e8f0;
}
.register-header h3 {
  font-size: 14px;
  margin: 0;
  color: #0f172a;
}
.back-btn {
  background: none;
  border: none;
  font-size: 14px;
  color: #334155;
  cursor: pointer;
}
.placeholder-icon {
  width: 14px;
}
.register-body {
  padding: 15px 22px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
}
.top-info {
  text-align: center;
}
.logo-box {
  width: 45px;
  height: 45px;
  margin: 0 auto 4px;
}
.flower-logo {
  width: 100%;
  height: 100%;
}
.top-info h2 {
  font-size: 18px;
  color: #14532d;
  margin: 0;
  font-weight: 800;
}
.top-info .sub {
  font-size: 11px;
  color: #64748b;
  margin: 4px 0 0;
}
.form {
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-top: 10px;
}
.input-field {
  background: #ffffff;
  border: 1px solid #cbd5e1;
  border-radius: 10px;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
}
.input-field input {
  border: none;
  outline: none;
  width: 100%;
  font-size: 11px;
}
.input-field .icon {
  color: #94a3b8;
  font-size: 13px;
}
.eye-icon {
  color: #94a3b8;
  cursor: pointer;
  font-size: 12px;
}
.terms-option {
  font-size: 10px;
  color: #475569;
}
.btn-register {
  background: #14532d;
  color: #ffffff;
  border: none;
  padding: 10px;
  border-radius: 8px;
  font-weight: 700;
  font-size: 13px;
  cursor: pointer;
  margin-top: 4px;
}
.bottom-login {
  text-align: center;
  font-size: 11px;
  color: #64748b;
  margin: 0;
}
.bottom-login span {
  color: #16a34a;
  font-weight: 700;
  cursor: pointer;
}
</style>