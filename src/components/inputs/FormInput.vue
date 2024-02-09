<script setup lang="ts">
import { vMaska } from "maska"


defineProps<{
    placheholder: string,
    modelValue: string,
    isRequired: boolean,
    isDisabled: boolean,
    maska?: string,
}>()
defineEmits<{
    (e: 'update:modelValue', value: string ): void
}>()

</script>
<template>
    <div class="input py-5">
        <div class="relative">
            <input 
                type="text"
                class="border-solid border-2 border-stone-700 bg-transparent py-3.5 px-2 text-lg rounded w-full z-10 relative"
                v-maska
                :data-maska="maska"
                :value="modelValue"
                @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
                :required="isRequired"
                :disabled="isDisabled"
            >
            <div 
                class="input__placeholder absolute left-2 top-1/2 -translate-y-1/2 z-0 select-none transition-all duration-200 ease-out opacity-80"
                :class="{
                    'input__placeholder_active': modelValue
                }"
            >
                {{ placheholder }}
            </div>
        </div>
    </div>
</template>
<style scoped lang="sass">
input:focus + .input__placeholder, .input__placeholder_active
    color: currentColor
    top: -5px
    transform: translateY(-100%)
    opacity: 1
    font-size: 18px

input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus, input:-webkit-autofill:active
    -webkit-background-clip: text
    -webkit-text-fill-color: currentColor
    transition: background-color 5000s ease-in-out 0s
</style>