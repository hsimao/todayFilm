<template>
  <div>
    <div class="select">
      <div class="title" @click="selectToggle(true)">{{title}}</div>
      <ul :class="{active: isShow}" @mouseleave="selectToggle(false)">
        <li v-for="item in items" :key="item" :class="{active: current === item}" @mouseover="updateAction($event)" @click="selectToggle(false)" :data-id="item">{{item}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Select',
  props: ['items', 'title'],
  data() {
    return {
      isShow: false,
      current: null
    }
  },
  methods: {
    selectToggle(type) {
      this.isShow = type ? true : false
    },
    updateAction(el) {
      this.title = el.target.innerText
      if (this.current !== null) {
        this.current
      }
      this.current = el.target.getAttribute('data-id')
    }
  }
}
</script>

<style lang="sass" scoped>
.select
  position: relative
  width: 150px
  font-size: 16px
  cursor: pointer
  &:before
    content: '\f3d0'
    font-family: 'Ionicons'
    position: absolute
    right: 12px
    height: 36px
    line-height: 36px
  .title, li
    height: 36px
    line-height: 36px
    padding-left: 16px
    width: 126px
    @extend %moreText
  .title
    width: 126px
    color: $colorPrimary
  ul
    display: none
    position: absolute
    width: 100%
  ul.active
    display: block
  li
    width: 100%
    background-color: $colorGray
    font-weight: 300
    transition: all .3s
  li.active
    background-color: $colorPrimary
    transform: translate(-2px, -2px)
    box-shadow: 0 2px 4px rgba(black, 0.2)
</style>
