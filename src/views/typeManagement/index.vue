<template>
      <div class="tab-container">
          <el-row>
              <el-col :span="2">
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
              </el-col>
              <el-col :span="22">
                  <router-view ></router-view>
              </el-col>
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
            console.log(this.$route.meta.key);
        },
        data() {
            console.log(this.$route);
            return {
                activeName: this.$route.meta.key || this.$route.name,
                isCheckedRender: false, // 已审核界面是否渲染
                height: window.innerHeight - 50,
                navs:[
                    {
                        name: '已有品类',
                        url: '/typeManagement/existedCategory',
                        type: 'existedCategory'
                    },
                    {
                        name: '设备管理',
                        url: '/typeManagement/deviceManager',
                        type:'deviceManager'
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
