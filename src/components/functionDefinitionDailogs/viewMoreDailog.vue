<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :append-to-body="true"
      :title="rowsdata.status==='view'?'查看标准功能':'编辑自定义功能'"
      :visible.sync="infosDialogVisible"
      :before-close="handleClose"
      width="30%">
      <el-form
        ref="ruleForm"
        :rules="rules"
        :model="ruleForm"
        :disabled="rowsdata.status==='view'?true:false"
        label-position="top">
        <el-form-item 
          :required="true" 
          label="功能类型" 
          prop="parentId">
          <el-input 
            v-model="ruleForm.parentId" 
            placeholder="请输入功能类型" 
            disabled/>
        </el-form-item>
        <el-form-item prop="name">
          <el-row slot="label">
            <span class="name">功能名称</span>
            <el-tooltip 
              content="必填，支持中文、大小写字母、数字、短划线、下划线和小数点，必须以中文、英文或数字开头，不超过 30 个字符。" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-input 
            v-model="ruleForm.name" 
            placeholder="请输入功能名称"/>
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
            v-model="ruleForm.identifier" 
            placeholder="请输入标识符" />
        </el-form-item>
        <!-- 执行动作 -->
        <el-form-item prop="action">
          <el-row slot="label">
            <span class="name">执行动作</span>
            <el-tooltip 
              content="选择执行动作" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-select 
            v-model="ruleForm.action"
            style="width:100% "
            placeholder="请选择执行动作">
            <el-option
              v-for="item in actionOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value"/>
          </el-select>
        </el-form-item>
        <!-- 属性独有 -->
        <el-form-item 
          v-if="ruleForm.dataType" 
          :required="true" 
          label="数据类型" 
          prop="dataType">
          <el-select 
            v-model="ruleForm.dataType.type" 
            :required="true" 
            placeholder="请输入数据类型" 
            style="width:100%" 
            @change="change">
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
          v-if="ruleForm.dataType && (ruleForm.dataType.type==='int'||ruleForm.dataType.type==='float'||ruleForm.dataType.type==='double')" 
          label="取值范围" 
          prop="valueRange">
          <el-row>
            <el-col :span="11">
              <el-form-item prop="dataType.specs.min">
                <el-input 
                  v-model="ruleForm.dataType.specs.min" 
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
                  v-model="ruleForm.dataType.specs.max" 
                  type="number" 
                  placeholder="最大值"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item 
          v-if="ruleForm.dataType && (ruleForm.dataType.type==='int'||ruleForm.dataType.type==='float'||ruleForm.dataType.type==='double')" 
          label="步长" 
          prop="dataType.specs.step">
          <el-input 
            v-model="ruleForm.dataType.specs.step" 
            placeholder="请输入步长"/>
        </el-form-item>
        <el-form-item 
          v-if="ruleForm.dataType && (ruleForm.dataType.type==='int'||ruleForm.dataType.type==='float'||ruleForm.dataType.type==='double')" 
          label="单位">
          <el-select 
            v-model="ruleForm.dataType.specs.unit" 
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
          v-if="ruleForm.dataType && ruleForm.dataType.type==='bool'" 
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
                <el-input v-model="ruleForm.dataType.specs[0]"/>
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
                <el-input v-model="ruleForm.dataType.specs[1]"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <!--enum -->
        <el-form-item 
          v-if="ruleForm.dataType && ruleForm.dataType.type==='enum'" 
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
            <el-col :span="rowsdata.status==='view'? 11 : 10">
              <el-form-item >
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
            <el-col :span="rowsdata.status==='view'? 11 : 10">
              <el-form-item >
                <el-input 
                  v-model="item.value" 
                  placeholder="对该枚举项的描述"/>
              </el-form-item>
            </el-col>
            <el-col 
              v-if="rowsdata.status!=='view' && enumList.length>1" 
              :span="2" 
              class="delete" 
              @click.native="deleteItem(item,index)" >删除</el-col>
          </el-row>
          <el-tooltip 
            content="最多不超过100条" 
            placement="top" 
            effect="light">
            <span 
              v-if="rowsdata.status!=='view'" 
              class="tooltip" 
              @click="addItem">+添加枚举项</span>
          </el-tooltip>
        </el-form-item>
        <!-- text -->
        <el-form-item 
          v-if="ruleForm.dataType && ruleForm.dataType.type==='text'" 
          label="数据长度（单位:字节）" 
          prop="dataType.specs.length">
          <el-input 
            v-model="ruleForm.dataType.specs.length" 
            placeholder="请输入数据长度（单位"/>
        </el-form-item>
        <!-- date -->
        <el-form-item 
          v-if="ruleForm.dataType && ruleForm.dataType.type==='date'" 
          label="时间格式">
          <el-input 
            :disabled="true" 
            v-model="datemsg" 
            placeholder="请输入时间格式"/>
        </el-form-item>
        <!-- struct -->
        <el-form-item 
          v-if="ruleForm.dataType && ruleForm.dataType.type==='struct'" 
          label="JSON 对象" 
          prop="dataType.specs.specs">
          <!-- ruleForm.dataType.specs为数组的情况下才进行显示 -->
          <!-- <template v-if=" Object.prototype.toString.call(ruleForm.dataType.specs) === '[object Array]'"-->
          <div 
            v-for="(item, index) in ruleForm.dataType.specs" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click="look(item,index)">{{ rowsdata.status === 'view'?'查看':'编辑 ' }}</span>
              <span 
                v-if="rowsdata.status !== 'view'" 
                @click="delItem(item,index,'struct')">| 删除</span>
            </div>
          </div>
          <span 
            v-if="rowsdata.status!=='view'" 
            class="tooltip" 
            @click="openAddParamsDialog">+新增参数</span>
        </el-form-item>
        <!-- array -->
        <el-form-item 
          v-if="ruleForm.dataType && ruleForm.dataType.type==='array'" 
          label="元素类型" 
          prop="dataType.specs.item.type">
          <el-radio-group v-model="ruleForm.dataType.specs.item.type" >
            <el-radio label="int">int</el-radio>
            <el-radio label="float">float</el-radio>
            <el-radio label="double">double</el-radio>
            <el-radio label="text">text</el-radio>
            <el-radio label="struct">struct</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item 
          v-if="ruleForm.dataType && ruleForm.dataType.type==='array'" 
          label="元素个数" 
          prop="dataType.specs.size">
          <el-input 
            v-model="ruleForm.dataType.specs.size" 
            placeholder="请输入元素个数"/>
        </el-form-item>
        <el-form-item 
          v-if="ruleForm.dataType && ruleForm.dataType.type==='array' && ruleForm.dataType.specs.item.type==='struct'" 
          label="JSON 对象" 
          prop="dataType.specs.item.specs">
          <div 
            v-for="(item, index) in ruleForm.dataType.specs.item.specs" 
            :key="index" 
            class="json-params" >
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click="look(item,index)">{{ rowsdata.status === 'view'?'查看':'编辑 ' }}</span>

              <span 
                v-if="rowsdata.status !== 'view'" 
                @click="delItem(item,index,'array')">| 删除</span>
            </div>
          </div>
          <span 
            v-if="rowsdata.status!=='view'" 
            class="tooltip" 
            @click="openAddParamsDialog">+新增参数</span>
        </el-form-item>
        <el-form-item 
          v-if="ruleForm.dataType" 
          label="读写类型" 
          prop="accessMode">
          <el-radio-group v-model="ruleForm.accessMode">
            <el-radio label="r">只读</el-radio>
            <el-radio label="rw">读写</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-------------------选择项分割线-----------------  -->
        <!-- 服务独有 -->
        <el-form-item 
          v-if="ruleForm.callType" 
          label="调用方法" 
          prop="callType">
          <el-radio-group v-model="ruleForm.callType">
            <el-radio label="async">异步</el-radio>
            <el-radio label="sync">同步</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item 
          v-if="ruleForm.callType" 
          label="输入参数" 
          prop="inputData">
          <div 
            v-for="(item, index) in ruleForm.inputData" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click="look(item,index,'in')">{{ rowsdata.status === 'view'?'查看':'编辑 ' }}</span>
              <span 
                v-if="rowsdata.status !== 'view'" 
                @click="serviceDelItem(item,index,'in')">| 删除</span>
            </div>
          </div>
          <span 
            v-if="rowsdata.status!=='view'" 
            class="tooltip" 
            @click="openAddParamsDialog('in')">+新增参数</span>
        </el-form-item>
        <el-form-item 
          v-if="ruleForm.callType" 
          label="输出参数" 
          prop="outputData">
          <div 
            v-for="(item, index) in ruleForm.outputData" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click="look(item,index,'out')">{{ rowsdata.status === 'view'?'查看':'编辑 ' }}</span>
              <span 
                v-if="rowsdata.status !== 'view'" 
                @click="serviceDelItem(item,index,'out')">| 删除</span>
            </div>
          </div>
          <span 
            v-if="rowsdata.status!=='view'" 
            class="tooltip" 
            @click="openAddParamsDialog('out')">+新增参数</span>
        </el-form-item>
        <!-- 事件独有 -->
        <el-form-item 
          v-if="ruleForm.type" 
          label="事件类型" 
          prop="type">
          <el-radio-group v-model="ruleForm.type">
            <el-radio label="info">信息</el-radio>
            <el-radio label="alert">告警</el-radio>
            <el-radio label="error">故障</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 输出参数 -->
        <el-form-item 
          v-if="ruleForm.type" 
          label="输出参数" 
          prop="outputData">
          <div 
            v-for="(item, index) in ruleForm.outputData" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click="look(item,index,'eOut')">{{ rowsdata.status === 'view'?'查看':'编辑 ' }}</span>
              <span 
                v-if="rowsdata.status !== 'view'" 
                @click="serviceDelItem(item,index,'eOut')">| 删除</span>
            </div>
          </div>
          <span 
            v-if="rowsdata.status!=='view'" 
            class="tooltip" 
            @click="openAddParamsDialog('eOut')">+新增参数</span>
        </el-form-item>
        <el-form-item 
          label="描述" 
          prop="desc">
          <el-input 
            v-model="ruleForm.desc" 
            placeholder="请输入描述信息"/>
        </el-form-item>
      </el-form>
      <span 
        slot="footer" 
        class="dialog-footer">
        <el-button 
          :disabled="rowsdata.status==='view'" 
          type="primary" 
          @click="confirm">确定</el-button>
        <el-button @click="handleClose">取消</el-button>
      </span>
    </el-dialog>
    <!-- 编辑参数dialog -->
    <viewOrEditParamsDialog 
      v-if="voDialogShow" 
      :view-or-edit-params-dialog-visible="viewOrEditParamsDialogVisible" 
      :data-stauts="dataStauts" 
      :data-row="dataRow" 
      @closeOv="closeOv" 
      @editParams="editParams"/>
    <!-- 添加参数dialog -->
    <addDialog 
      v-if="addParamsDialogVisible" 
      :add-params-dialog-visible="addParamsDialogVisible" 
      :fun-type="funType" 
      :params-status="paramsStatus" 
      @open="addParamsDialogVisible = false" 
      @getParams="getParams"/>
  </div>
</template>
<script>
import viewOrEditParamsDialog from '@/components/functionDefinitionDailogs/viewOrEditParamsDialog'
import addDialog from '@/components/functionDefinitionDailogs/add1'
import { mapGetters } from 'vuex'
import { funcName, bool0, bool1, arrStructVf, identifierReg } from '@/assets/js/validator'
import { editModel } from '@/api/productRegistration'
import { editSubModel } from '@/api/categoryManager'
import { actionOptions } from '@/assets/js/defition'
export default {
  components: {
    viewOrEditParamsDialog,
    addDialog
  },
  props: {
    infosDialogVisible: {
      type: Boolean,
      default: false
    },
    rowsdata: {
      type: [Object, Array],
      default: function(){
        return {}
      }
    },
    date: {
      type: Number,
      default:0
    },
    proParams: {
      type: Object,
      default: function(){
        return {}
      }
      
    }
  },
  data() {
    const step = (rule, value, callback) => {
      if (value < 0) {
        callback(new Error('步长不能小于0'))
      } else if (value > (this.ruleForm.dataType.specs.max - this.ruleForm.dataType.specs.min)) {
        callback(new Error('步长不能大于取值范围的差值'))
      } else {
        callback()
      }
    }
    const structVf = (rule, value, callback) => {
      if (this.ruleForm.dataType.type === 'struct' && this.ruleForm.dataType.specs.length === 0) {
        callback(new Error('struct不能为空'))
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
      console.log(arr)
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
      actionOptions: Object.assign([], actionOptions), // 执行动作
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
        },
        {
          label: 'struct',
          value: 'struct'
        },
        {
          label: 'array',
          value: 'array'
        }
      ],
      ruleForm: {
        callType: 'sync', // 调用方式
        type: 'info', // 事件类型 info---信息 ，alert---告警，error---故障
        name: '',
        identifier: '',
        action: '',
        accessMode: '只读',
        structVerify: [],
        dataType: {
          type: 'struct',
          specs: {}
        },
        inputData: [],
        outputData: []
      },
      rules: {
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
        action: [
          { required: true, message: '请选择执行动作', trigger: 'blur' }
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
        ],
        'dataType.specs.specs': [
          { required: true, validator: structVf, trigger: 'change' }
        ],
        'dataType.specs.size': [
          { required: true, message: '元素个数应为1-512', trigger: 'blur' }
        ],
        'dataType.specs.item.specs': [
          { required: true, validator: arrStructVf, trigger: ['blur', 'change'] }
        ],
        'dataType.specs.item.type': [
          { required: true, message: '请选择元素类型', trigger: ['change'] }
        ]
      },
      datemsg: 'String类型的UTC时间戳（毫秒）',
      enumList: [],
      viewOrEditParamsDialogVisible: false,
      dataStauts: '', // view edit
      funType: '', // 功能类型判断
      paramsStatus: '', // 服务 input outinput
      dataRow: {},
      addParamsDialogVisible: false,
      // addDialogFlag: false
      voDialogShow: false
    }
  },
  computed: {
    ...mapGetters(['getSelList'])
  },
  watch: {
    date: {
      handler(val) {
        this.dataStauts = this.rowsdata.status
      }
    },
    'ruleForm.dataType.specs.item.type': {
      handler(val) {
        if (val === 'struct') {
          this.ruleForm.dataType.specs.item = {
            type: val,
            specs: []
          }
        } else if (Object.prototype.toString.call(val) === '[object Undefined]') {
          this.funType = ''
        } else {
          this.ruleForm.dataType.specs.item = {
            type: val
          }
        }
      }
    },
    rowsdata: {
      immediate: true,
      handler(val) {
        this.enumList = [] // 先将其重置
        this.ruleForm = Object.assign({}, val)
        if (val.dataType && val.dataType.type === 'enum') {
          Object.keys(val.dataType.specs).forEach(item => {
            const obj = {
              key: item,
              value: val.dataType.specs[item]
            }
            this.enumList.push(obj)
          })
        }
      }
    }

  },
  created() {},
  methods: {
    change(val) {
      if (val === 'int' || val === 'float' || val === 'double') {
        this.ruleForm.dataType.specs = {
          max: '',
          min: '',
          step: '',
          unit: '',
          unitName: ''
        }
      } else if (val === 'text') {
        this.ruleForm.dataType.specs = {
          length: '10240'
        }
      } else if (val === 'date') {
        this.ruleForm.dataType.specs = {
          datemsg: 'String类型的UTC时间戳（毫秒）'
        }
      } else if (val === 'bool') {
        this.ruleForm.dataType.specs = {
          0: '',
          1: ''
        }
      } else if (val === 'enum') {
        this.ruleForm.dataType.specs = {}
        this.enumList = [
          { key: '', value: '' }
        ]
      } else if (val === 'struct') {
        this.ruleForm.dataType.specs = []
      } else {
        this.ruleForm.dataType.specs = {
          size: '10',
          item: {
            type: 'int',
            specs: []
          }
        }
      }
      if (val !== 'enum') {
        this.$refs.ruleForm.clearValidate('dataType.specs.enum')
      }
      if (val !== 'struct') {
        this.$refs.ruleForm.clearValidate('dataType.specs.specs')
      }
      if (val !== 'array') {
        this.$refs.ruleForm.clearValidate('dataType.specs.item.specs')
      }
    },
    confirm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          const editData = Object.assign({}, this.ruleForm)
          if (this.ruleForm.dataType && this.ruleForm.dataType.type === 'enum') {
            const obj = {}
            this.enumList.forEach((item) => {
              obj[item.key] = item.value
            })
            this.ruleForm.dataType.specs = {}
            this.ruleForm.dataType.specs = obj
          }
          let params = {}
          if (this.proParams.type && this.proParams.type === 'category') {
            params = {
              params: {
                categoryId: this.proParams.prokey,
                identifier: this.rowsdata.identifier
              }
            }
            console.log('0', params)
          } else {
            params = {
              params: {
                productKey: this.proParams.prokey,
                modelVersion: this.proParams.modelVersion,
                identifier: this.rowsdata.identifier,
              }
            }
          }
          // 删除多余的属性
          Reflect.deleteProperty(editData, 'index')
          Reflect.deleteProperty(editData, 'types')
          Reflect.deleteProperty(editData, 'parentId')
          Reflect.deleteProperty(editData, 'status')
          /* console.log('this_ruleForm', this.ruleForm)
          console.log('editData', editData)
          console.log('this_ruleForm', this.ruleForm) */
          if (this.ruleForm.parentId === '属性') {
            params.params.abilityType = 1
            params.params.properties = editData
          } else if (this.ruleForm.parentId === '服务') {
            params.params.abilityType = 2
            params.params.services = editData
          } else {
            params.params.abilityType = 3
            params.params.events = editData
          }
          console.log('params', params)
          this.proParams.type === 'category'
            ? editSubModel(params).then((res) => {
              console.log(res)
              if (res.data.code === 200) {
                this.$message({
                  type: 'success',
                  message: '编辑成功'
                })
                this.handleClose()
                setTimeout(() => {
                  this.$parent.getDraftModelData()
                }, 0)
              } else {
                this.$message({
                  type: 'error',
                  message: res.data.message
                })
              }
            })
            : editModel(params).then((res) => {
              if (res.data.code === 200) {
                this.$message({
                  type: 'success',
                  message: '编辑成功'
                })
                this.handleClose()
                setTimeout(() => {
                  this.$parent.getDraftModelData()
                }, 0)
              } else {
                this.$message({
                  type: 'error',
                  message: res.data.message
                })
              }
            })
        } else {
          return false
        }
      })
    },
    handleClose() {
      this.$emit('open-view-dialog')
    },
    addItem() {
      this.enumList.push({
        key: '',
        value: ''
      })
    },
    deleteItem(item, index) {
      this.enumList.splice(index, 1)
    },
    delItem(item, index, val) {
      if (val === 'struct') {
        this.ruleForm.dataType.specs.splice(index, 1)
      } else {
        this.ruleForm.dataType.specs.item.specs.splice(index, 1)
      }
    },
    // 服务 事件删除
    serviceDelItem(item, index, val) {
      if (val === 'in') {
        this.ruleForm.inputData.splice(index, 1)
      } else if (val === 'out') {
        this.ruleForm.outputData.splice(index, 1)
      } else {
        this.ruleForm.outputData.splice(index, 1)
      }
    },
    // 打开新增参数dialog
    openAddParamsDialog(val) {
      // console.log(this.rowsdata)
      if (this.ruleForm.parentId === '属性') {
        this.funType = 'add1'
      } else {
        this.funType = ''
      }
      this.paramsStatus = val
      this.addParamsDialogVisible = true
    },
    // 打开编辑或者查看dialog
    look(item, index, val) {
      item.index = index
      this.dataRow = item
      this.dataRow.funcStatus = val
      this.dataRow.parentId = this.rowsdata.parentId
      this.voDialogShow = true
      this.viewOrEditParamsDialogVisible = true
    },
    closeOv() {
      this.voDialogShow = false
      this.viewOrEditParamsDialogVisible = false
    },
    unitChange(val) {
      const unitName = this.getSelList.find((item) => {
        return item.unit === val
      })
      if (this.ruleForm.dataType.type === 'int' || this.ruleForm.dataType.type === 'float' || this.ruleForm.dataType.type === 'double') {
        this.ruleForm.dataType.specs.unitName = unitName.unitName
      }
    },
    getParams(val) {
      const obj = {
        identifier: val.identifier,
        name: val.name,
        dataType: {
          type: val.dataType,
          specs: val.specs
        }
      }
      if (this.rowsdata.parentId === '属性') {
        if (this.ruleForm.dataType.type === 'struct') {
          this.ruleForm.dataType.specs.push(obj)
        } else {
          this.ruleForm.dataType.specs.item.specs.push(obj)
        }
      } else if (this.rowsdata.parentId === '服务') {
        if (val.paramsStatus === 'in') this.ruleForm.inputData.push(obj)
        if (val.paramsStatus === 'out') this.ruleForm.outputData.push(obj)
      } else {
        this.ruleForm.outputData.push(obj)
      }
      this.addParamsDialogVisible = false
    },
    editParams(val) {
      console.log('view', val)
      const getData = Object.assign({}, val.paramsRuleForm)
      delete getData.funcStatus
      delete getData.index
      delete getData.parentId
      delete getData.dialogType
      console.log(getData)
      if (this.rowsdata.parentId === '属性') { // 或者判断传回来的val.parentId
        console.log(111)
        if (this.ruleForm.dataType.type === 'struct') {
          this.$set(this.ruleForm.dataType.specs, val.paramsRuleForm.index, getData)
        } else {
          this.$set(this.ruleForm.dataType.specs.item.specs, val.paramsRuleForm.index, getData)
        }
      } else if (this.rowsdata.parentId === '服务') {
        console.log(222)
        if (val.status === 'in') this.$set(this.ruleForm.inputData, val.paramsRuleForm.index, getData)
        if (val.status === 'out') this.$set(this.ruleForm.outputData, val.paramsRuleForm.index, getData)
      } else {
        this.$set(this.ruleForm.outputData, val.paramsRuleForm.index, getData)
      }
      this.viewOrEditParamsDialogVisible = false
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
