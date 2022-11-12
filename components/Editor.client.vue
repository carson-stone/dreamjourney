<template>
  <div class="border border-primary">
  </div>
</template>

<script lang="ts" setup>
import EditorJS from '@editorjs/editorjs';

const editorLoading = ref(true)

const editor = new EditorJS({
  holderId: 'editorjs',
  autofocus: true,
  placeholder: "What happened in your dream?",

  onReady: () => {
    editorLoading.value = false
  }
});

// function oneMoveToNextLine() {
//   console.log("blocks", editor.blocks)
// }
</script>
