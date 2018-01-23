<template>
    <div class="tab-container">
        <el-row style="padding-left: 160px;padding-bottom: 30px;">
            <el-menu class="sec-menu doc-menu" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
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

<script>import fetch from '@/utils/fetch';

    export default {
        name: 'auditManagement',
        data() {
            return {
                activeName: this.$route.name,
                height: window.innerHeight - 50,
                width:window.innerWidth-300,
                navs:[
                    {
                        name: 'Wi-Fi',
                        url: '/documentManagement/wifi',
                        type:'wifi',
                        num:0
                    },
                    {
                        name:'ZigBee',
                        url:'/documentManagement/zigbee',
                        type:'zigbee',
                        num:0
                    },
                    {
                        name:'蓝牙',
                        url:'/documentManagement/bluetooth',
                        type:'bluetooth',
                        num:0
                    },
                    {
                        name:'产品开发文档',
                        url:'/documentManagement/development',
                        type:'development',
                        num:0
                    },
                    {
                        name:'UI设计规范',
                        url:'/documentManagement/uiDesign',
                        type:'uiDesign',
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
                    url: '/admin/documentMenu',
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
