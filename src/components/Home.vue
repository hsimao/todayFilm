<template>
  <div>
    <h1>Home</h1>
    <h1>現正熱映中</h1>
    <button>重抓電影</button>
    <!-- <Films :films="films" /> -->
  </div>
</template>

<script>
import Films from '@/components/Films'

export default {
  name: 'Home',
  components: {
    Films
  },
  computed: {
    films() {
      return this.$store.getters.films
    }
  },
  created() {
    this.$store.dispatch('filmsInit')
  }
}
</script>

<style>

</style>
