<template>
  <div id="app">
<!--    {{token}}
    <button type="button" @click="addFun">加</button>
    <button type="button" @click="addrouters">动态路由</button>-->
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
import {mapState, mapGetters} from 'vuex'
import router, {superAdmin} from './router'
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
    // ...mapActions(['addFun', 'reduceFun'])
    addFun () {
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
    },
    addrouters () {
      router.addRoutes(superAdmin)// 动态添加路由
      console.log(this.$route.path)
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
