<template>
  <div class="container h-screen flex mx-auto justify-center bg-gray-300">
    <div>
      <h1 class="text-3xl p-4">Post Page</h1>

      <ul class="mb-6">
        <li class="mb-4">
          <RouterLink class="btn " to="/postsDetails/1">Post 1</RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink class="btn" to="/postsDetails/2">Post 2</RouterLink>
        </li>
        <li class="mb-4">
          <RouterLink class="btn" to="/postsDetails/3">Post 3</RouterLink>
        </li>
      </ul>
      <textarea v-autofocus />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { vAutofocus } from "@/directives/vAutofocus";
</script>

<style lang="postcss" scoped></style>
