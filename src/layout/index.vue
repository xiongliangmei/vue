<template>
  <div style="margin: 0;padding: 0">
    <el-container>
      <el-aside width="60px" style="background: #545c64;height: 900px;overflow-y: hidden">
        <Sidebar :collapse="isCollapse" :routes="$router.options.routes[0].children"/>
      </el-aside>
      <el-container>
        <el-header style="height: 160px;background: #ffff;padding: 0;">
          <div style="height: 60px;box-shadow: 2px 2px 15px #d2d2d8;display: flex;align-items: center">
            <div style="width: 80px;height: 60px;line-height: 60px;text-align: center;" class="t1">
              <i class="el-icon-s-unfold" style="font-size: 20px;color: #6f6f6f" v-if="isCollapse"></i>
              <i class="el-icon-s-fold" style="font-size: 20px;color: #6f6f6f" v-else></i>
            </div>
            <div class="userinfo">
              <div style="margin-right: 5px;width: 30px;height: 60px;line-height: 60px;text-align: center" class="t1">
                <el-badge is-dot class="el-icon-bell item"></el-badge>
              </div>
              <div  style="width: 100px;height: 60px;line-height: 60px;text-align: center" class="t1">
                <el-dropdown @command="handleCommand">
                <span class="el-dropdown-link">
                  <div style="display: flex;align-items: center">
                   <el-avatar src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
                    <div>天野远子</div>
                 </div>
                </span>
                  <el-dropdown-menu slot="dropdown" style="width: 400px">
                    <el-dropdown-item command="a">黄金糕</el-dropdown-item>
                    <el-dropdown-item command="b">狮子头</el-dropdown-item>
                    <el-dropdown-item command="c">螺蛳粉</el-dropdown-item>
                  </el-dropdown-menu>
                </el-dropdown>
                <span></span>
              </div>
            </div>
          </div>
        </el-header>
        <el-main>
          <div style="background: #ffff;height: 780px">
            <router-view />
          </div>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar/index'
export default {
  name: 'Layout',
  components: {
    Sidebar
  },
  data () {
    return {
      isCollapse: true
    }
  },
  methods: {
    handleOpen (key, keyPath) {
      console.log(key, keyPath)
    },
    handleClose (key, keyPath) {
      console.log(key, keyPath)
    },
    handleCommand (command) {
      this.$message('click on item ' + command)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.breadcrumb{
  background: #ffff;height: 94px;margin-top:1px;display: flex;align-items: center;padding-left: 30px;
}
.t1:hover {
  background: #f8f8f8;
}
.userinfo{
  position: absolute;
  right: 0;
  margin-right: 10px;
  display: flex;
  flex-flow: row nowrap;
  height: 60px;
  justify-content: flex-start;
  align-items: center;
}
</style>
