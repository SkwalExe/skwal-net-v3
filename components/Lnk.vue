<template>
    <a
        :href="href"
        :target="newTab ? '_blank' : '_self'"
        class="text-accent hover:text-opacity-100 text-opacity-80 transition duration-150">
        <slot />
    </a>
</template>

<script setup lang="ts">
const {href, newTab} = defineProps<{href: string; newTab?: boolean}>()
</script>
