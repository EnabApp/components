<template>
  <div class="group relative inline-block">
    <slot />
    <div :class="tooltipPos[position]" absolute="~" flex="~" items="center">
      <div
        flex="~"
        items="center"
        absolute="~"
        text="xs primary"
        z="20"
        h="10px"
        w="auto"
        p="3px"
        font="thin"
        bg="secondaryOp"
        rounded="full"
      >
        {{ content }}
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  content: {
    type: String,
    required: true,
  },
  position: {
    type: String,
    default: "top",
  },
});

const tooltipPos = {
  top: "bottom-full",
  bottom: "top-full",
};
</script>
