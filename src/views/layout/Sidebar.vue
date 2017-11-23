<template>
  <el-menu mode="vertical" theme="dark" :default-active="routeIndex">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    routeIndex() {
      return '/'+this.$route.path.split('/')[0]
    },
    routes() {
//      console.log('this.$router.options.routes',this.$route.path, this.$router.options.routes);
      return this.$router.options.routes
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  min-height: 100%;
}
</style>
