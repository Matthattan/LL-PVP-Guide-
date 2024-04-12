import { createMemoryHistory, createRouter } from 'vue-router'

import AppIndex from '../components/AppIndex.vue';
import AppQuestions from '../components/AppQuestions.vue';
import AppResources from '../components/AppResources.vue';
import AppRally from '../components/AppRally.vue';

const routes = [
    { path: '/', 
    name: 'Home',
    component: AppIndex,
    },
    { path: '/CommonQuestions', 
    name: 'Questions',
    component: AppQuestions 
    },
    { path: '/Resources', 
    name: 'Resources',
    component: AppResources 
    },
    { path: '/RallyRanch', 
    name: 'RallyRanch',
    component: AppRally 
    },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes,
  })

export default router