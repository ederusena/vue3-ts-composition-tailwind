<template>
  <div class="container h-screen flex mx-auto justify-center bg-gray-300">
    <button @click="(activeId = (activeId + 1 ) % arr.length)">Next</button>
    <ul>
      <ListItem
        v-for="item in arr" 
        :key="item.id"
        :id="item.id" 
        :msg="item.msg"
        :is-active="(item.id === activeId)"/>
    </ul>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import ListItem from "../components/ListItem.vue";

const arr = ref([
  { id: 0, msg: "Hello" },
  { id: 1, msg: "World" },
  { id: 2, msg: "lerneVue!" },
  { id: 3, msg: "next message" },
  { id: 4, msg: "last message" },
]);

const activeId = ref(0);
</script>

<style lang="postcss" scoped></style>
