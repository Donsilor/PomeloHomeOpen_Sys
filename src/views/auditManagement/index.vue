<template>
    <div class="tab-container">
        <el-row>
            <el-col :span="3">
                <el-menu class="sec-menu" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                         active-text-color="#409EFF">
                    <template v-for="item in navs">
                        <router-link :to="item.url">
                            <el-menu-item :index="item.type">
                                {{item.name}}
                                <span class="num">{{item.num}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-menu>
            </el-col>
            <el-col :span="21">
                <router-view ></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
    import fetch from '@/utils/fetch';
    export default {
        name: 'auditManagement',
        data() {
            console.log(this.$route);
            return {
                activeName: this.$route.name,
                height: window.innerHeight - 50,
                navs:[
                    {
                        name: '待审核企业',
                        url: '/auditManagement/enterprisePending',
                        type: 'enterprisePending',
                        num:0
                    },
                    {
                        name: '已审核企业',
                        url: '/auditManagement/enterpriseAudited',
                        type:'enterpriseAudited',
                        num:0
                    },
                    {
                        name:'待审核产品',
                        url:'/auditManagement/productPending',
                        type:'productPending',
                        num:0
                    },
                    {
                        name:'已审核产品',
                        url:'/auditManagement/productAudited',
                        type:'productAudited',
                        num:0
                    },
                    {
                        name:'待审核上线申请',
                        url:'/auditManagement/goLivePending',
                        type:'goLivePending',
                        num:0
                    },
                    {
                        name:'已审核上线申请',
                        url:'/auditManagement/goLiveAudited',
                        type:'goLiveAudited',
                        num:0
                    }
                ]
            }
        },
        mounted(){
            this.getMenuNum();
        },
        methods: {
            getMenuNum() {
                fetch({
                    url: '/admin/apprmenu',
                    method: 'post',
                    data: {}
                }).then(res=>{
                    this.navs.forEach(function (v,i) {
                        v.num = res.list[v.name];
                    });
                })
            }
        }
    }

</script>

<style scoped>
</style>
