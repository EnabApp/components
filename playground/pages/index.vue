<template>
  <div grid="~ cols-4 gap-4">
    <UiButton size="lg" position="center" icon="IconNotification">mosa</UiButton>
    <UiBadge position="top-right" content="mosa" />
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

    <!-- <UiButton size="lg" @click="stateModal = true" color="info">Show Modal</UiButton>
    <Teleport to="body">
      <UiModal size="md" v-model="stateModal" @cancel="modalCanceled">
        <template #title>
          <div>
            kemf
          </div>
        </template>
          <div>
            rkemvk
          </div>

      </UiModal>
    </Teleport> -->

    <!-- <UiDropdown size="lg" :list="[
      { id: 1, value: 'اعمالي', icon: 'IconCheckBoxFilled' },
      { id: 2, value: 'اعمال غيري', icon: 'IconCheckBoxFilled' },
    ]" placeholder="Type to search">
      choose your أعمال
    </UiDropdown> -->

    <!-- <UiSwitch size="lg" :list="[
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
