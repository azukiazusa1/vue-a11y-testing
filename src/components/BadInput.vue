<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  inheritAttrs: false,
});
</script>

<script setup lang="ts">
interface Props {
  label: string;
}

defineProps<Props>();
</script>

<template>
  {{ label }}
  <input v-bind="$attrs" />
</template>
