<template>
  <div class="relative w-56 text-right">
    <div ref="target" class="inline-block text-right">
      <UiMenuButton v-if="hasTitle" :active="state" @click="toggle()">
        {{ title }}
      </UiMenuButton>
      <Transition name="slide-fade">
        <UiMenuItems v-if="state" :class="{ 'top-0' : !hasTitle }">
          <slot />
        </UiMenuItems>
      </Transition>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, useToggle, onClickOutside } from '#imports'


const props = defineProps({
  title: {
    default: "",
  },
});

const hasTitle = computed(() => props.title.length > 0)

const [state, toggle] = useToggle(!hasTitle.value);

const target = ref(null);
onClickOutside(target, () => (hasTitle.value && (state.value = false)));
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.2s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateY(20px);
  opacity: 0;
}
</style>
