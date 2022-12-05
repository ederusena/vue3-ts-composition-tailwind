<template>
  <div class="container mx-auto bg-slate-400 p-4">
    <h1>Modals</h1>
    <button @click="toggleModal" class="btn">Show modal</button>
    <div>
      <label>
        Show dark modal!  
        <input type="checkbox" v-model="showDark" />
      </label>
    </div>
    <component
      :is="Modal"
      :showDark="showDark"
      v-model="showModal"
      title="My modal title (Via props)"
    >
      <template #content>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur eaque
          eum cum iste obcaecati ducimus corrupti, esse commodi adipisci sit
          animi dolorum ipsam doloremque assumenda deleniti expedita quis ullam
          excepturi.
        </p>
      </template>
    </component>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import Modal from "@/components/Modal.vue";

const showModal = ref(false);
const showDark = ref(false);

const toggleModal = () => {
  showModal.value = !showModal.value;
};
</script>
