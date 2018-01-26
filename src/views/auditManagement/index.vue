<template>
    <div class="tab-container">
        <el-row style="padding-left: 160px;padding-bottom: 30px;">
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
            <router-view ></router-view>
        </el-row>
    </div>
</template>

<script>
    import { mapGetters } from 'vuex'
    import fetch from '@/utils/fetch';

    export default {
        name: 'auditManagement',
        data() {
            return {
                activeName: this.$route.meta.key||this.$route.name,
                height: window.innerHeight - 50,
                width:window.innerWidth-300,
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
        created(){
            //this.$store.dispatch('GetAuditMenus');
        },
        computed: {
            auditMenus(){
                return this.$store.state.user.auditMenus;
            }
        },
        watch:{
            'auditMenus':function (list) {
                this.navs.forEach(function (v,i) {
                    v.num = list[v.name];
                });
            }
        },
        mounted(){
            //this.getMenuNum();
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
    .sec-menu{
        position: fixed;
        left: 150px;
        width: 160px;
    }
</style>
