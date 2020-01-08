import Vue from 'vue'
import Vuex from 'vuex'
import count from './modules/count'
import user from  './modules/user'
Vue.use(Vuex)

const store = new Vuex.Store({
  modules: {
    count: count,
    user: user
  }
})
export default store
