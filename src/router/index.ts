import { createRouter, createWebHistory } from 'vue-router'

import InventoriesView from '../views/InventoriesView.vue'
import WeighingsView from '@/views/WeighingsView.vue'
import ContainersView from '@/views/ContainersView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'inventories',
      component: InventoriesView
    },
    {
        path: '/inventory/:id',
        name: 'weighings',
        component: WeighingsView,
    },
    {
        path: '/containers',
        name: 'containers',
        component: ContainersView,
    }
  ]
})

export default router
