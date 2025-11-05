<script setup lang="ts">
defineProps<{
  text?: string,
  img?: string
}>()
</script>
<template>
  <UAvatar :text="text" :src="img" size="xs" />
</template>
