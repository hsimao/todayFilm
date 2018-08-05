<template>
  <div>
    <ul class="sidebar">
      <li class="sidebar-item logo">F.</li>
      <li class="sidebar-item hover"><span>今日場次</span><i class="ion ion-md-film"></i></li>
      <li class="sidebar-item hover"><span>熱映中</span><i class="ion ion-md-flame"></i></li>
      <li class="sidebar-item hover"><span>我的最愛</span><i class="ion ion-md-star"></i></li>
    </ul>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass" scoped>
.sidebar
  color: $colorWhite
  box-shadow: 6px 0px 30px 0 rgba($colorPrimary, 0.125)
  background-color: darken($colorGray, 5)
  border-right: 4px solid $colorPrimary

  &-item
    position: relative
    height: 70px
    line-height: 70px
    text-align: center
    cursor: pointer
    overflow: hidden
    i, span
      width: 100%
      opacity: 0.7
      transition: all .3s .4s
    i
      font-size: 28px
      transform: translate(0px, 3px)
    span
      position: absolute
      left: 0
      transform: translateX(-100%)
      font-size: 16px
  &-item + &-item
    border-top: solid 1px lighten($colorGray, 10)
  &-item.logo
    font-size: 40px
    font-weight: 900
    line-height: 1
    height: 100px
    line-height: 100px

  &-item.hover
    &:before
      content: ''
      position: absolute
      top: 0
      left: 0
      width: 3px
      height: 100%
      background-color: $colorPrimary
      transform: scaleY(0)
      transition: transform .3s, width .4s cubic-bezier(1,0,0,1) .3s
    &:hover
      i
        transform: translate(100%, 3px)
      span
        transform: translateX(0%)
      &:before
        width: 100%
        transform: scaleY(1)

</style>
