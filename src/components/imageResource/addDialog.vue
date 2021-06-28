<template>
  <div>
    <el-dialog
      :title="
        propData.status === 0
          ? '新增类型'
          : '编辑类型'
      "
      :visible.sync="addDialogVisible"
      :before-close="resetForm"
      :append-to-body="true"
      :close-on-click-modal="false"
      class="imgbox"
      width="50%"
    >
      <el-form
        ref="ruleForm"
        :rules="rules"
        :model="form"
        reset-fields
        label-width="100px"
      >
        <el-form-item 
          label="所属类别" 
          prop="parentName">
          <el-input
            :disabled="propData.val !== 'top'"
            v-model="form.parentName"
            autocomplete="off"
            type="text"
            placeholder="所属类别"
          />
        </el-form-item>
        <el-form-item 
          label="类型" 
          prop="className">
          <el-input
            v-model="form.className"
            autocomplete="off"
            type="text"
            placeholder="请输入类型"
          />
        </el-form-item>
        <el-form-item 
          label="功能" 
          prop="usage">
          <el-input
            v-model="form.usage"
            autocomplete="off"
            placeholder="请输入功能"
          />
        </el-form-item>
        <el-form-item 
          label="英文名" 
          prop="identityName">
          <el-input
            v-model="form.identityName"
            autocomplete="off"
            type="text"
            placeholder="请输入类型"
          />
        </el-form-item>
      </el-form>
      <div 
        slot="footer" 
        class="dialog-footer">
        <el-button @click="resetForm">{{
          propData.status !== 1 ? '取 消' : '关 闭'
        }}</el-button>
        <el-button
          v-if="propData.status !== 1"
          type="primary"
          @click="submitForm('ruleForm')"
        >确 定</el-button
        >
      </div>
    </el-dialog>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import {
  imageTypegoryAdd,
  imageUpdate
} from '@/api/image'
export default {
  props: {
    addDialogVisible: {
      type: Boolean,
      default: false,
    },
    propData: {
      type: Object,
      default: function() {
        return {}
      },
    },
  },
  data() {
    /* const urlVerti = (rule, value, callback) => {
      if (this.fileList.length < 1) {
        callback(new Error('至少上传一张图片'))
      } else {
        callback()
      }
    } */
    return {
      data: {
        type: 12,
        token: getToken(),
      },
      
      token: localStorage.getItem('authorization'),
      form: {
        className: '',
        usage: '',
        identityName:'',
        parentName:'',
        parentId:''
      },
      id:1,
      rules: {
        className: [
          { required: true, message: '类型不能为空', trigger: 'change' },
        ],
        identityName:[
          { required: true, message: '英文名称不能为空', trigger: 'change' },
        ],
        usage: [{ required: true, message: '功能不能为空', trigger: 'blur' }],
        parentName: [{ required: true, message: '父级类别名不能为空', trigger: 'blur' }],
      },
    }
  },
  created() {
    if(this.propData.status){
      Object.keys(this.form).forEach(e =>{
        this.form[e] = this.propData[e]
      })
      console.log(this.form)
    }
    if(this.propData.val === 'son'){
      this.form.parentId = this.propData.parentId
      this.form.parentName = this.propData.name
    }
  },
  methods: {
    submitForm() {
      /* if (this.$refs.ruleForm.validateField('fileList')) {
        return false
      } */
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          if (this.propData.status === 2) {
            const params = Object.assign({}, this.form)
            if(this.propData.val === 'top') params.parentId = null
            params.id = this.propData.id
            imageUpdate(params).then((res) => {
              console.log(1)
              if (res.code === 200 ) {
                this.$message({
                  type: 'success',
                  message: '编辑完成',
                })
                this.$emit('closeAddDialog', 1)
              }
            })
          } else {
            const params = Object.assign({}, this.form)
            if(this.propData.val === 'top') params.parentId = null
            imageTypegoryAdd( params ).then((res) => {
              if (res.code === 200 || res.code === 0) {
                this.$message({
                  type: 'success',
                  message: '新增成功',
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
  },
}
</script>

<style lang='scss' scoped>
.el-col-5 {
  text-align: center;
}
/deep/ .el-upload {
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
  border-color: #409eff;
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
