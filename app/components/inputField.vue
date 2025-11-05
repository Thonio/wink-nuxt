<script setup lang="ts">
import type { AppConfig } from '@nuxt/schema';
import theme from '#build/ui/input';
import type { ComponentConfig } from '@nuxt/ui';
type Input = ComponentConfig<typeof theme, AppConfig, 'input'>;

defineProps<{
  label?: string,
  icon?: string,
  variant?: Input['variants']['variant'],
  color?: Input['variants']['color'],
  class?: any,
  modelValue: string,
  type?: string,
  items?: any[]
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

function onInput(event: Event) {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}

</script>
<template>
  <UFormField :label="label">
    <UTextarea v-if="type === 'textArea'" :value="modelValue" @input="onInput" :class="class" />
    <USelect v-else-if="type === 'select'" :class :value="modelValue" :items="items" />
    <UInput v-else :value="modelValue" @input="onInput" size="lg" :class="class" :icon="icon" :variant="variant"
      :color="color" />
  </UFormField>
</template>
