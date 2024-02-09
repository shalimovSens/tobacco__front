<script setup lang="ts">
import { onMounted, ref, computed, } from 'vue'

import { getContainers } from '@/requests/containers'



const emit = defineEmits<{
    (e: 'onInput', id: number) : void,
}>()

const isShow = ref<boolean>(false)
const isDisabled = ref<boolean>(true)

const displayedText = computed(() => currentContainer.value?.name || 'Контейнер')

const currentContainer = ref<ContainerItem>()
const containerList = ref<ContainerItem[]>()

type ContainerItem = {
    name: string,
    weight: number,
    id: number,
}

const handleInput = (item: ContainerItem) => {
    if (isDisabled.value) return
    isDisabled.value = true

    currentContainer.value = item
    emit('onInput', item.id)
    isShow.value = false

    isDisabled.value = false
}

const handleClick = () => {
    if (isDisabled.value) return

    isShow.value = !isShow.value

}

onMounted(async () => {
    await getContainers()
        .then(data => {
            containerList.value = data
            isDisabled.value = false
        })

})
</script>
<template>
    <div class="relative select-none">
        <div 
            class="border-solid border-2 border-stone-700 py-3.5 px-2 rounded w-full z-10 relative"
            @click="handleClick"
        >
            <span class="opacity-80 cursor-default leading-7">
                {{ displayedText }}
            </span>
        </div>
        <ul
            v-show="isShow"
            class="absolute bottom-0 left-0 right-0 translate-y-full flex flex-col gap-y-2 p-2 bg-stone-900 border-solid border-2 border-stone-700 z-30"
        >
            <li
                v-for="item in containerList"
                :key="item.id"
                class="cursor-pointer"
                @click="handleInput(item)"
            >
                {{ item.name }}
            </li>
        </ul>
    </div>
</template>