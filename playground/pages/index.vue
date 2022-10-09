<template>
    <div grid="~ cols-4 gap-4">
        <UiInput />
        <UiButton color="secondary" icon="IconNotification">Test</UiButton>
        <UiSwitch
        size="md"
  :list="[
      { id: '1', value: 'تجربة', icon: 'IconEnab' },
      { id: '2', value: 'هم تجربة', icon: 'IconEnab' },
    ]"
/>

    </div>
  </template>
  
  <script setup>
  
  </script>