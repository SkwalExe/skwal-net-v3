<template>
    <div class="inline">
        <NuxtLink
            class="transition text-nowrap duration-300 text-gray-200 cursor-pointer hover:text-gray-50 rounded-md hover:bg-gray-700/30 px-3 py-2 md:py-[2px] flex items-center gap-1 font-medium"
            :to="link.path"
            :target="link.newTab ? '_blank' : '_self'">
            <Icon v-if="link.icon !== null" :name="link.icon" />
            {{ link.title }}
        </NuxtLink>
    </div>
</template>

<script setup lang="ts">
import type NavBtnInfo from '~/classes/NavBtnInfo'
const {link} = defineProps<{link: NavBtnInfo}>()
</script>

<style scoped>
.router-link-active {
    @apply text-accent;
}
</style>
