<template>
  <div grid="~ cols-4 gap-4">
    <UiButton size="lg" mdcolor="secondary" icon="IconNotification">Test</UiButton>
    <UiInput size="lg" placeholder="Placeholder" type="text" />

    <UiDropdown size="lg" :list="[
      { id: 1, value: 'John' },
      { id: 2, value: 'Jane' },
    ]" placeholder="Type to search" multiple>
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
