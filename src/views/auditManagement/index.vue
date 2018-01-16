<template>
    <div class="tab-container">
        <el-row>
            <el-col :span="2">
                <el-menu class="sec-menu" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                         active-text-color="#409EFF">
                    <template v-for="item in navs">
                        <router-link :to="item.url">
                            <el-menu-item :index="item.type">
                                <i v-if="item.icon" :class="item.icon"></i>
                                {{item.name}}
                            </el-menu-item>
                        </router-link>
                    </template>
                </el-menu>
            </el-col>

            <!--<el-col :span="2">
                <el-tabs :style="{height:height+'px'}" tabPosition="left" v-model="activeName"
                         @tab-click="renderChecked">
                    <el-tab-pane label="待审核企业" name="checkPending">
                    </el-tab-pane>

                    <el-tab-pane label="已审核企业" name="checked">
                    </el-tab-pane>
                </el-tabs>
            </el-col>-->
            <el-col :span="22">
                <router-view ></router-view>
            </el-col>
        </el-row>
    </div>
</template>

<script>
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
                        url: '/auditManagement/checkPending',
                        type: 'checkPending'
                    },
                    {
                        name: '已审核企业',
                        url: '/auditManagement/enterpriseChecked',
                        type:'checked'
                    },
                ]
            }
        },
        methods: {
            renderChecked(tab, event) {
                if (tab.name === 'checked') {
                    this.isCheckedRender = true;
                }
            }
        }
    }

</script>

<style scoped>
</style>
