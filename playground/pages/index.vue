<template>
  <div grid="~ cols-4 gap-4">
    <UiButton size="md" mdcolor="secondary" icon="IconNotification">Test</UiButton>
    <UiInput size="md" w="96" placeholder="Placeholder" type="text" />

    <!-- <UiRadio :options="[{id: '1', name: 'mosa'},{id: '2', name: 'mohameed'},{id: '3', name: 'mfosa'},{id: '4', name: 'mohagtremeed'}]"></UiRadio> -->

    <!-- <UiCheckBox :options="[{id: '1', name: 'mosa'},{id: '2', name: 'mohameed'}]"></UiCheckBox> -->
    <UiDropdown :list="[
      { id: 1, value: 'John' },
      { id: 2, value: 'Jane' },
    ]" placeholder="Type to search" multiple>
      <UiButton>Save</UiButton>
    </UiDropdown>

    <!-- <UiSwitch size="md" :list="[
      { id: '1', value: 'تجربة', icon: 'IconEnab' },
      { id: '2', value: 'هم تجربة', icon: 'IconEnab' },
    ]" /> -->

  </div>
</template>

<script setup>
import Dropdown from '~~/../src/runtime/components/Ui/Dropdown.vue';
</script>
