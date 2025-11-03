<script setup lang="ts">
const items = [
  {
    title: 'Faisons connaissance'
  },
  {
    title: 'Créez votre espace de travail'
  },
  {
    title: 'Pour mieux vous connaître'
  }
]
</script>
<template>
  <UStepper :items="items" :ui="{ indicator: 'w-[24px] h-[24px] text-sm', trigger: 'w-[24px] h-[24px]' }" />
</template>
