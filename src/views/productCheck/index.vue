<template>
  <div class="tab-container">
    <el-tabs style='margin-top:15px;' v-model="activeName" @tab-click="renderChecked">
      <el-tab-pane label="待审核" name="checkPending">
      </el-tab-pane>

      <el-tab-pane label="已审核" name="checked">
      </el-tab-pane>
    </el-tabs>

    <product-check-pending v-show="activeName==='checkPending'"></product-check-pending>
    <product-checked v-if="isCheckedRender" v-show="activeName==='checked'"></product-checked>

  </div>
</template>

<script>
  import productCheckPending from './productCheckPending.vue';
  import productChecked from './productChecked.vue';

  export default {
    name: 'productCheck',
    components: { productCheckPending, productChecked },
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
