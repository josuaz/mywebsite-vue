import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import router from './router'
import './assets/js/my-script.js'
import './assets/css/animatedBg.css'

createApp(App).use(router).mount('#app')
