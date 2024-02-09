<script setup lang="ts">
import ContainerLayout from './ContainerLayout.vue';

</script>
<template>
    <header>
        <ContainerLayout>
            <div class="flex flex-row items-center justify-between py-4 flex-wrap gap-x-5 gap-y-3">
                <RouterLink to="/">
                    <h1 class="text-3xl select-none">
                        Инвентаризация Табак
                    </h1>
                </RouterLink>
                <RouterLink to="/containers">
                    <button class="p-3 bg-stone-800 rounded border-solid border-stone-800 hover:border-stone-700 transition-all">
                        Контейнеры
                    </button>
                </RouterLink>
            </div>
        </ContainerLayout>
    </header>
</template>