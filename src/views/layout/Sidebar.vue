<template>
  <el-menu mode="vertical" unique-opened :default-active="routeIndex" background-color="#304156" text-color="#fff" active-text-color="#409EFF">
    <sidebar-item :routes="routes"></sidebar-item>
  </el-menu>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: { SidebarItem },
  data() {
    return {
      routeIndex: this.$route.path
    }
  },
  computed: {
    routes() {
//      console.log('this.$router.options.routes.children', this.$router.options.routes);
      return this.$router.options.routes
    }
  },
  watch: {
    // 保证详情页也可以让导航栏高亮
    routeIndex() {
      return '/'+this.$route.path.split('/')[0]
    },
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  min-height: 100%;
}
</style>
