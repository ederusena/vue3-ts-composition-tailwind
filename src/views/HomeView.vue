<template>
  <div ref="appTitleRef" class="container flex flex-col mx-auto justify-center bg-gray-100">
    <h1 class="mx-auto text-2xl p-4">Home Page</h1>
    <div class="flex justify-center gap-2">
      <button @click="decreaseCounter(2)" class="btn double-decrement">--</button>
      <button @click="decreaseCounter(1)" class="btn decrement">-</button>
      <span class="counter text-3xl font-bold">{{ counterData.count }}</span>
      <button @click="increaseCounter(1, $event)" class="btn increment">+</button>
      <button @click="increaseCounter(2)" class="btn double-increment">++</button>
    </div>

    <div class="flex flex-col mx-auto p-4">
      <div class="flex flex-col">
        <h4>Edit counter title: {{ counterData.title }}</h4>

        <input
          type="text"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          v-model="counterData.title"
          v-autofocus
        />
      </div>
      <p>This counter is {{ oddOrEven }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useCounter } from "../use/useCounter";
import { ref, onMounted } from "vue";
import type { Ref } from 'vue'

import { vAutofocus } from "../directives/vAutofocus";

/*
  app title
*/

const appTitle = "My Ok Counter App";
const appTitleRef: Ref<HTMLElement | null> = ref(null)

onMounted(() => {
  console.log(`The app title is ${appTitleRef.value.offsetWidth} px wide!`);
});

/*
  counter
*/

const { counterData, oddOrEven, increaseCounter, decreaseCounter } =
  useCounter();
</script>
