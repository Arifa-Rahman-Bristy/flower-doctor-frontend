<template>
  <div class="phone-frame" style="background: #f8fafc;">
    
    <!-- Top Header -->
    <div class="page-header" style="background: #ffffff; border-bottom: 1px solid #e2e8f0; padding: 12px 16px;">
      <button class="back-btn" @click="$router.push('/home')" style="background: #f1f5f9; border: none; width: 30px; height: 30px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center;">
        <i class="fa-solid fa-arrow-left" style="color: #0f172a; font-size: 12px;"></i>
      </button>
      <h3 style="margin: 0; font-size: 14px; font-weight: 800; color: #0f172a;">আমার প্রোফাইল</h3>
      <div style="width: 30px;"></div>
    </div>

    <!-- Page Body -->
    <div class="page-body" style="display: flex; flex-direction: column; gap: 12px; padding: 12px; padding-bottom: 80px;">
      
      <!-- User Info Card (Dynamic data from form) -->
      <div style="background: linear-gradient(135deg, #065f46 0%, #10b981 100%); border-radius: 16px; padding: 16px; display: flex; align-items: center; gap: 12px; color: #ffffff; box-shadow: 0 10px 20px -5px rgba(16, 185, 129, 0.4);">
        <div style="width: 50px; height: 50px; background: #ffffff; color: #16a34a; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 16px; font-weight: 800; box-shadow: 0 4px 10px rgba(0,0,0,0.1);">
          {{ userName.substring(0, 2).toUpperCase() }}
        </div>
        <div style="flex: 1;">
          <h4 style="margin: 0 0 2px; font-size: 14px; font-weight: 800; color: #ffffff;">{{ userName }}</h4>
          <p style="margin: 0; font-size: 11px; color: #dcfce7; font-weight: 700;">{{ userEmail }}</p>
          <span style="display: inline-block; margin-top: 4px; font-size: 8px; background: rgba(255,255,255,0.2); padding: 2px 8px; border-radius: 10px; font-weight: 700;">যাচাইকৃত কৃষক</span>
        </div>
      </div>

      <!-- Settings & Options List -->
      <div style="display: flex; flex-direction: column; gap: 8px;">
        
        <!-- Edit Profile Option -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; border-radius: 12px; transition: 0.2s;" @click="showEditForm = !showEditForm">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <div style="width: 32px; height: 32px; background: #dcfce7; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #16a34a;">
              <i class="fa-solid fa-user-pen" style="font-size: 13px;"></i>
            </div>
            ব্যক্তিগত তথ্য পরিবর্তন
          </div>
          <i :class="showEditForm ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" style="font-size: 11px; color: #94a3b8;"></i>
        </div>

        <!-- Inline Edit Form -->
        <div v-if="showEditForm" class="custom-card" style="background: #f0fdf4; border: 1px solid #dcfce7; border-radius: 12px; display: flex; flex-direction: column; gap: 8px;">
          <h5 style="margin: 0; font-size: 11px; font-weight: 800; color: #14532d;">তথ্য আপডেট করুন</h5>
          <div>
            <label style="font-size: 9px; color: #64748b; font-weight: 700;">নাম:</label>
            <input type="text" v-model="userName" style="width: 100%; padding: 6px; font-size: 11px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; margin-top: 2px; outline: none;" />
          </div>
          <div>
            <label style="font-size: 9px; color: #64748b; font-weight: 700;">ইমেল / ফোন:</label>
            <input type="text" v-model="userEmail" style="width: 100%; padding: 6px; font-size: 11px; border: 1px solid #cbd5e1; border-radius: 6px; box-sizing: border-box; margin-top: 2px; outline: none;" />
          </div>
          <button style="background: #16a34a; color: #fff; border: none; padding: 6px; border-radius: 6px; font-size: 10px; font-weight: 800; cursor: pointer;" @click="showEditForm = false">
            সংরক্ষণ করুন
          </button>
        </div>

        <!-- Language Selection Option -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; border-radius: 12px;" @click="showLangModal = !showLangModal">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <div style="width: 32px; height: 32px; background: #e0f2fe; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #0284c7;">
              <i class="fa-solid fa-language" style="font-size: 13px;"></i>
            </div>
            ভাষা নির্বাচন (Language)
          </div>
          <span style="font-size: 10px; font-weight: 800; color: #16a34a; background: #dcfce7; padding: 3px 10px; border-radius: 12px;">{{ currentLang }}</span>
        </div>

        <!-- Language Selector Dropdown Box -->
        <div v-if="showLangModal" class="custom-card" style="background: #f8fafc; border-radius: 12px; display: flex; flex-direction: column; gap: 6px;">
          <div style="font-size: 11px; font-weight: 800; color: #0f172a; margin-bottom: 2px;">ভাষা পছন্দ করুন:</div>
          <div @click="selectLang('Bangla')" style="padding: 6px 8px; font-size: 11px; font-weight: 700; background: #fff; border-radius: 6px; cursor: pointer; border: 1px solid #e2e8f0;">বাংলা (Bangla)</div>
          <div @click="selectLang('English')" style="padding: 6px 8px; font-size: 11px; font-weight: 700; background: #fff; border-radius: 6px; cursor: pointer; border: 1px solid #e2e8f0;">ইংরেজি (English)</div>
        </div>

        <!-- Offline Mode -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; border-radius: 12px;" @click="$router.push('/offline')">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <div style="width: 32px; height: 32px; background: #fef9c3; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #ca8a04;">
              <i class="fa-solid fa-wifi" style="font-size: 13px;"></i>
            </div>
            অফলাইন মোড তথ্য
          </div>
          <i class="fa-solid fa-chevron-right" style="font-size: 11px; color: #cbd5e1;"></i>
        </div>

        <!-- Help & Guide -->
        <div class="custom-card" style="display: flex; justify-content: space-between; align-items: center; cursor: pointer; border-radius: 12px;" @click="showHelp = !showHelp">
          <div style="display: flex; align-items: center; gap: 10px; font-size: 12px; color: #0f172a; font-weight: 700;">
            <div style="width: 32px; height: 32px; background: #f3e8ff; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: #9333ea;">
              <i class="fa-solid fa-circle-info" style="font-size: 13px;"></i>
            </div>
            সাহায্য ও গাইড (Help & Guide)
          </div>
          <i :class="showHelp ? 'fa-solid fa-chevron-up' : 'fa-solid fa-chevron-down'" style="font-size: 11px; color: #94a3b8;"></i>
        </div>

        <!-- Help Details Box -->
        <div v-if="showHelp" class="custom-card" style="background: #f8fafc; border-radius: 12px; font-size: 11px; color: #334155; line-height: 1.5;">
          <strong style="color: #14532d;">কীভাবে ব্যবহার করবেন:</strong><br>
          ১. ক্যামেরা অপশনে গিয়ে ফুলের ছবি তুলুন বা গ্যালারি থেকে সিলেক্ট করুন।<br>
          ২. অ্যাপ নিজে থেকেই রোগ ও জাত শনাক্ত করবে।<br>
          ৩. চিকিৎসার পরামর্শ ও বাজার দর দেখতে পারবেন।
        </div>

      </div>

      <!-- Logout Button -->
      <button style="background: #fee2e2; color: #dc2626; border: 1px solid #fca5a5; padding: 11px; border-radius: 12px; font-size: 11px; font-weight: 800; cursor: pointer; display: flex; align-items: center; justify-content: center; gap: 6px; margin-top: auto; transition: 0.2s;" @click="$router.push('/login')">
        <i class="fa-solid fa-right-from-bracket"></i> লগআউট করুন
      </button>
    </div>

    <!-- Bottom Nav -->
    <div class="bottom-nav">
      <div class="nav-item" @click="$router.push('/home')"><i class="fa-solid fa-house"></i><span>হোম</span></div>
      <div class="nav-item" @click="$router.push('/history')"><i class="fa-regular fa-clock"></i><span>ইতিহাস</span></div>
      <div class="nav-item cam-btn" @click="$router.push('/detect')"><div class="big-cam-circle"><i class="fa-solid fa-camera"></i></div><span>স্ক্যান</span></div>
      <div class="nav-item" @click="$router.push('/datasets')"><i class="fa-solid fa-database"></i><span>ডেটাসেট</span></div>
      <div class="nav-item active" @click="$router.push('/profile')"><i class="fa-solid fa-ellipsis"></i><span>আরও</span></div>
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