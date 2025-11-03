<template>
  <UContainer class="py-8">
    <div class="max-w-xl mx-auto">
      <h1 class="text-2xl font-semibold mb-6">Contact us</h1>

      <UForm :state="form" @submit="onSubmit" class="space-y-4">
        <UFormGroup label="Name" name="name" required>
          <UInput v-model="form.name" placeholder="Your name" />
        </UFormGroup>

        <UFormGroup label="Email" name="email" required>
          <UInput v-model="form.email" type="email" placeholder="you@example.com" />
        </UFormGroup>

        <UFormGroup label="Message" name="message" required>
          <UTextarea v-model="form.message" :rows="5" placeholder="How can we help?" />
        </UFormGroup>

        <div class="pt-2">
          <UButton type="submit" color="primary" :loading="submitting">Send</UButton>
        </div>
      </UForm>
    </div>
  </UContainer>
</template>

<script setup>
const form = reactive({
  name: '',
  email: '',
  message: ''
})

const submitting = ref(false)

function isValidEmail(value) {
  return /.+@.+\..+/.test(value)
}

async function onSubmit() {
  if (!form.name || !form.email || !form.message) {
    return useToast().add({ title: 'Please fill all fields', color: 'red' })
  }
  if (!isValidEmail(form.email)) {
    return useToast().add({ title: 'Enter a valid email', color: 'red' })
  }

  try {
    submitting.value = true
    // Simulate submit
    await new Promise(r => setTimeout(r, 600))
    useToast().add({ title: 'Message sent!', color: 'green' })
    form.name = ''
    form.email = ''
    form.message = ''
  } finally {
    submitting.value = false
  }
}
</script>

