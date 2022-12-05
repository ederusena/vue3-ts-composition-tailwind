<template>
  <teleport to=".modals-container">
    <div
      v-if="modelValue"
      class="modal  p-4 absolute left-0 top-0 w-full h-full z-10"
      :class="[showDark ? 'bg-gray-900 text-yellow-50' : 'bg-rose-200']"
    >
      <h1 class="text-2xl mb-4">{{ title }}</h1>
      {{ userData.username }}
      <slot name="content"></slot>
      <button @click="handleClickButton" class="btn">Hide modal</button>
    </div>
  </teleport>
</template>

<script lang="ts" setup>
import { inject } from "vue";

const emit = defineEmits(["update:modelValue"]);

const userData = inject("userData");

const handleClickButton = () => {
  emit("update:modelValue", false);
};

defineProps<{
  modelValue: {
    type: Boolean;
    default: false;
  };
  showDark: {
    type: Boolean;
    default: false;
  };
  title: {
    type: string;
    default: "No titles especified";
    required: true;
  };
}>();
</script>
