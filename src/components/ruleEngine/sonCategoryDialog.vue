<template>
  <div>
    <el-dialog 
      :title="propData.status === 0 ?'新增子品类':propData.status === 2 ?'编辑子品类':'查看子品类'" 
      :visible.sync="addDialogVisible" 
      :before-close="resetForm" 
      :append-to-body="true" 
      :close-on-click-modal="false" 
      class="imgbox" 
      width="50%">
      <el-form 
        ref="ruleForm" 
        :disabled="propData.status === 1" 
        :rules="rules" 
        :model="form" 
        reset-fields 
        label-width="110px">
        <el-form-item 
          label="子品类序列号" 
          prop="subCategoryNumber">
          <el-input 
            v-model.number="form.subCategoryNumber" 
            :disabled="propData.status===2" 
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
                :data="data"
                :show-file-list="false"
                :on-success="(res,file)=>{handleAvatarSuccess(0,res,file)}"
                :before-upload="beforeUp"
                :on-remove="handleRemove"
                class="avatar-uploader"
                action="/api/index.php/files/save"
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
                :data="data"
                :show-file-list="false"
                :on-success="(res,file)=>{handleAvatarSuccess(1,res,file)}"
                :before-upload="beforeUp"
                :on-remove="handleRemove"
                class="avatar-uploader"
                action="/api/index.php/files/save"
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
                :data="data"
                :show-file-list="false"
                :on-success="(res,file)=>{handleAvatarSuccess(2,res,file)}"
                :before-upload="beforeUp"
                :on-remove="handleRemove"
                class="avatar-uploader"
                action="/api/index.php/files/save"
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
                :data="data"
                :show-file-list="false"
                :on-success="(res,file)=>{handleAvatarSuccess(3,res,file)}"
                :before-upload="beforeUp"
                :on-remove="handleRemove"
                class="avatar-uploader"
                action="/api/index.php/files/save"
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
        <el-form-item 
          v-if="propData.status === 0" 
          label="物模型类型" 
          prop="modelType">
          <el-radio-group v-model="form.modelType">
            <el-radio :label="0">自定义物模型</el-radio>
            <!-- <el-radio :label="1">导入物模型</el-radio> -->
          </el-radio-group>
        </el-form-item>
        <el-form-item 
          v-if="form.modelType === 1" 
          label="选择文件" 
          prop="snUrl">
          <el-upload
            ref="upload"
            :auto-upload="false"
            :on-change="handleChange"
            :file-list="jsonFileList"
            name="file"
            action="bb"
            accept=".json">
            <el-button 
              size="small" 
              type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>
      </el-form>
      <div 
        slot="footer" 
        class="dialog-footer">
        <el-button @click="resetForm">{{ propData.status !== 1?'取 消':'关 闭' }}</el-button>
        <el-button 
          v-if="propData.status !== 1" 
          type="primary" 
          @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import { brandList,addSonCategory, editSonCategory, sonCategoryDetail } from '@/api/categoryManager'
export default {
  props: {
    addDialogVisible: {
      type: Boolean,
      default: false
    },
    propData: {
      type: Object,
      default: function(){
        return {}
      }
    }
  },
  data() {
    /* const urlVerti = (rule, value, callback) => {
      if (this.fileList.length < 1) {
        callback(new Error('至少上传一张图片'))
      } else {
        callback()
      }
    } */
    const categoryNum = (rule, value, callback) => {
      const reg = /^[1-9]\d*$/
      if (value === '') {
        callback(new Error('子品类序列号不能为空!'))
      } else if (!reg.test(value)) {
        callback(new Error('子品类序列号格式错误! 只能为正整数'))
      } else {
        callback()
      }
    }
    const fileNumber = (rule, value, callback) => {
      console.log(this.$refs.upload)
      console.log(this.jsonFileList)
      if (this.jsonFileList.length < 1) {
        callback(new Error('请选择文件！'))
      } else {
        callback()
      }
    }
    return {
      data: {
        type: 12,
        token: getToken()
      },
      token: localStorage.getItem('authorization'),
      jsonFileList: [],
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
      brandOptions:[],
      jsonObject: null,
      form: {
        subCategoryNumber: '',
        subCategoryName: '',
        subCategoryNameE: '',
        brandId: '',
        modelType: 0,
        modeType: 0
      },
      highLightUrl: '', // 测试
      normalBigUrl: '',
      normalSmallUrl: '',
      disabledUrl: '',
      rules: {
        modelType: [
          { required: true, message: '请选择模板类型', trigger: 'change' }
        ],
        modeType: [
          { required: true, message: '请选择物模型类别', trigger: 'change' }
        ],
        subCategoryNumber: [
          // { required: true, message: '子品类序列号不能为空', trigger: 'blur' }
          { required: true, validator: categoryNum, trigger: 'blur' }
        ],
        subCategoryName: [
          { required: true, message: '子品类名称不能为空', trigger: 'blur' }
        ],
        subCategoryNameE: [
          { required: true, message: '子品类英文名不能为空', trigger: 'blur' }
        ],
        brandId: [
          { required: true, message: '请选择品牌', trigger: 'blur' }
        ],
        /* fileLists: [
          { required: true, validator: categoryNum, trigger: 'change' }
        ], */
        snUrl: [
          { required: true, validator: fileNumber, trigger: 'change' }
        ]
      }
    }
  },
  created() {
    console.log(this.propData)
    if (this.propData.status !== 0) {
      const params = {
        categoryId: this.propData.categoryId,
        subCategoryId: this.propData.subCategoryId
      }
      sonCategoryDetail({ params }).then((res) => {
        console.log(res.data.data)
        this.$nextTick(() => {
          this.form.subCategoryNumber = res.data.data.subCategoryNumber
          this.form.subCategoryName = res.data.data.subCategoryName
          this.form.subCategoryNameE = res.data.data.subCategoryNameE
          this.form.modeType = res.data.data.modeType
          this.form.brandId = res.data.data.brandId
          console.log('我是返回来的', res.data.data.fileList)
          if (JSON.stringify(res.data.data.fileList) !== 'null' && res.data.data.fileList.length !== 0) {
            res.data.data.fileList.forEach((e, index) => {
              this.fileList.forEach((ele, i) => {
                if (e.fileDesc === ele.fileDesc) {
                  ele.objectId = e.objectId
                  ele.fileUrl = e.fileUrl
                  ele.fileName = e.fileName
                  if(e.picId) ele.picId = e.picId
                }
              })
            })
            console.log('我是已经有的', this.fileList)
          }
        })
      })
    }
    this.getBrand()
  },
  methods: {
    getBrand(){
      const params = {
        params: '1'
      }
      brandList(params).then((res)=>{
        console.log(res)
        this.brandOptions = res.data.data
      })
    },
    // 上传图片
    handleRemove(file, fileList) {
      console.log(file, fileList)
    },
    handleAvatarSuccess(obj, res, file) {
      console.log(obj, res, file)
      if (res.code !== 200) {
        this.$message.error('上传出错，请重新上传')
        return
      }
      if(this.fileList[obj].picId) delete this.fileList[obj].picId
      this.fileList[obj].fileUrl = res.result.url
      this.fileList[obj].objectId = res.result.object
      this.fileList[obj].fileName = res.result.filename
      /* switch (obj) {
        case 0:
          this.fileList[obj].fileDesc = 'highLight'
          break
        case 1:
          this.fileList[obj].fileDesc = 'normalSmall'
          break
        case 2:
          this.fileList[obj].fileDesc = 'normalBig'
          break
        case 3:
          this.fileList[obj].fileDesc = 'disabled'
          break
      } */
    },
    beforeUp(file) {
      const reader = new FileReader()
      reader.onload = function(event) {
        const txt = event.target.result
        const img = document.createElement('img')
        img.src = txt
        img.onload = function() {
          /* console.log(img.width)
          console.log(img.height) */
        }
      }
      reader.readAsDataURL(file)
    },
    submitForm() {
      /* if (this.$refs.ruleForm.validateField('fileList')) {
        return false
      } */
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.form.modelType === 1) {
            this.form.jsonObject = this.jsonObject
          }
          const list = this.fileList.filter((e) => {
            console.log(e)
            return e.objectId !== ''
          })
          this.form.fileList = list
          if (this.propData.status) {
            this.form.subCategoryId = this.propData.subCategoryId
            this.form.categoryNumber = this.propData.categoryNumber
            const params = Object.assign({}, this.form)
            params.deviceCategoryId = Number(this.propData.deviceCategoryId)
            editSonCategory({ params }).then((res) => {
              if (res.data.code === 200 || res.data.code === 0) {
                this.$message({
                  type: 'success',
                  message: '编辑完成'
                })
                this.$emit('closeAddDialog', 1) 
              }
            })
          } else {
            this.form.categoryNumber = this.propData.categoryNumber
            this.form.categoryId = this.propData.categoryId
            const params = Object.assign({}, this.form)
            addSonCategory({ params }).then((res) => {
              if (res.data.code === 200 || res.data.code === 0) {
                this.$message({
                  type: 'success',
                  message: '新增成功'
                })
                this.$emit('closeAddDialog', 1)
              }
            })
          }
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$emit('closeAddDialog')
    },
    handleChange(file, fileList) {
      if (fileList.length > 1) {
        fileList.splice(0, 1)
      }
      const files = fileList[0]
      console.log(fileList)
      this.jsonFileList = fileList
      console.log(this.jsonFileList)
      const reader = new FileReader()
      reader.readAsText(files.raw)
      reader.onload = (e) => {
      // 读取文件内容
        const fileString = e.target.result
        // 需要给其重新赋值否则转对象失败
        const strObj = fileString
        console.log(strObj)
        this.jsonObject = JSON.parse(strObj)
        console.log(this.jsonObject)
      }
    },
    beforeUpload(file) {
      /* const name = file.name
      const type = name.substring(name.lastIndexOf('.') + 1)
      if (type !== 'xsl') {
        this.$message.error('请上传json文件格式')
        return false
      } */
      if (file.size > 1024 * 1024) {
        this.$message.error('文件大小超过1M请重试')
        return false
      }
    }
  }
}
</script>

<style lang='scss' scoped>
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
