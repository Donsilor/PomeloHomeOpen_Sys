<template>
  <el-dialog
    :close-on-click-modal="false"
    :visible.sync="addView"
    :before-close="closeView"
    :title="op==='add'?'添加配置':'修改配置'"
    width="60%">
    <el-form
      ref="paramsForm"
      :model="formData"
      :rules="rules"
      label-width="150px">
      <el-row>
        <el-col 
          v-for="(item,index) in paramsList" 
          :span="12" 
          :key="index" >
          <el-form-item
            :prop="''+item.key+''"
            :label="item.title">
            <!-- 房间颜色 -->
            <template v-if="item.key === 'bgColor'">
              <el-col
                :span="18"
              >
                <el-input 
                  v-model="formData[item.key]" 
                  type="input"/>
              </el-col>
              <el-col
                :span="6"
              >
                <colorPicker
                  v-model="formData[item.key]"
                  style="margin-left:25%" />
              </el-col>
            </template>
            <el-input
              v-else
              v-model="formData[item.key]" 
              :type="item.type?item.type:'text'"/>
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
import { addRoom,updateRoom} from '@/api/config.js'
export default {
  props:{
    addView:{
      type:Boolean
    },
    configDetail:{
      type:Object || null
    },
    op:{
      type:String
    }
  },
  data() {
    //检测是否为数值
    var numValidator =  (rule, value, callback)=>{
      // callback()
      console.log('value:',value)
      if (isNaN(value.toString().trim())) {
        console.log('非数字')
        callback(new Error('请输入合法的数值'))
      } else {
        callback()
      }
    }
    return {
      paramsList:[
        {title:'roomID',key:'roomId',required:true,type:'number'},
        {title:'名称',key:'roomName',required:true},
        {title:'图片',key:'bgPic',required:true},
        {title:'图标',key:'bgIcon',required:true},
        {title:'色值',key:'bgColor',required:true},
        {title:'排序值',key:'order',required:true,type:'number'}
      ],
      formData:{
        roomId:'',
        roomName:'',
        bgPic:'',
        bgIcon:'',
        bgColor:'',
        order:''
      },
      rules:{
        roomId:[
          { required: true, message: 'roomId不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ],
        roomName:[
          { required: true, message: '名称不能为空',trigger: 'blur' }
        ],
        order:[
          { required: true, message: '排序值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ]
      }
    }
  },
  created() {
    if(this.configDetail){
      Object.assign(this.formData,this.configDetail)
    }
  },
  methods: {
    addFuc(){
      this.$refs['paramsForm'].validate(valid => {
        console.log('验证结果：',valid)
        if (valid) {
          if (this.op === 'add') {
            addRoom(this.formData).then(res=>{
              console.log('添加返回结果：',res)
              if (res.code === 200) {
                this.$message.success('添加成功！')
                this.refresh()
                this.closeView()
              }else{
                this.$message.error('添加失败！')
              }
            })
          }else{
            const params = Object.assign({},this.configDetail,this.formData)
            updateRoom(params).then(res=>{
              console.log('修改返回结果：',res)
              if (res.code === 200) {
                this.$message.success('修改成功！')
                this.refresh()
                this.closeView()
              }else{
                this.$message.error('修改失败！')
              }
            })
          }   
        }
      })
      console.log('formData:',JSON.stringify(this.formData))
    },
    closeView(){
      this.$emit('closeView')
    },
    refresh(){
      this.$emit('refresh')
    }
  }
}
</script>