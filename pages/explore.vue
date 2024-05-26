<template>
    <div class="mt-16 flex gap-5 flex-wrap-reverse">
        <a href="/winmb" class="tile">
            <Tile
                title="WinMB.js"
                :text="winmb"
                icon="openmoji:windows"
                image="https://raw.githubusercontent.com/SkwalExe/WinMB.js/main/assets/banner.png" />
        </a>
        <a href="/memz" class="tile">
            <Tile
                title="Memz.js"
                :text="memz"
                image="https://raw.githubusercontent.com/SkwalExe/Memz.js/main/assets/banner.png" />
        </a>
    </div>
</template>

<script setup lang="ts">
import {winmb, memz} from '~/assets/descriptions'
import Tile from '~/components/Tile.vue'
</script>

<style scoped>
.tile {
    @apply basis-0 grow;
}
</style>
