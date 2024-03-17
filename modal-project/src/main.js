import { createApp} from 'vue';
import App from './IndexApp.vue';
import Header from './components/Header.vue'
import SideBar from './components/SideBar.vue';
import TextLine from './components/SelectText.vue'

createApp(App).mount('#app');
createApp(TextLine).mount('#text')


//createApp(Header).mount('#header');
//createApp(SideBar).mount('#sidebar')
