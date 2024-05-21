<template>
    <div>
        <NuxtLayout>
            <BoxFancy class="mt-16">
                <h1>Error {{ error?.statusCode }}</h1>
                <p class="font-bold">{{ error?.statusMessage }}</p>
                <p>
                    If you think this is an error, you can contact us :
                    <Lnk href="mailto:support@skwal.net">support@skwal.net</Lnk>
                </p>
                <hr />
                <div class="flex items-center gap-x-5">
                    <NuxtLink to="/">
                        <ButtonFancy>Home Page</ButtonFancy>
                    </NuxtLink>
                    <p class="text-3xl">👈🏼</p>
                </div>
            </BoxFancy>
        </NuxtLayout>
    </div>
</template>

<script setup lang="ts">
const error = useError()
</script>
