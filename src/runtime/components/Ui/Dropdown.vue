<template>
  <div w="full" @click="dropdown = !dropdown" position="relative">
    <!-- Main Search -->
    <UiInput v-if="props.input" :size="props.size" :label="label" :placeholder="placeholder" v-model="search"
      :icon="icon ? icon : dropdown ? 'IconBxsUpArrow' : 'IconBxsDownArrow'">
      <slot />
    </UiInput>
    <UiButton v-if="!props.input" :color="props.color" :size="props.size" position="center" mdcolor="secondary" v-model="search"
      :icon="icon ? icon : dropdown ? 'IconBxsUpArrow' : 'IconBxsDownArrow'">
      <slot />
    </UiButton>


    <!-- Showing multiple selects -->
    <!-- <div v-if="multiple" class="absolute top-0 left-0" flex="~ gap-2px" :class="{
      'mt-1.7 ml-1': size == 'sm',
      'mt-3.25 ml-1': size == 'md',
      'mt-4 ml-1': size == 'lg',
    }">
      <span v-for="item in selectedItems" @click="selectItem(item)" :key="item.id" p="x-1"
        text="xs secondary dark:secondaryOp" bg="secondaryOp dark:secondary"
        border="~ gray-50 dark:gray-600 rounded-5px" cursor="pointer">{{ item.value }}</span>
    </div> -->

    <div v-if="dropdown" ref="dropdownRef" w="full" bg="secondaryOp dark:secondary"
      border="~ gray-50 dark:gray-600 rounded-5px" position="absolute" text="secondary dark:secondaryOp" m="t-1"
      shadow="~ gray-200 dark:gray-700">
      <div flex="~ col gap-2" p="2">
        <div @click="selectItem(item)" v-for="item in searchResult" :key="item.id" :class="{
          'font-medium': item.id == selectedIdRef,
        }" bg="hover:secondary dark:hover:secondaryOp" p="x-2 y-1" flex="~" justify="between" items="center"
          text="md hover:secondaryOp dark:hover:secondary" border="rounded-5px" duration="100">
          <span>
            {{ item.value }}
          </span>

          <span v-if="selectedItems.find((x) => x.id == item.id)">
            <component v-if="item.icon" h="20px" w="20px" mt="0.8" :is="`${item.icon}`" />
          </span>

          <!-- <span v-if="item.id == selectedIdRef">
            <IconLoading w="10px" />
          </span> -->
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onClickOutside, ref, computed } from "#imports";

const props = defineProps({
  modelValue: {
    type: String,
  },
  list: {
    type: Array,
    default: [],
  },
  selectedId: {
    type: String,
    default: null,
  },
  multiple: {
    type: Boolean,
    default: false,
  },
  label: {
    type: String,
  },
  placeholder: {
    type: String,
  },
  icon: {
    type: String,
  },
  size: {
    type: String,
    default: "sm",
    default: false,
  },
  input: {
    type: Boolean,
  },
  color: {
    type: String,
  },
});

// DropDown Showing / Hiding
const dropdown = ref(false);
const dropdownRef = ref(null);

// Select / Search
const selectedIdRef = ref(props.selectedId);
const search = ref("");
const selectedItems = ref([]);

// Searching
const searchResult = computed(() => {
  const text = search.value;
  const list = props.list;
  if (!text) return list;
  return list.filter((item) =>
    item.value.toLowerCase().includes(text.toLowerCase())
  );
});

// Selecting / Emitting
const emit = defineEmits(["update:modelValue"]);

const selectItem = (item) => {
  if (props.multiple) {
    if (selectedItems.value.find((x) => x.id == item.id)) {
      selectedItems.value = selectedItems.value.filter((x) => x.id != item.id);
    } else {
      selectedItems.value.push(item);
    }
    emit(
      "update:modelValue",
      JSON.stringify(selectedItems.value.map((item) => item.id))
    );
  } else {
    if (selectedIdRef.value == item.id) {
      selectedIdRef.value = null;
      search.value = null;
      emit("update:modelValue", null);
    } else {
      selectedIdRef.value = item.id;
      // search.value = item.value;
      emit("update:modelValue", item.id.toString());
    }
  }
};

// Outside
onClickOutside(dropdownRef, (event) => {
  dropdown.value = false;
  if (selectedIdRef.value) {
    // search.value = props.list.find(
    //   (item) => item.id === selectedIdRef.value
    // ).value;
  }
});
</script>
