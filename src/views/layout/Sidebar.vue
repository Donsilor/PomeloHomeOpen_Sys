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
//      routeIndex: this.$route.path,
      routeIndex: this.$route.path
    }
  },
  computed: {
    routes() {
//      console.log('this.$router.options.routes.children', this.$router.options.routes);
      return this.$router.options.routes
    }
  },
  created () {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
//    this.getRoute()
  },
  mounted () {
//    this.getRoute();
  },
  methods: {
    getRoute () {
      this.routeIndex = '/'+this.$route.path.split('/')[0];
    }
  },
  watch: {
    // 保证详情页也可以让导航栏高亮
    routeIndex() {
//      return '/'+this.$route.path.split('/')[0]
    },
    // 如果路由有变化，会再次执行该方法
    $route: 'getRoute'
  },
  beforeRouteUpdate (to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
//    this.routeIndex = '/'+this.$route.path.split('/')[0];
//    next()
  },
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.el-menu {
  min-height: 100%;
}
</style>
