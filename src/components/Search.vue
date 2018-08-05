<template>
  <div>
    <div class="search">
      <i class="ion ion-ios-search"></i>
      <input type="text" placeholder="請輸入電影">
      <Select :items="name" :title="'選擇電影'"/>
      <Select :title="'選擇場地'"/>
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select'

export default {
  name: 'Search',
  components: {
    Select
  },
  computed: {
    name() {
      const names = []
      const filmsData = this.$store.getters.films
      filmsData.forEach(item => names.push(item.name))
      return names
    }
  }
}
</script>

<style lang="sass" scoped>
.search
  display: inline-block
  margin-top: 10px
  height: 50px
  background-color: rgba($colorWhite, 0.7)
  border-left: 2px solid $colorWhite
  border-right: 2px solid $colorWhite
  padding: 0 12px
  color: $colorWhite
  @extend %hCenter
  > i, input
    display: inline-block
    font-size: 16px
  i
    font-size: 26px
    cursor: pointer
  input
    outline: none
    border: none
    max-width: 150px
    padding: 6px
    border-right: dashed 1px $colorWhite
    background-color: transparent
    color: $colorWhite
  input::placeholder
    color: $colorWhite

</style>
