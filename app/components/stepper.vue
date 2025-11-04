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
const { defaultValue } = defineProps<{
  defaultValue: string | number | undefined
}>();

</script>

<template>
  <div class="flex justify-center">
    <div class="mb-6 max-w-[816px] w-full">
      <UStepper :items="items" :default-value="defaultValue"
        :ui="{ indicator: 'w-[24px] h-[24px] text-sm', trigger: 'w-[24px] h-[24px]' }" />
    </div>
  </div>
</template>
