<script setup lang="ts">
console.log('css support', CSS.supports('toto'))
useHead({
  title: 'Vue Scaling Fortnight',
  meta: [{ name: 'description', content: 'Boilerplate' }],
})
</script>

<template>
  <RouterView />
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
