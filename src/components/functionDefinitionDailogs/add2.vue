<template>
  <div>
    <!-- 新增参数Dialog -->
    <el-dialog
      width="30%"
      title="新增参数1"
      :close-on-click-modal="false"
      :append-to-body="true"
      :visible.sync="lastAddDialog"
      :before-close="closeAddDialog">
      <el-form ref="paramsRuleForm"
        :rules="paramsRules"
        :model="paramsRuleForm"
        label-position="top">
        <el-form-item  prop="name">
          <el-row slot="label">
            <span style="margin-right:2px" class="name">参数名称</span>
            <el-tooltip content="必填，支持中文、大小写字母、数字、短划线、下划线和小数点，必须以中文、英文或数字开头，不超过 30 个字符。" placement="right" effect="light">
              <span class="el-icon-question" ></span>
            </el-tooltip>
          </el-row>
          <el-input v-model="paramsRuleForm.name" placeholder="请输入参数名称" :maxlength="30"></el-input>
        </el-form-item>
        <el-form-item prop="identifier">
          <el-row slot="label">
            <span style="margin-right:2px" class="name">标识符</span>
            <el-tooltip content="支持大小写字母、数字和下划线、不超过 50 个字符。" placement="right" effect="light">
              <span class="el-icon-question"></span>
            </el-tooltip>
          </el-row>
          <el-input v-model="paramsRuleForm.identifier" placeholder="请输入标识符" :maxlength="50"></el-input>
        </el-form-item>
        <!-- 属性独有 -->
        <el-form-item label="数据类型" prop="dataType" :required="true">
          <el-select v-model="paramsRuleForm.dataType" placeholder="请输入数据类型" style="width:100%" clearable>
            <el-option
            v-for="(item,index) in dataTypeList"
            :key="index"
            :label="item.label"
            :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <!-- int float double -->
        <el-form-item label="取值范围" prop="valueRange" v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'">
          <el-row>
            <el-col :span="11">
              <el-form-item prop="specs.min">
                <el-input type="number" placeholder="最小值" v-model="paramsRuleForm.specs.min" ></el-input>
              </el-form-item>
            </el-col>
            <el-col class="line" :span="2" style="text-align:center">-</el-col>
            <el-col :span="11">
              <el-form-item prop="specs.max">
                <el-input type="number" placeholder="最大值" v-model="paramsRuleForm.specs.max"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="步长" prop="specs.step" v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'">
          <el-input  placeholder="请输入步长" v-model="paramsRuleForm.specs.step" type="number"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="unit" v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'">
          <el-select v-model="paramsRuleForm.specs.unit" filterable placeholder="请选择" style="width:100%" clearable @change="unitChange">
            <el-option
              v-for="item in getSelList"
              :key="item.id"
              :label="item.uName"
              :value="item.unit">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- bool -->
        <el-form-item label="布尔值" prop="bool" v-if="paramsRuleForm.dataType==='bool'">
          <el-row style="margin-bottom:5px" ref="bool">
            <el-col :span="1">
              0
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="22">
              <el-form-item prop='specs[0]'>
                <el-input  v-model="paramsRuleForm.specs[0]"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row ref="bool">
            <el-col :span="1">
              1
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="22">
              <el-form-item prop='specs[1]'>
                <el-input v-model="paramsRuleForm.specs[1]"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <!--enum -->
        <el-form-item label="枚举项" prop="enum" v-if="paramsRuleForm.dataType==='enum'">
          <el-row>
            <el-col :span="12">参数值</el-col>
            <el-col :span="12">参数描述</el-col>
          </el-row>
          <el-row v-for="(item,index) in paramsRuleForm.specs.enumList" :key="index" class="row">
            <el-col :span="10">
              <el-form-item
              :prop="'specs.enumList.'+index+'.key'"
              :rules="paramsRules.enumNum"
              >
                <el-input placeholder="编号如0" onkeyup="value=value.replace(/[^\d]/g,'')" v-model="item.key" type="number"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2" style="text-align:center"> ~ </el-col>
            <el-col :span="10">
              <el-form-item
              :prop="'specs.enumList.'+index+'.value'"
              :rules="paramsRules.enumDesc"
              >
                <el-input placeholder="对该枚举项的描述" v-model="item.value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2" class="delete" @click.native="deleteItem(item,index)" v-if="paramsRuleForm.specs.enumList.length > 1 " >删除</el-col>
          </el-row>
          <el-tooltip content="最多不超过100条" placement="top" effect="light">
            <span class="tooltip" @click="addItem">+添加枚举项</span>
          </el-tooltip>
        </el-form-item>
        <!-- text -->
        <el-form-item
          label="数据长度（单位:字节）"
          prop="specs.length"
          v-if="paramsRuleForm.dataType==='text'">
          <el-input  placeholder="请输入数据长度"  v-model="paramsRuleForm.specs.length"></el-input>
        </el-form-item>
        <!-- date -->
        <el-form-item label="时间格式"  v-if="paramsRuleForm.dataType==='date'">
          <el-input :disabled="true" placeholder="请输入时间格式" v-model="paramsRuleForm.datemsg"></el-input>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button type="primary" @click="confirm">确定</el-button>
        <el-button @click="closeAddDialog">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import { bool0, bool1, desc, funcName, identifierReg } from '@/assets/js/validator'
export default {
  props: ['lastAddDialog', 'paramsStatus'],
  data () {
    const paramsNum = (rule, value, callback) => {
      // 判断key相同值
      const arr = []
      this.paramsRuleForm.specs.enumList.forEach((ele, index) => {
        if (arr.indexOf(ele.key) > -1) {
          this.keyFlag = true
        } else {
          this.keyFlag = false
          arr.push(ele.key)
        }
      })
      if (value === '') {
        callback(new Error('参数值不能为空'))
      } else if (value < -2147483648 || value > 2147483647) {
        callback(new Error('取值范围：-2147483648 ~ 2147483647'))
      } else if (this.keyFlag) {
        callback(new Error('参数值不能重复'))
      } else {
        callback()
      }
    }
    const step = (rule, value, callback) => {
      if (value < 0) {
        callback(new Error('步长不能小于0'))
      } else if (value > (this.paramsRuleForm.specs.max - this.paramsRuleForm.specs.min)) {
        callback(new Error('步长不能大于取值范围的差值'))
      } else {
        callback()
      }
    }
    return {
      keyFlag: false,
      dataTypeList: [
        {
          label: 'int',
          value: 'int'
        },
        {
          label: 'float',
          value: 'float'
        },
        {
          label: 'double',
          value: 'double'
        },
        {
          label: 'enum',
          value: 'enum'
        },
        {
          label: 'bool',
          value: 'bool'
        },
        {
          label: 'text',
          value: 'text'
        },
        {
          label: 'date',
          value: 'date'
        }
      ],
      paramsRuleForm: {
        name: '',
        identifier: '',
        dataType: 'int',
        specs: {},
        datemsg: 'String类型的UTC时间戳（毫秒）'
      },
      paramsRules: {
        name: [
          { required: true, message: '参数名称不能为空', trigger: 'blur' },
          { validator: funcName, trigger: ['change', 'blur'] }
        ],
        identifier: [
          { required: true, validator: identifierReg, trigger: 'blur' }
        ],
        'specs.min': [
          { required: true, message: '最小值不能为空', trigger: 'blur' }
        ],
        'specs.max': [
          { required: true, message: '最大值不能为空', trigger: 'blur' }
        ],
        'specs.step': [
          { required: true, message: '步长不能为空', trigger: 'blur' },
          { validator: step, trigger: 'change' }
        ],
        'specs[0]': [
          { required: true, validator: bool0, trigger: 'blur' }
        ],
        'specs[1]': [
          { required: true, validator: bool1, trigger: 'blur' }
        ],
        enumNum: [
          { required: true, validator: paramsNum, trigger: ['blur', 'change'] }
        ],
        enumDesc: [
          { required: true, validator: desc, trigger: ['blur', 'change'] }
        ],
        'specs.length': [
          { required: true, message: '数据长度不能为空,整型', trigger: ['blur', 'change'] }
        ]
      }, // 规则
      enumList: [ // 传值回去的时候需要做处理
        {
          key: '',
          value: ''
        }
      ]
    }
  },
  watch: {
    'paramsRuleForm.dataType': {
      immediate: true,
      handler (val) {
        if (val === 'int' || val === 'float' || val === 'double') {
          this.paramsRuleForm.specs = {
            max: '',
            min: '',
            step: '',
            unit: '',
            unitName: ''
          }
        } else if (val === 'text') {
          this.paramsRuleForm.specs = {
            length: '10240'
          }
        } else if (val === 'date') {
          this.paramsRuleForm.specs = {
            datemsg: 'String类型的UTC时间戳（毫秒）'
          }
        } else if (val === 'bool') {
          this.paramsRuleForm.specs = {
            0: '',
            1: ''
          }
        } else if (val === 'enum') {
          this.paramsRuleForm.specs = {
            enumList: [
              { key: '', value: '' }
            ]
          }
        }
        console.log(this.paramsRuleForm)
      }
    }
  },
  computed: {
    ...mapGetters(['getSelList'])
  },
  created () {
  },
  methods: {
    unitChange (val) {
      const unitName = this.getSelList.find((item) => {
        return item.unit === val
      })
      if (this.paramsRuleForm.dataType === 'int' || this.paramsRuleForm.dataType === 'float' || this.paramsRuleForm.dataType === 'double') {
        this.paramsRuleForm.specs.unitName = unitName.unitName
      }
    },
    // enumList 处理
    addItem () {
      this.paramsRuleForm.specs.enumList.push({
        key: '',
        value: ''
      })
    },
    deleteItem (item, index) {
      this.paramsRuleForm.specs.enumList.splice(index, 1)
    },
    confirm () { // TODO: 验证
      this.$refs.paramsRuleForm.validate((valid) => {
        if (valid) {
          if (this.paramsRuleForm.dataType === 'enum') {
            const obj = {}
            this.paramsRuleForm.specs.enumList.forEach((item) => {
              obj[item.key] = item.value
            })
            this.paramsRuleForm.specs = obj
          }
          if (this.paramsStatus && this.paramsStatus === 'in') this.paramsRuleForm.paramsStatus = 'in'
          if (this.paramsStatus && this.paramsStatus === 'out') this.paramsRuleForm.paramsStatus = 'out'
          this.$emit('getParams', this.paramsRuleForm)
          this.closeAddDialog()
        } else {
          return false
        }
      })
      // console.log('add2', this.paramsRuleForm)
    },
    resetForm () {
      this.$refs.paramsRuleForm.resetFields()
    },
    // -----组件相关
    closeAddDialog () {
      this.$emit('open')
    },
    // 子组件
    openLastDialog () {
      this.lastDialog = true
    }
  }
}
</script>

<style lang='less' scoped>
  /deep/ .el-form-item__label{
    line-height: 14px;
    display: flex;
    .name{
      margin-right: 4px
    }
  }
  /deep/ input::-webkit-outer-spin-button,
    /deep/ input::-webkit-inner-spin-button {
        -webkit-appearance: none;
    }
    /deep/ input[type="number"]{
        -moz-appearance: textfield;
    }
  .row{
    margin-bottom: 5px;
  }
  .row:last-child{
    margin-bottom: 0;
  }
  .tooltip{
    color:skyblue;
    font-size: 14px;
    line-height: 14px;
    cursor: pointer;
  }
  .delete{
    color: skyblue;
    cursor: pointer;
    text-align: right;
  }
   .json-params{
  background: #e3f2fd;
  display: flex;
  justify-content: space-between;
  padding: 8px;
  margin-bottom: 8px;
  align-items: center;
  height: 40px;
  width: 100%;
  color: #555;
  span{
    line-height: 26px;
    font-size: 14px;
    color: rgb(0, 112, 204);
  }
  .right{
    margin-right: 6px;
    cursor: pointer;
  }
}
.json-params:last-child{
  margin-bottom: 0;
}
.boo{
  margin-bottom: 20px;
}
</style>
