<template>
    <div class="tab-container">
        <el-row style="padding-left: 160px;padding-bottom: 30px;">
            <el-menu class="sec-menu doc-menu" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                     active-text-color="#409EFF">
                <template v-for="item in navs">
                    <router-link class="_li" :to="item.url">
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

<script>import fetch from '@/utils/fetch';

    export default {
        name: 'authorityManagement',
        data() {
            return {
                activeName: this.$route.name,
                height: window.innerHeight - 50,
                width:window.innerWidth-300,
                navs:[
                    {
                        name:'全部',
                        url:'',
                        type:'',
                        num:0,
                        id:0
                    },
                    {
                        name: '企业审核',
                        url: '/authorityManagement/wifi',
                        type:'wifi',
                        num:0,
                        id:1
                    },
                    {
                        name:'产品审核',
                        url:'/authorityManagement/zigbee',
                        type:'zigbee',
                        num:0,
                        id:2
                    },
                    {
                        name:'上线审核',
                        url:'/authorityManagement/bluetooth',
                        type:'bluetooth',
                        num:0,
                        id:3
                    },
                    {
                        name:'产品管理',
                        url:'/authorityManagement/development',
                        type:'development',
                        num:0,
                        id:5
                    },
                    {
                        name:'资料管理',
                        url:'/authorityManagement/uiDesign',
                        type:'uiDesign',
                        num:0,
                        id:6
                    }
                ]
            }
        },
        computed: {
            authorityMenus(){
                return this.$store.state.user.authorityMenus;
            }
        },
        watch:{
            'authorityMenus':function (list) {
                this.navs.forEach(function (v,i) {
                    v.num = list[v.name]['num'];
                });
            }
        },
        mounted(){
        }
    }

</script>

<style scoped>
    .sec-menu{
        position: fixed;
        left: 150px;
        width: 160px;
    }
    .sec-menu ._li:first-child li{
        padding-left: 10px !important;
        font-weight: bold;
    }
</style>
