<template>
  <div class="grid grid-flow-col">
    <div class="max-w-[392px]">
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
              ">
              AJ</div>
          </div>
          <div>
            <div class="flex gap-2">
              <UButton icon="i-lucide-upload" color="neutral" variant="outline">Ajouter une photo</UButton>
              <UButton variant="outline" color="neutral">Supprimer</UButton>
            </div>
            <p>au format *.png ou *.jpeg</p>
          </div>
        </div>
        <div class="grid grid-flow-row gap-5">
          <InputField class="w-full" label="Prénom" />
          <InputField class="w-full" label="Nom" />
          <InputField class="w-full" label="Adresse mail" icon="i-lucide-mail" />
          <div>
            <UButton class="w-full flex justify-center">Continuer</UButton>
          </div>
        </div>
      </div>
    </div>
    <div class="relative">
      <img class="absolute w-full" src="/img/desktop.jpg" alt="desktop" />
    </div>
  </div>
</template>
