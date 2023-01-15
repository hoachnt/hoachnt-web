<script setup lang="ts">
import { ref } from "@vue/reactivity";

const display = ref(false);
</script>

<template>
  <main>
    <Button-Prime
      label="Primary"
      class="min-w-screen p-button-sm"
      @click="display = true"
    ></Button-Prime>
    <Dialog-Prime header="Header" v-model:visible="display">
      Content
      <template #footer>
        <Button-Prime label="No" />
        <Button-Prime label="Yes" autofocus />
      </template>
    </Dialog-Prime>
  </main>
</template>

<style scoped></style>
