<template>
    <div
        :class="`fancy-button-${type} text-center text-white inline-flex bg-gradient-to-br border-white/40 border-[2px] hover:opacity-100 opacity-90 transition duration-300 rounded-md px-7 py-4 cursor-pointer`">
        <p class="w-full">
            <slot />
        </p>
    </div>
</template>

<script setup lang="ts">
const { type } = defineProps({
    type: {
        type: String,
        requird: true,
        default: 'blue'
    }
})

if (!['red', 'blue', 'yellow', 'green'].includes(type)) throw new Error('Invalid fancy button type')


</script>
