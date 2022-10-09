<template>
  <NuxtLayout dir="rtl">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup>
const head = useHead({
  bodyAttrs: {
    class: 'bg-primary dark:bg-primaryOp'
  }
})
</script>