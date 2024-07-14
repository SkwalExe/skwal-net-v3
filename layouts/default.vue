<template>
    <div id="layout-body" class="min-h-screen flex flex-col justify-between">
        <div class="flex justify-center flex-col items-center">
            <NavBar />
            <div class="w-full max-w-6xl sm:p-10 flex flex-col sm:gap-5">
                <slot />
            </div>
        </div>
        <Footer />
    </div>
</template>
