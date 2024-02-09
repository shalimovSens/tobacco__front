<script setup lang="ts">
import FormInput from '../inputs/FormInput.vue'
import FormBtn from '../inputs/FormBtn.vue'

import { getFirstDateInventory, createInventory, } from '@/requests/inventories'
import { getCurrentDate } from '@/utils'

import { onMounted, ref } from 'vue'

const emit = defineEmits<{
    (e: 'updateList', ): void
}>()

const firstDate = ref<string>('')
const lastDate = ref<string>('')

const isDisabled = ref<boolean>(true)


onMounted(async () => {
    await getFirstDateInventory()
        .then(data => {
            firstDate.value = data
            isDisabled.value = false
        })
    lastDate.value = getCurrentDate()
})

const formSubmitHandle = async () => {
    isDisabled.value = true

    await createInventory(firstDate.value, lastDate.value)
        .then(data => {
            emit('updateList')
            firstDate.value = ''
            lastDate.value = ''
        })
    isDisabled.value = false
}
</script>
<template>
    <form 
        class="flex flex-row flex-wrap gap-y-3.5 items-center justify-between"
        @submit.prevent="formSubmitHandle"
    >
        <div class="sm:basis-47/100 basis-full">
            <FormInput 
                :placheholder="'Начало'"
                v-model="firstDate"
                :is-required="true"
                :is-disabled="isDisabled"
                :maska="'##.##.####'"
            />
        </div>
        <div class="sm:basis-47/100 basis-full">
            <FormInput 
                :placheholder="'Конец'"
                v-model="lastDate"
                :is-required="true"
                :is-disabled="isDisabled"
                :maska="'##.##.####'"
            />
        </div>
        <div class="basis-full">
            <FormBtn :is-disabled="isDisabled">Создать</FormBtn>
        </div>
    </form>
</template>