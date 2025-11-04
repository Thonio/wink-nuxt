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
  class?: any
}>()
</script>
<template>
  <UFormField :label="label">
    <UInput :class="class" :icon="icon" :variant="variant" :color="color" />
  </UFormField>
</template>
