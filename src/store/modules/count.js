const state = {
  count: 1,
  collapse: true
}
const getters = {
  getStateCount: function (state) {
    return state.count + 1
  }
}
const mutations = {
  add (state) {
    state.count += 1
  },
  reduce (state) {
    state.count -= 1
  },
  chage_collapse (state) {
    state.collapse = !state.collapse
  }
}
const actions = {
  addFun (context) {
    context.commit('add')
  },
  reduceFun (context) {
    context.commit('reduce')
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
