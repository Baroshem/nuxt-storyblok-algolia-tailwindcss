<script setup lang="ts">
  const props = defineProps({
    src: {
      type: String,
      required: true,
    },
    title: {
      type: String,
      required: true,
    }
  })
  </script>

<template>
    <div class="flex flex-wrap w-1/3">
      <div class="w-full p-1 md:p-2 relative">
        <NuxtImg
          class="block object-cover object-center w-full h-full rounded-lg"
          :alt="title"
          :src="src"
          format="webp"
        />
      </div>
    </div>
  </template>
