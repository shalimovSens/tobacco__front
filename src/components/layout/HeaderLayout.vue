<script setup lang="ts">
import ContainerLayout from './ContainerLayout.vue';

</script>
<template>
    <header>
        <ContainerLayout>
            <div class="h-20 flex flex-row items-center">
                <RouterLink to="/">
                    <h1 class="text-3xl select-none">
                        Инвентаризация Табак
                    </h1>
                </RouterLink>
            </div>
        </ContainerLayout>
    </header>
</template>