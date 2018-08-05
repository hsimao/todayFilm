<template>
  <div>
    <div class="select" :class="{active: isShow}">
      <div v-if="!current" class="title desc" @click="selectToggle('toggle')">{{title}}</div>
      <div v-else class="title film" @click="selectToggle('toggle')">{{selectName}}</div>
      <ul :class="{active: isShow}" @mouseleave="selectToggle(false)">
        <li v-for="item in items" :key="item" :class="{active: current === item}" @mouseover="updateAction($event)" @click="selectToggle(false)" :data-id="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: ['items', 'title', 'value', 'type'],
  data() {
    return {
      isShow: false,
      current: null,
      selectName: null
    }
  },
  methods: {
    selectToggle(type) {
      if (type === 'toggle') {
        this.isShow = !this.isShow
      } else {
        console.log("觸發", type)
        this.isShow = type ? true : false
      }
    },
    updateAction(el) {
      this.selectName = el.target.innerText
      const data = {
        type: this.type,
        value: el.target.innerText
      }
      this.$emit('selectFilm', data)
      if (this.current !== null) {
        this.current
      }
      this.current = el.target.getAttribute('data-id')
    }
  }
}
</script>

<style lang="sass" scoped>
.select.active
  &:before
    transform: rotate(0deg)
.select
  position: relative
  width: 150px
  font-size: 15px
  cursor: pointer
  &:before
    content: '\f3d0'
    font-family: 'Ionicons'
    position: absolute
    right: 12px
    height: 45px
    line-height: 45px
    transform: rotate(180deg)
    transition: all .3s
  .title, li
    height: 45px
    line-height: 45px
    padding-left: 16px
    width: 126px
    @extend %moreText
  .title
    width: 126px
  ul
    display: none
    position: absolute
    top: 47px
    width: 100%
    height: 400px
    border-left: solid 2px $colorWhite
    box-shadow: 0 4px 6px 0 rgba(black, 0.2)
    overflow-y: auto
    z-index: 10
  ul.active
    display: block
  li
    position: relative
    width: 100%
    background-color: rgba($colorGray, 0.9)
    font-weight: 300
    transition: all .3s
    &:after
      content: ''
      position: absolute
      bottom: 0px
      left: 0
      width: 100%
      height: 1px
      background-color: rgba($colorWhite, 0.3)
  li.active
    background-color: $colorPrimary
    transform: translate(-2px, -2px)
    box-shadow: 0 2px 4px rgba(black, 0.2)
</style>
