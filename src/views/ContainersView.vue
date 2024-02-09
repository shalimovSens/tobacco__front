<script setup lang="ts">
import SecondHeader from '@/components/base/SecondHeader.vue'
import ContainersList from '@/components/containers/ContainersList.vue'

</script>
<template>
    <div class="flex flex-col gap-y-10">
        <SecondHeader>Контейнеры</SecondHeader>  
        <ContainersList />
    </div>
</template>