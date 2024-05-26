<template>
    <BoxFancy class="h-full min-w-[480px]">
        <div class="flex flex-col justify-between h-full">
            <div>
                <h1>
                    <Icon v-if="icon !== undefined" :name="icon" />
                    {{ title }}
                </h1>
                <p>{{ text }}</p>
            </div>
            <img class="border-[1px] border-white/20 rounded-xl mt-3 w-full" :src="image" alt="Tile banner" />
        </div>
    </BoxFancy>
</template>

<script setup lang="ts">
const {title, text, image, icon} = defineProps<{
    title: string
    text: string
    image: string
    icon?: string
}>()
</script>
