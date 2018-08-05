<template>
  <div>
    <h1>Home</h1>
    <Films :films="films" />
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
