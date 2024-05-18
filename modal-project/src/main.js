import { createApp } from 'vue';

import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app');

//new Vue({el: '#app',render: h => h(IndexApp),router: router}) 
