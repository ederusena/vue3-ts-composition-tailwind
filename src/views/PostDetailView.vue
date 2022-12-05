<template>
  <div class="container h-screen flex mx-auto justify-center bg-gray-300">
    <div>
      <h1 class="text-3xl p-4">Post Page</h1>
      <p class="mb-4">
        Display the content of post widh ID of {{ $route.params.id }}
      </p>
      <div>
        <button @click="showPostID" class="btn mb-4">Show Post ID</button>
      </div>

      <div>
        <button @click="goHome" class="btn mb-4 !bg-purple-500">Go Home</button>
      </div>

      <div>
        <button @click="goToTheFirstPost" class="btn mb-4 !bg-teal-500">
          Go to the first post
        </button>
      </div>

      <RouterLink class="btn" to="/posts">Back to posts</RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useRouter, useRoute } from "vue-router";

const route = useRoute();
const router = useRouter();

const showPostID = () => {
  alert("ae " + route.params.id);
};

const goHome = () => {
  setTimeout(() => {
    router.push("/");
  }, 3000);
};

const goToTheFirstPost = () => {
  router.push({
    name: "postsDetails",
    params: {
      id: 1,
    },
  });
};
</script>

<style lang="postcss" scoped></style>
