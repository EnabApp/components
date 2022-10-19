<template>
  <div grid="~ cols-4 gap-4">
    <UiButton size="lg" position="center" mdcolor="secondary" icon="IconNotification">تيست</UiButton>
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

    <!-- <UiButton @click="stateModal = true" color="info">Show Modal</UiButton>
    <Teleport to="body">
      <UiModal size="sm" v-model="stateModal" @cancel="modalCanceled">
        <template  #title>
          صفحة تسجيل الدخول
        </template>
        <div>
          <UiInput size="lg" placeholder="Placeholder" type="text" class="mb-5" />
          <UiInput size="lg" placeholder="Placeholder" type="text" />
        </div>
        <div>
          <UiButton position="center" size="lg" mdcolor="secondary" icon="IconNotification" class="mt-5"> Login</UiButton>
        </div>
      </UiModal>
    </Teleport> -->

    <UiDropdown  size="lg" :list="[
      { id: 1, value: 'mosa', icon: 'IconCheckBoxFilled' },
      { id: 2, value: 'nameer', icon: 'IconCheckBoxFilled' },
      { id: 3, value: 'abd', icon: 'IconCheckBoxFilled' },
      { id: 4, value: 'naser', icon: 'IconCheckBoxFilled' },
      { id: 5, value: 'taher', icon: 'IconCheckBoxFilled' },
    ]" placeholder="Type to search">
    choose your name
    </UiDropdown>

    <UiSwitch size="lg" :list="[
      { id: '1', value: 'تجربة', icon: 'IconEnab' },
      { id: '2', value: 'هم تجربة', icon: 'IconEnab' },
    ]" />

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
