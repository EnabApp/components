<template>
    <div cursor="pointer"  text="w-80 3xl" :class="classes"></div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
    color: {
        type: String,
        default: "",
    },
});
const classes = computed(() => {
    let array = [
        "i-carbon-close hover:i-carbon-close-filled",

    ];
    if (props.color =="primary") {
        array.push("text-white");

    }else{
        array.push("text-black");
    }
    return array;
});
</script>

<style>

</style>
