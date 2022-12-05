<script setup lang="ts">
import { onUpdated } from "vue";

const props = defineProps<{
  id: Number;
  msg: String;
  isActive: Boolean;
}>();

onUpdated(() => {
  console.log("onUpdated " + props.id);
});
</script>

<template>
  <li>
    <span v-if="isActive">-> {{ id }}</span>
    {{ msg }} 
  </li>
</template>
