<template>
<el-dialog
      :close-on-click-modal="false"
      :visible.sync="addView"
      :before-close="closeView"
      :title="op==='add'?'添加配置':'修改配置'"
      width="60%">
      <el-form
      :model="formData"
        :rules="rules"
        ref="paramsForm"
        label-width="150px">
        <el-row>
          <el-col :span="12" v-for="(item,index) in paramsList" :key="index" >
            <el-form-item
              :prop="''+item.key+''"
              :label="item.title">
              <el-input 
                v-model="formData[item.key]" 
                type="input"/>
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
          @click="addFuc">确 定</el-button>
      </span>
</el-dialog>  
</template>
<script>
import { Step } from 'element-ui';
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
  created() {
    if(this.configDetail){
      Object.assign(this.formData,this.configDetail)
    }
  },
  data() {
      //检测是否为数值
    var numValidator =  (rule, value, callback)=>{
      // callback()
        console.log('value:',value);
        if (isNaN(value.trim())) {
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
        if (step === '' || isNaN(step)) {
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
        {title:'roomID',key:'id',required:true},
        {title:'名称',key:'param_name',required:true},
        {title:'图片',key:'unit',required:true},
        {title:'图标',key:'name_low',required:true},
        {title:'色值',key:'name_low',required:true},
        {title:'排序值',key:'name_low',required:true}
      ],
      formData:{
        id:'',
        param_name:'',
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
        expect:'',
        variance:'',
        enable:'',
        order_change:'',
      },
      rules:{
        id:[
          { required: true, message: 'id不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ],
        param_name:[
          { required: true, message: '名称不能为空',trigger: 'blur' }
        ],
        unit:[
          { required: true, message: '单位不能为空',trigger: 'blur' }
        ],
        name_low:[
          { required: true, message: '等级"低"名称不能为空',trigger: 'blur' }
        ],
        name_mid:[
          { required: true, message: '等级"中"名称不能为空' ,trigger: 'blur'}
        ],
        name_high:[
          { required: true, message: '等级"高"名称不能为空',trigger: 'blur' }
        ],
        step:[
          { required: true, message: '调节间隔不能为空',trigger: 'blur'},
          { validator: numValidator, trigger: 'blur'}
        ],
        min:[
          { required: true, message: '最小值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        defalut_low:[
          { required: true, message: '调节默认低值不能为空',trigger: 'blur' },
         { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        comfort_low:[
          { required: true, message: '舒适默认低值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        comfort_high:[
          { required: true, message: '舒适默认高值不能为空',trigger: 'blur' },
         { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        defalut_high:[
          { required: true, message: '调节默认高值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'},
          { validator:maxValidator,trigger: 'blur'}
        ],
        max:[
          { required: true, message: '最大值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'},
          { validator:stepTimesValidator,trigger: 'blur'},
          { validator:minValidator,trigger: 'blur'}
        ],
        weight:[
          { required: true, message: '权重不能为空',trigger: 'blur' },
         { validator:numValidator,trigger: 'blur'}
        ],
        expect:[
          { required: true, message: '正太分布期望值不能为空',trigger: 'blur' },
          { validator:numValidator,trigger: 'blur'}
        ],
        variance:[
          { required: true, message: '正太分布方差不能为空' ,trigger: 'blur'},
          { validator:numValidator,trigger: 'blur'}
        ],
        enable:[
          { required: true, message: '启用状态不能为空' ,trigger: 'blur'}
        ],
        order_change:[
          { required: true, message: '是否变更排序不能为空',trigger: 'blur' }
        ],
      }
    }
  },
  methods: {
    addFuc(){
       this.$refs['paramsForm'].validate(valid => {
         console.log('验证结果：',valid);
            if (valid) {
              
            }
          })
      console.log('formData:',JSON.stringify(this.formData));
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