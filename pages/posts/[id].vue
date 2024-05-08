<template>
  <div>Detail {{ id }}</div>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
  validate: (route) => {
    // Check if the id is made up of digits
    return typeof route.params.id === 'string' && /^\d+$/.test(route.params.id)
  },
})
</script>

<style lang="scss" scoped></style>
