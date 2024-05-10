<script setup>
const locales = useLocales()
const locale = useLocale()
const date = useLocaleDate(new Date('2016-10-26'))
const useColor = () => useState('color', () => 'pink')
const color = useColor()
// const websiteConfig = useState('config')

// await callOnce(async () => {
//   websiteConfig.value = await $fetch('https://my-cms.com/api/website-config')
// })
</script>
<template>
  <div>
    <NuxtLayout>
      <!-- <NuxtPwaManifest /> -->
      <NuxtPage />
      <h1>Nuxt birthday</h1>
      <p>{{ date }}</p>
      <label for="locale-chooser">Preview a different locale</label>
      <select id="locale-chooser" v-model="locale">
        <option v-for="locale of locales" :key="locale" :value="locale">
          {{ locale }}
        </option>
      </select>
      <label for="locale-chooser">Preview a different locale</label>
      <p>{{ color }}</p>
    </NuxtLayout>
  </div>
</template>
