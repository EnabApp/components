<template>
    <div cursor="pointer" text="center md" w="max" font="medium" p="x-4" py="9px" :class="[
        active
        ? 'bg-secondary dark:bg-secondaryOp dark:text-primary text-primaryOp dark:border-w-20'
        : 'bg-transparent',

        'text-secondaryOp hover:text-primaryOp dark:text-secondary dark:hover:text-primary'
    ]" border="rounded-[5px]">
        <slot />
    </div>
</template>

<script setup>
const props = defineProps({
    active: {
        type: Boolean,
        default: false,
    }
})
</script>
