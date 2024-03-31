<template>
  <div>
    <UCard class="mx-auto max-w-screen-md">
      <template #header>
        <h1 class="text-lg font-bold text-green-600">
          This is the card title
        </h1>
      </template>
      <UAvatar
        src="https://avatars.githubusercontent.com/u/739984?v=4"
        alt="Avatar"
      />
      <p class="text-gray-600">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Necessitatibus, ipsum quisquam. Rerum architecto non velit consequuntur
        reprehenderit dolorem officiis suscipit error mollitia ab illo a iure
        explicabo, quam quod adipisci!
      </p>

      <template #footer>
        <h2 class="text-sm font-semibold text-green-800">
          This is the card footer
        </h2>
      </template>
    </UCard>
  </div>
</template>

<script setup></script>

<style scoped></style>
