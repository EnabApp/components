<template>
  <Transition>
    <div
      @keypress.esc="$emit('cancel')"
      v-if="modelValue"
      position="absolute top-0 left-0"
      z="50"
      flex="~"
      place="items-center"
      justify="center"
      w="screen"
      h="screen"
      bg="b-25 dark:b-20"
      backdrop="~ blur-sm"
      
    >
      <div flex="~ col gap-2" p="x-10 y-7" rounded="10px" max-w="xl" min-w="xs" bg="primary dark:primaryOp">
        <div flex="grow" text="dark:primary primaryOp xl">
          <slot name="title"></slot>
        </div>
        <div flex="grow" mb="5" text="dark:secondary secondaryOp lg" class="text-clip">
          <slot name="description"></slot>
        </div>
        <div class="grid grid-cols-2 gap-5  justify-center" >
          <UiButton size="md" class="row-span-1" @click="$emit('cancel')"> {{cancel}} </UiButton>
          <UiButton size="md" class="row-span-1" color="error" @click="$emit('confirm')"> {{ confirm }} </UiButton>
        </div>
      </div>
    </div>
  </Transition>
</template>

<script setup>
import { onKeyStroke } from "#imports";

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false,
  },
  confirm: {
    type: String,
    default: "",
  },
  cancel: {
    type: String,
    default: "",
  },

});

// Define Emits
const emit = defineEmits(["confirm", "cancel"]);

// Close on click ESC
onKeyStroke(["Escape"], (e) => emit("cancel"));
</script>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.25s ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
