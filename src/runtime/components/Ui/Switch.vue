<template>
  <div bg="secondary dark:secondaryOp" p="1.5" border="rounded-[5px]" flex="~ gap-1.5">
    <div
      v-for="item in list"
      @click="select(item)"
      :class="{
        'font-medium bg-primaryOp dark:bg-primary shadow text-primary dark:text-primaryOp':
          item.id == selected.id,
        'text-secondaryOp dark:text-primaryOp': !(item.id == selected.id)
      }"
      :key="item.id"
      text="xs"
      p="2"
      w="full"
      border="rounded-[3px]"
      flex="~ gap-2"
      justify="center"
      items="center"
      cursor="pointer"
    >
      <component v-if="item.icon" h="20px" w="20px" text="dark:primaryOp primary" :is="`${item.icon}`" />
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
});

const selected = ref(props.list[0]);

const emit = defineEmits(["update:modelValue"]);

const select = (item) => {
  selected.value = item;
  emit("update:modelValue", item.id);
};
</script>
