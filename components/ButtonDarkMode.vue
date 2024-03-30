<template>
  <div class="flex flex-row items-center justify-center">
    <Icon
      v-show="colorMode.preference === 'light'"
      name="bx:sun"
      class="theme-icon text-typography_primary_light dark:text-typography_primary_dark"
      width="28"
      height="28"
      @click="toggleTheme"
    />
    <Icon
      v-show="colorMode.preference === 'dark'"
      name="bx:bxs-sun"
      class="theme-icon text-typography_primary_light dark:text-typography_primary_dark"
      width="28"
      height="28"
      @click="toggleTheme"
    />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
const toggleTheme = () => {
  colorMode.preference = colorMode.preference === 'dark' ? 'light' : 'dark'
}
</script>

<style scoped>
.theme-icon {
  @apply w-7 h-7 cursor-pointer transition-transform duration-100;
}
.theme-icon:hover {
  @apply scale-125;
}
</style>
