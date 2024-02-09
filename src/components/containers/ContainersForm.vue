<script setup lang="ts">
import FormInput from '../inputs/FormInput.vue'
import FormBtn from '../inputs/FormBtn.vue'

import { ref } from 'vue'

import { createContainer } from '@/requests/containers'


const emit = defineEmits<{
    (e: 'updateList', ): void
}>()

const isDisabled = ref<boolean>(false)

const containerName = ref<string>('')
const containerWeight = ref<string>('')

const formSubmitHandle = async () => {
    isDisabled.value = true

    let containerWeightInt
    try {
        containerWeightInt = parseInt(containerWeight.value)
    }
    catch {
        return
    }

    await createContainer(containerName.value, containerWeightInt)
        .then(data => emit('updateList'))

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
                :placheholder="'Имя'"
                v-model="containerName"
                :is-required="true"
                :is-disabled="isDisabled"
            />
        </div>    
        <div class="sm:basis-47/100 basis-full">
            <FormInput 
                :placheholder="'Вес'"
                v-model="containerWeight"
                :is-required="true"
                :is-disabled="isDisabled"
            />
        </div>
        <div class="basis-full">
            <FormBtn :is-disabled="isDisabled">Создать</FormBtn>
        </div>
    </form>
</template>