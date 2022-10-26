<template>
  <div flex="~ col gap-1">
    <!-- Nuxt Link Button -->
    <NuxtLink v-if="to" :to="to" :class="classes" flex="~ gap-2" justify="center">
      <component v-if="icon" :is="icon" w="6" h="6" />
      <slot />
    </NuxtLink>

    <!-- Default  Button -->
    <button v-else :class="classes" :disabled="disabled ? true : false">
      <!-- Title & icon button -->
      <slot />
      <component v-if="icon" :is="icon"
      :class="{
        'h-5 w-5': size == 'sm',
        'h-6 w-6': size == 'md',
        'h-7 w-7': size == 'lg',
      }" />
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
  icon: {
    type: String,
  },
  position: {
    type: String,
    default:"center",
  },
});

const classes = computed(() => {
  const array = ["flex gap-2 items-center", "rounded-[10px]", "no-underline",];
  switch (props.size) {
    case "sm":
      array.push("px-3 py-1.4 text-sm");
      break;
    case "md":
      array.push("px-5 py-2.5 text-base");
      break;
    case "lg":
      array.push("px-5 py-2.8 text-lg");
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
    case "secondary":
      if (props.outline) {
        array.push(
          "border border-secondaryOp dark:border-secondary bg-inherit text-secondaryOp hover:text-secondaryOp dark:text-secondary dark:hover:text-secondary hover:border-secondaryOp dark:hover:border-secondary focus:opacity-75  "
        );
      } else {
        array.push(
          "border-none bg-secondary dark:bg-secondaryOp hover:text-tertiaryOp dark:hover:text-tertiary text-primaryOp dark:text-primary focus:opacity-75 "
        );
      }
      break;
    case "success":
      if (props.outline) {
        array.push(
          "border border-success dark:border-successOp bg-inherit text-success focus:opacity-75 hover:opacity-90  "
        );
      } else {
        array.push(
          "border-none bg-success dark:bg-successOp hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
    case "error":
      if (props.outline) {
        array.push(
          "border border-error dark:border-errorOp bg-inherit text-error focus:opacity-75 hover:opacity-90  "
        );
      } else {
        array.push(
          "border-none bg-error dark:bg-errorOp hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
    case "warning":
      if (props.outline) {
        array.push(
          "border border-warning dark:border-warningOp bg-inherit text-warning focus:opacity-75 hover:opacity-90"
        );
      } else {
        array.push(
          "border-none bg-warning dark:bg-warningOp hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
    case "info":
      if (props.outline) {
        array.push(
          "border border-info dark:border-infoOp bg-inherit text-info focus:opacity-75 hover:opacity-90  "
        );
      } else {
        array.push(
          "border-none bg-info dark:bg-infoOp hover:opacity-90 text-primary dark:text-primaryOp focus:opacity-75 "
        );
      }
      break;
      case "transparent":
      if (props.outline) {
        array.push(
          "bg-transparent border-none text-primaryOp dark:text-primary hover:text-secondaryOp dark:hover:text-secondary focus:opacity-75  "
        );
      } else {
        array.push(
          "bg-transparent border-none text-primaryOp dark:text-primary hover:text-secondaryOp dark:hover:text-secondary focus:opacity-75"
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
  switch (props.position) {
    case "left":
      array.push("justify-end");
      break;
    case "right":
      array.push("justify-start");
      break;
    case "center":
      array.push("justify-center");
      break;
  }

  return array;
});
</script>
