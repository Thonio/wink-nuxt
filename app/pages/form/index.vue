<script setup lang="ts">
const step = useState('step', () => 0)
</script>

<template>
  <Stepper :default-value="step" />
  <div class="flex justify-center">
    <div class="max-w-[864px] w-full">
      <div v-if="step === 0">
        <Step1 />
      </div>
      <div v-if="step === 1">
        <Step2 />
      </div>
      <div v-if="step === 2">
        <Step3 />
      </div>
    </div>
  </div>
</template>
