import {getInfo, login} from '@/api/user'
import {getToken, setToken,removeToken} from '../../utils/auth'
const state = {
  token: getToken(),
  name: '',
  avatar: '',
  introduction: '',
  roles: []
}
const getters = {
  getStateT: function (state) {
    return state.avatar
  }
}
const mutations = {
  SET_TOKEN: (state, token) => {
    state.token = token
  },
  SET_NAME: (state, data) => {
    state.username = data
  },
  SET_AVATAR: (state, data) => {
    state.avatar = data
  },
  SET_INTRODUCTION: (state, data) => {
    state.introduction = data
  },
  SET_ROLE: (state, data) => {
    state.roles = data
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
        setToken(data.token)
        resolve()
      }).catch(error => {
        reject(error)
      })
    })
  },
  // get user info
  getUserInfo ({commit}, token) {
    return new Promise((resolve, reject) => {
      getInfo(token).then(response => {
        const {data} = response
        console.log(data)
        const {roles, userName, avatar, introduction} = data
        commit('SET_ROLE', roles)
        commit('SET_NAME', userName)
        commit('SET_AVATAR', avatar)
        commit('SET_INTRODUCTION', introduction)
        resolve(data)
      }).catch(error => {
        reject(error)
      })
    })
  },
  restToken ({commit}) {
    commit('SET_TOKEN', '')
    removeToken()
  }
}

export default {
  namespace: true,
  state,
  getters,
  mutations,
  actions
}
