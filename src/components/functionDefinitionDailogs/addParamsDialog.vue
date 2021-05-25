<template>
  <div>
    <!-- 新增参数Dialog -->
    <el-dialog
      width="30%"
      :close-on-click-modal="false"
      :append-to-body="true"
      :title="dataRow.dialogType===1?'编辑参数3':'新增参数3'"
      :visible.sync="addParamsDialogVisible"
      :before-close="closeAddDialog">
      <el-form ref="paramsRuleForm"
        :rules="paramsRules"
        :model="paramsRuleForm"
        label-position="top">
        <el-form-item  prop="paramsName">
          <el-row slot="label">
            <span>参数名称</span>
            <el-tooltip content="必填，支持中文、大小写字母、数字、短划线、下划线和小数点，必须以中文、英文或数字开头，不超过 30 个字符。" placement="right" effect="light">
              <span class="el-icon-question"></span>
            </el-tooltip>
          </el-row>
          <el-input v-model="paramsRuleForm.name" placeholder="请输入参数名称"></el-input>
        </el-form-item>
        <el-form-item label="标识符" prop="identifier">
          <el-input v-model="paramsRuleForm.identifier" placeholder="请输入标识符"></el-input>
        </el-form-item>
        <!-- 属性独有 -->
        <el-form-item label="数据类型" prop="dataType">
          <el-select v-model="paramsRuleForm.dataType" placeholder="请输入数据类型" style="width:100%">
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
              <el-input  placeholder="最小值" v-model="paramsRuleForm.specs.min"></el-input>
            </el-col>
            <el-col class="line" :span="2" style="text-align:center">-</el-col>
            <el-col :span="11">
              <el-input  placeholder="最大值" v-model="paramsRuleForm.specs.max"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <el-form-item label="步长" prop="step" v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'">
          <el-input  placeholder="请输入步长" v-model="paramsRuleForm.specs.step"></el-input>
        </el-form-item>
        <el-form-item label="单位" prop="unit" v-if="paramsRuleForm.dataType==='int'||paramsRuleForm.dataType==='float'||paramsRuleForm.dataType==='double'">
          <el-select v-model="paramsRuleForm.specs.unit" filterable placeholder="请选择" style="width:100%">
            <el-option
              v-for="item in unitOptions"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>
        </el-form-item>
        <!-- bool -->
        <el-form-item label="布尔值" prop="bool" v-if="paramsRuleForm.dataType==='bool'">
          <el-row style="margin-bottom:5px">
            <el-col :span="1">
              0
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="22">
              <el-input  v-model="paramsRuleForm.specs[0]"></el-input>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="1">
              1
            </el-col>
            <el-col class="line" :span="1">-</el-col>
            <el-col :span="22">
              <el-input v-model="paramsRuleForm.specs[1]"></el-input>
            </el-col>
          </el-row>
        </el-form-item>
        <!--enum -->
        <el-form-item label="枚举项" prop="enum" v-if="paramsRuleForm.dataType==='enum'">
          <el-row>
            <el-col :span="12">参数值</el-col>
            <el-col :span="12">参数描述</el-col>
          </el-row>
          <el-row v-for="(item,index) in enumList" :key="index" class="row">
            <el-col :span="10">
              <el-form-item >
                <el-input placeholder="编号如0" v-model="item.key"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2" style="text-align:center"> ~ </el-col>
            <el-col :span="10">
              <el-form-item >
                <el-input placeholder="对该枚举项的描述" v-model="item.value"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="2" class="delete" @click.native="deleteItem(item,index)" v-if="enumList.length > 1 " >删除</el-col>
          </el-row>
          <el-tooltip content="最多不超过100条" placement="top" effect="light">
            <span class="tooltip" @click="addItem">+添加枚举项</span>
          </el-tooltip>
        </el-form-item>
        <!-- text -->
        <el-form-item label="数据长度（单位:字节）" prop="dataLength" v-if="paramsRuleForm.dataType==='text'">
          <el-input  placeholder="请输入数据长度" v-model="paramsRuleForm.specs.length"></el-input>
        </el-form-item>
        <!-- date -->
        <el-form-item label="时间格式"  v-if="paramsRuleForm.dataType==='date'">
          <el-input :disabled="true" placeholder="请输入时间格式" v-model="paramsRuleForm.datemsg"></el-input>
        </el-form-item>
        <!-- struct -->
        <el-form-item label="JSON 对象" prop="dataType.specs" v-if="paramsRuleForm.dataType==='struct'">
          <div class="json-params" v-for="(item, index) in paramsRuleForm.dataType.specs" :key="index">
            <span class="left">参数名称：{{item.name}}</span>
            <div class="right">
              <span @click="edit(item,index,'struct')">编辑</span>
              |
              <span @click="delItem(item,index,'struct')">删除</span>
            </div>
          </div>
          <span class="tooltip" @click="openLastDialog">+新增参数</span>
        </el-form-item>
        <!-- array -->
        <el-form-item label="元素类型" prop="elementType" v-if="paramsRuleForm.dataType==='array'">
          <el-radio-group v-model="paramsRuleForm.dataType.specs.item.type">
            <el-radio label="int">int</el-radio>
            <el-radio label="float">float</el-radio>
            <el-radio label="double">double</el-radio>
            <el-radio label="text">text</el-radio>
            <el-radio label="struct">struct</el-radio>
          </el-radio-group>
        </el-form-item>
        <!-- 元素个数 -->
        <el-form-item label="元素个数" prop="elementNum" v-if="paramsRuleForm.dataType==='array'">
          <el-input  placeholder="请输入元素个数" v-model="paramsRuleForm.dataType.specs.size"></el-input>
        </el-form-item>
        <!-- Json对象 -->
        <el-form-item label="JSON 对象" prop="structVerify" v-if="paramsRuleForm.dataType==='array'&& paramsRuleForm.dataType.specs.item.type==='struct'">
          <div class="json-params" v-for="(item, index) in paramsRuleForm.dataType.specs.item.specs" :key="index">
            <span class="left">参数名称：{{item.name}}</span>
            <div class="right">
              <span @click="edit(item,index,'array')">编辑</span>
              |
              <span @click="delItem(item,index,'array')">删除</span>
            </div>
          </div>
          <span class="tooltip" @click="openLastDialog">+新增参数</span>
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
import { identifierReg } from '@/assets/js/validator'
export default {
  props: ['addParamsDialogVisible', 'dataRow', 'dataStauts', 'paramsStatus', 'funType'],
  data () {
    return {
      dataTypeList: [],
      paramsRuleForm: {
        name: '',
        identifier: '',
        dataType: 'int',
        specs: {},
        datemsg: 'String类型的UTC时间戳（毫秒）'
      },
      unitOptions: [{
        value: '血压/mmHg',
        label: '血压/mmHg'
      }, {
        value: '伏特每米/V/m',
        label: '伏特每米/V/m'
      }],
      paramsRules: {
        identifier: [
          { required: true, validator: identifierReg, trigger: 'blur' }
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
    dataStauts: {
      immediate: true,
      handler (val) {
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
    dataRow: {
      immediate: true,
      handler (val) {
        console.log('==========', val)
        if (val.dialogType === 2) {
          console.log(1)
        }
        /* this.paramsRuleForm = Object.assign({}, this.dataRow)
        if (this.dataRow.dataType.type === 'enum') {
          console.log(this.dataRow.dataType.specs)
          const list = []
          Object.keys(this.dataRow.dataType.specs).forEach(res => {
            const obj = {
              key: res,
              value: this.dataRow.dataType.specs[res]
            }
            list.push(obj)
          })
          this.enumList = list
        } */
      }
    }
  },
  created () {
  },
  methods: {
    // enumList 处理
    addItem () {
      this.enumList.push({
        key: '',
        value: ''
      })
    },
    deleteItem (item, index) {
      this.enumList.splice(index, 1)
    },
    confirm () { // TODO: 验证
      if (this.paramsStatus && this.paramsStatus === 'in') this.paramsRuleForm.paramsStatus = 'in'
      if (this.paramsStatus && this.paramsStatus === 'out') this.paramsRuleForm.paramsStatus = 'out'
      this.paramsRuleForm.arr = this.enumList
      this.$emit('getParams', this.paramsRuleForm)
      this.closeAddDialog()
    },
    resetForm () {
      this.$refs.paramsRuleForm.resetFields()
    },
    // -----组件相关
    closeAddDialog () {
      this.$emit('open', false)
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
</style>
