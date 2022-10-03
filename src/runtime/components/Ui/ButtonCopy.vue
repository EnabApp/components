<template>
<div flex="~ col gap-1">
    <!-- Nuxt Link Button -->
    <NuxtLink v-if="to" :to="to" :class="classes" :activeClass="activeClass" flex="~ gap-2" items="center">
      <div v-if="!loading" class="mt-0.5" :class="icon"></div>
      <span v-if="title">{{title}}</span>
    </NuxtLink>

    <!-- Default Button -->
    <button v-else :class="classes" :disabled="disabled ? true : false">
      <!-- Title icon button -->
      <div v-if="title" flex="~ gap-2" items="center">
        <!-- With loading -->
        <div v-if="!loading" class="mt-0.5" :class="icon"></div>
        <!-- Without loading -->
        <div>
          <span v-if="!loading">{{title}}</span>
          <svg v-else class="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      </div>
      <!-- Icon Button -->
      <div v-else>
        <!-- if not loading -->
        <div v-if="!loading" class="mt-0.5 justify-self-auto w-auto" :class="icon"></div>
        <!-- if loading  -->
        <svg v-else class="w-5 h-5 text-white animate-spin" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
          <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
          <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
        </svg>
      </div>
    </button>
</div>

</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  color: {
    type: String,
    default: "primary",
  },
  to: {
    type: String,
    default: "",
  },
  title: {
    type: String,
  },
  outline:{
    type: Boolean,
    default: false,
  },
  solid:{
    type: Boolean,
    default: false,
  },
  disabled:{
    type: Boolean,
    default: false
  },
  activeClass:{
    type: String,
  },
  loading:{
    type:Boolean,
    default:false,
  },
  icon:{
    type:String,
  },
});

const classes = computed(() =>  {
  let array = [
    "py-1 px-2",
    "text-xl",
    "font-semibold",
    "text-center",
    "no-underline",
  ];
  if(!props.disabled){
    array.push("cursor-pointer");
  }
  !props.title ? array.push("rounded-full") : array.push("rounded-lg")
    switch (props.color) {
      case "success":
        if(props.solid){
          array.push("text-white bg-success-500 hover:bg-success-600 dark:bg-success-600 dark:hover:bg-success-700 border border-success-200 dark:border-success-600")
        }else if(props.outline){
          array.push("text-success-400 hover:text-white bg-inherit hover:bg-success-500 dark:hover:bg-success-600 border border-success-500");
        }else{
          array.push("text-success-400 hover:text-black bg-inherit dark:hover:text-white");
          props.activeClass ? array.push(" ") : array.push("border-none")
        }
      break;

      case "warning":
        if(props.solid){
          array.push("text-white bg-warning-500 hover:bg-warning-600 dark:bg-warning-300 dark:hover:bg-warning-500 border border-warning-200 dark:border-warning-600");
        }else if(props.outline){
          array.push("text-warning-400 hover:text-white bg-inherit hover:bg-warning-500 dark:hover:bg-warning-600 border border-warning-500 dark:border-warning-700");
        }else{
          array.push("text-warning-400 hover:text-black bg-inherit dark:hover:text-white");
          props.activeClass ? array.push(" ") : array.push("border-none")
        }
      break;

      case "error":
        if(props.solid){
          array.push("text-white bg-error-300 hover:bg-error-500 dark:bg-error-500 dark:hover:bg-error-700 border border-error-200 dark:border-error-600");
        }else if(props.outline){
          array.push("text-error-400 hover:text-white bg-inherit hover:bg-error-500 dark:hover:bg-error-600 border border-error-500 dark:border-error-700");
        }else{
          array.push("text-error-500 hover:text-black bg-inherit dark:hover:text-white");
          props.activeClass ? array.push(" ") : array.push("border-none")
        }
      break;

      case "slate":
        if(props.solid){
          array.push("text-white bg-s-60 hover:bg-s-80 dark:bg-s-40 dark:hover:bg-s-60 border border-s-80 dark:border-s-80");
        }else if(props.outline){
          array.push("text-s-90 hover:text-white bg-inherit hover:bg-s-70 dark:hover:bg-s-60 border border-s-50");
        }else{
          array.push("text-s-90 hover:text-black bg-inherit dark:hover:text-white");
          props.activeClass ? array.push(" ") : array.push("border-none")
        }
      break;

      case "light":
        if(props.solid){
          array.push("text-black bg-w-90 hover:bg-w-80 dark:bg-w-90 dark:hover:bg-w-70 border border-w-40 dark:border-w-40");
        }else if(props.outline){
          array.push("text-w-90 hover:text-black bg-inherit hover:bg-w-70 dark:hover:bg-w-80 border border-w-50");
        }else{
          array.push("text-w-90 hover:text-black bg-inherit dark:hover:text-w-60");
          props.activeClass ? array.push(" ") : array.push("border-none")
        }
      break;

      case "dark":
        if(props.solid){
          array.push("text-white bg-b-90 hover:bg-b-80 dark:bg-b-90 dark:hover:bg-b-30 border border-b-20 dark:border-b-40");
        }else if(props.outline){
          array.push("text-b-60 hover:text-white bg-inherit hover:bg-b-70 dark:hover:bg-b-70 border border-b-50");
        }else{
          array.push("text-b-60 dark:text-w-40 hover:text-b-80 bg-inherit dark:hover:text-w-80");
          props.activeClass ? array.push(" ") : array.push("border-none")
        }
      break;

      default:
        if(props.solid){
          array.push("text-white bg-primary-500 hover:bg-primary-600 dark:bg-primary-600 dark:hover:bg-primary-700 border border-primary-200 dark:border-primary-600")
        }else if(props.outline){
          array.push("text-primary-600 dark:text-primary-300 hover:text-white bg-inherit hover:bg-primary-500 dark:hover:bg-primary-500 border border-primary-500 dark:border-primary-400");
        }else{
          array.push("text-primary-600 hover:text-black bg-inherit dark:hover:text-white");
          props.activeClass ? array.push(" ") : array.push("border-none")
        }
      break;
    }
  return array;
});
</script>

<style>

</style>
