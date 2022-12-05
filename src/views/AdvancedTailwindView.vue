<template>
    <!-- flex flex-col sm:flex-row justify-center items-center -->
  <div
    :class="[
      ' text-6xl min-h-screen gap-6 grid grid-cols-1 sm:grid-cols-3',
      theme ? 'bg-slate-900 text-white' : ' bg-gray-300 text-violet-700',
    ]"
  >
    <h1 class="text-[4rem] border p-[23px] col-span-3 mb-24">Hello</h1>
    <button
      @click="setTheme"
      class="bg-white relative col-span-2 after:absolute after:bg-green-300 after:inset-0 after:blur after:z-0 before:absolute before:bg-blue-300 before:z-0 before:blur before:-top-4 before:-left-4 before:h-full before:w-full text-slate-900 p-10 group hover:opacity-50 duration-300 flex items-center gap-4"
    >
      <h1 class="z-10">Button</h1>
      <span
        class="z-10 h-10 w-10 bg-amber-800 group-hover:rotate-45 duration-300"
      ></span>
    </button>

    <button
      class="bg-white relative after:absolute after:bg-rose-300 after:inset-0 after:blur after:z-0 before:absolute before:bg-amber-300 before:z-0 before:blur before:-top-4 before:-left-4 before:h-full before:w-full text-slate-900 p-10 group hover:opacity-50 duration-300 flex items-center gap-4"
    >
      <h1 class="z-10">Button</h1>
      <span
        class="z-10 h-10 w-10 bg-amber-800 relative rounded-full after:absolute after:inset-1 after:bg-white after:rounded-full before:absolute before:bg-white before:h-full before:w-2 before:top-4 before:left-1/2 before:-translate-x-1/2 overflow-hidden group-hover:animate-spin duration-300"
      ></span>
    </button>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

const theme = ref(false);

const setTheme = () => {
  theme.value = !theme.value;
};
</script>

<style lang="postcss" scoped></style>
