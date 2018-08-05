import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    films: [],
    like: {
      cineam: null,
      addr: null,
      film: null
    }
  },
  mutations: {
    UPDATE_FILMS(state, value) {
      state.films = value
    }
  },
  actions: {
    setFilms({ commit }, value) {
      // 當天資料只抓一次，並儲存到本地端，如果隔天又使用才重新爬一次資料
      localStorage.setItem('timestamp', new Date().getTime())
      localStorage.setItem('films', JSON.stringify(value))
      commit('UPDATE_FILMS', value)
    },
    // 調用後台爬蟲API, 取得最新電影資訊
    getFilms({ dispatch }) {
      axios.get('/api/film')
        .then((res) => {
          dispatch('setFilms', res.data)
          alert('抓完')
        })
        .catch((err) => {
          console.log(err)
        })
    },
    filmsInit({ dispatch, commit }) {
      // 如果本地沒有資料，直接重新爬資料
      if (!localStorage.getItem('films')) return dispatch('getFilms')

      // 如果本地已經有資料了，但保存超過一天 或 已經是隔天了, 重新爬資料
      const now = new Date()
      const last = new Date(JSON.parse(localStorage.getItem('timestamp')))
      if (now.getTime() - last.getTime() > 86400000 || now.getDate() > last.getDate()) {
        console.log("重抓")
        dispatch('getFilms')
      } else {
        console.log("不重抓")
        localStorage.getItem('timestamp')
        const films = JSON.parse(localStorage.getItem('films'))
        commit('UPDATE_FILMS', films)
      }
    }
  },
  getters: {
    films(state) {
      return state.films
    },
    like(state) {
      return state.like
    }
  }
})
