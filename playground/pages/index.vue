<template>
  <div grid="~ cols-4 gap-4">
    <UiButton size="lg" position="center" mdcolor="secondary" icon="IconNotification">تيست</UiButton>
    <UiInput size="lg" placeholder="Placeholder" type="text" />
    <UiButton @click="stateModal = true" color="info">Show Modal</UiButton>
    <!-- Code Preview "Position" -->
    <!-- Yes you can use Top, Bottom, right and left -->
    <UiToolTip text="it's Working!" position="bottom">
      <UiButton color="success">Hover Me</UiButton>
    </UiToolTip>


    <!-- <Teleport to="body">
        <UiModal
          v-model="stateModal"
          @cancel="modalCanceled"
        >
          <div >
            <UiButton size="lg" mdcolor="secondary" icon="IconNotification">Test</UiButton>

          </div>
          <div>
            <UiButton size="lg" mdcolor="secondary" icon="IconNotification">Test</UiButton>
          </div>
        </UiModal>
      </Teleport> -->

    <!-- <UiDropdown size="lg" :list="[
      { id: 1, value: 'mosa' },
      { id: 2, value: 'nameer' },
      { id: 3, value: 'abd' },
      { id: 4, value: 'naser' },
      { id: 5, value: 'taher' },
    ]" placeholder="Type to search" multiple>
    </UiDropdown> -->

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
