<template>
  <div>
    <NuxtLink :to="href" class="text-gray-50 font-semibold text-xl"> </NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  href: String,
})
</script>

<style lang="scss" scoped></style>
