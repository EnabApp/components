<template>
  <div grid="~ cols-4 gap-4">
    <UiButton size="lg" color="info" outline position="center" icon="IconNotification">mosa</UiButton>
    <!-- <UiInput size="lg" placeholder="Placeholder" type="text" /> -->
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

    <!-- <UiButton @click="stateModal = true" color="info">Show Modal</UiButton>
    <Teleport to="body">
      <UiModal size="md" v-model="stateModal" @cancel="modalCanceled">
        <template #title>
          <UiTabGroup :tabs="['Enab', 'About']" >
            <template #tab-1>
              <h3 text="white">Enab Web OS</h3>
              <p text="white">
                Enab Developers Suggest you to keep doing what you "LIKE"
              </p>
            </template>

            <template #tab-2>
              <h3 text="white">About Enab Developers?</h3>
              <p text="white">
                Well, we're just a group of developers that kept doing what we "LIKE"
              </p>
            </template>
          </UiTabGroup>
        </template>
      </UiModal>
    </Teleport> -->

    <!-- <UiDropdown size="lg" color="secondary" :list="[
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
