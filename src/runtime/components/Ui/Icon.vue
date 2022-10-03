<template>
  <div :class="icon"></div>
</template>

<script setup>

const props = defineProps({
    icon: {
        type: String,
        required: true,
    },

})
</script>