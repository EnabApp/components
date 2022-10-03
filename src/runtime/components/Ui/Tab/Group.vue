<template>
    <div :class="{'flex flex-row gap-2' : col}">
        <UiTabList :col="col">
            <UiTab :active="selected == index + 1" v-for="(tab, index) in tabs" :key="tab" @click="selected = index + 1">
                {{ tab }}
            </UiTab>
        </UiTabList>

        <UiTabPanels :col="col">
            <UiTabPanel>
                <slot :name="'tab-' + selected" />
            </UiTabPanel>
        </UiTabPanels>
    </div>
</template>

<script setup>
import { ref } from '#imports'

const props = defineProps({
    tabs: {
        type: Array,
        required: true,
    },
    selected: {
        type: Number,
        default: 0,
    },
    col: {
        type: Boolean,
        default: false
    }
});

const selected = ref(props.selected + 1);
</script>
