<script setup lang="ts">
import { ref } from 'vue';


const props = defineProps<{
    id: number
    link?: string
}>()

const emit = defineEmits<{
    (e: 'deleteItem', id: number) : void
}>()

const isDeleting = ref<boolean>(false)


const deleteClickHandle = async () => {
    if (isDeleting.value) return 

    isDeleting.value = true

    emit('deleteItem', props.id)

    isDeleting.value = false
}
</script>

<template>
    <li class="
        py-3.5 
        px-1.5
        text-lg
        rounded
        bg-stone-800
        hover:bg-stone-700
        transition-colors
        flex
        flex-row
        justify-between
        items-center
        select-none
        relative
    ">
        <router-link
            v-if="link"
            :to="link" 
        />
        <div class="w-8 h-8">

        </div>
        <slot />
        <div
            class="w-8 h-8 relative cursor-pointer hover:drop-shadow-white"
            @click="deleteClickHandle()"
        >
            <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 448 512"
                class="fill-red-600 h-7 absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"                
            >
                <path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z"/>
            </svg>
        </div>
    </li>
</template>
<style scoped lang="sass">
    svg 
        display: none
    li:hover
        svg
            display: block
    a
        position: absolute
        inset: 0
        cursor: default
</style>