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
const job = ref([
  "Développeur web",
  "Infirmier",
  "Enseignant",
  "Architecte",
  "Comptable",
  "Chef cuisinier",
  "Journaliste",
  "Ingénieur civil",
  "Designer graphique",
  "Mécanicien automobile"
])
const exp = ref([
  "Debutant",
  "Intermediaire",
  "Expert"
])
const salary = ref([
  "Moins de 10 personnes",
  "10 - 20",
  "20 - 30",
  "Plus de 30"
])

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
    <h2 class="text-2xl font-semibold mb-6">Pour mieux vous connaître</h2>
    <div>
      <div class="grid grid-flow-row gap-5">
        <InputField :items="job" type="select" v-model="company" class="w-full" label="Votre métier *" />
        <InputSite v-model="site" label="Votre URL LinkedIn" class="w-full" />
        <InputField :items="exp" v-model="address" class="w-full"
          label="Quelle est votre expérience dans le recrutement ?" type="select" />
        <InputField :items="salary" v-model="activity" class="w-full"
          label="Combien de personnes prévoyez-vous de recruter ? *" type="select" />
        <InputField v-model="activity" class="w-full" label="Pourquoi voulez-vous utiliser Wink ? *" />
        <div class="text-sm">Votre entreprise est-elle spécialisée dans le recrutement (recruteur indépendant, cabinet
          de recrutement, consultant en recrutement...) ?</div>
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
