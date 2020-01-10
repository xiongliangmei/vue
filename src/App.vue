<template>
  <div id="app">
    {{count}}
    <button type="button" @click="getFile">获取用户信息</button>
    <button type="button" @click="addFun">加</button>
    <button type="button" @click="addrouters">动态路由</button>
    <button type="button" @click="logout">退出Cookies</button>
    <button type="button" @click="login">设置Cookies</button>
    <button type="button" @click="getToken">获取Cookies</button>
<!--    {{this.$store.state.count.count}}
    {{this.$store.state.count.collapse}}-->
<!--    {{count}}
    {{collapse}}
    {{getStateCount}}
    <button type="button" @click="reduceFun">减</button>-->
    <router-view/>
  </div>
</template>

<script>
import {mapState, mapGetters, mapActions} from 'vuex'
import router, {superAdmin} from './router'
import Cookies from 'js-cookie'
export default {
  name: 'App',
  computed: {
    ...mapState({
      count: state => state.count.count,
      collapse: state => state.count.collapse,
      token: state => state.user.token
    }),
    ...mapGetters({
      getStateCount: 'getStateCount'
    })
  },
  methods: {
    ...mapActions(['addFun', 'reduceFun']),
    /*    addFun () {
      //  /api/login
      const userInfo = {
        username: 'admin',
        password: '123456'
      }
      this.$store.dispatch('login', userInfo).then(() => {
        this.$router.push({path: '/'})
      }).catch(err => {
        console.log(err)
      })
    }, */
    addrouters () {
      router.addRoutes(superAdmin)// 动态添加路由
      console.log(this.$route.path)
    },
    getInfo () {
      const token = this.$store.state.user.token
      this.$store.dispatch('getUserInfo', token)
    },
    getFile () {
      const modulesFiles = require.context('./store/modules', true, /\.js$/)
      const modules = modulesFiles.keys().reduce((modules, modulePath) => {
        const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
        console.log(moduleName + '名称')
        const value = modulesFiles(modulePath)
        console.log(value)
        modules[moduleName] = value.default
        return modules
      }, {})
      console.log(modules)
    },
    logout () {
      Cookies.remove('name')
    },
    login () {
      Cookies.set('name', '12332')
    },
    getToken () {
      console.log(Cookies.get('name'))
      console.log(typeof Cookies.get('name') === 'undefined')
    }
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}
body{
  background: #dddddd;
}
</style>
