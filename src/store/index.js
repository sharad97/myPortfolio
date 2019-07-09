import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    appTitle: 'About Me'
  },
  mutations: {},
  actions: {},
  getters: {},
  strict: debug
})
