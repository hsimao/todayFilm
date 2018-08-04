<template>
  <div id="app">
    <h1>現正熱映中</h1>
    <button @click="getFilms">重抓電影</button>
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
      // 當天資料只抓一次，並儲存到本地端，如果隔天又使用才重新爬一次資料
      localStorage.setItem('timestamp', new Date().getTime())
      localStorage.setItem('films', JSON.stringify(data))
      this.films = data
    },
    filmsInit() {
      // 如果本地沒有資料，直接重新爬資料
      if (!localStorage.getItem('films')) return this.getFilms()

      // 如果本地已經有資料了，但保存超過一天 或 已經是隔天了, 重新爬資料
      const now = new Date()
      const last = new Date(JSON.parse(localStorage.getItem('timestamp')))
      if ( now.getTime() - last.getTime() > 86400000 || now.getDate() > last.getDate() ) {
        console.log("重抓")
        this.getFilms()
      } else {
        console.log("不重抓")
        localStorage.getItem('timestamp')
        this.films = JSON.parse(localStorage.getItem('films'))
      }

    },
    getFilms() {
      this.$http.get('/api/film')
        .then((res) => {
          this.setFilms(res.data)
          alert('抓完')
        })
        .catch((err) => {
          console.log(err)
        })
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
