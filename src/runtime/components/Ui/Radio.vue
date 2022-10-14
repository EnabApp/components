<template>
  <div>
    <label
      v-for="option in options"
      :key="option.id"
      class="flex flex-row items-center cursor-pointer text-primaryOp dark:text-primary"
    >
      <IconRadioFilled v-if="selected == option.id" w="18px" />
      <IconRadioRegular v-else w="18px" />
      <span :for="option.id">{{ option.name }}</span>

      <input
        :id="option.id"
        v-model="selected"
        type="radio"
        :value="option.id"
        @change="onChange()"
        class="hidden"
      />

      <span class="checkmark" />
    </label>
  </div>
</template>

<script setup>
import { ref } from "#imports";

const props = defineProps({
  options: {
    type: Array,
    required: false,
    default: () => [],
  },
});

const selected = ref(null);

const emit = defineEmits(["update:modelValue"]);

function onChange() {
  emit("update:modelValue", selected.value);
}
</script>
