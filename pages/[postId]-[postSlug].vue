<template>
  <div>
    <div>postId-postSlug</div>
    <div>{{ data.createdAt }}</div>
  </div>
</template>

<script setup>
// \\d+ (only number)
import superjson from 'superjson'
definePageMeta({
  path: '/:postId(\\d+)-:postSlug',
})

// `date` is inferred as { createdAt: Date } and you can safely use the Date object methods
const { data } = await useFetch('/api/superjson', {
  transform: (value) => {
    return superjson.parse(value)
  },
})
</script>

<style lang="scss" scoped></style>
