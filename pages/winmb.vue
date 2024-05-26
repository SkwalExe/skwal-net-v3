<template>
    <BoxFancy>
        <h1>🪟 WinMB.js</h1>
        <p>
            {{ description }}. You can find this library on GitHub, as well as its documentation.
        </p>
        <div class="mt-5">
            <Lnk :new-tab="true" href="https://github.com/Skwalexe/WinMB.js">
                <ButtonFancy class="w-full">Github & Documentation</ButtonFancy>
            </Lnk>
        </div>
    </BoxFancy>
    <BoxFancy>
        <h1>🎥 Demonstration</h1>
        <div class="justify-center inline-flex gap-4 flex-wrap">
            <ButtonFancy type="red" @click="demo('error')">Error message</ButtonFancy>
            <ButtonFancy @click="demo('info')">Information box</ButtonFancy>
            <ButtonFancy type="yellow" @click="demo('warning')">Warning box</ButtonFancy>
        </div>
        <div class="mt-3">
            <label for="randomize-position">
                <input id="randomize-position" v-model="randomPosition" class="accent-teal-500" type="checkbox" />
                <span>Randomize position</span>
            </label>
        </div>
        <hr />
        <h2>↩️ Return value</h2>
        <input v-model="returnValue" type="text" placeholder="Return value" disabled />
    </BoxFancy>
</template>

<script setup lang="ts">
import WinMB from '@skwalexe/winmb'
import { winmb as description } from '~/assets/descriptions'
const returnValue: Ref<string> = ref('')

const randomPosition: Ref<boolean> = ref(false)
const wmb: Ref<null | WinMB> = ref(null)

const messageBoxes: {[key: string]: string[]} = {
    "error": ['CRITICAL ERROR', 'This is an error message!'],
    "info": ['Information', 'This is a notice!'],
    "warning": ['ATTENTION', 'This is a warning!!!!']
}

onMounted(() => {
    wmb.value = new WinMB('https://cdn.jsdelivr.net/gh/SkwalExe/WinMB.js@0.1.2/src/assets/')
})

const demo = async (boxType: string): Promise<void> => {
    if (wmb.value === null) throw new Error('wmb is not loaded yet (wmb null)')
    if (!['error', 'info', 'warning'].includes(boxType)) throw new Error('boxType must be in [error, info, warning]')

    returnValue.value = (await wmb.value.show(
        messageBoxes[boxType][0], // title
        messageBoxes[boxType][1], // message
        boxType,
        [{text: 'Hello'}, {text: 'World'}],
        randomPosition.value ? 'random' : 'default'
    )).toString()
}
</script>
