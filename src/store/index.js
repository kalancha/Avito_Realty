import Vue from 'vue'
import Vuex from 'vuex'
import rentInfo from './modules/rentInfo'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    rentInfo
  }
})
