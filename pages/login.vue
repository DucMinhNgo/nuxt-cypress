<template>
  <div>
    <div>Login</div>
    <div v-if="pending">Loading...</div>
    <div v-else><L1AtomCountrySelect :products="products" /></div>

    <!-- disable the input while fetching -->
    <input v-model="id" type="number" :disabled="pending" />
  </div>
</template>

<script setup>
const { data, clear } = await useFetch('/api/address', { lazy: true })
const products = data.value.addressData
// pending = true

const route = useRoute()
watch(
  () => route.path,
  (path) => {
    if (path === '/login') clear()
  },
)
// clear()

const id = ref(1)
</script>

<style></style>
