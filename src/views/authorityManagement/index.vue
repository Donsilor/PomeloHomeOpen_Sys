<template>
    <div class="tab-container">
        <el-row style="padding-left: 160px;padding-bottom: 30px;">
            <el-menu class="sec-menu doc-menu" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                     active-text-color="#409EFF">
                <template v-for="item in authorityMenus">
                    <router-link class="_li" :to="{path:'/authorityManagement/authority/'+item.id}">
                        <el-menu-item :index="item.id+'' ">
                            {{item.menu_name}}
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
                activeName: this.$route.params.id,
                height: window.innerHeight - 50,
                width:window.innerWidth-300,
            }
        },
        computed: {
            authorityMenus(){
                return this.$store.state.user.authorityMenus;
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
