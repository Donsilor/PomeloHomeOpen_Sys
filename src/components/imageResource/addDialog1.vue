<template>
  <div>
    <el-dialog 
      :title="propData.status === 0 ?'添加图片':propData.status === 2 ?'编辑':'查看'" 
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
        label-width="100px">
        <el-form-item 
          label="中文名称" 
          prop="categoryName">
          <el-input 
            v-model="form.categoryName" 
            :disabled="propData.status===2" 
            autocomplete="off" 
            type="text" 
            placeholder="请输入"/>
        </el-form-item>
        <el-form-item 
          label="英文名称" 
          prop="categoryNameE">
          <el-input 
            v-model="form.categoryNameE" 
            :disabled="propData.status===2" 
            autocomplete="off" 
            type="text" 
            placeholder="请输入"/>
        </el-form-item>
        <el-form-item 
          label="图片" 
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
            </el-col>
            <!-- 默认状态小尺寸 -->
          </el-row>
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
import {imageTypegory} from '@/api/image.js'
import { addSubCategory, editSubCategory, detailSubCategory } from '@/api/categoryManager'
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
    const categoryName = (rule, value, callback) => {
      const reg = /^[1-9]\d*$/
      if (value === '') {
        callback(new Error('中文名不能为空'))
      } else {
        callback()
      }
    }
    const categoryNameE = (rule, value, callback) => {
      const reg = /^[1-9]\d*$/
      if (value === '') {
        callback(new Error('英文名不能为空'))
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
          fileKey: '',
          fileUrl: '',
          fileDesc: 'highLight',
          fileName: ''
        },
      ],
      jsonObject: null,
      form: {
        categoryName: '',
        categoryNameE:'',
      },
      highLightUrl: '', // 测试
      rules: {
        categoryName: [
          // { required: true, message: '英文名不能为空', trigger: 'blur' }
          { required: true, validator: categoryName, trigger: 'blur' }
        ],
        categoryNameE: [
          // { required: true, message: '中文名不能为空', trigger: 'blur' }
          { required: true, validator: categoryNameE, trigger: 'blur' }
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
    if (this.propData.status !== 0) {
      const params = {
        categoryId: this.propData.categoryId
      }
      detailSubCategory({ params }).then((res) => {
        console.log(res.data.data)
        this.$nextTick(() => {
          this.form.categoryName = res.data.data.categoryName
          this.form.categoryNameE = res.data.data.ecategoryNameE
          console.log('我是返回来的', res.data.data.fileList)
          if (JSON.stringify(res.data.data.fileList) !== 'null' && res.data.data.fileList.length !== 0) {
            res.data.data.fileList.forEach((e, index) => {
              this.fileList.forEach((ele, i) => {
                if (e.fileDesc === ele.fileDesc) {
                  ele.fileKey = e.fileKey
                  ele.fileUrl = e.fileUrl
                  ele.fileName = e.fileName
                }
              })
            })
            console.log('我是已经有的', this.fileList)
          }
        })
      })
    }
  },
  methods: {
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
      console.log(res.result)
      this.fileList[obj].fileUrl = res.result.url
      this.fileList[obj].fileKey = res.result.md5
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
          this.form.categoryId = this.propData.categoryId
          const list = this.fileList.filter((e) => {
            console.log(e)
            return e.fileKey !== ''
          })
          this.form.fileList = list
          if (this.propData.status) {
            const params = Object.assign({}, this.form)
            editSubCategory({ params }).then((res) => {
              if (res.data.code === 200 || res.data.code === 0) {
                this.$message({
                  type: 'success',
                  message: '编辑完成'
                })
                this.$emit('closeAddDialog', 1)
              }
            })
          } else {
            const params = Object.assign({}, this.form)
            addSubCategory({ params }).then((res) => {
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
    margin-left: 100px;
    margin-top: 30px;
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
