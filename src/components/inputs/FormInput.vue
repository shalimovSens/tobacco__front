<script setup lang="ts">
import { vMaska } from "maska"


defineProps<{
    placheholder: string,
}>()
</script>
<template>
    <div class="input pt-5">
        <div class="relative">
            <input 
                type="text"
                class="bg-stone-800 py-3.5 px-2 text-lg rounded w-full z-10"
                v-maska
                data-maska="##.##.####"
            >
            <div class="input__placeholder absolute left-2 top-1/2 -translate-y-1/2 z-0 select-none transition-all duration-200 ease-out opacity-80">
                {{ placheholder }}
            </div>
        </div>
    </div>
</template>
<style scoped lang="sass">
input:focus + .input__placeholder, .input__placeholder_active
    color: currentColor
    top: 0
    transform: translateY(-100%)
    opacity: 1

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active
    -webkit-background-clip: text
    -webkit-text-fill-color: currentColor
    transition: background-color 5000s ease-in-out 0s
</style>