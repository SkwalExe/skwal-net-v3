<template>
    <div id="layout-body" class="min-h-screen flex flex-col justify-between" theme="midnight-abyss">
        <div class="flex justify-center flex-col items-center">
            <NavBar />
            <div class="w-full max-w-6xl sm:p-10 p-4 flex flex-col gap-5">
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>
