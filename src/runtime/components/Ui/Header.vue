<template>
  <div>
    <div m="4" flex="~ gap-2" justify="end" p="3" bg="w-20" border="rounded-lg" items="center">
      <span @click="app.toggleMinimize()" cursor="pointer" class="w-3.5 h-3.5 bg-gray-500 rounded-full"></span>
      <span @click="app.toggleMaximize()" cursor="pointer" class="w-3.5 h-3.5 bg-warning-500 rounded-full"></span>
      <span @click="app.running = false" cursor="pointer" class="w-3.5 h-3.5 bg-red-500 rounded-full"></span>
    </div>
  </div>
</template>

<script setup>
import { useColorMode, useCycleList } from '#imports'


defineProps({
  tabs: {
    type: Array,
    default: []
  }
})

const colorMode = useColorMode();
const { state: currentColor, next } = useCycleList(
  ["system", "light", "dark"],
  {
    initialValue: colorMode.preference,
  }
);
watch(
  () => currentColor.value,
  (newColor) => (colorMode.preference = newColor)
);
</script>
