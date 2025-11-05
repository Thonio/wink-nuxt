<script setup lang="ts">
const step = useState('step', () => 0)
</script>

<template>
  <Stepper :default-value="step" />
  <div class="flex justify-center">
    <div class="max-w-[864px] w-full flex relative pb-8" v-if="step === 0">
      <Step1 @next="step++ " />
    </div>
    <div class="max-w-[864px] w-full flex relative" v-if="step === 1">
      <Step2 @next="step++" @prev="step--" />
    </div>
    <div class="max-w-[864px] w-full flex relative" v-if="step === 2">
      <Step3 @prev="step--" />
    </div>
  </div>
</template>
