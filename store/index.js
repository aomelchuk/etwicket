import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = () => new Vuex.Store({
  state: {
    popupRegisterOpen: false
  },
  mutations: {
    SET_REGISTER_POPUP(state, value) {
      state.popupRegisterOpen = value
    }
  },
  actions: {
    changeRegisterPopup({commit}, value) {
      commit('SET_REGISTER_POPUP', value)
    }
  }
})

export default store
