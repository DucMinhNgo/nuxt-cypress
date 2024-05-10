<template>
  <div>
    <div class="">Admin Page</div>
    <L1AtomCountrySelect :products="products" />
  </div>
</template>

<script setup>
definePageMeta({
  // set custom layout
  layout: 'admin',

  // ... or disable a default layout
  //   layout: false,
})

async function addTodo() {
  const todo = await $fetch('/api/address', {
    method: 'GET',
    body: {
      // My todo data
    },
  })

  return todo
}

const data = await addTodo()
const products = data.addressData
</script>

<style lang="scss" scoped></style>
