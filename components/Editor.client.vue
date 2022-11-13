<template>
  <div>
    <div id="editorjs" class="mt-4 border border-primary"></div>
    <button
      type="button"
      class="btn btn-primary mt-4"
      @click="save"
    >
      See this dream
    </button>
  </div>
</template>

<script lang="ts" setup>
import EditorJS from '@editorjs/editorjs';

const editorLoading = ref(true)
const editor = ref<EditorJS | null>(null)

const emit = defineEmits<{
  (e: "save", data: Array<string>): void;
}>()

onMounted(() => {
  editor.value = new EditorJS({
    holderId: 'editorjs',
    autofocus: true,
    placeholder: "What happened in your dream?",

    onReady: () => {
      editorLoading.value = false
    }
  })
});

function save() {
  editor.value!.save().then((outputData) => {
    const textData = outputData.blocks.map(({ data }) => (data.text))
    emit("save", textData)
  }).catch((error) => {
    console.log('Saving failed: ', error)
  });
}
</script>

<style scoped>
.ce-block__content {
  margin-left: 0;
}
</style>
