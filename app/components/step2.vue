<script setup lang="ts">
const company = ref('')
const description = ref('')
const site = ref('')
const address = ref('')
const activity = ref('')
const preview = ref('')
const fileInput = ref<HTMLInputElement | null>(null)
const emit = defineEmits<{
  (e: 'next', value: void): void
  (e: 'prev', value: void): void
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

function clickPrev() {
  emit('prev')
}

function clickNext() {
  emit('next')
}

const initials = computed(() => {
  const c = company.value.trim()
  if (!c) return '?'
  const first = c.charAt(0).toUpperCase() || ''
  return `${first}`
})

const isDisabled = computed(() => !company.value.trim())
</script>

<template>
  <div class="max-w-[392px] grow">
    <UButton color="neutral" variant="ghost" icon="i-lucide-chevron-left">Retour</UButton>
    <h2 class="text-2xl font-semibold mb-6">Créez votre espace de travail</h2>
    <div>
      <div class="text-base mb-2">Logo de l’entreprise</div>
      <div class="flex items-center gap-8 mb-5">
        <div>
          <div class="
              rounded-3xl 
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
              ">
            <img :src="preview" v-if="preview" />
            <UIcon v-else name="i-lucide-building-2" />
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
        <InputField v-model="company" class="w-full" label="Nom de l’entreprise *" />
        <InputField v-model="description" type="textArea" class="w-full" label="Description de l’entreprise" />
        <InputSite v-model="site" label="Site internet" class="w-full" />
        <InputField v-model="address" class="w-full" label="Adresse du siège social" />
        <InputField v-model="activity" class="w-full" label="Secteur d’activité" />
        <div class="flex">
          <UButton variant="ghost" icon="i-lucide-arrow-left" color="neutral" @click="clickPrev">Retour</UButton>
          <UButton class="flex grow justify-center" :disabled="isDisabled" @click="clickNext">Continuer</UButton>
        </div>
      </div>
    </div>
  </div>
  <div class="
      hidden
      lg:block
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
      top-4
      ring-3
      ring-blue-100
      z-10
      ">
      <div>
        <AvatarField :text="initials" :img="preview" class="mr-2" />
        <span class="text-sm">{{ company }}</span>
      </div>
      <div class="flex gap-2 items-center">
        <UIcon name="i-lucide-settings" />
        <UIcon name="i-lucide-chevron-down" />
      </div>
    </div>
  </div>
</template>
