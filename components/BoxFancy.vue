<template>
  <div class="box-fancy p-[1px] bg-gradient-to-br transition duration-500 from-accent to-accent/10 rounded-md hover:scale-[1.005]">
        <div class="bg-primary rounded-md">
            <div class="p-10 bg-gradient-to-tl from-black via-black to-accent/15 rounded-md">
                <slot />
            </div>
        </div>
    </div>
</template>