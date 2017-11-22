<template>
  <div class="tab-container">
    <!--<el-tag type="primary">mounted times ：{{createdTimes}}</el-tag>-->
    <el-tabs style='margin-top:15px;' v-model="activeName">
      <el-tab-pane label="待审核" name="checkPending">
        <enterprise-check-pending></enterprise-check-pending>
      </el-tab-pane>

      <el-tab-pane label="已审核" name="checked">
        <enterprise-checked></enterprise-checked>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import enterpriseCheckPending from './enterpriseCheckPending.vue';
  import enterpriseChecked from './enterpriseChecked.vue';

  export default {
    name: 'tabDemo',
    components: { enterpriseCheckPending, enterpriseChecked },
    data() {
      return {
        activeName: 'checkPending',
//        createdTimes: 0
      }
    },
    methods: {
//      showCreatedTimes() {
//        this.createdTimes = this.createdTimes + 1
//      }
    }
  }
</script>

<style scoped>
  .tab-container{
    margin: 30px;
  }
</style>
