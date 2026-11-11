<template>
  <div class="phone-frame">
    <!-- Top Header -->
    <div class="page-header">
      <button class="back-btn" @click="$router.push('/home')">
        <i class="fa-solid fa-arrow-left"></i>
      </button>
      <h3>ফ্লাওয়ার ডক্টর এআই অ্যাসিস্ট্যান্ট</h3>
      <div style="width: 20px;"></div>
    </div>

    <div class="page-body" style="display: flex; flex-direction: column; justify-content: space-between; height: 75vh;">
      
      <!-- Chat Messages Box -->
      <div style="flex: 1; overflow-y: auto; display: flex; flex-direction: column; gap: 10px; padding-bottom: 10px;">
        <!-- Welcome Message -->
        <div style="background: #f0fdf4; padding: 10px 12px; border-radius: 12px; font-size: 11px; color: #14532d; max-width: 85%; font-weight: 700; border: 1px solid #dcfce7;">
          👋 আসসালামু আলাইকুম! আপনার ফুলের যেকোনো সমস্যা লিখে জানান অথবা নিচের মাইক বোতামে চেপে মুখে বলুন।
        </div>

        <!-- Dynamic Chat History -->
        <div 
          v-for="(chat, index) in chats" 
          :key="index" 
          :style="chat.sender === 'user' ? 'background: #dcfce7; align-self: flex-end;' : 'background: #f8fafc; align-self: flex-start; border: 1px solid #e2e8f0;'" 
          style="padding: 10px 12px; border-radius: 12px; font-size: 11px; max-width: 85%; font-weight: 700; color: #0f172a; position: relative;"
        >
          <div>{{ chat.text }}</div>
          
          <!-- Speaker Button for AI Messages -->
          <button 
            v-if="chat.sender === 'ai'" 
            @click="speakResponse(chat.text)" 
            style="background: #16a34a; color: #fff; border: none; padding: 4px 10px; border-radius: 6px; font-size: 10px; cursor: pointer; margin-top: 6px; display: flex; align-items: center; gap: 5px; font-weight: 800;"
          >
            <i class="fa-solid fa-volume-high"></i> মুখে শুনুন (অডিও)
          </button>
        </div>
      </div>

      <!-- Input & Voice Controls Section -->
      <div style="background: #ffffff; border-top: 1px solid #e2e8f0; padding-top: 8px;">
        <p v-if="isListening" style="font-size: 10px; color: #dc2626; text-align: center; margin: 0 0 4px; font-weight: 800;">
          🔴 আপনার কথা শুনছি... বলুন...
        </p>

        <div style="display: flex; gap: 6px; align-items: center;">
          <button 
            @click="toggleVoiceInput" 
            :style="isListening ? 'background: #dc2626;' : 'background: #16a34a;'" 
            style="color: #fff; border: none; width: 38px; height: 38px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 14px;"
          >
            <i :class="isListening ? 'fa-solid fa-stop' : 'fa-solid fa-microphone'"></i>
          </button>

          <input 
            type="text" 
            v-model="userInput" 
            @keyup.enter="sendMessage"
            placeholder="এখানে লিখে সমস্যা জানান..." 
            style="flex: 1; border: 1px solid #cbd5e1; padding: 8px 12px; border-radius: 20px; font-size: 11px; outline: none; font-weight: 600;"
          />

          <button 
            @click="sendMessage" 
            style="background: #16a34a; color: #fff; border: none; width: 38px; height: 38px; border-radius: 50%; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 12px;"
          >
            <i class="fa-solid fa-paper-plane"></i>
          </button>
        </div>
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

<script setup>
import { ref } from 'vue'

const userInput = ref('')
const isListening = ref(false)
const chats = ref([
  { sender: 'ai', text: 'আসসালামু আলাইকুম! ফুলের যেকোনো সমস্যা, যেমন পোকা বা সার সম্পর্কিত প্রশ্ন করতে পারেন।' }
])

const sendMessage = () => {
  if (!userInput.value.trim()) return

  const text = userInput.value
  chats.value.push({ sender: 'user', text: text })
  userInput.value = ''

  setTimeout(() => {
    let reply = "গাছের ভালো বিকাশের জন্য সুষম সার ও সঠিক ছত্রাকনাশক ব্যবহার করুন।"
    const lowerText = text.toLowerCase()
    
    if (lowerText.includes('মাটি') || lowerText.includes('soil')) {
      reply = "ফুলের চাষের জন্য হালকা দোআঁশ এবং জৈব সারযুক্ত মাটি সবচেয়ে উপযোগী। মাটির পিএইচ (pH) ৬.০ থেকে ৬.৮ রাখা ভালো।"
    } else if (lowerText.includes('সার') || lowerText.includes('পোকা')) {
      reply = "গাছের পোকা দমনে ইমিডাক্লোপ্রিড এবং ছত্রাকের দাগের জন্য ম্যানকোজেব (Mancozeb) ব্যবহার করতে পারেন।"
    } else if (lowerText.includes('গোলাপ') || lowerText.includes('rose')) {
      reply = "গোলাপ গাছের ব্ল্যাক স্পট রোগ হলে আক্রান্ত পাতা কেটে ফেলুন এবং ছত্রাকনাশক স্প্রে করুন।"
    }

    chats.value.push({ sender: 'ai', text: reply })
  }, 800)
}

const toggleVoiceInput = () => {
  const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
  if (!SpeechRecognition) {
    alert("আপনার ব্রাউজারে ভয়েস ইনপুট সাপোর্ট করছে না। দয়া করে গুগল ক্রোম ব্রাউজার ব্যবহার করুন।")
    return
  }

  const recognition = new SpeechRecognition()
  recognition.lang = 'bn-BD'

  if (!isListening.value) {
    recognition.start()
    isListening.value = true

    recognition.onresult = (event) => {
      const speechToText = event.results[0][0].transcript
      userInput.value = speechToText
      isListening.value = false
      sendMessage()
    }

    recognition.onerror = () => {
      isListening.value = false
    }

    recognition.onend = () => {
      isListening.value = false
    }
  }
}

const speakResponse = (text) => {
  if ('speechSynthesis' in window) {
    window.speechSynthesis.cancel()
    const speech = new SpeechSynthesisUtterance(text)
    speech.lang = 'bn-BD'
    speech.rate = 0.9
    
    setTimeout(() => {
      window.speechSynthesis.speak(speech)
    }, 100)
  } else {
    alert("আপনার ব্রাউজারে ভয়েস আউটপুট সাপোর্ট করছে না।")
  }
}
</script>