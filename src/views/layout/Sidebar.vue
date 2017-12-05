<template>
  <el-menu mode="vertical" unique-opened :default-active="$route.path" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  computed: {
    routeIndex() {
//      console.log($route.path, '/'+this.$route.path.split('/')[0]);
      return '/'+this.$route.path.split('/')[0]
    },
    routes() {
      console.log('this.$router.options.routes.children', this.$router.options.routes);
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
