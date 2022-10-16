<template>
  <div grid="~ cols-4 gap-4">
    <!-- <UiButton size="lg" position="center" mdcolor="secondary" icon="IconNotification">تيست</UiButton> -->
    <!-- <UiInput size="lg" placeholder="Placeholder" type="text" /> -->
    <!-- <UiButton @click="stateModal = true" color="info">Show Modal</UiButton> -->
    <!-- Code Preview "Position" -->
    <!-- Yes you can use Top, Bottom, right and left -->
    <!-- <UiToolTip text="it's Working!" position="bottom">
      <UiButton size=md color="success">Hover Me</UiButton>
    </UiToolTip> -->



    <!-- <UiSwitch :list="[
      { id: '1', value: 'Dog', icon: 'IconEnab' },
      { id: '2', value: 'Cat', icon: 'IconEnab' },
      { id: '3', value: 'Lizard', icon: 'IconEnab' },
      { id: '4', value: 'Shark', icon: 'IconEnab' },
    ]" /> -->

    <UiDropdown size="md" multiple :list="[
      { id: 1, value: 'mosa' },
      { id: 2, value: 'nameer' },
      { id: 3, value: 'abd' },
      { id: 4, value: 'naser' },
      { id: 5, value: 'taher' },
    ]" placeholder="Type to search">
    </UiDropdown>

    <!-- <UiSwitch size="md" :list="[
      { id: '1', value: 'تجربة', icon: 'IconEnab' },
      { id: '2', value: 'هم تجربة', icon: 'IconEnab' },
    ]" /> -->

  </div>
</template>

<script setup>
import Dropdown from '~~/../src/runtime/components/Ui/Dropdown.vue';

const [stateModal, toggleModal] = useToggle(false);

const modalCanceled = () => {
  console.log("Canceled");
  stateModal.value = false;
};
</script>
