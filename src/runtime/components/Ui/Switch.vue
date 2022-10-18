<template>
  <div flex="~" :class="[size == 'sm' ? 'h-7.8 text-sm' : (size == 'md' ? 'h-11 text-lg' : 'h-12.6 text-lg')]">
    <div v-for="item in list" @click="select(item)" :class="[
      item.id == selected.id
      ? 'font-medium bg-secondary dark:bg-secondaryOp shadow'
      : 'bg-tertiary dark:bg-tertiaryOp',
      item.id % 2 == 0 ? 'ltr:rounded-r-[10px] rtl:rounded-l-[10px]' : 'ltr:rounded-l-[10px] rtl:rounded-r-[10px]',
    ]" :key="item.id" text="tertiaryOp dark:tertiary" font="medium" p="2" w="full" flex="~ gap-1" justify="ltr:end" items="center" cursor="pointer">
      <component v-if="item.icon" h="20px" w="20px" :is="`${item.icon}`" />
      <span>{{ item.value }}</span>
    </div>
  </div>
</template>

<script setup>
import { ref } from '#imports'

const props = defineProps({
  list: {
    type: Array,
    default: [],
  },
  size: {
    type: String,
    default: 'sm',
  }
});

const selected = ref(props.list[0]);

const emit = defineEmits(["update:modelValue"]);

const select = (item) => {
  selected.value = item;
  emit("update:modelValue", item.id);
};
</script>
