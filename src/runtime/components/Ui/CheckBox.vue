<template>
  <div>
    <label
      v-for="option in options"
      :key="option.id"
      class="flex flex-row items-center cursor-pointer text-primaryOp dark:text-primary"
    >
      <IconCheckBoxFilled ml="2" w="18px" v-if="checked.includes(option.id)" />
      <IconCheckBoxOutline ml="2" w="18px" v-else />
      <span :for="option.id">{{ option.name }}</span>

      <input
        :id="option.id"
        v-model="checked"
        type="checkbox"
        :value="option.id"
        @change="onChange()"
        class="hidden"
      />
    </label>
  </div>
</template>

<script setup>
import { ref } from "#imports";

const props = defineProps({
  options: {
    type: Array,
    required: true,
    default: () => [],
  },
});

const checked = ref([]);

const emit = defineEmits(["update:modelValue"]);

function onChange() {
  emit("update:modelValue", checked.value);
}
</script>
