const state = {
  isLoading: true
}

const mutations = {
  PRELOADED: state => (state.isLoading = !state.isLoading)
}

const actions = {
  PRELOAD_STATE ({ commit }) {
    commit('PRELOADED')
  }
}

const getters = {
  isLoading: (state) => state.isLoading
}

export default {
  state,
  mutations,
  actions,
  getters
}
