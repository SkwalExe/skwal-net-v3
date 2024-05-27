<template>
    <BoxFancy>
        <h1>😸 Memz.js demonstration</h1>
        <p>
            MEMZ is a well-known computer virus that gained notoriety for its humorous messages and effects, alongside
            its destructive capabilities. It started as a harmless project by a developer named Leurak for the
            "Viewer-Made Malware" series on YouTube. However, it was later modified by others and spread as a virus.
            MEMZ is known for causing various forms of damage to a computer's operating system, while displaying
            provocative messages or images. This behavior makes the virus fun to observe within virtual machines where
            its destructive effects can be contained.
        </p>
    </BoxFancy>

    <div class="flex sm:gap-5 flex-col sm:flex-row">
        <Box>
            <h1 class="group-hover:text-accent">📚 Memz.js</h1>
            <p>{{ description }}</p>
            <div class="mt-5">
                <Lnk :new-tab="true" href="https://github.com/Skwalexe/memz.js">
                    <ButtonFancy class="w-full">Github & Documentation</ButtonFancy>
                </Lnk>
            </div>
        </Box>
        <Box>
            <h1 class="group-hover:text-accent">🔄 Demo</h1>
            <p>Click a method to see its effects!</p>
            <p class="text-red-500">Press Ctrl+R or F5 to stop all effects.</p>
            <hr />
            <ul v-if="mmz !== null" class="list-decimal list-inside">
                <li><a class="link" @click="mmz.all()">memz.all()</a></li>
                <li><a class="link" @click="mmz.changeCursor()">memz.changeCursor()</a></li>
                <li><a class="link" @click="mmz.invertColors()">memz.invertColors()</a></li>
                <li><a class="link" @click="mmz.messageBoxes()">memz.messageBoxes()</a></li>
                <li><a class="link" @click="mmz.rotateScreen()">memz.rotateScreen()</a></li>
                <li><a class="link" @click="mmz.floatingIcons()">memz.floatingIcons()</a></li>
                <li><a class="link" @click="mmz.computerSounds()">memz.computerSounds()</a></li>
            </ul>
            <p v-else>Waiting for Memz library to load.</p>
        </Box>
    </div>
</template>

<script setup lang="ts">
import {memz as description} from '~/assets/descriptions'
import Memz from '@skwalexe/memz'
const mmz: Ref<null | Memz> = ref(null)
onMounted(() => {
    mmz.value = new Memz('https://cdn.jsdelivr.net/gh/SkwalExe/Memz.js@0.1.0/src/assets/')
})
</script>
