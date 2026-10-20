<template>
  <div class="phone-frame">
    
        <i class="fa-solid fa-signal"></i>
        <i class="fa-solid fa-wifi"></i>
        <i class="fa-solid fa-battery-full"></i>
          
    <!-- Login Page Body with Soft Green Background & Leaf Decoration -->
    <div 
      class="page-body" 
      style="
        justify-content: space-between; 
        background: linear-gradient(180deg, #f0fdf4 0%, #ffffff 100%); 
        padding: 16px 20px;
        position: relative;
        overflow: hidden;
      "
    >
      <!-- Top Logo & Header -->
      <div style="text-align: center; margin-top: 5px;">
        <div style="width: 48px; height: 48px; background: #ffffff; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 6px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
          <i class="fa-solid fa-seedling" style="font-size: 24px; color: #16a34a;"></i>
        </div>
        <h2 style="font-size: 18px; color: #14532d; margin: 0; font-weight: 800;">Flower Doctor</h2>
        <h3 style="font-size: 15px; margin: 4px 0 2px; color: #0f172a; font-weight: 700;">Login</h3>
        <p style="font-size: 10px; color: #475569; margin: 0; font-weight: 600;">আপনার অ্যাকাউন্টে লগইন করুন</p>
      </div>

      <!-- Form Inputs Container -->
      <div style="display: flex; flex-direction: column; gap: 10px; margin: 10px 0;">
        <!-- Mobile Number Input -->
        <div class="custom-card" style="display: flex; align-items: center; gap: 10px; background: #ffffff; border-radius: 12px; padding: 10px 14px; border: 1px solid #e2e8f0;">
          <i class="fa-solid fa-mobile-screen" style="color: #64748b; font-size: 14px;"></i>
          <input type="text" placeholder="Mobile Number" style="border: none; outline: none; width: 100%; font-size: 12px; background: transparent; color: #0f172a;" />
        </div>

        <!-- Password Input -->
        <div class="custom-card" style="display: flex; align-items: center; gap: 10px; background: #ffffff; border-radius: 12px; padding: 10px 14px; border: 1px solid #e2e8f0;">
          <i class="fa-solid fa-lock" style="color: #64748b; font-size: 14px;"></i>
          <input type="password" placeholder="Password" style="border: none; outline: none; width: 100%; font-size: 12px; background: transparent; color: #0f172a;" />
          <i class="fa-regular fa-eye" style="color: #94a3b8; cursor: pointer; font-size: 13px;"></i>
        </div>

        <!-- Remember Me & Forgot Password -->
        <div style="display: flex; justify-content: space-between; align-items: center; font-size: 10px; color: #475569; padding: 0 2px;">
          <label style="display: flex; align-items: center; gap: 5px; cursor: pointer; font-weight: 600;">
            <input type="checkbox" checked style="accent-color: #16a34a; width: 12px; height: 12px;" /> Remember me
          </label>
          <a href="#" style="color: #16a34a; text-decoration: none; font-weight: 700;">Forgot password?</a>
        </div>

        <!-- Login Button -->
        <button 
          class="btn-main" 
          style="background: #14532d; color: #ffffff; border: none; padding: 11px; border-radius: 12px; font-size: 12px; font-weight: 700; cursor: pointer; margin-top: 4px;"
          @click="$router.push('/home')"
        >
          Login
        </button>

        <!-- Divider OR -->
        <div style="display: flex; align-items: center; text-align: center; color: #94a3b8; font-size: 10px; margin: 2px 0;">
          <div style="flex: 1; border-bottom: 1px solid #e2e8f0;"></div>
          <span style="padding: 0 10px; font-weight: 600;">OR</span>
          <div style="flex: 1; border-bottom: 1px solid #e2e8f0;"></div>
        </div>

        <!-- Continue with Google Button -->
        <button style="background: #ffffff; border: 1px solid #cbd5e1; border-radius: 12px; padding: 10px; font-size: 11px; font-weight: 700; cursor: pointer; color: #334155; display: flex; align-items: center; justify-content: center; gap: 8px;">
          <i class="fa-brands fa-google" style="color: #ea4335;"></i> Continue with Google
        </button>

        <!-- Create Account Button -->
        <button 
          style="background: #ffffff; border: 1px solid #14532d; color: #14532d; border-radius: 12px; padding: 10px; font-size: 11px; font-weight: 700; cursor: pointer;" 
          @click="$router.push('/register')"
        >
          Create an account
        </button>
      </div>

      <!-- Bottom Signup Prompt -->
      <p style="text-align: center; font-size: 11px; color: #64748b; margin: 4px 0 0; font-weight: 600;">
        নতুন ব্যবহারকারী? <span @click="$router.push('/register')" style="color: #16a34a; font-weight: 800; cursor: pointer; text-decoration: underline;">Sign Up</span>
      </p>
    </div>
  </div>
</template>