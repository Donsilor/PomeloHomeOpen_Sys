<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addCard">
        新增卡片
      </el-button>
    </el-row>
    <div>
      <el-card class="box-card">
        <el-row 
          slot="header" 
          class="card-header">
          <i/>联系人信息
        </el-row>
        <el-row class="card-body"/>
      </el-card>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    addCard(){
      console.log('新增卡片')
    }
  }
}
</script>

<style lang="scss" scoped>
  
</style>