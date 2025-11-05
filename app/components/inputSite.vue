<script setup lang="ts">
const value = ref('')
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

defineProps<{
  label?: string,
  class?: string,
  modelValue: string,
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<template>
  <UFormField :label="label">
    <UInput :class :value="modelValue" @input="onInput" placeholder="nuxt" :ui="{
      base: 'pl-14.5',
      leading: 'pointer-events-none'
    }">
      <template #leading>
        <p class="text-sm text-muted">
          https://
        </p>
      </template>
    </UInput>

  </UFormField>
</template>
