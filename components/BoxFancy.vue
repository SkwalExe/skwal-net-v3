<template>
    <div
        class="box-fancy sm:border-[1px] sm:border-white/25 transition duration-75 sm:hover:border-white/30 bg-black/50 border-collapse sm:rounded-xl overflow-hidden">
        <div class="h-full fancy sm:p-10 p-4 bg-gradient-to-tl from-violet-500/20 to-accent/20">
            <slot />
        </div>
    </div>
</template>
