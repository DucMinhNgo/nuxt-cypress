<template>
  <div>
    <h2>Home</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima veritatis
      provident minus fugit! Quod praesentium vero iure, quasi voluptate nulla!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor
      voluptas? Reiciendis nisi officiis blanditiis deserunt perferendis quos
      velit placeat.
    </p>
    <L1AtomCountrySelect :products="products" />
  </div>
</template>

<script setup>
// const appConfig = useAppConfig()
// console.log(appConfig)

// Use a static import for server-side compatibility
import '~/assets/css/first.css'
const { data } = await useFetch('/api/address')
const products = data.value.addressData

// Caution: Dynamic imports are not server-side compatible
import('~/assets/css/first.css')
useHead({
  link: [
    {
      rel: 'stylesheet',
      href: 'https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css',
    },
  ],
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
