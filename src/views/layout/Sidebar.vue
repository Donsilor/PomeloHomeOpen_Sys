<template>
    <el-menu mode="vertical" unique-opened :default-active="routeIndex" background-color="#304156" text-color="#fff"
             active-text-color="#409EFF">
        <template v-for="item in navs">
            <router-link :to="item.url">
                <el-menu-item :index="item.url">
                    <i v-if="item.icon" :class="item.icon"></i>
                    {{item.name}}
                </el-menu-item>
            </router-link>
        </template>
    </el-menu>
</template>

<script>
    export default {
        data() {
            const routeIndex = '/' + this.$route.path.split('/')[1];
            return {
                routeIndex: routeIndex,
                navs: [
                    {
                        name: '审核管理',
                        url: '/auditManagement',
                        icon: 'el-icon-circle-check-outline',
                    },
                    {
                        name: '产品管理',
                        url: '/productManagement',
                        icon: 'el-icon-goods',
                    },
                    {
                        name: '品类管理',
                        url: '/typeManagement',
                        icon: 'el-icon-menu',
                    },
                    {
                        name: '资料管理',
                        url: '/documentManagement',
                        icon: 'el-icon-document'
                    },
                    {
                        name:'企业管理',
                        url:'/enterpriseManagement',
                        icon:'el-icon-tickets'
                    },
                    {
                        name:'权限管理',
                        url:'/authorityManagement',
                        icon:'el-icon-view'
                    }
                ]
            }
        },
        computed: {
            routes() {
                return this.$router.options.routes
            }
        },
        created () {
//    this.routeIndex = '/'+this.$route.path.split('/')[0];
            // 组件创建完后获取数据，
            // 此时 data 已经被 observed 了
//    this.getRoute()
        },
        mounted () {
//    this.getRoute();
        },
        methods: {
            getRoute () {
                this.routeIndex = '/' + this.$route.path.split('/')[1];
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
