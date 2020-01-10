<template>
  <div>
    <button type="button" @click="submit">登录</button>
  </div>
</template>
<script>
export default {
  name: 'login',
  methods: {
    submit () {
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
