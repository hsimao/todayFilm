<template>
  <div>
    <ul class="films">
      <li class="film" v-for="film in films" :key="film.id">
        <a :href="film.url">
          <p>{{film.name}}</p>
          <p>{{film.id}}</p>
          <img :src="film.img" alt="">
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
  color: $colorPrimary

.films
  +flexCenter
  flex-flow: row wrap
  padding: 30px
  text-align: center

.film
  margin-bottom: 30px
  box-shadow: 0 20px 40px 0 rgba(0, 0, 0, 0.2)
  padding-top: 20px

.film + .film
  margin-left: 30px

img
  display: block
  padding-top: 10px
</style>
