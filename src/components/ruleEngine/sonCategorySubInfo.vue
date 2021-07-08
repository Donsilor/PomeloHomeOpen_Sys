<template>
  <!-- 基本信息 -->
  <div>
    <el-row style="margin-bottom:20px">
      <el-button 
        type="primary" 
        icon="el-icon-setting" 
        @click="editBasInfo">编辑基本信息</el-button>
    </el-row>
    <el-form 
      ref="ruleForm" 
      :disabled="true" 
      :rules="rules" 
      :model="form" 
      reset-fields 
      label-width="110px">
      <el-form-item 
        label="子品类序列号" 
        prop="subCategoryNumber">
        <el-input 
          v-model.number="form.subCategoryNumber" 
          on-keypress="return (/[\d\.]/.test(String.fromCharCode(event.keyCode)))" 
          autocomplete="off" 
          type="number" 
          placeholder="请输入子品类序列号"/>
      </el-form-item>
      <el-form-item 
        label="子品类名称" 
        prop="subCategoryName">
        <el-input 
          v-model="form.subCategoryName" 
          autocomplete="off" 
          placeholder="请输入子品类名称"/>
      </el-form-item>
      <el-form-item 
        label="子品类英文名" 
        prop="subCategoryNameE">
        <el-input 
          v-model="form.subCategoryNameE" 
          autocomplete="off" 
          placeholder="请输入子品类英文名称"/>
      </el-form-item>
      <el-form-item 
        label="品牌"
        prop="brandId">
        <el-select 
          v-model="form.brandId" 
          style="width:100%" 
          placeholder="请选择品牌">
          <el-option
            v-for="item in brandOptions"
            :key="item.id"
            :label="item.brandName"
            :value="item.brandId"/>
        </el-select>
      </el-form-item>
      <el-form-item 
        label="子品类图标" 
        prop="fileLists">
        <el-row type="flex">
          <!-- 高亮 -->
          <el-col 
            :span="5" 
            class="fileuploadItem gavin">
            <el-upload
              :show-file-list="false"
              class="avatar-uploader"
              action="/api/paas-platform/file-service/v1/file/upload/previewFileUpload"
              accept="image/png">
              <img
                v-if="fileList[0].fileUrl!==''"
                :src="fileList[0].fileUrl"
                class="avatar">
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"/>
            </el-upload>
            <span class="file_upload_img_des">高亮状态</span>
          </el-col>
          <!-- 默认状态小尺寸 -->
          <el-col 
            :offset="1" 
            :span="5" 
            class="fileuploadItem gavin">
            <el-upload
              :show-file-list="false"
              class="avatar-uploader"
              action="/api/paas-platform/file-service/v1/file/upload/previewFileUpload"
              accept="image/png">
              <img
                v-if="fileList[1].fileUrl!==''"
                :src="fileList[1].fileUrl"
                class="avatar">
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"/>
            </el-upload>
            <span class="file_upload_img_des">默认状态小尺寸</span>
          </el-col>
          <!-- 默认状态大尺寸 -->
          <el-col 
            :offset="1" 
            :span="5" 
            class="fileuploadItem gavin">
            <el-upload
              :show-file-list="false"
              class="avatar-uploader"
              action="/api/paas-platform/file-service/v1/file/upload/previewFileUpload"
              accept="image/png">
              <img
                v-if="fileList[2].fileUrl!==''"
                :src="fileList[2].fileUrl"
                class="avatar">
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"/>
            </el-upload>
            <span class="file_upload_img_des">默认状态大尺寸</span>
          </el-col>
          <!-- 不可用 -->
          <el-col 
            :offset="1" 
            class="fileuploadItem gavin">
            <el-upload
              :show-file-list="false"
              class="avatar-uploader"
              action="/api/paas-platform/file-service/v1/file/upload/previewFileUpload"
              accept="image/png">
              <img
                v-if="fileList[3].fileUrl!==''"
                :src="fileList[3].fileUrl"
                class="avatar">
              <i
                v-else
                class="el-icon-plus avatar-uploader-icon"/>
            </el-upload>
            <span class="file_upload_img_des">不可用状态</span>
          </el-col>
        </el-row>
      </el-form-item>
      <el-form-item 
        label="物模型类别" 
        prop="modeType">
        <el-radio-group v-model="form.modeType">
          <el-radio :label="0">定时</el-radio>
          <el-radio :label="1">设备-面板包含在设备品类中</el-radio>
          <el-radio :label="2">安防</el-radio>
        </el-radio-group>
      </el-form-item>
      <!--
      <el-form-item label="物模型类型" prop="modelType">
        <el-radio-group v-model="form.modelType">
          <el-radio :label="0">自定义物模型</el-radio>
          <el-radio :label="1">导入物模型</el-radio>
        </el-radio-group>
      </el-form-item> -->
    </el-form>
    <AddSubDialog
      v-if="addDialogVisible"
      :add-dialog-visible="addDialogVisible"
      :category="routeData"
      :prop-data="propData"
      @closeAddDialog="closeAddDialog"
    />
  </div>
</template>
<script>
import { sonCategoryDetail,brandList } from '@/api/categoryManager'
import AddSubDialog from '@/components/ruleEngine/sonCategoryDialog'
export default {
  components: {
    AddSubDialog
  },
  props: {
    subCategoryId: {
      type: String,
      default: ''
    },
    deviceCategoryId:{
      type: String,
      default: ''
    }
  },
  data() {
    const urlVerti = (rule, value, callback) => {
      if (this.fileList.length < 1) {
        callback(new Error('至少上传一张图片'))
      } else {
        callback()
      }
    }
    const fileNumber = (rule, value, callback) => {
      console.log(this.$refs.upload)
      if (this.form.modelType !== 0 && this.$refs.upload.uploadFiles.length < 1) {
        callback(new Error('请选择文件！'))
      } else {
        callback()
      }
    }
    return {
      propData: {
        status: 2
      },
      routeData: {},
      addDialogVisible: false,
      brandOptions: '',
      fileList: [
        {
          objectId: '',
          fileUrl: '',
          fileDesc: 'highLight',
          fileName: ''
        },
        {
          objectId: '',
          fileUrl: '',
          fileDesc: 'normalSmall',
          fileName: ''
        },
        {
          objectId: '',
          fileUrl: '',
          fileDesc: 'normalBig',
          fileName: ''
        },
        {
          objectId: '',
          fileUrl: '',
          fileDesc: 'disabled',
          fileName: ''
        }
      ],
      form: {
        subCategoryNumber: '',
        subCategoryName: '',
        subCategoryNameE: '',
        brandId: '',
        modeType: '',
        // modelType: 0
      },
      belongCategory: '', // 品类名称
      rules: {
        modelType: [
          { required: true, message: '请选择模板类型', trigger: 'change' }
        ],
        modeType: [
          { required: true, message: '请选择物模型类别', trigger: 'change' }
        ],
        subCategoryNumber: [
          { required: true, message: '品类序列号不能为空', trigger: 'blur' }
        ],
        subCategoryName: [
          { required: true, message: '品类名称不能为空', trigger: 'blur' }
        ],
        fileLists: [
          { required: true, validator: urlVerti, trigger: 'change' }
        ],
        snUrl: [
          { required: true, validator: fileNumber, trigger: 'change' }
        ]
      }
    }
  },
  created() {
    this.getBrand()
    this.getSubDetail()
  },
  methods: {
    getSubDetail() {
      const params = {
        subCategoryId: this.subCategoryId
      }
      sonCategoryDetail({ params }).then((res) => {
        this.$nextTick(() => {
          this.form.subCategoryNumber = res.data.data.subCategoryNumber
          this.form.subCategoryName = res.data.data.subCategoryName
          this.form.subCategoryNameE = res.data.data.subCategoryNameE
          this.form.modeType = res.data.data.modeType
          this.form.brandId = res.data.data.brandId
          this.belongCategory = res.data.data.parentName
          console.log('我是返回来的', res.data.data.fileList)
          if (JSON.stringify(res.data.data.fileList) !== 'null' && res.data.data.fileList.length !== 0) {
            res.data.data.fileList.forEach((e, index) => {
              this.fileList.forEach((ele, i) => {
                if (e.fileDesc === ele.fileDesc) {
                  ele.objectId = e.objectId
                  ele.fileUrl = e.fileUrl
                  ele.fileName = e.fileName
                }
              })
            })
            console.log('我是已经有的', this.fileList)
          }
        })
      })
    },
    getBrand(){
      console.log(1)
      const params = {
        params: '1'
      }
      brandList(params).then((res)=>{
        console.log(res)
        this.brandOptions = res.data.data
      })
    },
    editBasInfo() {
      this.addDialogVisible = true
      this.propData.subCategoryId = this.subCategoryId
      this.routeData.subCategoryName = this.belongCategory
      this.propData.deviceCategoryId = this.deviceCategoryId
    },
    closeAddDialog(val) {
      this.addDialogVisible = false
      if (val) {
        this.getSubDetail()
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.el-form{
  width: 60%;
}
.el-col-5{
  text-align: center;
}
/deep/ .el-upload{
  border: 1px dashed #d9d9d9;
}
/deep/.avatar-uploader {
    width: 100px;
    height: 100px;
}
/deep/.avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }
  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }
  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }
</style>
