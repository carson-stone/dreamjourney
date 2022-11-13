<template>
  <div>
    <h2>Write down your dream!</h2>

    <Editor @save="onSave" />

    <div v-for="src of imageSources">
      <img
        :src="src"
        :key="src"
        alt="an image"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const imageSources = ref<Array<string>>([])

async function onSave(textData: Array<string>): Promise<void> {
  for (const line of textData) {
    const imageUrl = await $fetch(
      '/api/generateImageFromText',
      {
        method: "POST",
        body: { data: line }
      }
    )

    imageSources.value.push(imageUrl)
  }
}
</script>
