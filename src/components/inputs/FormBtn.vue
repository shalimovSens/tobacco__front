<script setup lang="ts">
defineProps<{
    isDisabled: boolean
}>()
</script>
<template>
    <button 
        :disabled="isDisabled"
        class="w-full py-3.5 px-1.5 text-lg rounded bg-stone-800 hover:bg-stone-700 transition-colors"
    >
        <slot />
    </button>
</template>