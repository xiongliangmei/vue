import {oldRouter, superAdmin} from '../../router'

function hasPermission (roles, route) {
  if (route.meta && route.meta.roles) { // 如果 路由的 meta role 存在 比较
    return roles.some(role => route.meta.roles.includes(role))
  } else { // 如果 路由的 meta role 不存在 true
    return true
  }
}

export function filterAsyncRouter (routes, roles) {
  const res = []
  routes.forEach(route => {
    const tmp = {...route}
    if (hasPermission(roles, tmp)) {
      if (tmp.children) {
        tmp.children = filterAsyncRouter(tmp.children, roles)
      }
      res.push(tmp)
    }
  })
  return res // 返回 是 true 的路由
}
const state = {
  routes: [],
  addRoute: []
}
const mutations = {
  SET_ROUTES: (state, data) => {
    state.addRoute = data
    state.routes = oldRouter.concat(data)
  }
}
const actions = {
  generateRoutes ({commit}, roles) {
    return new Promise(resolve => {
      let accessedRoutes = filterAsyncRouter(superAdmin, roles)
      commit('SET_ROUTES', accessedRoutes)
      resolve(superAdmin)
    })
  }
}
export default {
  namespace: true,
  state,
  mutations,
  actions
}
