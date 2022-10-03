<template>
  <!-- If not Multiple -->
  <div v-if="!multiple">
    <button
      :class="{'bg-w-30 hover:bg-w-30 font-medium' : active, 'bg-transparent' : !active}"
      bg="hover:w-30"
      flex="~ gap-2"
      items="center"
      justify="center"
      w="full"
      p="2"
      border="0 rounded-md"
      class="dark:text-w-40 dark:hover:text-white text-b-60 hover:text-b-90 group"
      cursor="pointer"
    >
      <div :class="icon"></div>
      {{ title }}
    </button>
  </div>
  <!-- If Multiple -->
  <div v-else>
    <div flex="~ col">
      <!-- if Has title -->
      <div v-if="listTitle">
        <UiMenuItem @click="toggle()" :title="listTitle ?? title" :active="state" :icon="{'i-ep-arrow-down-bold' : state, 'i-ep-arrow-up-bold' : !state}" />
        <Transition name="slide-fade">
            <div v-if="state" transition="~ duration-300 delay-75 ease-in-out" border="l-2 transparent hover:s-15">
                <slot />
            </div>
        </Transition>
      </div>

      <!-- If has no title -->
      <div v-else>
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { useToggle } from '#imports'

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false,
  },
  title: {
    type: String,
    default: "",
  },
  listTitle: {
    type: String,
    default: "",
  },
  icon: {
    type: String,
    default: "",
  },
  active: {
    type: Boolean,
    default: false,
  }
});

const [state, toggle] = useToggle(false);

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
  transform: translateY(-20px);
  opacity: 0;
}
</style>
