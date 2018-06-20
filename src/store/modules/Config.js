const state = {
  isMobile: false
}

const mutations = {
  DEVICE (state, mobile) {
    state.isMobile = mobile
  }
}

const actions = {
  DEVICE_SIZE ({ commit }, mobile) {
    commit('DEVICE', mobile)
  }
}

const getters = {
  isMobile (state) {
    return state.isMobile
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
