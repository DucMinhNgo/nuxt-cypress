<template>
  <div>
    <div class="grid grid-cols-4 gap-5">
      <div v-for="p in products" :key="p.id">
        <L1AtomProductCard :product="p" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: 'products',
})

// fetch products data
const { data: products } = await useFetch('https://fakestoreapi.com/products')

useHead({
  title: 'Nuxt Dustin | Pro',
  meta: [{ name: 'description', content: 'Nuxt 3 Dustin Pro' }],
})
</script>

<style lang="scss" scoped>
h2 {
  margin-bottom: 20px;
  font-size: 36px;
}

p {
  margin: 20px 0;
}
</style>
