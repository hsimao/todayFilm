<template>
  <div>
    <h1 class="title">熱映中</h1>
    <button>重抓電影</button>
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

<style lang="sass" scoped>
.title
  margin-left: 30px
  color: $colorWhite
  letter-spacing: 2px
  font-weight: 400

</style>
