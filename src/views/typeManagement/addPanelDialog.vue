<template>
  <div>
    <el-dialog 
      :append-to-body="true" 
      :visible.sync="dialogFormVisible" 
      :before-close="resetForm" 
      title="新增面板页面" 
      class="imgbox" 
      width="50%">
      <el-form 
        ref="ruleForm" 
        :rules="rules" 
        :model="form" 
        reset-fields 
        label-width="150px">
        <el-form-item 
          label="页面ID" 
          prop="pageId">
          <el-input 
            :disabled = "status ==='edit'"
            v-model="form.pageId" 
            autocomplete="off" 
            placeholder="请输入组织名"/>
        </el-form-item>
        <el-form-item 
          label="页面名称" 
          prop="pageName">
          <el-input 
            v-model="form.pageName"
            placeholder="请输入页面名称"/>
        </el-form-item>
        <el-form-item 
          label="初始化状态是否启用" 
          prop="pageEnable">
          <el-radio-group v-model="form.pageEnable">
            <el-radio :label="1">是</el-radio>
            <el-radio :label="0">否</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item
          v-if="status==='add'" 
          label="排序" 
          prop="sort">
          <el-radio-group v-model="form.sort">
            <el-radio :label="0">排在前面</el-radio>
            <el-radio :label="1">排在后面</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item 
          v-if="status==='add'" 
          label="备注" 
          prop="remark">
          <span style="color:red">{{ title }}</span>
        </el-form-item>
      </el-form>
      <div 
        slot="footer" 
        class="dialog-footer">
        <el-button @click="resetForm">取 消</el-button>
        <el-button 
          type="primary" 
          @click="submitForm('ruleForm')">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>
<script>
import {panelList, panelHandler} from '@/api/panel'
export default {
  props: {
    dialogFormVisible: {
      type: Boolean,
      default: false
    },
    tableData:{
      type: Array,
      default: function(){
        return []
      }
    },
    status:{
      type: String,
      default: ''
    },
    rowData:{
      type: Object,
      default: function(){
        return {}
      }
    }
  },
  data() {
    const valate = (rule, value, callback) => {
      const reg = /^[0-9]\d*$/ //匹配整数
      if (reg.test(value)) {
        callback()
      } else {
        callback(new Error('请输入整数且不包括负整数'))
      }
    }
    return {
      // sortNo: Number,
      title:'新增后将不可删除，手机App将一直显示该项，请谨慎操作',
      form: {
        pageId:'',
        pageName:'',
        pageEnable: 0,
        sort: 1
      },
      rules: {
        pageId: [
          { required: true, validator: valate, trigger: 'blur' }
        ],
        pageName: [
          { required: true, message: '请输入页面名称', trigger: 'change' }
        ],
        pageEnable: [
          { required: true, message: '请选择初始化状态', trigger: 'change' }
        ],
        sort:[
          { required: true, message: '请选择排序方式', trigger: 'change' }
        ]
      }
    }
  },
  computed:{
    sortNo:function(){
      if(this.form.sort === 0){ //排前面
        // return 0
        return this.tableData[0].sortNo - 1
      }else{
        return this.tableData[this.tableData.length-1].sortNo + 1
      }
    }
  },
  created() {
    if(this.status === 'edit'){
      this.form.pageId = this.rowData.pageId
      this.form.pageName = this.rowData.pageName
      this.form.pageEnable = this.rowData.pageEnable
      this.form.sortNo = this.rowData.sortNo
    }
  },
  methods: {
    submitForm() {
      console.log(this.sortNo)
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(this.form)
          if(this.status === 'add'){
            this.form.pageId = Number(this.form.pageId)
            this.$confirm('新增后将不可删除，手机App将一直显示该项，请谨慎操作, 是否继续?', '提示', {
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning'
            }).then(() => {   
              const params = Object.assign({},this.form)
            
              params.sortNo = this.sortNo
              delete params.sort
              panelHandler(params).then(res=>{
                if(res.code === 200){
                  this.$message({
                    type: 'success',
                    message: '新增成功!'
                  })
                }
                this.$emit('closeAddDialog',1)
              })
            }).catch(() => {
              this.$message({
                type: 'info',
                message: '已取消'
              })          
            })
          }else{
            const params = Object.assign({},this.form)
            delete params.sort
            panelHandler(params).then(res=>{
              if(res.code === 200){
                this.$message({
                  type: 'success',
                  message: '编辑完成!'
                })
              }
              this.$emit('closeAddDialog',1)
            }) 
          }
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$emit('closeAddDialog')
    }
  }
}
</script>

<style scoped>

</style>
