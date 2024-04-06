import { createMemoryHistory, createRouter } from 'vue-router'

import QuestionsApp from '../components/QuestionsApp.vue';
import IndexApp from '../components/IndexApp.vue';

const routes = [
    { path: '/', 
    name: 'Home',
    component: IndexApp,
 },
    { path: '/CommonQuestions', 
    name: 'Questions',
    component: QuestionsApp },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes,
  })

export default router