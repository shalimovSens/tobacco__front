<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRoute } from 'vue-router'

import ItemList from '../base/ItemList.vue'
import WeighingForm from './WeighingForm.vue'

import { getWeighings, deleteWeighing } from '@/requests/weighings'


const route = useRoute()
const weighingList = ref()


const storageWeighings = async () => {
    await getWeighings(parseInt(route.params.id as string))
        .then(data => weighingList.value = data)

}

onMounted(async () => {
    await storageWeighings()
})

const handleDeleteWeighing = async (id: number) => {
    await deleteWeighing(id)
        .then(async (data) => await storageWeighings())
}
</script>
<template>
    <ul class="flex flex-col align-stretch gap-y-4">
        <WeighingForm 
            @update-list="storageWeighings"
        />
        <ItemList
            v-for="item in weighingList"
            :key="item.id"
            :id="item.id"
            @delete-item="handleDeleteWeighing"
        >
            {{ item.value }}
        </ItemList>
    </ul>
</template>