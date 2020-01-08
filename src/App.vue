<template>
  <div id="app">
    {{token}}s
    <button type="button" @click="addFun">加</button>
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
