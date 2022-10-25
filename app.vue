<template>
  <div>
    <h2 class="text-2xl">Data From Storyblok</h2>
    <cat-image-gallery :images="story.content.body"/>
    <h2 class="text-2xl">Data From Algolia</h2>
    <cat-image-gallery :images="result.hits"/>
  </div>
</template>

<script setup lang="ts">
const { result, search } = useAlgoliaSearch('dxp') // pass your index name as param
const story = await useAsyncStoryblok("home", { version: "draft" });

onMounted(async () => {
  await search({ query: 'chill' });
})
</script>