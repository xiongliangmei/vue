import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/layout/index'
import Dashboard from '../page/home'
import Login from '../page/Login'
import Permission from '../page/Atricle'
Vue.use(Router)

export const oldRouter = [ // 不需要权限的路由
  { path: '/login', name: 'login', component: Login },
  { path: '/abc', name: 'abc', component: Permission },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: '首页',
    children: [{ path: 'dashboard', component: Dashboard }]
  }
]
export const superAdmin = [// 需要权限的路由
  {
    path: '/permission',
    component: Layout,
    name: '权限测试',
    meta: { roles: ['admin', 'super_editor'] }, // 页面需要的权限
    children: [
      {
        path: 'index',
        component: Permission,
        name: '权限测试页',
        meta: { roles: ['admin', 'super_editor'] } // 页面需要的权限
      }]
  },
  { path: '*', redirect: '/404', hidden: true }
]
export default new Router({
  routes: oldRouter // 默认使用不需要权限的
})
