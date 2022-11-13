<template>
  <div>
    <h2>Write down your dream!</h2>

    <Editor @save="onSave" />
  </div>
</template>

<script lang="ts" setup>
function onSave(data: Array<string>): void {
  console.log("data", data)
}
</script>
