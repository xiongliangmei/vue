import router from './router'
import store from './store'
import {getToken} from '@/utils/auth'

const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  const hasToken = typeof getToken !== 'undefined'
  console.log(hasToken)
  if (hasToken) {
    if (to.path === '/login') {
      next({path: '/'})
    } else {
      if (store.getters.roles && store.getters.roles.length > 0) {
        next()
      } else {
        store.dispatch('getUserInfo').then(res => {
          const roles = res.roles // note: roles must be a array! such as: ['editor','develop']
          store.dispatch('generateRoutes', roles).then(res => {
            console.log('addrouters', store.getters.addRoute)
            router.addRoutes(store.getters.addRoute) // 动态添加可访问路由表
            next({ ...to, replace: true }) // hack方法 确保addRoutes已完成 ,set the replace: true so the navigation will not leave a history record
          })
        })
      }
      next()
    }
  } else {
    // 没有token
    if (whiteList.indexOf(to.path) !== -1) {
      next()
    } else {
      next(`/login?redirect=${to.path}`)
    }
  }
})
