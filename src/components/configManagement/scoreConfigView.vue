<template>
  <el-dialog
    :close-on-click-modal="false"
    :visible.sync="addView"
    :before-close="closeView"
    :title="op==='add'?'添加分数':'修改分数'"
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
            <!-- 房间等级 -->
            <el-select 
              v-if="item.key === 'scoreLevel'" 
              v-model="formData[item.key]" 
              placeholder="请选择">
              <el-option
                v-for="item in levelList"
                :key="item.value"
                :label="item.label"
                :value="item.value"/>
            </el-select>
            <!-- 房间颜色 -->
            <template v-else-if="item.key === 'scoreColor'">
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
import { addScore,updateScore} from '@/api/config.js'
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
      if (isNaN(value.trim())) {
        console.log('非数字')
        callback(new Error('请输入合法的数值'))
      } else {
        callback()
      }
    }
    return {
      paramsList:[
        {title:'房间分数等级',key:'scoreLevel',required:true},
        {title:'房间分数描述',key:'scoreDesc',required:true},
        {title:'房间分数颜色',key:'scoreColor',required:false},
        {title:'房间分数边界值',key:'scoreBorder',required:true,type:'number'},
        {title:'房间分数比较符号',key:'scoreSymbol',required:true}
      ],
      formData:{
        scoreLevel:'',
        scoreDesc:'',
        scoreColor:'',
        scoreBorder:'',
        scoreSymbol:''
      },
      rules:{
        scoreLevel:[
          { required: true, message: '房间分数等级不能为空',trigger: 'blur' }
          // { validator:numValidator,trigger: 'blur'}
        ],
        scoreDesc:[
          { required: true, message: '房间分数描述不能为空',trigger: 'blur' }
        ],
        scoreBorder:[
          { required: true, message: '房间分数边界值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ],
        scoreSymbol:[
          { required: true, message: '房间分数比较符号不能为空' ,trigger: 'blur'}
        ]
      },
      levelList:[
        {label:'不及格',value:0},
        {label:'及格',value:1},
        {label:'良好',value:2},
        {label:'优秀',value:3},
      ]
    }
  },
  created() {
    if(this.configDetail){
      Object.assign(this.formData,this.configDetail)
    }
  },
  methods: {
    refresh(){
      this.$emit('refresh')
    },
    addFuc(){
      this.$refs['paramsForm'].validate(valid => {
        console.log('验证结果：',valid)
        if (valid) {
          if (this.op === 'add') {
            addScore(this.formData).then(res=>{
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
            updateScore(params).then(res=>{
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
    change(val) {
      console.log(val)
    },
    closeView(){
      this.$emit('closeView')
    }
  }
}
</script>