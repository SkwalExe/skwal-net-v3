<template>
    <header
        :class="`${navOpened ? 'h-full' : ''} border-b-accent/80 border-b md:h-auto select-none flex fixed w-full top-0 items-center bg-primary/30 justify-center z-50 mb-5 shadow backdrop-blur-lg`">
        <nav class="flex flex-col md:flex-row justify-center items-center px-5 py-2 w-full max-w-[2048px] h-full">
            <div class="w-full flex justify-between">
                <div class="logo flex items-center gap-2">
                    <img src="/img/logo.png" class="h-10 rounded-full" />
                    <p
                        class="text-3xl bg-clip-text text-transparent bg-gradient-to-r from-accent/40 via-accent/80 to-accent font-poppins font-semibold">
                        Skwal
                    </p>
                </div>
                <div class="flex items-center">
                    <Icon :name="navIcon" class="cursor-pointer h-6 w-6 block md:!hidden" @click="toggleNav" />
                </div>
            </div>

            <div
                id="nav_buttons"
                :class="`flex flex-col space-y-1 w-full h-full ${navOpened ? '' : 'hidden'} left-0 p-5
            md:flex md:flex-row md:z-auto md:p-0 md:static md:justify-end md:space-x-3 md:space-y-0 md:mt-0 md:border-none border-t border-t-white/20 mt-5`">
                <NavButton v-for="link in navBarStore.links" :key="link.title" :link="link" />
            </div>
        </nav>
    </header>
</template>

<script setup lang="ts">
const navBarStore = useNavbarStore()
import {ref} from 'vue'
const navOpened = ref(false)
const toggleNav = () => (navOpened.value = !navOpened.value)

const navIcon = computed(() => (navOpened.value ? 'oui:cross' : 'iconamoon:menu-burger-horizontal-thin'))
</script>
