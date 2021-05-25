<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :append-to-body="true"
      :visible.sync="dialogVisible"
      :before-close="handleClose"
      title="查看物模型"
      width="30%">
      <div class="description">
        物模型是对设备在云端的功能描述，包括设备的属性、服务和事件。物联网平台通过定义一种物的描述语言来描述物模型，称之为 TSL（即 Thing Specification Language），采用 JSON 格式，您可以根据 TSL 组装上报设备的数据。您可以导出完整物模型，用于云端应用开发；您也可以只导出精简物模型，配合设备端 SDK 实现设备开发。
      </div>
      <el-tabs type="border-card">
        <el-tab-pane label="完整物模型">
          <json-viewer
            :value="resData"
            :expand-depth="10"
            :copyable="{copyText:'复制', copiedText:'复制成功', timeout: 2000}"
            class="my-awesome-json-theme"
            sort/>
        </el-tab-pane>
        <!--  <el-tab-pane label="精简物模型">
          <json-viewer
            :value="resData"
            :expand-depth=5
            copyable
            boxed
            sort>
          </json-viewer>
        </el-tab-pane> -->
      </el-tabs>
      <span 
        slot="footer" 
        class="dialog-footer">
        <el-button 
          type="primary" 
          @click="exportPhysicalModel">导出物模型</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import JsonViewer from 'vue-json-viewer'
import Vue from 'vue'
Vue.use(JsonViewer)
export default {
  props: {
    resData: {
      type: [Object, Array],
      default: function(){
        return {}
      }
    },
    dialogVisible: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
    handleClose() {
      // this.dialogVisible = false
      this.$emit('open', false)
    },
    exportPhysicalModel() {
      // 点击下载
      const data = JSON.stringify(this.resData)
      // encodeURIComponent解决中文乱码
      const uri = 'data:text/csv;charset=utf-8,\ufeff' + encodeURIComponent(data)
      // 通过创建a标签实现
      const link = document.createElement('a')
      link.href = uri
      // 对下载的文件命名
      link.download = 'model.json'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      this.$emit('open', false)
    }
  }
}
</script>

<style lang='scss' scoped>
  .copied{
    color:aqua !important;
  }
  .description{
    padding: 16px;
    line-height: 20px;
    border-width: 1px;
    border-style: solid;
    margin-bottom: 16px;
    border-radius: 3px;
    background-color: rgb(251, 251, 252);
    border-color: rgb(236, 237, 238);
  }
  .my-awesome-json-theme{
    height: 300px;
    overflow: auto;
    /deep/ .jv-tooltip{
      color: #49b3ff;
    }
  }
</style>
