<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import { useRoute } from 'vue-router'

import ItemList from '../base/ItemList.vue'
import WeighingForm from './WeighingForm.vue'

import { getWeighings, deleteWeighing, getTotalWeight, } from '@/requests/weighings'



const route = useRoute()

const weighingList = ref()
const totalWeight = ref<number>()

const storageWeighings = async () => {
    await getWeighings(parseInt(route.params.id as string))
        .then(data => weighingList.value = data)

}

watch(weighingList, () => {
    getTotalWeight(parseInt(route.params.id as string))
        .then(data => totalWeight.value = data[0])
})

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
        <h3 class="text-xl">Итоговый вес: {{ totalWeight }} грамм</h3>
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