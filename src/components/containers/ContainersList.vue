<script setup lang="ts">
import { onMounted, ref } from 'vue'

import ItemList from '../base/ItemList.vue'
import ContainersForm from './ContainersForm.vue'

import { deleteContainer, getContainers, } from '@/requests/containers'


const containerList = ref()

const storageContainers = async () => {
    await getContainers()
        .then(data => containerList.value = data)
}

const handleDeleteContainer = async (id: number) => {
    await deleteContainer(id)
        .then(async (data) => await storageContainers())
}

onMounted(async () => {
    await storageContainers()
})
</script>
<template>
    <ul class="flex flex-col align-stretch gap-y-4">
        <ContainersForm 
            @update-list="storageContainers"
        /> 
        <ItemList
            v-for="item in containerList"
            :key="item.id"
            :id="item.id"
            @delete-item="handleDeleteContainer"
        >
            {{ item.name }}  &mdash;  {{ item.weight  }}гр
        </ItemList>
    </ul>
</template>