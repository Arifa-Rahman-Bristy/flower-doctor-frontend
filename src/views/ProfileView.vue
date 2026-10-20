<template>
  <div class="phone-frame">
    
    
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')"><i class="fa-solid fa-arrow-left"></i></button>
      <h3>আমার প্রোফাইল</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body">
      <!-- User Info Card (Dynamic data from form) -->
      <div class="custom-card" style="display: flex; align-items: center; gap: 12px; background: #f8fafc;">
        <div style="width: 50px; height: 50px; background: #16a34a; color: #fff; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 18px; font-weight: 800;">
          {{ userName.substring(0, 2).toUpperCase() }}
        </div>
        <div style="flex: 1;">
          <h4 style="margin: 0 0 2px; font-size: 14px; font-weight: 800; color: #0f172a;">{{ userName }}</h4>
          <p style="margin: 0; font-size: 11px; color: #16a34a; font-weight: 700;">{{ userEmail }}</p>
        </div>
      </div>

      <!-- Settings & Options List -->
      <div style="display: flex; flex-direction: column; gap: 6px;">
        
        <!-- Edit Profile Option -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" @click="showEditForm = !showEditForm">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <i class="fa-solid fa-user-pen" style="color: #16a34a;"></i> ব্যক্তিগত তথ্য পরিবর্তন
          </div>
          <i :class="showEditForm ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" style="font-size: 11px; color: #cbd5e1;"></i>
        </div>

        <!-- Inline Edit Form -->
        <div v-if="showEditForm" class="custom-card" style="background: #f0fdf4; border: 1px solid #dcfce7; display: flex; flex-direction: column; gap: 8px;">
          <h5 style="margin: 0; font-size: 11px; font-weight: 800; color: #14532d;">তথ্য আপডেট করুন</h5>
          <div>
            <label style="font-size: 9px; color: #64748b; font-weight: 700;">নাম:</label>
            <input type="text" v-model="userName" style="width: 100%; padding: 6px; font-size: 11px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; margin-top: 2px;" />
          </div>
          <div>
            <label style="font-size: 9px; color: #64748b; font-weight: 700;">ইমেল / ফোন:</label>
            <input type="text" v-model="userEmail" style="width: 100%; padding: 6px; font-size: 11px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; margin-top: 2px;" />
          </div>
          <button style="background: #16a34a; color: #fff; border: none; padding: 6px; border-radius: 6px; font-size: 10px; font-weight: 800; cursor: pointer;" @click="showEditForm = false">
            সংরক্ষণ করুন
          </button>
        </div>

        <!-- Language Selection Option -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" @click="showLangModal = !showLangModal">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <i class="fa-solid fa-language" style="color: #16a34a;"></i> ভাষা নির্বাচন (Language)
          </div>
          <span style="font-size: 11px; font-weight: 800; color: #16a34a; background: #dcfce7; padding: 2px 8px; border-radius: 6px;">{{ currentLang }}</span>
        </div>

        <!-- Language Selector Dropdown Box -->
        <div v-if="showLangModal" class="custom-card" style="background: #f8fafc; display: flex; flex-direction: column; gap: 6px;">
          <div style="font-size: 11px; font-weight: 800; color: #0f172a; margin-bottom: 2px;">ভাষা পছন্দ করুন:</div>
          <div @click="selectLang('Bangla')" style="padding: 6px 8px; font-size: 11px; font-weight: 700; background: #fff; border-radius: 6px; cursor: pointer; border: 1px solid #e2e8f0;">বাংলা (Bangla)</div>
          <div @click="selectLang('English')" style="padding: 6px 8px; font-size: 11px; font-weight: 700; background: #fff; border-radius: 6px; cursor: pointer; border: 1px solid #e2e8f0;">ইংরেজি (English)</div>
        </div>

        <!-- Offline Mode -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" @click="$router.push('/offline')">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <i class="fa-solid fa-wifi-slash" style="color: #16a34a;"></i> অফলাইন মোড তথ্য
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #cbd5e1;"></i>
        </div>

        <!-- Help & Guide -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer;" @click="showHelp = !showHelp">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <i class="fa-solid fa-circle-info" style="color: #16a34a;"></i> সাহায্য ও গাইড (Help & Guide)
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #cbd5e1;"></i>
        </div>

        <!-- Help Details Box -->
        <div v-if="showHelp" class="custom-card" style="background: #f8fafc; font-size: 11px; color: #334155; line-height: 1.4;">
          <strong style="color: #14532d;">কীভাবে ব্যবহার করবেন:</strong><br>
          ১. ক্যামেরা অপশনে গিয়ে ফুলের ছবি তুলুন বা গ্যালারি থেকে সিলেক্ট করুন।<br>
          ২. অ্যাপ নিজে থেকেই রোগ ও জাত শনাক্ত করবে।<br>
          ৩. চিকিৎসার পরামর্শ ও বাজার দর দেখতে পারবেন।
        </div>

      </div>

      <!-- Logout Button -->
      <button class="btn-main" style="background: #ef4444; margin-top: auto;" @click="$router.push('/login')">
        লগআউট
      </button>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>Home</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>History</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>Camera</span></div>
      <div class="nav-item active" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>More</span></div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const userName = ref('Md. Rahim Uddin')
const userEmail = ref('rahim.farmer@gmail.com')
const currentLang = ref('Bangla')

const showEditForm = ref(false)
const showLangModal = ref(false)
const showHelp = ref(false)

const selectLang = (lang) => {
  currentLang.value = lang
  showLangModal.value = false
}
</script>