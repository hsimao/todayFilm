<template>
  <div id="app">
    <Sidebar/>
    <Header/>
    <div class="container">
      <router-view/>
    </div>
    <Footer/>
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

<style lang="sass">
$sidebarWidth: 80px

%sidebarLeft
  width: calc(100% - $sidebarWidth)
  margin-left: $sidebarWidth

// $layout
#app

.sidebar
  position: fixed
  top: 0
  left: 0
  height: 100%
  width: $sidebarWidth

.header, .container, .footer
  @extend %sidebarLeft

.header
  height: 70px
  padding-left: 30px

.container
  max-wdith: 1140px - $sidebarWidth

.footer
  background-color: #fff

</style>
