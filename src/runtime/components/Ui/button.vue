<template>
  <div flex="~ col gap-1">
    <!-- Nuxt Link Button -->
    <NuxtLink
      v-if="to"
      :to="to"
      :class="classes"
      flex="~ gap-2"
      justify="center"
    >
      <slot />
    </NuxtLink>

    <!-- Default  Button -->
    <button v-else :class="classes" :disabled="disabled ? true : false">
      <!-- Title & icon button -->
      <slot />
    </button>
  </div>
</template>

<script setup>
import { computed } from "#imports";
const props = defineProps({
  color: {
    type: String,
    default: () => "primary",
  },
  to: {
    type: String,
    default: "",
  },
  outline: {
    type: Boolean,
    default: false,
  },
  disabled: {
    type: Boolean,
    default: false,
  },
  activeClass: {
    type: String,
  },
  size: {
    type: String,
    default: "sm",
  },
});

const classes = computed(() => {
  const array = ["rounded-[5px]", "no-underline"];
  switch (props.size) {
    case "sm":
      array.push("px-3 py-1.5 text-sm");
      break;
    case "md":
      array.push("px-5 py-3 text-md");
      break;
    case "lg":
      array.push("px-6 py-3 text-lg");
      break;
  }

  if (!props.disabled) {
    array.push("cursor-pointer");
  }

  switch (props.color) {
    case "primary":
      if (props.outline) {
        array.push(
          "border border-primaryOp dark:border-primary bg-inherit text-primaryOp hover:text-secondaryOp dark:text-primary dark:hover:text-secondary hover:border-secondaryOp dark:hover:border-secondary focus:opacity-75  "
        );
      } else {
        array.push(
          "border-none bg-primaryOp dark:bg-primary hover:bg-secondaryOp dark:hover:bg-secondary text-primary dark:text-primaryOp hover:text-secondary dark:hover:text-secondaryOp focus:opacity-75 "
        );
      }
      break;
    case "success":
      if (props.outline) {
        array.push(
          "border border-success-500 bg-inherit text-success focus:opacity-75 hover:opacity-90  "
        );
      } else {
        array.push(
          "border-none bg-success hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
    case "error":
      if (props.outline) {
        array.push(
          "border border-error-500 bg-inherit text-error focus:opacity-75 hover:opacity-90  "
        );
      } else {
        array.push(
          "border-none bg-error hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
    case "warning":
      if (props.outline) {
        array.push(
          "border border-warning-500 bg-inherit text-warning focus:opacity-75 hover:opacity-90  "
        );
      } else {
        array.push(
          "border-none bg-warning hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
    case "info":
      if (props.outline) {
        array.push(
          "border border-info-500 bg-inherit text-info focus:opacity-75 hover:opacity-90  "
        );
      } else {
        array.push(
          "border-none bg-info hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
    default:
      if (props.outline) {
        array.push(
          "border border-primary-500 bg-inherit text-primary hover:border-secondary-500 focus:border-secondary-600 hover:text-secondary-500 "
        );
      } else {
        array.push(
          "border-none bg-primary hover:bg-secondary text-primaryOp focus:bg-primaryOp-600 "
        );
      }
      break;
  }
  return array;
});
</script>
