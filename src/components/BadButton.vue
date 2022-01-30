<script lang="ts" setup>
interface Props {
  color: "primary" | "danger";
}

defineProps<Props>();
</script>

<template>
  <button class="btn" :class="color"><slot /></button>
</template>

<style scoped>
.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  font-size: 1rem;
  font-weight: bold;
  text-align: center;
  cursor: pointer;
  border: 1px solid transparent;
}

.primary {
  background-color: blue;
  color: white;
}

.danger {
  background-color: coral;
  color: red;
}
</style>
