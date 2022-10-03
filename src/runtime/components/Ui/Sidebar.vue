<template>
  <Transition>
    <div
      v-if="modelValue"
      bg="b-10 dark:w-5"
      h="sidebar"
      position="sticky"
      border="rounded-lg"
      text="w-80"
      p="3"
      w="50"
      m="x-2 t-2"
    >
      <div
        flex="~ gap-4"
        place="items-center"
        p="x-2 y-2"
        text="2xl"
        font="medium"
      >
        <div flex="grow"></div>
        <IconClose
          @click="$emit('cancel')"
          cursor="pointer"
          text="left w-80 3xl"
        />
      </div>

      <slot />
    </div>
  </Transition>
</template>

<script setup>
const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
});

// Define Emits
const emit = defineEmits(["cancel"]);

// Close on click ESC
// onKeyStroke(["Escape"], (e) => emit("cancel"));
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: 0.2s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  /* opacity: 0; */
  left: 100%;
  transform: translateX(100%);
}
</style>
