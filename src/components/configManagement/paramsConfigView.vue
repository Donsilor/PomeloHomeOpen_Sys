<template>
  <el-dialog
    :close-on-click-modal="false"
    :visible.sync="addView"
    :before-close="closeView"
    :title="op==='add'?'添加参数':'修改参数'"
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
            <el-switch
              v-if="item.key === 'enable'"
              v-model="formData[item.key]"
              active-text="启用"
              inactive-text="未启用"/>
            <el-input 
              v-else
              :disabled="item.key === 'param_name' && op==='edit'?true:false"
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
        @click="addFuc">{{ op==='add'?'添 加':'修 改' }}</el-button>
    </span>
  </el-dialog>  
</template>
<script>
import { addParams,updateParams } from '@/api/config.js'
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
    //检测是否为调节间隔的整数倍
    var stepTimesValidator =  (rule, value, callback)=>{
      // callback()
      const step = this.formData.step
      if ((step === '' || isNaN(step)) || (value === '' || isNaN(value))) {
        callback()
      }else if(parseFloat(value)%parseFloat(step) !== 0){
        callback('请输入调节间隔的整数倍')
      }else{
        callback()
      }
    }
    //检测是否小于最小值
    var minValidator =  (rule, value, callback)=>{
      // callback()
      const min = this.formData.min
      if (min === '' || isNaN(min)) {
        callback()
      }else if(parseFloat(value) < parseFloat(min)){
        callback('输入的值不能小于最小值')
      }else{
        callback()
      }
    }
    //检测是否大于最大值
    var maxValidator =  (rule, value, callback)=>{
      // callback()
      const max = this.formData.max
      if (max === '' || isNaN(max)) {
        callback()
      }else if(parseFloat(value) > parseFloat(max)){
        callback('输入的值不能大于最大值')
      }else{
        callback()
      }
    }
    const stepValidator  = (rule, value, callback)=>{
      // console.log('targetValue:',targetValue);
      const targetValue = this.formData.step
      if (targetValue.trim() === '') {
        callback(new Error('调节间隔不能为空'))
      }else if (isNaN(targetValue.trim())) {
        console.log('非数字')
        callback(new Error('请输入合法的数值！'))
      } else {
        callback()
      }
    }
    return {
      isClear: false,
      detail:"",
      title:'',
      paramsList:[
        // {title:'room_id',key:'room_id',required:true,type:'number'},
        {title:'名称',key:'param_name',required:true},
        {title:'中文名称',key:'param_desc',required:true},
        {title:'单位',key:'unit',required:true},
        {title:'等级"低"名称',key:'name_low',required:true},
        {title:'等级"中"名称',key:'name_mid',required:true},
        {title:'等级"高"名称',key:'name_high',required:true},
        {title:'调节间隔',key:'step',required:true,type:'number'},
        {title:'最小值',key:'min',required:true,type:'number'},
        {title:'调节默认低值',key:'default_low',required:true,type:'number'},
        {title:'舒适默认低值',key:'comfort_low',required:true,type:'number'},
        {title:'舒适默认高值',key:'comfort_high',required:true,type:'number'},
        {title:'调节默认高值',key:'default_high',required:true,type:'number'},
        {title:'最大值',key:'max',required:true,type:'number'},
        {title:'权重',key:'weight',required:true,type:'number'},
        {title:'参数a',key:'curve_a',required:true,type:'number'},
        {title:'参数b',key:'curve_b',required:true,type:'number'},
        {title:'参数c',key:'curve_c',required:true,type:'number'},
        {title:'启用状态',key:'enable',required:true,type:'number'}
        // {title:'是否变更排序',key:'order_change',required:true}
      ],
      formData:{
        // id:'',
        param_name:'',
        param_desc:'',
        unit:'',
        name_low:'',
        name_mid:'',
        name_high:'',
        step:'',
        min:'',
        defalut_low:'',
        comfort_low:'',
        comfort_high:'',
        defalut_high:'',
        max:'',
        weight:'',
        curve_a:'',
        curve_b:'',
        enable:''
        // order_change:'',
      },
      rules:{
        id:[
          // { required: true, message: 'id不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ],
        param_name:[
          { required: true, message: '名称不能为空',trigger: 'blur' }
        ],
        unit:[
          // { required: true, message: '单位不能为空',trigger: 'blur' }
        ],
        name_low:[
          // { required: true, message: '等级"低"名称不能为空',trigger: 'blur' }
        ],
        name_mid:[
          // { required: true, message: '等级"中"名称不能为空' ,trigger: 'blur'}
        ],
        name_high:[
          // { required: true, message: '等级"高"名称不能为空',trigger: 'blur' }
        ],
        step:[
          // { required: true, message: '调节间隔不能为空',trigger: 'blur'},
          { validator: numValidator, trigger: 'blur'}
        ],
        min:[
          // { required: true, message: '最小值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        defalut_low:[
          // { required: true, message: '调节默认低值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        comfort_low:[
          // { required: true, message: '舒适默认低值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        comfort_high:[
          // { required: true, message: '舒适默认高值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        defalut_high:[
          // { required: true, message: '调节默认高值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        max:[
          // { required: true, message: '最大值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'}
        ],
        weight:[
          // { required: true, message: '权重不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ],
        curve_a:[
          // { required: true, message: '参数a不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ],
        curve_b:[
          // { required: true, message: '参数b不能为空' ,trigger: 'blur'},
          { validator:numValidator,trigger: 'blur'}
        ],
        curve_c:[
          // { required: true, message: '参数c不能为空' ,trigger: 'blur'},
          { validator:numValidator,trigger: 'blur'}
        ],
        enable:[
          // { required: true, message: '启用状态不能为空' ,trigger: 'blur'}
        ],
        order_change:[
          // { required: true, message: '是否变更排序不能为空',trigger: 'blur' }
        ],
      }
    }
  },
  created() {
    if(this.configDetail){
      Object.assign(this.formData,this.configDetail)
      this.formData.enable = this.formData.enable=== 1?true:false
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
          const params = Object.assign({},this.formData)
          params.enable = params.enable?1:0
          if (this.op==='add') {
            addParams(params).then(res=>{
              console.log('添加参数返回：',res)
              if (res.code) {
                this.$message.success('添加成功！')
                this.refresh()
                this.closeView()
              }else{
                this.$message.error(res.msg)
              }
            })
          }else{
            updateParams(params).then(res=>{
              console.log('修改参数返回：',res)
              if (res.code) {
                this.$message.success('修改成功！')
                this.refresh()
                this.closeView()
              }else{
                this.$message.error(res.msg)
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