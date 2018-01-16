<template>
    <div class="app-container calendar-list-container">
      <div class="tab-container">
        <el-row>
          <el-col :span="2">
            <el-tabs tabPosition="left" v-model="activeName"
                     @tab-click="renderChecked">
              <el-tab-pane label="已有品类" name="existedCategory">
              </el-tab-pane>

              <el-tab-pane label="设备管理" name="deviceManager">
              </el-tab-pane>
            </el-tabs>
          </el-col>
          <el-col :span="22">
            <router-view ></router-view>
          </el-col>
        </el-row>
      </div>
    </div>
</template>

<script>
    import { getReviewList } from '@/api/check'
    import { parseTime, transDictValue } from '@/utils'
    import { statusFilter } from '@/utils/filter'

    export default {
        name: 'existedCategory',
        computed: {
        },
        created() {
        },
        mounted() {
        },
        data() {
            console.log(this.$route);
            return {
                activeName: this.$route.name,
                isCheckedRender: false, // 已审核界面是否渲染
                height: window.innerHeight - 50,
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
