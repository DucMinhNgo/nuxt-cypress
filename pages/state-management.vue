<template>
  <div>
    <div>Counter: {{ counter }}</div>
    <div>
      <button @click="counter++">+</button>
    </div>
    <div>
      <button @click="counter--">-</button>
    </div>
    <!-- <h1>{{ website.name }}</h1>
    <p>{{ website.description }}</p> -->
  </div>
</template>

<script setup>
const counter = useState('counter', () => Math.round(Math.random() * 1000))
// const website = useWebStorage()

// await callOnce(website.fetch)
</script>

<style lang="scss" scoped></style>
