<template>
    <div class="inline">
        <NuxtLink class="transition duration-300 text-gray-200 cursor-pointer hover:text-gray-50 rounded-md hover:bg-gray-700/30 px-4 py-2 
        font-medium block" :to="link.path" :target="link.newTab ? '_blank' : '_self'" ><Icon v-if="link.icon !== null" :name="link.icon"/> {{ link.title }}</NuxtLink>
    </div>
</template>

<script setup>
    const { link } = defineProps([ "link" ]);
</script>

<style scoped>
    .router-link-active {
        @apply text-accent;
    }
</style>