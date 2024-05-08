<template>
  <div>
    <select name="country" class="border-black border-2">
      <option v-for="p in products" :key="p.id">
        {{ p.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { products } = withDefaults(
  defineProps<{
    products: Object[]
  }>(),
  {},
)
</script>

<style lang="scss" scoped></style>
