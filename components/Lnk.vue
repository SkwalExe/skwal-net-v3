<template>
  <a :href="href" :target="newTab ? '_blank' : '_self'" class="text-accent hover:text-opacity-100 text-opacity-80 transition duration-150"><slot/></a>
</template>

<script setup>
  const { href, newTab } = defineProps({
    href: { required: true },
    newTab: { required: false }
  })

  if (typeof newTab === 'string' 
    && !["false", "true"].includes(newTab.toLowerCase())) {
    throw new Error('newTab prop must either true of false')
    }
</script>