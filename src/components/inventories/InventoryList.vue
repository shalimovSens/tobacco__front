<script setup lang="ts">
import { getInventories } from '@/requests/inventories'

import { onMounted, ref } from 'vue'
import { RouterLink } from 'vue-router';

import InventoryItem from './InventoryItem.vue'


const inventoryList = ref()

const storageInventories = async () => {
    await getInventories()
        .then(data => inventoryList.value = data)
        // .then(data => console.log(data))
        .catch(err => console.error(err))
}

onMounted(async () => {
    await storageInventories()
})


</script>

<template>
    <ul class="flex flex-col align-stretch gap-y-4">
        <li>
            <RouterLink to="/create">
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
            </RouterLink>
        </li>  
        <InventoryItem 
            v-for="item in inventoryList"
            :key="item.id"
            :id="item.id"
            :start-date="item.start_date"
            :end-date="item.end_date"
            @update-list="storageInventories"
        />      
    </ul>
</template>