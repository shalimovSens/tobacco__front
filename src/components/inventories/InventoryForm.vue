<script setup lang="ts">
import FormInput from '@/components/inputs/FormInput.vue'
import FormBtn from '../inputs/FormBtn.vue'

import { getFirstDateInventory, } from '@/requests/inventories'
import { getCurrentDate } from '@/utils'

import { onMounted, ref } from 'vue';

const firstDate = ref<string>('')
const lastDate = ref<string>('')

const isDisabled = ref<boolean>(true)

onMounted(async () => {
    lastDate.value = getCurrentDate()
    await getFirstDateInventory()
        .then(data => {
            firstDate.value = data
            isDisabled.value = false
        })
        .catch(err => console.error(err))
})
</script>
<template>
    <form 
        class="flex flex-row flex-wrap gap-y-3.5 items-center justify-between"
        @submit.prevent
    >
        <div class="sm:basis-47/100 basis-full">
            <FormInput 
                :placheholder="'Начало'"
                v-model="firstDate"
                :is-required="true"
                :is-disabled="isDisabled"
            />
        </div>
        <div class="sm:basis-47/100 basis-full">
            <FormInput 
                :placheholder="'Конец'"
                v-model="lastDate"
                :is-required="true"
                :is-disabled="isDisabled"
            />
        </div>
        <div class="basis-full">
            <FormBtn :is-disabled="isDisabled">Создать</FormBtn>
        </div>
    </form>
</template>