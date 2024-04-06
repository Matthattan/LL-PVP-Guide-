import { createApp} from 'vue';
import App from './IndexApp.vue';
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue';
import TextLine from './components/SelectText.vue'
import Questions from './components/Questions.vue'
import router from '../router'; // Import your router configuration


createApp(App).use(router).mount('#app');
createApp(TextLine).mount('#text')
createApp(Questions).mount('#questions')

//createApp(Header).mount('#header');
//createApp(SideBar).mount('#sidebar')
