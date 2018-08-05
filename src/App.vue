<template>
  <div id="app">
    <Sidebar/>
    <Header/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
    <h1>現正熱映中</h1>
    <button>重抓電影</button>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export default {
  name: 'App',
  data() {
    return {
      films: null
    }
  },
  components: {
    Sidebar,
    Header,
    Footer
  },
  methods: {
  },
  computed: {
  }
}
</script>

<style lang="sass" scoped>

</style>
