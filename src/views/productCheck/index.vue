<template>
  <div class="tab-container">
    <!--<el-tag type="primary">mounted times ：{{createdTimes}}</el-tag>-->
    <el-tabs style='margin-top:15px;' v-model="activeName">
      <el-tab-pane label="待审核" name="check_pending">
        <enterprise-check-pending></enterprise-check-pending>
      </el-tab-pane>

      <el-tab-pane label="已审核" name="checked">
        <enterprise-checked></enterprise-checked>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
  import enterpriseCheckPending from './productCheckPending.vue';
  import enterpriseChecked from './productChecked.vue';

  export default {
    name: 'tabDemo',
    components: { enterpriseCheckPending, enterpriseChecked },
    data() {
      return {
        activeName: 'check_pending',
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
