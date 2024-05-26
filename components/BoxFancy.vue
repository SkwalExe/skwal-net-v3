<template>
    <div
        class="box-fancy border-[1px] border-white/25 transition duration-75 hover:border-white/30 bg-black/50 rounded-md md:rounded-xl overflow-hidden">
        <div class="h-full fancy sm:p-10 p-4 bg-gradient-to-tl from-violet-500/20 to-accent/20">
            <slot />
        </div>
    </div>
</template>
