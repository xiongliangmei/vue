<template>
  <div>
    {{token}}
  </div>
</template>
<script>
import {mapState} from 'vuex'
export default {
  name: 'home',
  computed: {
    ...mapState({
      token: state => state.user.token
    })
  }
}
</script>
