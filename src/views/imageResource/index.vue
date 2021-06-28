<template>
  <div class="tab-container">
    <el-row style="padding-left: 160px; padding-bottom: 30px">
      <el-menu
        :default-active="activeName"
        class="sec-menu"
        mode="vertical"
        background-color="#f2f2f2"
        text-color="#666"
        active-text-color="#409EFF"
      >
        <template v-for="item in navs">
          <router-link 
            :key="item.name" 
            :to="item.url">
            <el-menu-item :index="item.type">
              <i 
                v-if="item.icon" 
                :class="item.icon" />
              {{ item.name }}
            </el-menu-item>
          </router-link>
        </template>
      </el-menu>
      <router-view />
    </el-row>
  </div>
</template>

<script>
export default {
  name: 'Index',
  data() {
    return {
      activeName: this.$route.meta.key || this.$route.name,
      isCheckedRender: false, // 已审核界面是否渲染
      height: window.innerHeight - 50,
      width: window.innerWidth - 300,
      navs: [
        {
          name: '图片资源',
          url: '/imageResource/parentTemplate',
          type: 'parentTemplate',
        }
      ],
    }
  },
  computed: {},
  created() {},
  mounted() {},
  methods: {
    renderChecked(tab, event) {
      if (tab.name === 'checked') {
        this.isCheckedRender = true
      }
    },
  },
}
</script>
<style scoped>
.sec-menu {
  position: fixed;
  left: 150px;
  width: 160px;
}
</style>
