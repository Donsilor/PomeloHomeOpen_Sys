<template>
  <div class="page-content">
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
            :category-name ="categoryName"
            :category-id="categoryId"/>
        </keep-alive>
      </el-tab-pane>
    </el-tabs>
  </div>
</template>
<script>
import SubInfo from '@/components/ruleEngine/categorySubInfo'
// import Physical from '@/components/ruleEngine/physicalModelInfo'
export default {
  data() {
    return {
      editStatus: '0',
      activeName: '0',
      categoryId: '',
      categoryName: '',
      tableOptions: [
        {
          title: '基本信息',
          name: '0',
          content: SubInfo
        },
        /* {
          title: '物模型信息',
          name: '1',
          content: Physical
        } */
      ]
    }
  },
  created() {
    console.log(this.$route.query.categoryId)
    this.categoryId = this.$route.query.categoryId
    this.categoryName = this.$route.query.categoryName
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
