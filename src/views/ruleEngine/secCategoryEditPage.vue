<template>
  <div class="app-container">
    <el-row class="title">
      <el-button 
        type="primary" 
        icon="el-icon-arrow-left" 
        @click="goBack"/>
    </el-row>
    <el-tabs 
      v-model="activeName" 
      type="card" 
      @tab-click="handleClick">
      <el-tab-pane
        v-for="item in tableOptions"
        :label="item.title"
        :name="item.name"
        :key="item.name"
      >
        <keep-alive>
          <component 
            v-if="item.name === activeName" 
            ref="productRef" 
            :is="item.content" 
            :category-name ="subCategoryName"
            :device-sub-category-id = "deviceSubCategoryId"
            :device-category-id="deviceCategoryId"
            :sub-category-id="subCategoryId"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SonSubInfo from '@/components/ruleEngine/secCategorySubInfo'
import SonPhysical from '@/components/ruleEngine/secPhysicalModelInfo'
export default {
  name: 'SonCategoryEditPage',
  data() {
    return {
      editStatus: '0',
      activeName: '0',
      subCategoryId: '',
      deviceSubCategoryId:'',
      subCategoryName: '',
      deviceCategoryId: '',
      tableOptions: [
        {
          title: '基本信息',
          name: '0',
          content: SonSubInfo
        },
        {
          title: '物模型信息',
          name: '1',
          content: SonPhysical
        }
      ]
    }
  },
  created() {
    console.log(this.$route.query.subCategoryId)
    this.subCategoryId = this.$route.query.subCategoryId
    this.subCategoryName = this.$route.query.subCategoryName
    this.deviceSubCategoryId = Number(this.$route.query.deviceSubCategoryId)
    this.deviceCategoryId = Number(this.$route.query.categoryNumber)
    this.getActiveName()
  },
  methods: {
    getActiveName() {
      if (sessionStorage.getItem('editStatus')) {
        this.activeName = sessionStorage.getItem('editStatus')
      } else {
        this.activeName = '0'
      }
    },
    handleClick(tab) {
      if (tab.name === '0') {
        this.editStatus = '0'
      } else {
        this.editStatus = '1'
      }
      sessionStorage.setItem('editStatus', this.editStatus)
    },
    goBack() {
      window.history.go(-1)
    }
  }
}
</script>

<style lang='scss' scoped>
  .title{
    display: flex;
    width: 25%;
    font-weight: 900;
    font-size: 16px;
    height: 40px;
    margin-bottom: 20px;
  }
</style>
