<template>
  <el-breadcrumb class="app-levelbar" separator="/">
    <el-breadcrumb-item v-for="(item,index)  in breadList" :key="item.path">
      <router-link v-if='item.redirect==="noredirect"||index==breadList.length-1' to="" class="no-redirect">{{item.name}}</router-link>
      <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  created() {
    this.getBreadcrumb()
  },
  data() {
    return {
      breadList: null
    }
  },
  methods: {
    getBreadcrumb() {
      var breadNumber= typeof(this.$route.meta.breadNumber)!="undefined"?this.$route.meta.breadNumber:0;//默认为0
//      var newBread={name:this.$route.query.product_brand_name||this.$route.query.business_name||this.$route.name,path:this.$route.fullPath};//当前页面的
      var newBread={name:this.$route.name,path:this.$route.fullPath};//当前页面的
//      console.log('newBread', newBread);
      var breadList=this.$store.getters.breadListState;//获取breadList数组
      breadList.splice(breadNumber,breadList.length-breadNumber,newBread);
//      console.log('breadList', breadList);
      var breadList=JSON.stringify(breadList);
      this.$store.commit('breadListMutations',breadList);
      this.breadList=this.$store.getters.breadListState;
    }
  },
  watch: {
    $route() {
      this.getBreadcrumb()
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
.app-levelbar.el-breadcrumb {
  display: inline-block;
  font-size: 14px;
  line-height: 50px;
  margin-left: 10px;
  .no-redirect {
    color: #97a8be;
    cursor: text;
  }
}
</style>
