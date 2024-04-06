import { createApp } from 'vue';
import { createMemoryHistory, createRouter } from 'vue-router'

import Router from 'vue-router'
import QuestionsApp from './QuestionsApp.vue';
import IndexApp from './IndexApp.vue';

const routes = [
  { path: '/', component: IndexApp },
  { path: '/CommonQuestions', component: QuestionsApp },
]

const router = createRouter({
  history: createMemoryHistory(),
  routes,
})

createApp(IndexApp).use(router).mount('#app');
