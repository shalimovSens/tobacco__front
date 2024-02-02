<script setup lang="ts">
import HeaderLayout from './HeaderLayout.vue'
import ContainerLayout from './ContainerLayout.vue'
</script>
<template>
    <HeaderLayout />
    <main class="flex-auto py-8">
        <ContainerLayout>
            <slot />
        </ContainerLayout>
    </main>
</template>