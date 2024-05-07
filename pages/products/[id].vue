<template>
  <div>
    <Head>
      <Title> Nuxt Dustin | {{ product.title }} </Title>
      <Meta name="description" :content="product.description" />
    </Head>
    <L1AtomProductDetail :product="product" />
  </div>
</template>

<script>
export default {
  async setup() {
    const { id } = useRoute().params
    const url = `https://fakestoreapi.com/products/${id}`
    const { data: product } = await useFetch(url, { key: id })

    if (!product.value) {
      throw createError({
        statusCode: 404,
        statusMessage: 'Product not found',
        fatal: true,
      })
    }

    definePageMeta({
      layout: 'products',
    })

    return {
      id,
      product,
    }
  },
}
</script>

<style lang="scss" scoped></style>
