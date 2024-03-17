import { createApp} from 'vue';
import App from './App.vue';
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue';

// createApp(App).mount('#app');

createApp(Header).mount('#header');
createApp(SideBar).mount('#sidebar')
