<template>
  <div>
    <ul class="films">
      <li class="film" v-for="film in films" :key="film.id">
        <a :href="film.url">
          <img :src="film.img" alt="">
          <p>{{film.name}}</p>
        </a>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'Films',
  props: ['films']
}
</script>

<style lang="sass" scoped>
ul
  list-style: none
  margin: 0
  padding: 0

a
  text-decoration: none
  color: #777

p
  margin: 0
  color: $colorWhite
  font-size: 16px
  font-weight: 300
  margin-top: 15px
  transition: all .5s

.films
  +flexCenter
  flex-flow: row wrap
  padding: 30px

.film
  margin-bottom: 30px
  padding-top: 20px
  transition: all .5s
  &:hover
    transform: translateY(-5px)
    p
      transform: translateY(-5px)

.film + .film
  margin-left: 30px

img
  display: block
  padding-top: 10px
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2)
</style>
