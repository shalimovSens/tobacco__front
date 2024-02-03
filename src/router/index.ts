import { createRouter, createWebHistory } from 'vue-router'
import IndexView from '../views/IndexView.vue'
import CreateInventoryView from '../views/CreateInventoryView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'index',
      component: IndexView
    },
    {
        path: '/create',
        name: 'createInventory',
        component: CreateInventoryView,
    },
  ]
})

export default router
