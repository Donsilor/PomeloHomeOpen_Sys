<template>
    <div class="tab-container">
        <el-row style="padding-left: 160px;padding-bottom: 30px;">
            <el-menu class="sec-menu doc-menu" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                     active-text-color="#409EFF">
                <template v-for="item in navs">
                    <router-link :to="item.url">
                        <el-menu-item :index="item.type">
                            {{item.name}}
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
        name: 'productManagement',
        data() {
            return {
                activeName: this.$route.meta.key||this.$route.name,
                height: window.innerHeight - 50,
                width:window.innerWidth-300,
                navs:[
                    {
                        name: '已上线产品',
                        url: '/productManagement/onlineProducts',
                        type:'onlineProducts',
                    },
                    {
                      name: '已下线产品',
                      url: '/productManagement/offlineProducts',
                      type:'offlineProducts',
                    }
                ]
            }
        },
        mounted(){
        },
        methods: {
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
