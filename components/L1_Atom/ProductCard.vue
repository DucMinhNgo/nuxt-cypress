<template>
  <div class="card text-center">
    <img :src="product.image" alt="product thumb" class="thumb" />
    <p class="font-bold text-gray-500 m-4 truncate">{{ product.title }}</p>
    <NuxtLink :to="`/products/${product.id}`">
      <p class="btn my-4">View Details</p>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const { product } = withDefaults(
  defineProps<{
    product: Object
  }>(),
  {},
)
</script>

<style scoped>
.thumb {
  max-height: 120px;
  max-width: 70%;
  margin: 0 auto;
}
</style>
