<template>
  <div class="tab-container">
    <el-row style="padding-left: 160px;padding-bottom: 30px;">
      <el-menu 
        :default-active="activeName" 
        class="sec-menu doc-menu" 
        mode="vertical" 
        background-color="#f2f2f2" 
        text-color="#666" 
        active-text-color="#409EFF">
        <template v-for="item in navs">
          <router-link 
            :to="item.url" 
            :key="item.url">
            <el-menu-item :index="item.type">
              {{ item.name }}
            </el-menu-item>
          </router-link>
        </template>
      </el-menu>
      <router-view/>
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'RuleEngine',
  data() {
    return {
      activeName: this.$route.name,
      height: window.innerHeight - 50,
      width: window.innerWidth - 300,
      navs: [
        {
          name: '系统模板',
          url: '/ruleEngine/template',
          type: 'model'
        },
        {
          name: '系统场景',
          url: '/ruleEngine/scene',
          type: 'scene'
        },
        {
          name: '品类管理',
          url: '/ruleEngine/primaryCategoryDetail',
          type: 'primaryCategoryDetail'
        },
      ]
    }
  }
}
</script>

<style scoped>
.sec-menu {
  position: fixed;
  left: 150px;
  width: 160px;
}
</style>
