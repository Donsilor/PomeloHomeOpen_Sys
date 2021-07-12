<template>
  <!-- 添加单个设备弹出层 -->
  <el-dialog
    :close-on-click-modal="false"
    :append-to-body="true"
    :visible.sync="showImportModel.show"
    class="dialogView"
    width="25%"
  >
    <span 
      slot="title" 
      class="title">
      <span>导入物模型</span>
    </span>
    <el-row>
      <span class="star">*</span>上传绑定文件
      <el-tooltip 
        content="上传文件大小不超过256kb" 
        placement="right" 
        effect="light">
        <span class="el-icon-question"/>
      </el-tooltip>
    </el-row>
    <el-row>
      <el-row>
        <el-upload
          ref="upload"
          :auto-upload="false"
          :on-change="handleChange"
          :before-upload="beforeZipUpload"
          :http-request="fileRequest"
          :file-list="fileList"
          class="upload"
          accept=".json"
          action="aaa">
          <el-button 
            v-if="flag" 
            size="small" 
            type="primary">点击上传</el-button>
          <el-button 
            v-else 
            size="small">重新上传</el-button>
        </el-upload>
      </el-row>
    </el-row>
    <span 
      slot="footer" 
      class="dialog-footer">
      <el-button 
        :disabled="flag" 
        type="primary" 
        size="small" 
        @click="save">保 存</el-button>
      <el-button 
        size="small" 
        @click="closeView">取 消</el-button>
    </span>
  </el-dialog>
</template>
<script>
import { upLoadFile } from '@/api/productRegistration'
import { upload,sonUpload } from '@/api/categoryManager'
import { v4 as uuidv4 } from 'uuid'
export default {
  props: {
    showImportModel: {
      type: Object,
      default: function(){
        return {}
      }
    },
    importPhydata: {
      type: Object,
      default: function(){
        return {}
      }
    }
  },
  data() {
    return {
      fileList: [
      ],
      flag: true,
      productKey: '',
      modelVersion: ''
    }
  },
  watch: {
    'importPhydata.date': {
      handler(val) {
        this.productKey = this.importPhydata.beforeKey
        this.modelVersion = this.importPhydata.modelVersion
      }
    }
  },
  mounted() {
  },
  methods: {
    closeView() {
      this.$emit('close-view')
    },
    // 上传文件前
    beforeZipUpload(file) {
      console.log(11)
      const name = file.name
      const type = name.substring(name.lastIndexOf('.') + 1)
      if (type !== 'json') {
        this.$message.error('请上传json文件格式')
        return false
      }
      if (file.size > 262144) {
        this.$message.error('文件大小超过256Kb请重试')
        return false
      }
    },
    fileRequest(item) {
      if (this.importPhydata.type === 'category') {
        console.log(this.importPhydata)
        const formData = new FormData()
        formData.append('file', item.file)
        if(this.importPhydata.val === 'son'){
          formData.append('subCategoryId', this.importPhydata.deviceSubCategoryId) 
          formData.append('categoryId', this.importPhydata.deviceCategoryId) 
          formData.append('brandId', this.importPhydata.brandId) 
        } else{
          formData.append('categoryId', this.importPhydata.deviceCategoryId)
        } 
        formData.append('id', uuidv4())
        formData.append('timestamp', Date.parse(new Date()))
        formData.append('version', '1.0')
        console.log(formData)
        this.importPhydata.val === 'son'?
          sonUpload(formData)
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success('上传文件成功')
                this.$emit('getImportPhyData', 1)
                this.$emit('close-view')
              // this.flag = false
              } else {
                this.$message.error(res.data.message)
                this.flag = true
                return false
              }
            })
          :
          upload(formData)
            .then(res => {
              if (res.data.code === 200) {
                this.$message.success('上传文件成功')
                this.$emit('getImportPhyData', 1)
                this.$emit('close-view')
              // this.flag = false
              } else {
                this.$message.error(res.data.message)
                this.flag = true
                return false
              }
            })
      } else {
        console.log(1)
        const formData = new FormData()
        formData.append('file', item.file)
        formData.append('productKey', this.importPhydata.beforeKey)
        formData.append('modelVersion', this.importPhydata.modelVersion)
        formData.append('id', uuidv4())
        formData.append('timestamp', Date.parse(new Date()))
        formData.append('version', '1.0')
        upLoadFile(formData)
          .then(res => {
            if (res.data.code === 200) {
              this.$message.success('上传文件成功')
              this.$emit('getImportPhyData', this.importPhydata.beforeKey)
              this.$emit('close-view')
              // this.flag = false
            } else {
              this.$message.error(res.data.message)
              this.flag = true
            }
          })
      }
    },
    async save() {
      await this.$refs.upload.submit()
      /* this.importPhydata.type === 'category'
        ? await this.$emit('getImportPhyData', 1) : await this.$emit('getImportPhyData', this.productKey) */
    },
    handleChange(file, fileList) {
      this.flag = false
      if (fileList.length > 1) fileList.splice(0, 1)
    }
  }
}
</script>
<style lang="scss" scope>
.dialogView{
    .title{
      font-size: 20px;
    }
    .el-icon-question{
      margin-left: 5px;
      color: rgb(204, 204, 204);
    }
    .tips{
      padding: 15px;
      background: #fbfbfc;
      border: 1px solid #ecedee;
      font-size: 10px;
      white-space: nowrap;
      line-height: 25px;
      .tipContent{
         display: flex;
      }
      .link{
        color: #35a6df;
        cursor: pointer;
      }
    }
    .el-row{
      margin-top: 5px;
    }
    .star{
      color: red;
      margin-right: 5px;
    }
    .upload{
      display: inline-block;
    }
  }
</style>
