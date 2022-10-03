<template>
  <div
    role="menu"
    tabindex="0"
    bg-gradient="to-rb from-w-20 to-w-10 dark:from-s-25 dark:to-s-15"
    position="absolute right-0"
    z="50"
    w="full"
    h="full"
    transform="~  origin-top-right"
    divide="y b-5 dark:s-10"
    border="rounded-md"
    ring="1 w-35"
    outline="focus:none"
  >
    <slot />
  </div>
</template>
