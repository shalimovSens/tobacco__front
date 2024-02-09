<script setup lang="ts">
import FormInput from '../inputs/FormInput.vue'
import FormBtn from '../inputs/FormBtn.vue'
import FormDropdown from '../inputs/FormDropdown.vue'

import { ref } from 'vue'
import { useRoute } from 'vue-router'

import { createWeighing } from '@/requests/weighings'
import type { Weighing } from '@/requests/weighings'


const emit = defineEmits<{
    (e: 'updateList', ): void
}>()

const route = useRoute()

const isDisabled = ref<boolean>(false)

const weight = ref<string>('')
const containerCount = ref<string>('')
const containerId = ref<number>()

const handleDropdown = (id: number) => {
    containerId.value = id
}

const formSubmitHandle = async () => {
    isDisabled.value = true

    let containerCountInt, weightInt

    try {
        weightInt = parseInt(weight.value)
        containerCountInt = parseInt(containerCount.value)
    }
    catch {
        return
    }

    if (!containerId.value) return

    const weighing: Weighing = {
        inventory_id: parseInt(route.params.id as string),
        container_id: containerId.value,
        container_count: containerCountInt,
        value: weightInt
    }

    await createWeighing(weighing)
        .then(data => emit('updateList'))

    isDisabled.value = false
}
</script>
<template>
    <form
        class="flex flex-row flex-wrap gap-y-3.5 items-center justify-between"
        @submit.prevent="formSubmitHandle"
    >
        <div class="sm:basis-33/100 basis-full">
            <FormInput 
                :placheholder="'Вес'"
                v-model="weight"
                :is-required="true"
                :is-disabled="isDisabled"
                :maska="'####'"
            />
        </div>    
        <div class="sm:basis-33/100 basis-full">
            <FormInput 
                :placheholder="'Кол-во контейнеров'"
                v-model="containerCount"
                :is-required="true"
                :is-disabled="isDisabled"
                :maska="'#'"
            />
        </div>
        <div class="sm:basis-33/100 basis-full">
            <FormDropdown 
                @on-input="handleDropdown"
            />
        </div>
        <div class="basis-full">
            <FormBtn :is-disabled="isDisabled">Создать</FormBtn>
        </div>
    </form>
</template>