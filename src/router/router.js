import { createRouter, createWebHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Search from '@/pages/Search.vue'
import Library from '@/pages/Library.vue'

const routes = [
  {
    path: '/',
    component: Home
  },
  {
    path: '/search',
    component: Search
  },
  {
    path: '/library',
    component: Library
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router