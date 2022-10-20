<template>
  <div flex="~ col gap-1">
    <!-- Label -->
    <label
      v-if="label"
      class="text-md font-medium text-tertiaryOp dark:text-tertiary"
      >{{ label }}</label
    >

    <!-- Main Input Components -->
    <div
      class="group"
      :class="{
        'focus-within:border-tertiaryOp dark:focus-within:border-tertiary':
          !error,
        'focus-within:border-error-500': error,
        'h-7.3 text-sm': size == 'sm',
        'h-10.4 text-md': size == 'md',
        'h-12.1 text-lg': size == 'lg',
      }"
      flex="~ gap-2"
      font="leading-tight"
      justify="between"
      p="x-2"
      un-text="xl secondary dark:secondaryOp"
      border="~ 1 secondary dark:secondaryOp rounded-[10px]"
      outline="none focus-within:none"
      bg="secondary dark:secondaryOp"
    >
      <div flex="~ gap-2 grow" items="center">
        <!-- Icon -->
        <component
          v-if="icon"
          h="20px"
          w="20px"
          text="dark:primary primaryOp"
          :is="`${icon}`"
        />

        <!-- Input -->
        <input
          ref="inputRef"
          :value="modelValue"
          w="20"
          @input="$emit('update:modelValue', $event.target.value)"
          :placeholder="placeholder"
          :type="type == 'password' ? statePassword : type"
          :class="{
            'text-sm': size == 'sm',
            'text-base': size == 'md',
            'text-lg': size == 'lg',
          }"
          class="py-2 text-secondaryOp bg-transparent border-0 outline-none appearance-none dark:text-secondary dark:bg-transparent grow focus:outline-none mb-3"
iv
        id="buttons"
        flex="~ gap-1"
        items="center"
        p="b-0.5"
        m="t-1"
        overflow="y-hidden"
      >
        <!-- Type password -->
        <div flex="~ gap-1" items="center" v-if="type == 'password'">
          <!-- Show Password -->
          <button
            v-if="statePassword == 'password'"
            @click="showPassword()"
            bg="transparent hover:secondary dark:hover:secondaryOp"
            cursor="pointer"
            rounded="5px"
            flex="~"
            items="center"
            border="transparent"
            text="xl secondaryOp dark:secondary"
          >
            <IconGridiconsNotVisible w="18px" />
          </button>

          <!-- Hide Password -->
          <button
            v-else
            @click="showPassword()"
            bg="transparent hover:secondary dark:hover:secondaryOp"
            cursor="pointer"
            rounded="5px"
            flex="~"
            items="center"
            border="transparent"
            text="xl secondaryOp dark:secondary"
          >
            <IconGridiconsVisible w="18px" />
          </button>
        </div>

        <!-- Incremental -->
        <div flex="~ gap-1" v-if="type == 'number'">
          <button
            @click="increase()"
            rounded="5px"
            bg="transparent hover:secondary dark:hover:secondaryOp"
            cursor="pointer"
            border="transparent"
            flex="~"
            items="center"
            text="xl secondaryOp dark:secondary"
          >
            <IconEpArrowUp w="18px" />
          </button>

          <!-- Decrement -->
          <button
            @click="decrease()"
            rounded="5px"
            bg="transparent hover:secondary dark:hover:secondaryOp"
            border="transparent"
            flex="~"
            items="center"
            text="xl secondaryOp dark:secondary"
            cursor="pointer"
          >
            <IconEpArrowDown w="18px" />
          </button>
        </div>

        <!-- Alternative Buttons -->
        <slot />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, useToggle } from "#imports";
const props = defineProps({
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  type: {
    type: String,
    default: "text",
  },
  icon: {
    type: String,
  },
  modelValue: {
    type: String,
  },
  error: {
    type: Boolean,
    default: false,
  },
  increment: {
    type: String,
    default: "1",
  },
  size: {
    type: String,
    default: "sm",
  },
});

const inputRef = ref(null);
const emit = defineEmits(["update:modelValue"]);

// Toggling Password View
const [statePassword, showPassword] = useToggle(props.type, {
  truthyValue: "password",
  falsyValue: "text",
});

// Incremental
const increase = () => {
  if (inputRef.value.value) {
    const inputValue = inputRef.value.value;
    inputRef.value.value = parseFloat(inputValue) + parseFloat(props.increment);
    emit("update:modelValue", inputRef.value.value);
  } else {
    console.log("Input is empty");
  }
};

// Decremental
const decrease = () => {
  if (inputRef.value.value) {
    const inputValue = inputRef.value.value;
    inputRef.value.value = parseFloat(inputValue) - parseFloat(props.increment);
    emit("update:modelValue", inputRef.value.value);
  } else {
    console.log("Input is empty");
  }
};
</script>

<style scoped>
input[type="password"]::-ms-reveal,
input[type="password"]::-ms-clear {
  display: none;
}

input[type="number"]::-webkit-inner-spin-button,
input[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}
</style>
