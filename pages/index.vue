<script setup lang="ts">
const nuxtApp = useNuxtApp();

const firebaseApp = nuxtApp.$firebaseApp;
const firebaseStorage = nuxtApp.$firebaseStorage;
const firebaseFirestore = nuxtApp.$firebaseFirestore;

console.log(firebaseApp, firebaseStorage, firebaseFirestore);

useSeoMeta({
  title: "My Amazing Site",
  ogTitle: "My Amazing Site",
  description: "This is my amazing site, let me tell you all about it.",
  ogDescription: "This is my amazing site, let me tell you all about it.",
  ogImage: "https://example.com/image.png",
  twitterCard: "summary_large_image",
});
</script>

<template>
  <h1>Index page</h1>
</template>
