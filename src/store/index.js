import Vue from 'vue'
import Vuex from 'vuex'
import * as manager from '@/store/module/manager.js'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    manager
  }
})
