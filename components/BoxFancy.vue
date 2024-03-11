<template>
  <div class="box-fancy p-[2px] bg-gradient-to-br transition duration-500 from-accent to-accent/30 rounded-md hover:scale-[1.005]">
        <div class="bg-primary rounded-md">
            <div class="p-10 bg-gradient-to-tl from-violet-500/20 to-accent/20 rounded-md">
                <slot />
            </div>
        </div>
    </div>
</template>
