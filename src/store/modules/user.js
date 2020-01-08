import { login } from '@/api/user'

const state = {
  token: '',
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}

const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  }
}

const actions = {
  // user login
  login ({ commit }, userInfo) {
    return new Promise((resolve, reject) => {
      login(userInfo).then(response => {
        const { data } = response
        console.log(data)
        commit('SET_TOKEN', data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  }

  // get user info
}

export default {
  state,
  mutations,
  actions
}
