<template>
    <a :href="href" :target="newTab ? '_blank' : '_self'" class="link">
        <slot />
    </a>
</template>

<script setup lang="ts">
const {href, newTab} = defineProps<{href: string; newTab?: boolean}>()
</script>
