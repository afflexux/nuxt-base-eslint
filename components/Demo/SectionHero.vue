<template>
  <div>
    <DemoUiSplit v-show="colorMode.value === 'light'" />
    <DemoUiSplitDark v-show="colorMode.value === 'dark'" />
    <DemoUiFeature v-show="colorMode.value === 'light'" />
    <DemoUiFeatureDark v-show="colorMode.value === 'dark'" />
    <DemoUiFooter v-show="colorMode.value === 'light'" />
    <DemoUiFooterDark v-show="colorMode.value === 'dark'" />
  </div>
</template>

<script setup>
const colorMode = useColorMode()
</script>

<style scoped></style>
