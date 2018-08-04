<template>
  <div id="app">
    <img src="./assets/logo.png">
    <button>抓出電影</button>
    <!-- <p>{{ films }}</p> -->
    <ul>
      <li v-for="film in films" :key="film.id">
        <a :href="film.url">
          <p>{{film.name}}</p>
          <p>{{film.id}}</p>
          <img :src="film.img" alt="">
        </a>
      </li>
    </ul>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      films: null
    }
  },
  methods: {
    setFilms(data) {
      localStorage.setItem('films', JSON.stringify(data))
      this.films = data
    },
    filmsInit() {
      if (localStorage.getItem('films')) {
        this.films = JSON.parse(localStorage.getItem('films'))

      } else {
        this.$http.get('/api/film')
          .then((res) => {
            console.log(res.data)
            this.setFilms(res.data)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    }
  },
  computed: {
  },
  created() {
    this.filmsInit()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
