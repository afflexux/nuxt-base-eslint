<template>
  <ClientOnly>
    <div class="flex flex-row items-center justify-center py-1">
      <UButton
        :icon="isDark ? 'i-heroicons-sun' : 'i-heroicons-sun-20-solid'"
        color="gray"
        variant="ghost"
        aria-label="Theme"
        @click="isDark = !isDark"
      />
    </div>
    <template #fallback>
      <div class="size-8" />
    </template>
  </ClientOnly>
</template>

<script setup>
const colorMode = useColorMode()
const isDark = computed({
  get() {
    return colorMode.value === 'dark'
  },
  set() {
    colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
  },
})
</script>
