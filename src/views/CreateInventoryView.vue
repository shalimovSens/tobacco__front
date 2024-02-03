<script setup lang="ts">
import SecondHeader from '@/components/SecondHeader.vue';
import FormInput from '@/components/inputs/FormInput.vue'

import { getFirstDateInventory, } from '@/requests/inventories'
</script>
<template>
    <div>
        <SecondHeader>Создание инвентаризации</SecondHeader>
        <FormInput 
            :placheholder="'Начало'"
        />
    </div>
</template>