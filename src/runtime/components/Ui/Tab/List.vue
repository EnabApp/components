<template>
    <div border="rounded-xl" justify="center" p="1" flex="~ gap-1" :class="{ 'flex-col w-96' : col }">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    col: {
        type: Boolean,
        default: false,
    }
})
</script>
