<template>
  <div class="group relative inline-block mx-8 my-6 self-center">
    <slot />
    <div :class="tooltipPos[position]" absolute="~" flex="~" items="center">
      <div
        flex="~"
        items="center"
        text="xs primary"
        z="20"
        h="auto"
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
  left: "right-full",
  right: "left-full",

  "top-left": "bottom-0 left-0",
  "top-right": "bottom-0 right-0",
  "bottom-left": "top-0 left-0",
  "bottom-right": "top-0 right-0",



};
</script>
