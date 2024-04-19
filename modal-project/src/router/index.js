import { createMemoryHistory, createRouter } from 'vue-router'

import AppIndex from '../components/AppIndex.vue';
import AppQuestions from '../components/AppQuestions.vue';
import AppResources from '../components/AppResources.vue';
import AppRally from '../components/AppRally.vue';
import AppTeambuilding from '../components/AppTeambuilding.vue';
import AppSetMaking from '../components/AppSetMaking.vue';
import AppCredits from '@/components/AppCredits.vue';

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
    { path: '/Teambuilding', 
    name: 'Teambuilding',
    component: AppTeambuilding 
    },
    { path: '/SetMaking', 
    name: 'SetMaking',
    component: AppSetMaking
    },
    { path: '/Credits', 
    name: 'Credits',
    component: AppCredits
    },
  ]
  
  const router = createRouter({
    history: createMemoryHistory(process.env.BASE_URL),
    routes,
  })

export default router