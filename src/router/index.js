import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../page/layout/index'
import Home from '../page/home'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        }
      ]
    }
  ]
})
