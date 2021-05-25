<template>
  <div>
    <!-- 新增参数Dialog -->
    <el-dialog
      :close-on-click-modal="false"
      :append-to-body="true"
      :title="lastDataStauts==='view'?'查看参数':'编辑参数'"
      :visible.sync="lastVoDialogVisible"
      :before-close="closeAddDialog"
      width="30%">
      <el-form 
        ref="paramsRuleForm"
        :rules="paramsRules"
        :model="paramsRuleForm"
        :disabled="lastDataStauts==='view'?true:false"
        label-position="top">
        <el-form-item prop="name">
          <el-row slot="label">
            <span>参数名称</span>
            <el-tooltip 
              content="必填，支持中文、大小写字母、数字、短划线、下划线和小数点，必须以中文、英文或数字开头，不超过 30 个字符。" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-input 
            v-model="paramsRuleForm.name" 
            placeholder="请输入参数名称"/>
        </el-form-item>
        <el-form-item prop="identifier">
          <el-row slot="label">
            <span 
              style="margin-right:2px" 
              class="name">标识符</span>
            <el-tooltip 
              content="支持大小写字母、数字和下划线、不超过 50 个字符。" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-input 
            :maxlength="50" 
            v-model="paramsRuleForm.identifier" 
            placeholder="请输入标识符" />
        </el-form-item>
        <!-- 属性独有 -->
        <el-form-item 
          :required="true" 
          label="数据类型" 
          prop="dataType">
          <el-select 
            v-model="paramsRuleForm.dataType.type" 
            placeholder="请输入数据类型" 
            style="width:100%" 
            @change="selChange">
            <el-option
              v-for="(item,index) in dataTypeList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <!-- int float double -->
        <el-form-item 
          v-if="paramsRuleForm.dataType.type==='int'||paramsRuleForm.dataType.type==='float'||paramsRuleForm.dataType.type==='double'" 
          label="取值范围" 
          prop="valueRange">
          <el-row>
            <el-col :span="11">
              <el-form-item prop="dataType.specs.min">
                <el-input 
                  v-model="paramsRuleForm.dataType.specs.min" 
                  type="number" 
                  placeholder="最小值"/>
              </el-form-item>
            </el-col>
            <el-col 
              :span="2" 
              class="line" 
              style="text-align:center">-</el-col>
            <el-col :span="11">
              <el-form-item prop="dataType.specs.max">
                <el-input 
                  v-model="paramsRuleForm.dataType.specs.max" 
                  type="number" 
                  placeholder="最大值"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <!-- 步长 -->
        <el-form-item 
          v-if="paramsRuleForm.dataType.type==='int'||paramsRuleForm.dataType.type==='float'||paramsRuleForm.dataType.type==='double'" 
          label="步长" 
          prop="dataType.specs.step">
          <el-input 
            v-model="paramsRuleForm.dataType.specs.step" 
            placeholder="请输入步长"/>
        </el-form-item>
        <!-- 单位 -->
        <el-form-item 
          v-if="paramsRuleForm.dataType.type==='int'||paramsRuleForm.dataType.type==='float'||paramsRuleForm.dataType.type==='double'" 
          label="单位" 
          prop="unit">
          <el-select 
            v-model="paramsRuleForm.dataType.specs.unit" 
            filterable 
            placeholder="请输入单位" 
            style="width:100%" 
            @change="unitChange">
            <el-option
              v-for="item in getSelList"
              :key="item.id"
              :label="item.uName"
              :value="item.unit"/>
          </el-select>
        </el-form-item>
        <!-- bool -->
        <el-form-item 
          v-if="paramsRuleForm.dataType.type==='bool'" 
          label="布尔值" 
          prop="bool">
          <el-row style="margin-bottom:5px">
            <el-col :span="1">
              0
            </el-col>
            <el-col 
              :span="1" 
              class="line">-</el-col>
            <el-col :span="22">
              <el-form-item prop="dataType.specs[0]">
                <el-input v-model="paramsRuleForm.dataType.specs[0]"/>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1">
              1
            </el-col>
            <el-col 
              :span="1" 
              class="line">-</el-col>
            <el-col :span="22">
              <el-form-item prop="dataType.specs[1]">
                <el-input v-model="paramsRuleForm.dataType.specs[1]"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <!--enum -->
        <el-form-item 
          v-if="paramsRuleForm.dataType.type==='enum'" 
          label="枚举项" 
          prop="dataType.specs.enum">
          <el-row>
            <el-col :span="12">参数值</el-col>
            <el-col :span="12">参数描述</el-col>
          </el-row>
          <el-row 
            v-for="(item,index) in enumList" 
            :key="index" 
            class="row">
            <el-col :span="lastDataStauts==='view'?11:10">
              <el-form-item >
                <el-input 
                  v-model="item.key" 
                  type="number" 
                  placeholder="编号如0" 
                  onkeyup="value=value.replace(/[^\d]/g,'')"/>
              </el-form-item>
            </el-col>
            <el-col 
              :span="2" 
              style="text-align:center"> ~ </el-col>
            <el-col :span="lastDataStauts==='view'?11:10">
              <el-form-item >
                <el-input 
                  v-model="item.value" 
                  placeholder="对该枚举项的描述"/>
              </el-form-item>
            </el-col>
            <el-col 
              v-if="enumList.length > 1 && lastDataStauts!=='view'" 
              :span="2" 
              class="delete" 
              @click.native="deleteItem(item,index)" >删除</el-col>
          </el-row>
          <el-tooltip 
            content="最多不超过100条" 
            placement="top" 
            effect="light">
            <span 
              v-if="lastDataStauts!=='view'" 
              class="tooltip" 
              @click="addItem">+添加枚举项</span>
          </el-tooltip>
        </el-form-item>
        <!-- text -->
        <el-form-item 
          v-if="paramsRuleForm.dataType.type==='text'" 
          label="数据长度（单位:字节）" 
          prop="dataType.specs.length">
          <el-input 
            v-model="paramsRuleForm.dataType.specs.length" 
            placeholder="请输入读写类型"/>
        </el-form-item>
        <!-- date -->
        <el-form-item 
          v-if="paramsRuleForm.dataType.type==='date'" 
          label="时间格式">
          <el-input 
            :disabled="true" 
            v-model="paramsRuleForm.datemsg" 
            placeholder="请输入时间格式"/>
        </el-form-item>
      </el-form>
      <span 
        slot="footer" 
        class="dialog-footer">
        <el-button 
          type="primary" 
          @click="confirm">确定</el-button>
        <el-button @click="closeAddDialog">取消</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { funcName, bool0, bool1, identifierReg } from '@/assets/js/validator'
import { mapGetters } from 'vuex'
export default {
  props: ['lastVoDialogVisible', 'lastData', 'lastDataStauts'],
  data() {
    const step = (rule, value, callback) => {
      if (value < 0) {
        callback(new Error('步长不能小于0'))
      } else if (value > (this.paramsRuleForm.dataType.specs.max - this.paramsRuleForm.dataType.specs.min)) {
        callback(new Error('步长不能大于取值范围的差值'))
      } else {
        callback()
      }
    }
    const enumVf = (rule, value, callback) => {
      // const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+[\u4e00-\u9fa5a-zA-Z0-9\-_]*$/
      const reg = /^[\u4e00-\u9fa5a-zA-Z0-9]+[\u4e00-\u9fa5a-zA-Z0-9\\_]*$/
      const flag = this.enumList.every((item, index) => { // enum内容验证
        return item.key !== '' && item.value !== ''
      })
      const valFlag = this.enumList.every((item, index) => { //  value验证
        return reg.test(item.value) !== false
      })
      // 判断key相同值
      const arr = []
      this.enumList.forEach((ele, index) => {
        if (arr.indexOf(ele.key) > -1) {
          this.keyFlag = true
        } else {
          this.keyFlag = false
          arr.push(ele.key)
        }
      })
      console.log(this.enumList, arr)
      if (flag) {
        this.enumList.forEach((item) => {
          if (item.key < -2147483648 || item.key > 2147483647) {
            callback(new Error('参数值取值范围：-2147483648 ~ 2147483647'))
          } else if (!valFlag) {
            callback(new Error('支持中文、英文大小写、数字、下划线和短划线，必须以中文、英文或数字开头，不超过20个字符'))
          } else if (this.keyFlag) {
            callback(new Error('参数值不能重复'))
          } else {
            callback()
          }
        })
      } else {
        callback(new Error('参数值跟描述值不能为空'))
      }
    }
    return {
      keyFlag: false,
      paramsRuleForm: {
        name: '',
        identifier: '',
        dataType: {
          specs: {},
          type: 'int'
        },
        datemsg: 'String类型的UTC时间戳（毫秒）'
      },
      paramsRules: {
        name: [
          { required: true, message: '参数名称不能为空', trigger: 'blur' },
          { validator: funcName, trigger: 'change' }
        ],
        identifier: [
          { required: true, validator: identifierReg, trigger: 'blur' }
        ],
        callType: [
          { required: true, message: '请选择调用方法', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择事件类型', trigger: 'blur' }
        ],
        accessMode: [
          { required: true, message: '请选择读写类型', trigger: 'blur' }
        ],
        'dataType.specs.min': [
          { required: true, message: '最小值不能为空', trigger: 'blur' }
        ],
        'dataType.specs.max': [
          { required: true, message: '最大值不能为空', trigger: 'blur' }
        ],
        'dataType.specs.step': [
          { required: true, message: '步长不能为空', trigger: 'blur' },
          { validator: step, trigger: 'change' }
        ],
        'dataType.specs[0]': [
          { required: true, validator: bool0, trigger: 'blur' }
        ],
        'dataType.specs[1]': [
          { required: true, validator: bool1, trigger: 'blur' }
        ],
        'dataType.specs.length': [
          { required: true, message: '数据长度不能为空,整型', trigger: ['blur', 'change'] }
        ],
        'dataType.specs.enum': [
          { required: true, validator: enumVf, trigger: 'change' }
        ]
      },
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
      enumList: [ // 传值回去的时候需要做处理
        {
          key: '',
          value: ''
        }
      ]
    }
  },
  computed: {
    ...mapGetters(['getSelList'])
  },
  watch: {
    lastData: {
      immediate: true,
      deep: true,
      handler(val) {
        console.log('lastData-------------------', this.lastData)
        this.paramsRuleForm = Object.assign({}, this.lastData)
        if (this.paramsRuleForm.dataType.type === 'enum') {
          // console.log(this.dataRow.dataType.specs)
          const list = []
          Object.keys(this.paramsRuleForm.dataType.specs).forEach(res => {
            const obj = {
              key: res,
              value: this.lastData.dataType.specs[res]
            }
            list.push(obj)
          })
          this.enumList = list
        }
      }
    }
  },
  created() {},
  methods: {
    unitChange(val) {
      const unitName = this.getSelList.find((item) => {
        return item.unit === val
      })
      if (this.paramsRuleForm.dataType.type === 'int' || this.paramsRuleForm.dataType.type === 'float' || this.paramsRuleForm.dataType.type === 'double') {
        this.paramsRuleForm.dataType.specs.unitName = unitName.unitName
      }
    },
    selChange(val) {
      console.log('Ⅸ-----', this.paramsRuleForm, this.enumList)
      if (val === 'int' || val === 'float' || val === 'double') {
        this.paramsRuleForm.dataType.specs = {
          max: '',
          min: '',
          step: '',
          unit: '',
          unitName: ''
        }
        this.enumList = []
      } else if (val === 'text') {
        this.paramsRuleForm.dataType.specs = {
          length: '10240'
        }
        this.enumList = []
      } else if (val === 'bool') {
        this.paramsRuleForm.dataType.specs = {
          0: '',
          1: ''
        }
        this.enumList = []
      } else if (val === 'enum') {
        this.paramsRuleForm.dataType.specs = { '': '' }
      } else {
        this.paramsRuleForm.dataType.specs = {
          datemsg: 'String类型的UTC时间戳（毫秒）'
        }
        this.enumList = []
        if (val !== 'enum') {
          this.$refs.paramsRuleForm.clearValidate('dataType.specs.enum')
        }
      }
    },
    closeAddDialog() {
      this.$emit('openLast')
    },
    confirm() {
      this.$refs.paramsRuleForm.validate(valid => {
        if (valid) {
          // 将enum转换回对象
          if (this.paramsRuleForm.dataType.type === 'enum') {
            const obj = {}
            this.enumList.forEach((item) => {
              obj[item.key] = item.value
            })
            this.paramsRuleForm.dataType.specs = obj
          }
          this.$emit('editParams', this.paramsRuleForm)
        } else {
          return false
        }
      })
    },
    // 增加删除enumList
    addItem() {
      this.enumList.push({
        key: '',
        value: ''
      })
    },
    deleteItem(item, index) {
      this.enumList.splice(index, 1)
    }
  }
}
</script>

<style lang='scss' scoped>
  /deep/ .el-form-item__label{
    line-height: 14px;
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
  .delete{
    color: skyblue;
    cursor: pointer;
    text-align: right;
  }
</style>
