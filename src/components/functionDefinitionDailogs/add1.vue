<template>
  <div>
    <!-- 新增参数Dialog 直接第一个弹窗选择-->
    <el-dialog
      :close-on-click-modal="false"
      :append-to-body="true"
      :visible.sync="addParamsDialogVisible"
      :before-close="closeAddDialog"
      title="新增参数2"
      width="30%">
      <el-form 
        ref="paramsRuleForm"
        :rules="paramsRules"
        :model="paramsRuleForm"
        label-position="top">
        <el-form-item prop="name">
          <el-row slot="label">
            <span class="name">参数名称</span>
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
            v-model="paramsRuleForm.identifier" 
            :maxlength="50" 
            placeholder="请输入标识符"/>
        </el-form-item>
        <!-- 属性独有 -->
        <el-form-item 
          :required="true" 
          label="数据类型" 
          prop="dataType">
          <el-select 
            v-model="paramsRuleForm.dataType" 
            placeholder="请输入数据类型" 
            style="width:100%" 
            @change="dataChange">
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
          v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'" 
          label="取值范围" 
          prop="valueRange">
          <el-row>
            <el-col :span="11">
              <el-form-item prop="specs.min">
                <el-input 
                  v-model="paramsRuleForm.specs.min" 
                  type="number" 
                  placeholder="最小值" />
              </el-form-item>
            </el-col>
            <el-col 
              :span="2" 
              class="line" 
              style="text-align:center">-</el-col>
            <el-col 
              :span="11" 
              prop="specs.max">
              <el-form-item prop="specs.max">
                <el-input 
                  v-model="paramsRuleForm.specs.max" 
                  type="number" 
                  placeholder="最大值"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item 
          v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'" 
          label="步长" 
          prop="specs.step">
          <el-input 
            v-model="paramsRuleForm.specs.step" 
            placeholder="请输入步长"/>
        </el-form-item>
        <el-form-item 
          v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'" 
          label="单位" 
          prop="unit">
          <el-select 
            v-model="paramsRuleForm.specs.unit" 
            filterable 
            placeholder="请选择" 
            style="width:100%" 
            clearable 
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
          v-if="paramsRuleForm.dataType==='bool'" 
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
              <el-form-item prop="specs[0]">
                <el-input v-model="paramsRuleForm.specs[0]"/>
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
              <el-form-item prop="specs[1]">
                <el-input v-model="paramsRuleForm.specs[1]"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <!--enum -->
        <el-form-item 
          v-if="paramsRuleForm.dataType==='enum'" 
          label="枚举项" 
          prop="enum">
          <el-row>
            <el-col :span="12">参数值</el-col>
            <el-col :span="12">参数描述</el-col>
          </el-row>
          <el-row 
            v-for="(item,index) in paramsRuleForm.specs.enumList" 
            :key="index" 
            class="row">
            <el-col :span="10">
              <el-form-item 
                :prop="'specs.enumList.'+index+'.key'"
                :rules="paramsRules.enumNum">
                <el-input
                  v-model="item.key"
                  placeholder="编号如0"
                  onkeyup="value=value.replace(/[^\d]/g,'')"
                  type="number"/>
              </el-form-item>
            </el-col>
            <el-col 
              :span="2" 
              style="text-align:center"> ~ </el-col>
            <el-col :span="10">
              <el-form-item 
                :prop="'specs.enumList.'+index+'.value'"
                :rules="paramsRules.enumDesc">
                <el-input 
                  v-model="item.value" 
                  placeholder="对该枚举项的描述"/>
              </el-form-item>
            </el-col>
            <el-col 
              v-if="paramsRuleForm.specs.enumList.length > 1 " 
              :span="2" 
              class="delete" 
              @click.native="deleteItem(item,index)" >删除</el-col>
          </el-row>
          <el-tooltip 
            content="最多不超过100条" 
            placement="top" 
            effect="light">
            <span 
              class="tooltip" 
              @click="addItem">+添加枚举项</span>
          </el-tooltip>
        </el-form-item>
        <!-- text -->
        <el-form-item 
          v-if="paramsRuleForm.dataType==='text'" 
          label="数据长度（单位:字节）" 
          prop="specs.length">
          <el-input 
            v-model="paramsRuleForm.specs.length" 
            placeholder="请输入数据长度"/>
        </el-form-item>
        <!-- date -->
        <el-form-item 
          v-if="paramsRuleForm.dataType==='date'" 
          label="时间格式">
          <el-input 
            :disabled="true" 
            v-model="paramsRuleForm.datemsg" 
            placeholder="请输入时间格式"/>
        </el-form-item>
        <!-- struct -->
        <el-form-item
          v-if="paramsRuleForm.dataType==='struct'"
          label="JSON 对象"
          prop="specs.specs">
          <div 
            v-for="(item, index) in paramsRuleForm.specs" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click="edit(item,index,'struct')">编辑</span>
              |
              <span @click="delItem(item,index,'struct')">删除</span>
            </div>
          </div>
          <span 
            class="tooltip" 
            @click="openLastDialog">+新增参数</span>
        </el-form-item>
        <!-- array -->
        <el-form-item 
          v-if="paramsRuleForm.dataType==='array'" 
          label="元素类型" 
          prop="elementType">
          <el-radio-group v-model="paramsRuleForm.specs.item.type" >
            <el-radio label="int">int</el-radio>
            <el-radio label="float">float</el-radio>
            <el-radio label="double">double</el-radio>
            <el-radio label="text">text</el-radio>
            <el-radio label="struct">struct</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 元素个数 -->
        <el-form-item 
          v-if="paramsRuleForm.dataType==='array'" 
          label="元素个数" 
          prop="specs.size">
          <el-input 
            v-model="paramsRuleForm.specs.size" 
            placeholder="请输入元素个数"/>
        </el-form-item>
        <!-- Json对象 -->
        <el-form-item 
          v-if="paramsRuleForm.dataType==='array'&& paramsRuleForm.specs.item.type==='struct'" 
          :rules="paramsRules['specs.item.specs']" 
          label="JSON 对象" 
          prop="specs.item.specs">
          <div 
            v-for="(item, index) in paramsRuleForm.specs.item.specs" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click="edit(item,index,'array')">编辑</span>
              |
              <span @click="delItem(item,index,'array')">删除</span>
            </div>
          </div>
          <span 
            class="tooltip" 
            @click="openLastDialog">+新增参数</span>
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
    <addDialog2 
      v-if="lastAddDialog" 
      :last-add-dialog="lastAddDialog" 
      @open="lastAddDialog = false" 
      @getParams="getParams" />
    <lastViewOrEdit 
      v-if="lastVoDialogShow" 
      :last-vo-dialog-visible="lastVoDialogVisible" 
      :last-data="lastData" 
      @openLast="openLast" 
      @editParams="editParams"/>
  </div>
</template>
<script>
import addDialog2 from '@/components/functionDefinitionDailogs/add2'
import lastViewOrEdit from '@/components/functionDefinitionDailogs/lastViewOrEdit'
import { mapGetters } from 'vuex'
import { bool0, bool1, desc, funcName, arrStructVf, identifierReg } from '@/assets/js/validator'
export default {
  components: {
    addDialog2,
    lastViewOrEdit
  },
  props: ['addParamsDialogVisible', 'funType', 'paramsStatus'],
  data() {
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
      console.log(value, rule)
      if (value < 0) {
        callback(new Error('步长不能小于0'))
      } else if (value > (this.paramsRuleForm.specs.max - this.paramsRuleForm.specs.min)) {
        callback(new Error('步长不能大于取值范围的差值'))
      } else {
        callback()
      }
    }
    const structVf = (rule, value, callback) => {
      if (this.paramsRuleForm.dataType === 'struct' && this.paramsRuleForm.specs.length === 0) {
        callback(new Error('struct不能为空'))
      } else {
        callback()
      }
    }
    return {
      keyFlag: false,
      lastAddDialog: false,
      dataTypeList: [],
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
          { required: true, validator: paramsNum, trigger: 'change' }
        ],
        enumDesc: [
          { required: true, validator: desc, trigger: 'change' }
        ],
        'specs.length': [
          { required: true, message: '数据长度不能为空,整型', trigger: ['blur', 'change'] }
        ],
        'specs.specs': [
          { required: true, validator: structVf, trigger: 'change' }
        ],
        'specs.size': [
          { required: true, message: '元素个数应为1-512', trigger: 'blur' }
        ],
        'specs.item.specs': [
          { required: true, validator: arrStructVf, trigger: ['blur', 'change'] }
        ]
      }, // 规则
      enumList: [{ key: '', value: '' }],
      // 编辑组件
      lastData: {},
      lastVoDialogVisible: false,
      lastDataStauts: '',
      lastVoDialogShow: false
    }
  },
  watch: {
    funType: {
      immediate: true,
      handler(val) {
        if (val === 'add1') {
          this.dataTypeList = [
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
          ]
        } else {
          this.dataTypeList = [
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
            },
            {
              label: 'struct',
              value: 'struct'
            },
            {
              label: 'array',
              value: 'array'
            }
          ]
        }
      }
    },
    'paramsRuleForm.dataType': {
      immediate: true,
      handler(val) {
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
          // this.paramsRuleForm.specs = {} enum验证
          this.paramsRuleForm.specs = {
            enumList: [
              { key: '', value: '' }
            ]
          }
        } else if (val === 'struct') {
          this.paramsRuleForm.specs = []
        } else {
          this.paramsRuleForm.specs = {
            size: '10',
            item: {
              type: 'int'
            // specs: []    planB 解决外层报红
            }
          }
        }
        this.enumList = [{ key: '', value: '' }]
      }
    },
    'paramsRuleForm.specs.item.type': {
      immediate: true,
      handler(val) {
        if (val === 'struct') {
          this.paramsRuleForm.specs = {
            size: '10',
            item: {
              type: val,
              specs: []
            }
          }
        } else if (Object.prototype.toString.call(val) === '[object Undefined]') {
        } else {
          this.paramsRuleForm.specs = {
            size: '10',
            item: {
              type: val
            }
          }
        }
      }
    }
  },
  computed: {
    ...mapGetters(['getSelList'])
  },
  created() {},
  methods: {
    dataChange(val) {
      // 数据类型改变时，值部位int doubel float 不验证步长
      if (val !== 'struct') {
        this.$refs.paramsRuleForm.clearValidate('specs.specs')
      }
      if (val !== 'array') {
        this.$refs.paramsRuleForm.clearValidate('specs.item.specs')
      }
    },
    // enumList 处理
    addItem() {
      this.paramsRuleForm.specs.enumList.push({
        key: '',
        value: ''
      })
      console.log(this.paramsRuleForm.specs.enumList)
    },
    deleteItem(item, index) {
      this.paramsRuleForm.specs.enumList.splice(index, 1)
    },
    // struct array 数组处理
    delItem(item, index, val) {
      if (val === 'struct') {
        this.paramsRuleForm.specs.splice(index, 1)
      } else {
        this.paramsRuleForm.specs.item.specs.splice(index, 1)
      }
    },
    edit(item, index) {
      this.lastVoDialogShow = true
      this.lastVoDialogVisible = true
      this.lastDataStauts = this.dataStauts
      this.lastData = item
      this.lastData.index = index
    },
    confirm() { // TODO: 验证
      console.log(this.paramsRuleForm)
      this.$refs.paramsRuleForm.validateField('specs.specs')
      this.$refs.paramsRuleForm.validate((valid) => {
        if (valid) {
          if (this.paramsRuleForm.dataType === 'enum') {
            const obj = {}
            this.paramsRuleForm.specs.enumList.forEach((item) => {
              obj[item.key] = item.value
            })
            this.paramsRuleForm.specs = {}
            this.paramsRuleForm.specs = obj
          }
          console.log('chuandaobianji', this.paramsRuleForm)
          if (this.paramsStatus && this.paramsStatus === 'in') { this.paramsRuleForm.paramsStatus = 'in' }
          if (this.paramsStatus && this.paramsStatus === 'out') { this.paramsRuleForm.paramsStatus = 'out' }
          this.$emit('getParams', this.paramsRuleForm)
        } else {
          return false
        }
      })
    },
    resetForm() {
      this.$refs.paramsRuleForm.resetFields()
    },
    // -----组件相关
    closeAddDialog() {
      this.$emit('open')
    },
    // 子组件
    openLastDialog() {
      this.lastAddDialog = true
    },
    getParams(val) {
      console.log('val==========', val)
      const obj = {
        identifier: val.identifier,
        name: val.name,
        dataType: {
          type: val.dataType,
          specs: val.specs
        }
      }
      console.log('接收的obj', obj)
      if (this.paramsRuleForm.dataType === 'struct') {
        this.paramsRuleForm.specs.push(obj)
        this.$refs.paramsRuleForm.validateField('specs.specs')
      }
      if (this.paramsRuleForm.dataType === 'array') {
        this.paramsRuleForm.specs.item.specs.push(obj)
        this.$refs.paramsRuleForm.validateField('specs.item.specs')
      }
    },
    //  编辑组件
    openLast() {
      this.lastVoDialogVisible = false
      this.lastVoDialogShow = false
    },
    editParams(val) {
      console.log(this.paramsRuleForm.dataType)
      this.$set(this.paramsRuleForm.specs, val.index, val)
      this.lastVoDialogVisible = false
      this.lastVoDialogShow = true
    },
    unitChange(val) {
      const unitName = this.getSelList.find((item) => {
        return item.unit === val
      })
      if (this.paramsRuleForm.dataType === 'int' || this.paramsRuleForm.dataType === 'float' || this.paramsRuleForm.dataType === 'double') {
        this.paramsRuleForm.specs.unitName = unitName.unitName
      }
    }
  }
}
</script>

<style lang='scss' scoped>
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
</style>
