<template>
  <el-dialog
    :close-on-click-modal="false"
    :visible.sync="showDialog"
    :before-close="closeView"
    :title="op==='view'?'查看消息分发':'修改消息分发'"
    width="60%">
    <el-form
      ref="paramsForm"
      :model="formData"
      :rules="rules"
      label-width="100px">
      <el-row>
        <el-col
          v-for="(item,index) in paramsList"
          :key="index" >
          <el-form-item
            :prop="''+item.key+''"
            :label="item.title">
            <el-input
              v-if="item.key === 'topic'"
              v-model="formData[item.key]"/>
            <el-input
              v-else
              v-model="formData[item.key]"
              disabled/>
          </el-form-item>
        </el-col>
      </el-row>
    </el-form>
    <span
      slot="footer"
      class="dialog-footer">
      <el-button @click="closeView">取 消</el-button>
      <el-button
        type="primary"
        @click="addFuc">{{ op === 'add'?'添 加':'修 改' }}</el-button>
    </span>
  </el-dialog>
</template>
<script>
// import { updateExample } from '@/api/example.js'
// import { msgCreate } from '@/api/baseSet.js'
// import { storeList, usersList } from '@/api/advManage.js'
import {updateTopic} from '@/api/messageDistribution'
export default {
  components: {
  },
  props: {
    showDialog: {
      type: Boolean,
      default:false
    },
    dialogDetail: {
      type: Object || null,
      default:null
    },
    op: {
      type: String,
      default:''
    }
  },
  data() {
    // 检测是否为数值
    // var numValidator = (rule, value, callback) => {
    //   // callback()
    //   console.log('value:', value)
    //   if (isNaN(value.toString().trim())) {
    //     console.log('非数字')
    //     callback(new Error('请输入合法的数值'))
    //   } else {
    //     callback()
    //   }
    // }
    return {
      paramsList: [
        { title: '厂商id', key: 'id', required: true, type: 'text' },
        { title: '厂商名', key: 'name', required: true, type: 'textarea' },
        { title: '厂商topic', key: 'topic', required: true }
      ],
      formData: {
        id: '',
        name: '',
        topic: '',
        // bgIcon: '',
        // bgColor: 'false',
        // order: ''
      },
      rules: {
        topic: [
          { required: true, message: '请输入厂商topic', trigger: 'blur' },
        ]
        // roomName: [
        //   { required: true, message: '名称不能为空', trigger: 'blur' }
        // ],
        // order: [
        //   { required: true, message: '排序值不能为空', trigger: 'blur' },
        //   { validator: numValidator, trigger: 'blur' }
        // ]
      },
      listQuery: {
        page: 1,
        pageSize: 100
      },
      storesBinds: [],
      usersBinds: []
    }
  },
  created() {
    if (this.dialogDetail) {
      console.log('this.this.dialogDetail:', this.dialogDetail)
      Object.assign(this.formData, this.dialogDetail)
    }
  },
  methods: {
    addFuc() {
      this.$refs.paramsForm.validate(valid => {
        console.log('验证结果：', valid)
        if (valid) {
          if (this.op === 'add') {
            console.log('add')
          } else {
            const params = {
              id:this.formData.id,
              topic:this.formData.topic
            }
            updateTopic(params).then(res => {
              console.log('修改返回结果：', res)
              if (res.code === 0) {
                this.$message.success('修改成功！')
                this.refresh()
                this.closeView()
              } else {
                this.$message.error('修改失败！')
              }
            })
          }
        }
      })
      console.log('formData:', JSON.stringify(this.formData))
    },
    closeView() {
      this.$emit('closeView')
    },
    refresh() {
      this.$emit('refresh')
    }
  }
}
</script>
