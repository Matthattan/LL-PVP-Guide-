import { createMemoryHistory, createRouter } from 'vue-router'

import IndexApp from '../components/IndexApp.vue';
import QuestionsApp from '../components/QuestionsApp.vue';
import ResourcesApp from '../components/ResourcesApp.vue';

const routes = [
    { path: '/', 
    name: 'Home',
    component: IndexApp,
    },
    { path: '/CommonQuestions', 
    name: 'Questions',
    component: QuestionsApp 
    },
    { path: '/Resources', 
    name: 'Resources',
    component: ResourcesApp 
    },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes,
  })

export default router