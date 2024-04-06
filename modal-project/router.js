// router.js
import { createMemoryHistory, createRouter } from 'vue-router';
import IndexApp from './src/IndexApp.vue'; // Adjust the path as needed

const routes = [
    { path: '/', component: IndexApp },
    { path: '/commonquestions', component: CommonQuestions },
    // Other routes...
  ];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
