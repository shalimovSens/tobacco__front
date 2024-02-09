<script setup lang="ts">
import { useRoute } from 'vue-router'
import { onMounted, ref } from 'vue';

import { getInventoryById } from '@/requests/inventories'

import SecondHeader from '@/components/base/SecondHeader.vue'
import WeighingList from '@/components/weighings/WeighingList.vue'


const route = useRoute()

const inventoryStartDate = ref<string>()
const inventoryEndDate = ref<string>()

onMounted(async () => {
    await getInventoryById(parseInt(route.params.id as string))
        .then(data => {
            inventoryStartDate.value = data.start_date
            inventoryEndDate.value = data.end_date
        })
})
</script>
<template>
    <div class="flex flex-col gap-y-10">
        <SecondHeader>Инвентаризация с {{ inventoryStartDate }} по {{ inventoryEndDate }}</SecondHeader>  
        <WeighingList />
    </div>
</template>