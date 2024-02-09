<script setup lang="ts">
import InventoryList from '@/components/inventories/InventoryList.vue'
import SecondHeader from '@/components/base/SecondHeader.vue'


</script>

<template>
    <div class="flex flex-col gap-y-10">
        <SecondHeader>Список инвентаризаций</SecondHeader>
        <InventoryList />
    </div>
</template>
