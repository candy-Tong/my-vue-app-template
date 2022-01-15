<template>
  <h1 class="mt-20px">count: {{ count }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const count = ref(0);
</script>

<style scoped></style>
