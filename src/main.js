import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css' // assets folder chara direct import

createApp(App).use(router).mount('#app')