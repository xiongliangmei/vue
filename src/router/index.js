import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'

Vue.use(Router)

export const oldRouter = [ // 不需要权限的路由
  {
    path: '/',
    name: 'Layout',
    component: Layout,
    hidden: false
  }
]
export const superAdmin = [// 需要权限的路由
]
export default new Router({
  routes: oldRouter // 默认使用不需要权限的
})
