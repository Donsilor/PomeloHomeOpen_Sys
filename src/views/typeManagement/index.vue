<template>
      <div class="tab-container">
          <el-row style="padding-left: 160px;padding-bottom: 30px;">
              <el-menu class="sec-menu" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                       active-text-color="#409EFF">
                  <template v-for="item in navs">
                      <router-link :to="item.url">
                          <el-menu-item :index="item.type">
                              <i v-if="item.icon" :class="item.icon"></i>
                              {{item.name}}
                          </el-menu-item>
                      </router-link>
                  </template>
              </el-menu>
              <router-view ></router-view>
          </el-row>
      </div>
</template>

<script>
    export default {
        name: 'existedCategory',
        computed: {
        },
        created() {
        },
        mounted() {
        },
        data() {
            return {
                activeName: this.$route.meta.key || this.$route.name,
                isCheckedRender: false, // 已审核界面是否渲染
                height: window.innerHeight - 50,
                navs:[
                    {
                        name: '产品子品类',
                        url: '/typeManagement/existedCategory',
                        type: 'existedCategory'
                    },
                    {
                        name: '产品大品类',
                        url: '/typeManagement/bigCategory',
                        type: 'bigCategory'
                    },
                    {
                        name: '引导页管理',
                        url: '/typeManagement/deviceManager',
                        type:'deviceManager'
                    },
                    {
                        name: '配网方式管理',
                        url: '/typeManagement/networkManager',
                        type:'networkManager'
                    },
                    {
                        name: '渠道商管理',
                        url: '/typeManagement/channelManager',
                        type:'channelManager'
                    },
                    {
                        name: '语音平台管理',
                        url: '/typeManagement/voicePlatform',
                        type:'voicePlatform'
                    },
                    {
                        name: '技术方案管理',
                        url: '/typeManagement/technology',
                        type:'technology'
                    },
                     {
                        name: '品牌licence管理',
                        url: '/typeManagement/manufacturer',
                        type:'manufacturer'
                    },
                ]
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
    .sec-menu{
        position: fixed;
        left: 150px;
        width: 160px;
    }
</style>
