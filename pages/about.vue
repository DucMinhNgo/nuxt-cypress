<template>
  <div>
    <h2>About</h2>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima veritatis
      provident minus fugit! Quod praesentium vero iure, quasi voluptate nulla!
    </p>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, dolor
      voluptas? Reiciendis nisi officiis blanditiis deserunt perferendis quos
      velit placeat.
    </p>
    <div>{{ data }}</div>
  </div>
</template>

<script>
export default {
  async setup() {
    definePageMeta({
      middleware: 'auth',
    })
    const { data } = await useFetch('/api/currency/ARB')
    return {
      data,
    }
  },
}
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
