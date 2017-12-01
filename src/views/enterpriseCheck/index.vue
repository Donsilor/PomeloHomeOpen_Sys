<template>
  <div class="tab-container">
    <el-tabs style='margin-top:15px;' v-model="activeName" @tab-click="renderChecked">
      <el-tab-pane label="待审核" name="checkPending">
      </el-tab-pane>

      <el-tab-pane label="已审核" name="checked" >
      </el-tab-pane>
    </el-tabs>

    <enterprise-check-pending v-show="activeName==='checkPending'"></enterprise-check-pending>
    <enterprise-checked v-if="isCheckedRender" v-show="activeName==='checked'"></enterprise-checked>

  </div>
</template>

<script>
  import enterpriseCheckPending from './enterpriseCheckPending.vue';
  import enterpriseChecked from './enterpriseChecked.vue';

  export default {
    name: 'enterpriseCheck',
    components: { enterpriseCheckPending, enterpriseChecked },
    data() {
      return {
        activeName: 'checkPending',
        isCheckedRender: false, // 已审核界面是否渲染
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
  .tab-container{
    margin: 30px;
  }
</style>
