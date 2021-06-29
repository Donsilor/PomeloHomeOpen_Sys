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
          prop="displayName">
          <el-input 
            v-model="form.displayName" 
            :disabled="propData.status===1" 
            autocomplete="off" 
            type="text" 
            placeholder="请输入中文名称"/>
        </el-form-item>
        <el-form-item 
          label="英文名称" 
          prop="identityName">
          <el-input 
            v-model="form.identityName" 
            :disabled="propData.status===1" 
            autocomplete="off" 
            type="text" 
            placeholder="请输入英文名称"/>
        </el-form-item>
        <el-form-item 
          label="图片描述" 
          prop="description">
          <el-input 
            v-model="form.description" 
            :disabled="propData.status===1" 
            autocomplete="off" 
            type="text" 
            placeholder="请输入图片描述"/>
        </el-form-item>
        <el-form-item 
          label="图片" 
          prop="pathKey">
          <!-- 高亮 -->
          <el-upload
            :disabled="propData.status === 1" 
            :data="data"
            :show-file-list="false"
            :on-success="(res,file)=>{handleAvatarSuccess(0,res,file)}"
            class="avatar-uploader"
            action="/api/index.php/files/save"
            accept="image/png/jpg">
            <img
              v-if="fileUrl!==''"
              :src="fileUrl"
              class="avatar">
            <i
              v-else
              class="el-icon-plus avatar-uploader-icon"/>
          </el-upload>
        </el-col>
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
import {imageDetailUpdate, imageDetailAdd, imageDetailsGetById} from '@/api/image.js'
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
    const urlVerti = (rule, value, callback) => {
      if (this.fileUrl === '') {
        callback(new Error('请上传图片'))
      } else {
        callback()
      }
    }
    const displayName = (rule, value, callback) => {
      const reg = /^[1-9]\d*$/
      if (value === '') {
        callback(new Error('中文名不能为空'))
      } else {
        callback()
      }
    }
    const identityName = (rule, value, callback) => {
      const reg = /^[1-9]\d*$/
      if (value === '') {
        callback(new Error('英文名不能为空'))
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
      fileList: [],
      fileUrl: '',
      form: {
        displayName: '',
        identityName:'',
        pathKey:'',
        fileName:'',
        description: ''
      },
      rules: {
        displayName: [
          // { required: true, message: '英文名不能为空', trigger: 'blur' }
          { required: true, validator: displayName, trigger: 'blur' }
        ],
        identityName: [
          // { required: true, message: '中文名不能为空', trigger: 'blur' }
          { required: true, validator: identityName, trigger: 'blur' }
        ],
        pathKey: [
          { required: true, validator: urlVerti, trigger: 'change' }
        ],
      }
    }
  },
  created() {
    console.log(this.propData.status)
    if (this.propData.status !== 0) {
      const params = {
        id: this.propData.id
      }
      console.log(params)
      imageDetailsGetById(params).then((res) => {
        console.log(res.data)
        this.$nextTick(() => {
          Object.keys(this.form).forEach(e=>{
            this.form[e] = res.data[e]
          })
          this.fileUrl = res.data.fileUrl
        })
      })
    }
  },
  methods: {
    // 上传图片
    handleAvatarSuccess(obj, res, file) {
      if (res.code !== 200) {
        this.$message.error('上传出错，请重新上传')
        return
      }
      this.fileUrl = res.result.url
      this.form.pathKey = res.result.object
      this.form.fileName = res.result.filename
    },
    submitForm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const params = Object.assign({}, this.form)
          params.id = this.propData.id
          if (this.propData.status === 2) {
            imageDetailUpdate(params).then((res) => {
              if (res.code === 200) {
                this.$message({
                  type: 'success',
                  message: '编辑完成'
                })
                this.$emit('closeAddDialog', 1)
              }
            })
          } else {
            params.classId = this.propData.classId
            imageDetailAdd( params ).then((res) => {
              if (res.code === 200) {
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
