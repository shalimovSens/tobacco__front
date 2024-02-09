<script setup lang="ts">
import { getInventories, deleteInventory } from '@/requests/inventories'

import { onMounted, ref } from 'vue'

import InventoryForm from './InventoryForm.vue'
import ItemList from '../base/ItemList.vue'



const inventoryList = ref()

const storageInventories = async () => {
    await getInventories()
        .then(data => inventoryList.value = data)
}

onMounted(async () => {
    await storageInventories()
})

const handleDeleteInventory = async (id: number) => {
    await deleteInventory(id)
        .then(async (data) => await storageInventories())
}
</script>

<template>
    <ul class="flex flex-col align-stretch gap-y-4">
        <InventoryForm 
            @update-list="storageInventories"
        />
        <ItemList 
            v-for="item in inventoryList"
            :key="item.id"
            :id="item.id"
            :link="`/inventory/${item.id}`"
            @delete-item="handleDeleteInventory"
        >
        {{ item.start_date }}  &mdash;  {{ item.end_date }}
        </ItemList>   
    </ul>
</template>