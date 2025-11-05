<script setup lang="ts">
const firstName = ref('')
const lastName = ref('')
const address = ref('')
const preview = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const emit = defineEmits<{
  (e: 'next', value: void): void
}>()

function onFileChange(e: Event) {
  const target = e.target as HTMLInputElement
  const file = target.files?.[0]
  if (!file) return

  preview.value = URL.createObjectURL(file)
}

function triggerFileInput() {
  fileInput.value?.click()
}

function clickNext() {
  emit('next')
}

const initials = computed(() => {
  const f = firstName.value.trim()
  const l = lastName.value.trim()
  if (!f && !l) return '?'
  const first = f.charAt(0).toUpperCase() || ''
  const last = l.charAt(0).toUpperCase() || ''
  return `${first}${last}`
})

const isDisabled = computed(() => !firstName.value.trim() || !lastName.value.trim())
</script>
<template>
  <div class="max-w-[392px] grow">
    <h2 class="text-2xl font-semibold mb-6">Faisons connaissance</h2>
    <div>
      <div class="text-base mb-2">Photo de profil</div>
      <div class="flex items-center gap-8 mb-5">
        <div>
          <div class="
              rounded-full 
              w-[72px]
              h-[72px] 
              text-[#667085] 
              bg-gray-100 
              flex 
              items-center 
              justify-center
              text-3xl 
              font-bold
              border-3
              border-white
              shadow-lg
              overflow-hidden
              ">
            <img :src="preview" v-if="preview" />
            <span v-else>{{ initials }}</span>
          </div>
        </div>
        <div>
          <div class="flex gap-2">
            <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="onFileChange" />
            <UButton @click="triggerFileInput" icon="i-lucide-upload" color="neutral" variant="outline">Ajouter une
              photo</UButton>
            <UButton variant="outline" color="neutral">Supprimer</UButton>
          </div>
          <p>au format *.png ou *.jpeg</p>
        </div>
      </div>
      <div class="grid grid-flow-row gap-5">
        <InputField v-model="firstName" class="w-full" label="Prénom" />
        <InputField v-model="lastName" class="w-full" label="Nom" />
        <InputField v-model="address" class="w-full" label="Adresse mail" icon="i-lucide-mail" />
        <div>
          <UButton class="w-full flex justify-center" :disabled="isDisabled" @click="clickNext">Continuer</UButton>
        </div>
      </div>
    </div>
  </div>
  <div class="
      flex-1 
      w-[407px] 
      h-[480px] 
      bg-no-repeat 
      bg-cover 
      bg-[url(/img/desktop.jpg)]
      absolute
      top-0
      bottom-0
      right-[-78px]
      ">
    <div class="
      bg-white 
      flex 
      justify-between 
      items-center 
      border 
      border-[#0072FF] 
      rounded-lg 
      px-3 
      py-1 
      w-full 
      max-w-[210px]
      absolute
      bottom-4
      ring-3
      ring-blue-100
      ">
      <div>
        <AvatarField :text="initials" :img="preview" class="mr-2" />
        <span class="text-sm">{{ firstName }} {{ lastName }}</span>
      </div>
      <div>
        <UIcon name="i-lucide-chevron-down" />
      </div>
    </div>
  </div>
</template>
