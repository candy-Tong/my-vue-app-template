<template>
  <h1>count: {{ count }}</h1>
</template>

<script setup lang="ts">
import { ref } from 'vue';

defineProps<{ msg: string }>();

const count = ref(0);
</script>

<style scoped></style>
