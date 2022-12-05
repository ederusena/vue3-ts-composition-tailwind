<template>
  <div class="container flex flex-col mx-auto justify-center bg-gray-100">
    <h1 class="mx-auto text-2xl p-4">Home Page</h1>
    <div class="flex justify-center gap-2">
      <button @click="decreaseCounter(2)" class="btn">--</button>
      <button @click="decreaseCounter(1)" class="btn">-</button>
      <span class="text-3xl font-bold">{{ counterData.count }}</span>
      <button @click="increaseCounter(1)" class="btn">+</button>
      <button @click="increaseCounter(2)" class="btn">++</button>
    </div>

    <div class="flex flex-col mx-auto p-4">
      <div class="flex flex-col">
        <h4>Edit counter title: {{ counterData.title }}</h4>

        <input type="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"  v-model="counterData.title" v-autofocus>

      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";

import { vAutofocus } from '@/directives/vAutofocus';


const counterData = ref({
  title: "Counter",
  count: 0,
});

const increaseCounter = (amount: number) => {
  counterData.value.count += amount;
};

const decreaseCounter = (amount: number) => {
  counterData.value.count -= amount;
};
</script>


