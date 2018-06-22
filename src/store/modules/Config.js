const state = {
  isMobile: false,
  routeName: ''
}

const mutations = {
  DEVICE (state, mobile) {
    state.isMobile = mobile
  },
  ROUTE (state, routeName) {
    state.routeName = 'is-' + routeName
  }
}

const actions = {
  DEVICE_SIZE ({ commit }, mobile) {
    commit('DEVICE', mobile)
  },
  CHANGE_ROUTE ({ commit }, routeName) {
    commit('ROUTE', routeName)
  }
}

const getters = {
  isMobile (state) {
    return state.isMobile
  },
  routeName (state) {
    return state.routeName
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
