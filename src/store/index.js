import Vue from 'vue'
import Vuex from 'vuex'
import snackbar from './snackbar'
import post from './post'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    snackbar,
    post
  }
})
