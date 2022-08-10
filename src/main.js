import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import './assets/js/my-script.js'
import './assets/css/animatedBg.css'
import VueWriter from "vue-writer";
import { registerScrollSpy } from 'vue3-scroll-spy';

createApp(App).use(VueWriter).use(registerScrollSpy).mount('#app')