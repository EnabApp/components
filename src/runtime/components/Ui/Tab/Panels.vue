<template>
    <div w="full" h="full">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    col: {
        type: Boolean,
        default: false
    }
});
</script>
