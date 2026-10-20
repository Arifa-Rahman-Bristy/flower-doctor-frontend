import { createRouter, createWebHistory } from 'vue-router'

// All 17 Views Import
import SplashView from '../views/SplashView.vue'
import LoginView from '../views/LoginView.vue'
import RegisterView from '../views/RegisterView.vue'
import HomeView from '../views/HomeView.vue'
import DetectView from '../views/DetectView.vue'
import ResultView from '../views/ResultView.vue'
import ClassificationView from '../views/ClassificationView.vue'
import TreatmentView from '../views/TreatmentView.vue'
import CareView from '../views/CareView.vue'
import HistoryView from '../views/HistoryView.vue'
import ProfileView from '../views/ProfileView.vue'
import MultiplePredictionsView from '../views/MultiplePredictionsView.vue'
import HeatmapView from '../views/HeatmapView.vue'
import MarketView from '../views/MarketView.vue'
import WeatherView from '../views/WeatherView.vue'
import OfflineView from '../views/OfflineView.vue'

const routes = [
  { path: '/', component: SplashView },                           // 1. Splash
  { path: '/login', component: LoginView },                       // 2. Login
  { path: '/register', component: RegisterView },                 // 3. Register
  { path: '/home', component: HomeView },                         // Dashboard
  { path: '/detect', component: DetectView },                     // 4 & 11. Flower Identification / Camera
  { path: '/classification', component: ClassificationView },     // 5. Classification Result
  { path: '/result', component: ResultView },                     // 6. Disease Detection Result
  { path: '/treatment', component: TreatmentView },               // 7. Disease Details & Treatment
  { path: '/care', component: CareView },                         // 8. Care Advisor
  { path: '/history', component: HistoryView },                   // 9. History
  { path: '/profile', component: ProfileView },                   // 10. Profile / Settings
  { path: '/predictions', component: MultiplePredictionsView },   // 13. Multiple Predictions
  { path: '/heatmap', component: HeatmapView },                   // 14. Explainable AI Heatmap
  { path: '/market', component: MarketView },                     // 15. Market Price Prediction
  { path: '/weather', component: WeatherView },                   // 16. Weather & Environment
  { path: '/offline', component: OfflineView }                    // 17. Offline Mode
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router