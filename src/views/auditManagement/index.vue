<template>
    <div class="tab-container">
        <el-row>
            <el-col :span="2">
                <el-tabs :style="{height:height+'px'}" tabPosition="left" v-model="activeName"
                         @tab-click="renderChecked">
                    <el-tab-pane label="待审核企业" name="checkPending">
                    </el-tab-pane>

                    <el-tab-pane label="已审核企业" name="checked">
                    </el-tab-pane>
                </el-tabs>
            </el-col>
            <el-col :span="22">
                <router-view ></router-view>
                <!--<enterprise-check-pending v-show="activeName==='checkPending'"></enterprise-check-pending>-->
                <!--<enterprise-checked v-if="isCheckedRender" v-show="activeName==='checked'"></enterprise-checked>-->
            </el-col>
        </el-row>
    </div>
</template>

<script>
    //import enterpriseCheckPending from './enterpriseCheckPending.vue';
    //import enterpriseChecked from './enterpriseChecked.vue';

    export default {
        name: 'auditManagement',
        //components: {enterpriseCheckPending, enterpriseChecked},
        data() {
            console.log(this.$route);
            return {
                activeName: this.$route.name,
                isCheckedRender: false, // 已审核界面是否渲染
                height: window.innerHeight - 50,
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
