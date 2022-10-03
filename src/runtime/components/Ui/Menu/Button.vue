<template>
  <button
    type="button"
    :class="[
      'inline-flex justify-center w-full px-4 py-2 text-sm font-medium rounded-md text-w-70 hover:text-w-90 dark:text-w-60 dark:hover:text-white cursor-pointer border-1 items-center',

      active
        ? 'bg-primary dark:bg-s-40 border-s-20 dark:border-s-70'
        : 'bg-primary-400 hover:bg-primary-500 dark:hover:bg-s-40 dark:bg-s-30 border-transparent',
    ]"
  >
    <slot />
    <IconEpArrowDown mr="2" ml="-1"/>
  </button>
</template>

<script setup>
const props = defineProps({
  active: {
    type: Boolean,
    default: false,
  },
});
</script>
