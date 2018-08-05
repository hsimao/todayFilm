<template>
  <div>
    <div class="search" :class="{active: isShow}">
      <i class="ion ion-ios-search" @mouseover="isShow = true"></i>
      <input type="text" placeholder="請輸入電影">
      <Select :items="films" :type="'film'" :title="'選擇電影'" @selectFilm="updateFilm"/>
      <Select :items="addr" :type="'addr'" :title="'選擇地點'" @selectFilm="updateFilm"/>
      <div class="btn" @click="search">送出</div>
    </div>
  </div>
</template>

<script>
import Select from '@/components/Select'

export default {
  name: 'Search',
  data() {
    return {
      isShow: false,
      selectFilm: null,
      selectAddr: null
    }
  },
  components: {
    Select
  },
  methods: {
    search() {
      this.isShow = false
    },
    clearSearch() {

    },
    updateFilm(data) {
      if (data.type === 'film') this.selectFilm = data.value
      if (data.type === 'addr') this.selectAddr = data.value
    }
  },
  computed: {
    films() {
      const names = []
      const filmsData = this.$store.getters.films
      filmsData.forEach(item => names.push(item.name))
      return names
    },
    addr() {
      return ['高雄', '台北', '台中']
    }
  }
}
</script>

<style lang="sass" scoped>
.search
  position: relative
  display: inline-block
  margin-top: 10px
  height: 50px
  color: $colorWhite
  transition: all .3s
  @extend %hCenter
  &:before
    content: ''
    position: absolute
    left: 0
    top: 0
    width: 60px
    height: 100%
    background-color: rgba($colorWhite, 0.1)
    border-left: 2px solid $colorWhite
    border-right: 2px solid $colorWhite
    transition: all .3s
    z-index: -1
  > div, input
    transition: all .6s
    opacity: 0
  > i, input
    display: inline-block
    font-size: 16px
  i
    width: 30px
    margin-right: 10px
    text-align: center
    font-size: 26px
    cursor: pointer
    transform: translateX(15px)
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

  .btn
    display: inline-block
    position: absolute
    top: 0
    right: -60px
    height: 50px
    line-height: 50px
    background-color: $colorWhite
    border-bottom: 3px darken($colorWhite, 15) solid
    padding: 0 12px
    color: $colorGray
    transition: all .6s .3s, background .3s
    &:hover
      background-color: darken($colorWhite, 15)

.search.active
  padding-right: 16px
  &:before
    width: 100%
  > div, input
    opacity: 1
</style>
