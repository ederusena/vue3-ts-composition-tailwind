<script setup lang="ts">
import { reactive, provide } from "vue";

const userData = reactive({
  name: "Eder Sena",
  username: "ederusena",
});

provide("userData", userData);

</script>

<template>
  <div>
    <h1 class="bg-emerald-200 absolute right-0 top-0">{{ userData.name }} @{{ userData.username }}</h1>
  </div>
  <nav class="app-container">
    <RouterLink class="app-container__text" to="/">Home</RouterLink>|
    <RouterLink class="app-container__text" to="/list">ItemList</RouterLink>|
    <RouterLink class="app-container__text" to="/modals">Modals</RouterLink>|
    <RouterLink class="app-container__text" to="/about">About</RouterLink>|
    <RouterLink class="app-container__text" to="/advancedtailwind">Advanced Tailwind</RouterLink>|
    <RouterLink class="app-container__text" to="/posts">Post</RouterLink>
  </nav>

  <RouterView />
</template>

<style scoped lang="postcss">

.app-container {
  @apply container flex mx-auto justify-center p-4 bg-purple-700 gap-4;
}

.app-container__text {
  @apply text-base text-white font-bold;
}
</style>