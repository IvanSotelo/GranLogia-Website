import Vue from 'vue'
import VueLocalStorage from 'vue-localstorage'
Vue.use(VueLocalStorage)
const state = {
  isMobile: false,
  routeName: '',
  menuOpen: false,
  audio: Vue.localStorage.get('audio')
}

const mutations = {
  DEVICE (state, mobile) {
    state.isMobile = mobile
  },
  ROUTE (state, route) {
    state.routeName = 'is-' + route
  },
  TOGGLE_MENU (state) {
    state.menuOpen = !state.menuOpen
  },
  SOUND (state) {
    if (state.audio) {
      if (state.audio === 'off') {
        state.audio = 'on'
        Vue.localStorage.set('audio', 'on')
      } else {
        state.audio = 'off'
        Vue.localStorage.set('audio', 'off')
      }
    } else {
      state.audio = 'off'
      Vue.localStorage.set('audio', 'off')
    }
  }
}

const actions = {
  DEVICE_SIZE ({ commit }, mobile) {
    commit('DEVICE', mobile)
  },
  ROUTE_NAME ({ commit, state }, route) {
    commit('ROUTE', route)
  },
  TOGGLE_MENU ({ commit, state }) {
    commit('TOGGLE_MENU')
  },
  TOGGLE_SOUND ({ commit, state }) {
    commit('SOUND')
  }
}

const getters = {
  isMobile: state => state.isMobile,
  routeName: state => state.routeName,
  menuOpen: state => state.menuOpen,
  browserName: state => state.browserName,
  audio: state => state.audio
}

export default {
  state,
  mutations,
  actions,
  getters
}
