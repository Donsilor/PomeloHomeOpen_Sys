<template>
  <div>
    <!-- 新增参数Dialog -->
    <el-dialog
      :close-on-click-modal="false"
      :append-to-body="true"
      :visible.sync="addCustomDialogVisible"
      :before-close="closeAddDialog"
      title="新增参数"
      width="30%">
      <el-form 
        ref="paramsRuleForm"
        :rules="paramsRules"
        :model="paramsRuleForm"
        label-position="top">
        <!-- 功能类型 -->
        <el-form-item prop="functionType">
          <el-row slot="label">
            <span class="name">功能类型</span>
            <el-tooltip 
              content="属性一般是设备的运行状态，如当前温度等；服务是设备可被调用的方法，支持定义参数，如执行某项任务；事件则是设备上报的通知，如告警，需要被及时处理。" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-select 
            v-model="paramsRuleForm.functionType" 
            style="width:100%">
            <el-option
              v-for="item in functionTypeList"
              :key="item.id"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>
        <!-- 功能名称 -->
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
            v-model="paramsRuleForm.name" 
            placeholder="功能名称"/>
        </el-form-item>
        <!-- 标识符 -->
        <el-form-item prop="identifier">
          <el-row slot="label">
            <span class="name">标识符</span>
            <el-tooltip 
              content="支持大小写字母、数字和下划线、不超过 50 个字符。" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-input 
            v-model="paramsRuleForm.identifier" 
            placeholder="请输入标识符"/>
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
            v-model="paramsRuleForm.action"
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
          v-if="paramsRuleForm.functionType===0" 
          label="数据类型" 
          prop="dataType.type">
          <el-select 
            v-model="paramsRuleForm.dataType.type" 
            placeholder="请选择数据类型" 
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
          v-if="paramsRuleForm.functionType===0 && (paramsRuleForm.dataType.type==='int'||paramsRuleForm.dataType.type==='float'||paramsRuleForm.dataType.type==='double')" 
          :required="true" 
          label="取值范围">
          <el-row>
            <el-col :span="11" >
              <el-form-item prop="dataType.specs.min">
                <el-input 
                  v-model="paramsRuleForm.dataType.specs.min" 
                  placeholder="最小值" 
                  type="number"/>
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
                  placeholder="最大值" 
                  type="number"/>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item 
          v-if="paramsRuleForm.functionType===0 && (paramsRuleForm.dataType.type==='int'||paramsRuleForm.dataType.type==='float'||paramsRuleForm.dataType.type==='double')" 
          label="步长" 
          prop="dataType.specs.step">
          <el-input 
            v-model="paramsRuleForm.dataType.specs.step" 
            placeholder="请输入步长" 
            type="number"/>
        </el-form-item>
        <el-form-item 
          v-if="paramsRuleForm.functionType===0 && (paramsRuleForm.dataType.type==='int'||paramsRuleForm.dataType.type==='float'||paramsRuleForm.dataType.type==='double')" 
          label="单位">
          <el-select 
            v-model="paramsRuleForm.dataType.specs.unit" 
            filterable 
            placeholder="请输入单位" 
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
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='bool'" 
          :required="true" 
          label="布尔值">
          <el-row style="margin-bottom:20px">
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
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='enum'" 
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
            <el-col :span="10">
              <el-form-item
              >
                <el-input 
                  v-model="item.key" 
                  placeholder="编号如0"/>
              </el-form-item>
            </el-col>
            <el-col 
              :span="2" 
              style="text-align:center"> ~ </el-col>
            <el-col :span="10">
              <el-form-item>
                <el-input 
                  v-model="item.value" 
                  placeholder="对该枚举项的描述"/>
              </el-form-item>
            </el-col>
            <el-col 
              v-if="enumList.length > 1" 
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
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='text'" 
          label="数据长度（单位:字节）" 
          prop="dataLength">
          <el-input 
            v-model="paramsRuleForm.dataType.specs.length" 
            placeholder="请输入读写类型"/>
        </el-form-item>
        <!-- date -->
        <el-form-item 
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='date'" 
          label="时间格式">
          <el-input 
            :disabled="true" 
            v-model="paramsRuleForm.dataType.specs.datemsg" 
            placeholder="请输入时间格式"/>
        </el-form-item>
        <!-- struct -->
        <el-form-item 
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='struct'" 
          label="JSON 对象" 
          prop="dataType.specs.specs">
          <div 
            v-for="(item, index) in paramsRuleForm.dataType.specs" 
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
            @click="openAddDialog">+新增参数</span>
        </el-form-item>
        <!-- array -->
        <el-form-item 
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='array'" 
          label="元素类型" 
          prop="dataType.specs.item.type">
          <el-radio-group v-model="paramsRuleForm.dataType.specs.item.type">
            <el-radio label="int">int</el-radio>
            <el-radio label="float">float</el-radio>
            <el-radio label="double">double</el-radio>
            <el-radio label="text">text</el-radio>
            <el-radio label="struct">struct</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item 
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='array'" 
          label="元素个数" 
          prop="dataType.specs.size">
          <el-input 
            v-model="paramsRuleForm.dataType.specs.size" 
            placeholder="请输入元素个数"/>
        </el-form-item>

        <el-form-item 
          v-if="paramsRuleForm.functionType===0 && paramsRuleForm.dataType.type==='array' && paramsRuleForm.dataType.specs.item.type==='struct'" 
          label="JSON 对象" 
          prop="dataType.specs.item.specs">
          <div 
            v-for="(item, index) in paramsRuleForm.dataType.specs.item.specs" 
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
            @click="openAddDialog">+新增参数</span>
        </el-form-item>
        <!-- 读写类型 -->
        <el-form-item 
          v-if="paramsRuleForm.functionType === 0" 
          :required="true" 
          label="读写类型" 
          prop="accessMode">
          <el-radio-group v-model="paramsRuleForm.accessMode">
            <el-radio label="r">只读</el-radio>
            <el-radio label="rw">读写</el-radio>
          </el-radio-group>
        </el-form-item>
        <!------------------------------------------------------------- 服务--------------------------------------------------------------------- -->
        <el-form-item 
          v-if="paramsRuleForm.functionType === 1" 
          prop="callType">
          <el-row slot="label">
            <span class="name">调用方式</span>
            <el-tooltip 
              content=" 异步调用是指云端执行调用后直接返回，不会关心设备的回复消息，如果服务为同步调用，云端会等待设备回复，否则会调用超时。" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-radio-group v-model="paramsRuleForm.callType">
            <el-radio label="sync">同步</el-radio>
            <el-radio label="async">异步</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 输入参数 -->
        <el-form-item 
          v-if="paramsRuleForm.functionType===1" 
          label="输入参数">
          <div 
            v-for="(item, index) in paramsRuleForm.inputData" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click=" edit(item,index,'in')">编辑</span>
              |
              <span @click="serviceDelItem(item,index,'in')">删除</span>
            </div>
          </div>
          <span 
            class="tooltip" 
            @click="openAddDialog('in')">+新增参数</span>
        </el-form-item>
        <!-- 输出参数 -->
        <el-form-item 
          v-if="paramsRuleForm.functionType === 1" 
          label="输出参数">
          <div 
            v-for="(item, index) in paramsRuleForm.outputData" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click=" edit(item,index,'out')">编辑</span>
              |
              <span @click="serviceDelItem(item,index,'out')">删除</span>
            </div>
          </div>
          <span 
            class="tooltip" 
            @click="openAddDialog('out')">+新增参数</span>
        </el-form-item>
        <!-- ------------------------------------------事件-------------------------------------------------------------------------- -->
        <el-form-item 
          v-if="paramsRuleForm.functionType === 2" 
          prop="type">
          <el-row slot="label">
            <span class="name">事件类型</span>
            <el-tooltip 
              content=" “信息”是设备上报的一般性通知，如完成某项任务等。“告警”和“故障”是设备运行过程中主动上报的突发或异常情况，优先级高。不同的事件类型将用于统计分析。" 
              placement="right" 
              effect="light">
              <span class="el-icon-question"/>
            </el-tooltip>
          </el-row>
          <el-radio-group v-model="paramsRuleForm.type">
            <el-radio label="info">信息</el-radio>
            <el-radio label="alert">告警</el-radio>
            <el-radio label="error">故障</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 输出参数 -->
        <el-form-item 
          v-if="paramsRuleForm.functionType === 2" 
          label="输出参数">
          <div 
            v-for="(item, index) in paramsRuleForm.eOutputData" 
            :key="index" 
            class="json-params">
            <span class="left">参数名称：{{ item.name }}</span>
            <div class="right">
              <span @click=" edit(item,index,'eOut')">编辑</span>
              |
              <span @click="serviceDelItem(item,index,'eOut')">删除</span>
            </div>
          </div>
          <span 
            class="tooltip" 
            @click="openAddDialog">+新增参数</span>
        </el-form-item>
        <el-form-item label="描述" >
          <el-input 
            v-model="paramsRuleForm.desc" 
            :rows="5" 
            type="textarea" 
            maxlength="100" 
            show-word-limit/>
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
    <!-- <addParamsDialog v-if="addDialogShow" :addParamsDialogVisible="addParamsDialogVisible"  @open="addParamsDialogVisible = false" :dataStauts="dataStauts" @getParams="getParams" :paramsStatus="paramsStatus" :dataRow="dataRow"/> -->
    <!-- 添加参数dialog -->
    <viewOrEditParamsDialog
      v-if="viewOrEditParamsDialogVisible"
      :view-or-edit-params-dialog-visible="viewOrEditParamsDialogVisible"
      :data-stauts="dataStauts"
      :data-row="dataRow"
      @closeOv="viewOrEditParamsDialogVisible = false"
      @open="viewOrEditParamsDialogVisible = false"
      @editParams="editParams"/>
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
// import addParamsDialog from '@/components/functionDefinitionDailogs/addParamsDialog'
import { mapGetters } from 'vuex'
import { functionTypeList, dataTypeList, defitionObjectModel,actionOptions, specsObjectModel } from '@/assets/js/defition'
import viewOrEditParamsDialog from '@/components/functionDefinitionDailogs/viewOrEditParamsDialog'
import addDialog from '@/components/functionDefinitionDailogs/add1'
import { funcName, arrStructVf, identifierReg } from '@/assets/js/validator'
import { addModel } from '@/api/productRegistration'
import { addSubModel, addSonModel,addSecModel } from '@/api/categoryManager'
export default {
  components: {
    // addParamsDialog
    viewOrEditParamsDialog,
    addDialog
  },
  props: ['addCustomDialogVisible', 'proParams'],
  data() {
    const structs = (rule, value, callback) => {
      if (this.paramsRuleForm.dataType.type === 'struct' && this.paramsRuleForm.dataType.specs.length === 0) {
        callback(new Error('struct不能为空'))
      } else {
        callback()
      }
    }
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
      console.log(this.keyFlag)
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
      functionTypeList: Object.assign([], functionTypeList), // 功能列表
      dataTypeList: Object.assign([], dataTypeList), // 功能为属性时候的 数据类型列表
      actionOptions: Object.assign([], actionOptions), // 执行动作
      paramsRuleForm: Object.assign({}, defitionObjectModel), // 提交时的数据模板
      paramsRules: {
        functionType: [
          { required: true, message: '请选择功能类型', trigger: 'blur' },
          { validator: funcName, trigger: 'change' }
        ],
        name: [
          { required: true, message: '请输入功能名称', trigger: 'blur' }
        ],
        identifier: [
          { required: true, validator: identifierReg, trigger: 'blur' }
        ],
        action:[
          { required: true, message: '请选择执行动作', trigger: 'blur' }
        ],
        'dataType.type': [
          { required: true, message: '请选择数据类型', trigger: 'blur' }
        ],
        'dataType.specs.min': [
          { required: true, message: '请输入正确的取值范围', trigger: 'blur' }
        ],
        'dataType.specs.max': [
          { required: true, message: '请输入正确的取值范围', trigger: 'blur' }
        ],
        'dataType.specs.step': [
          { required: true, message: '步长不能为空', trigger: 'blur' },
          { validator: step, trigger: 'change' }
        ],
        'dataType.specs[0]': [
          { required: true, message: '请输入正确的布尔值', trigger: 'blur' }
        ],
        'dataType.specs[1]': [
          { required: true, message: '请输入正确的布尔值', trigger: 'blur' }
        ],
        'dataType.specs.enum': [
          { required: true, validator: enumVf, trigger: 'change' }
        ],
        'dataType.specs.specs': [
          { required: true, validator: structs, trigger: 'change' }
        ],
        dataLength: [
          { required: true, message: '请输入数据长度', trigger: 'blur' }
        ],
        'dataType.specs.size': [
          { required: true, message: '元素个数应为1-512', trigger: 'blur' }
        ],
        'dataType.specs.item.specs': [
          { required: true, validator: arrStructVf, trigger: ['blur', 'change'] }
        ],
        'dataType.specs.item.type': [
          { required: true, message: '请选择元素类型', trigger: 'change' }
        ],
        accessMode: [
          { required: true, message: '请选择读写类型', trigger: 'change' }
        ],
        callType: [
          { required: true, message: '请选择调用方式', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择调用方式', trigger: 'change' }
        ]
      },
      enumList: [{ key: '', value: '' }],
      viewOrEditParamsDialogVisible: false,
      addParamsDialogVisible: false, // 打开添加参数dialog
      addDialogShow: false,
      funType: '', // 功能类型判断
      dataStauts: '', // 判断是属性，还是事件/服务
      paramsStatus: '', // 判断服务中点击的是输入参数中的新增Dialog还是输出参数的新增Dialog
      dataRow: {},
      params: null
    }
  },
  computed: {
    ...mapGetters(['getSelList'])
  },
  watch: {
    // 监听功能类型的切换
    'paramsRuleForm.functionType': {
      immediate: true,
      handler(val) {
        if (val === 0) {
          this.dataStauts = 'add1'
        } else {
          this.dataStauts = 'add2'
        }
      }
    },
    // 选择不同的数据类型的时候相应的切换初始化specs的数据格式
    'paramsRuleForm.dataType.type': {
      immediate: true,
      handler(val) {
        if (val === 'int' || val === 'float' || val === 'double') {
          this.paramsRuleForm.dataType.specs = Object.assign({}, specsObjectModel.number)
        } else if (val === 'struct') { // struct比较特殊，是一个数组
          this.paramsRuleForm.dataType.specs = Object.assign([], specsObjectModel[val])
        } else {
          this.paramsRuleForm.dataType.specs = Object.assign({}, specsObjectModel[val])
        }
      }
    },
    // 数据类型为Array的情况下元素类型的切换时候，将item.specs初始化为空数组
    'paramsRuleForm.dataType.specs.item.type': {
      immediate: true,
      handler(val) {
        console.log('元素类型切换：', val)
        if (val) {
          this.paramsRuleForm.dataType.specs.item.specs = []
        }
      }
    }
  },
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
      if (val !== 'struct') {
        this.$refs.paramsRuleForm.clearValidate('dataType.specs.specs')
      }
      if (val !== 'array') {
        this.$refs.paramsRuleForm.clearValidate('dataType.specs.item.specs')
      }
      if (val !== 'enum') {
        this.$refs.paramsRuleForm.clearValidate('dataType.specs.enum')
      }
    },
    // enumList 添加 删除
    addItem() {
      this.enumList.push({
        key: '',
        value: ''
      })
    },
    deleteItem(item, index, val) {
      this.enumList.splice(index, 1)
    },
    //  struct array-struct 编辑 删除 属性
    delItem(item, index, val) {
      console.log(item, index)
      if (val === 'struct') {
        this.paramsRuleForm.dataType.specs.splice(index, 1)
      } else {
        this.paramsRuleForm.dataType.specs.item.specs.splice(index, 1)
      }
    },
    // 编辑
    edit(item, index, val) {
      console.log('服务点击的item:', item)
      item.index = index
      this.dataRow = item
      this.dataRow.dialogType = 1
      this.dataRow.funcStatus = val
      this.dataRow.parentId = this.paramsRuleForm.functionType === 0
        ? '属性'
        : this.paramsRuleForm.functionType === 1
          ? '服务'
          : '事件'
      this.viewOrEditParamsDialogVisible = true
    },
    serviceDelItem(item, index, val) {
      if (val === 'in') {
        this.paramsRuleForm.inputData.splice(index, 1)
      } else if (val === 'out') {
        this.paramsRuleForm.outputData.splice(index, 1)
      } else {
        this.paramsRuleForm.eOutputData.splice(index, 1)
      }
    },
    // 打开添加参数dialog
    openAddDialog(paramsStatus) {
      console.log('paramsRuleForm.functionType:', this.paramsRuleForm.functionType)
      if (this.paramsRuleForm.functionType === 0) { // 类型为属性
        this.funType = 'add1'
      } else {
        this.funType = ''
      }
      this.addDialogShow = true
      this.dataRow.dialogType = 2
      this.paramsStatus = paramsStatus
      this.addParamsDialogVisible = true
    },
    confirm() {
      console.log('总，', this.paramsRuleForm)
      Reflect.deleteProperty(this.paramsRuleForm.inputData, 'index')
      Reflect.deleteProperty(this.paramsRuleForm.inputData, 'dialogType')
      Reflect.deleteProperty(this.paramsRuleForm.inputData, 'parentId')
      Reflect.deleteProperty(this.paramsRuleForm.inputData, 'funcStatus')

      if (this.paramsRuleForm.functionType !== 0) delete this.paramsRuleForm.accessMode
      if (this.paramsRuleForm.functionType === 1) {
        delete this.paramsRuleForm.type
        delete this.paramsRuleForm.eOutputData
      }

      this.$refs.paramsRuleForm.validateField('dataType.specs')
      this.$refs.paramsRuleForm.validate((valid) => {
        if (valid) {
          // 将enum转换回对象
          if (this.paramsRuleForm.dataType.type === 'enum') {
            const obj = {}
            this.enumList.forEach((item) => {
              obj[item.key] = item.value
            })
            this.paramsRuleForm.dataType.specs = obj
          }
          this.params = {
            accessMode: this.paramsRuleForm.accessMode,
            identifier: this.paramsRuleForm.identifier,
            name: this.paramsRuleForm.name,
            action:this.paramsRuleForm.action,
            required: false,
            desc: this.paramsRuleForm.desc
          }
          let params
          if (this.proParams.type && this.proParams.type === 'category') {
            params = {
              params: {
                categoryId: this.proParams.prokey,
                deviceCategoryId: this.proParams.deviceCategoryId
              }
            }
            console.log('0', params)
          } else {
            params = {
              params: {
                productKey: this.proParams.prokey,
                modelVersion: this.proParams.modelVersion
              }
            }
          }
          if (this.paramsRuleForm.functionType === 0) {
            this.params.dataType = Object.assign({}, this.paramsRuleForm.dataType)
            params.params.abilityType = 1
            params.params.properties = this.params
          } else if (this.paramsRuleForm.functionType === 1) {
            this.params.callType = this.paramsRuleForm.callType
            this.params.inputData = Object.assign([], this.paramsRuleForm.inputData)
            this.params.outputData = Object.assign([], this.paramsRuleForm.outputData)
            params.params.abilityType = 2
            params.params.services = this.params
          } else {
            this.params.type = this.paramsRuleForm.type
            this.params.outputData = Object.assign([], this.paramsRuleForm.eOutputData)
            params.params.abilityType = 3
            params.params.events = this.params
          }
          if(this.proParams.type === 'category'){
            if(this.proParams.val === 'son' ){
              delete params.params.categoryId
              params.params.subCategoryId = this.proParams.prokey
              params.params.deviceSubCategoryId =  this.proParams.deviceSubCategoryId
              params.params.brandId =  this.proParams.brandId
              params.params.deviceCategoryId =  this.proParams.deviceCategoryId
              console.log(params)
              addSonModel(params).then((res) => {
                if (res.data.code === 200) {
                  this.$message.success('新增成功')
                  this.closeAddDialog()
                  setTimeout(() => {
                    this.$parent.getDraftModelData()
                  }, 0)
                }
              })
            }else if(this.proParams.val === 'sec' ){
              delete params.params.categoryId
              params.params.subCategoryId = this.proParams.prokey
              params.params.deviceSubCategoryId =  this.proParams.deviceSubCategoryId
              params.params.deviceCategoryId =  this.proParams.deviceCategoryId
              addSecModel(params).then((res) => {
                if (res.data.code === 200) {
                  this.$message.success('新增成功')
                  this.closeAddDialog()
                  setTimeout(() => {
                    this.$parent.getDraftModelData()
                  }, 0)
                }
              })
            }else{
              addSubModel(params).then((res) => {
                if (res.data.code === 200) {
                  this.$message.success('新增成功')
                  this.closeAddDialog()
                  setTimeout(() => {
                    this.$parent.getDraftModelData()
                  }, 0)
                }
              })
            } 
          }else{
            addModel(params).then((res) => {
              if (res.data.code === 200) {
                this.$message.success('新增成功')
                this.closeAddDialog()
                setTimeout(() => {
                  this.$parent.getDraftModelData()
                }, 0)
              }
            })
          }  
        } else {
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    // fu组件
    closeAddDialog() {
      this.$emit('open-addcustom-dialog')
      this.$parent.getDraftModelData()
      this.$refs.paramsRuleForm.resetFields()
    },
    // zi组件
    getParams(val) {
      const obj = {
        identifier: val.identifier,
        name: val.name,
        dataType: {
          type: val.dataType,
          specs: val.specs
        }
      }
      if (val.dataType === 'enum') {
        obj.dataType.specs.enumList = val.arr
      }
      if (this.paramsRuleForm.functionType === 0) {
        if (this.paramsRuleForm.dataType.type === 'struct') {
          this.paramsRuleForm.dataType.specs.push(obj)
        } else {
          this.paramsRuleForm.dataType.specs.item.specs.push(obj)
        }
      } else if (this.paramsRuleForm.functionType === 1) {
        if (val.paramsStatus === 'in') this.paramsRuleForm.inputData.push(obj)
        if (val.paramsStatus === 'out') this.paramsRuleForm.outputData.push(obj)
      } else {
        this.paramsRuleForm.eOutputData.push(obj)
      }
      // 关闭增加参数的弹窗
      this.addParamsDialogVisible = false
    },
    editParams(val) {
      console.log('val1--', val)
      const getData = Object.assign({}, val.paramsRuleForm)
      delete getData.funcStatus
      delete getData.index
      delete getData.parentId
      delete getData.dialogType
      if (this.paramsRuleForm.functionType === 0) {
        if (this.paramsRuleForm.dataType.type === 'struct') {
          this.$set(this.paramsRuleForm.dataType.specs, val.paramsRuleForm.index, getData)
        } else {
          this.$set(this.paramsRuleForm.dataType.specs.item.specs, val.paramsRuleForm.index, getData)
        }
      } else if (this.paramsRuleForm.functionType === 1) {
        if (val.status === 'in') this.$set(this.paramsRuleForm.inputData, val.paramsRuleForm.index, getData)
        if (val.status === 'out') this.$set(this.paramsRuleForm.outputData, val.paramsRuleForm.index, getData)
      } else {
        this.$set(this.paramsRuleForm.outputData, val.paramsRuleForm.index, getData)
      }
      // 关闭编辑的弹窗
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
  .row{
    margin-bottom: 20px;
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
  /deep/ .el-form-item__content{
      line-height: 40px;
    }
</style>
