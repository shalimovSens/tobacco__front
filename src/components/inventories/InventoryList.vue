<script setup lang="ts">
import { getInventories } from '@/requests/inventories'

import { onMounted, ref } from 'vue'

import InventoryItem from './InventoryItem.vue'


const inventoryList = ref()

onMounted(async () => {
    await getInventories()
        .then(res => inventoryList.value = res)
        .catch(err => console.error(err))
})
</script>

<template>
    <ul class="flex flex-col align-stretch gap-y-4">
        <li>
            <button
                class="
                    py-3.5
                    px-1.5
                    cursor-pointer
                    text-lg
                    text-center
                    rounded
                    bg-stone-800
                    hover:bg-stone-700
                    transition-colors
                    w-full
                "
            >
                Создать
            </button>
        </li>  
        <InventoryItem 
            v-for="item in inventoryList"
            :key="item.id"
            :id="item.id"
            :start-date="item.start_date"
            :end-date="item.end_date"
        />      
    </ul>
</template>