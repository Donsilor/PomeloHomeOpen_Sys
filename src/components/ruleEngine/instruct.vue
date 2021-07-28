<template>
  <div>
    <el-dialog
      :close-on-click-modal="false"
      :append-to-body="true"
      :title="rowsdata.status==='view'?'查看指令':'编辑指令'"
      :visible.sync="infosDialogVisible"
      :before-close="handleClose"
      width="30%">
      <el-form
        ref="ruleForm"
        :rules="rules"
        :model="ruleForm"
        label-position="top">
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
            v-model="ruleForm.nodeId"
            placeholder="请输入标识符" />
        </el-form-item>
        <!-- 属性独有 -->
        <el-form-item
          :required="true" 
          label="数据类型" 
          prop="type">
          <el-select 
            v-model="type"
            :required="true"
            disabled
            placeholder="请输入数据类型" 
            style="width:100%">
            <el-option
              v-for="(item,index) in dataTypeList"
              :key="index"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-form-item>

        <!--enum -->
        <el-form-item 
          label="枚举项" 
          prop="ruleForm.commandArrays">
          <el-row>
            <el-col :span="12">参数值</el-col>
            <el-col :span="12">参数描述</el-col>
          </el-row>
          <el-row 
            v-for="(item,index) in ruleForm.commandArrays" 
            :key="index" 
            class="row">
            <el-col :span="rowsdata.status==='view'? 11 : 10">
              <el-form-item >
                <el-input 
                  v-model="item.commandKey" 
                  placeholder="编号如0"/>
              </el-form-item>
            </el-col>
            <el-col 
              :span="2" 
              style="text-align:center"> ~ </el-col>
            <el-col :span="rowsdata.status==='view'? 11 : 10">
              <el-form-item >
                <el-input 
                  v-model="item.commandValue" 
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

        <!-- <el-form-item 
          label="描述" 
          prop="desc">
          <el-input 
            v-model="ruleForm.desc" 
            placeholder="请输入描述信息"/>
        </el-form-item> -->
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
  </div>
</template>
<script>
import { funcName, identifierReg } from '@/assets/js/validator'
import { editModel } from '@/api/productRegistration'
import { editSubModel, editSonModel, editSecModel, queryCommands, insertCommands} from '@/api/categoryManager'
export default {
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
  mounted() {
    console.log(123, this.infosDialogVisible)
    console.log(456, this.rowsdata)
    console.log(789, this.date)
    console.log(66, this.proParams)

    this.queryCommands()
  },
  data() {
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
          if (item.key < 0 || item.key > 2147483647) {
            callback(new Error('参数值取值范围：0 ~ 2147483647'))
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
      type: 'enum',

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
        deviceCategoryId: '',
        deviceSubCategoryId: '',
        nodeId: '',
        brandId: -1,
        modeType: 1,
        commandArrays: [
          {
            key: "0",
            value: ""
          }
        ]
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
        'dataType.specs.enum': [
          { required: true, validator: enumVf, trigger: 'blur' }
        ]
      },
      datemsg: 'String类型的UTC时间戳（毫秒）',
      funType: '', // 功能类型判断

      enumList: [],
    }
  },
  methods: {
    queryCommands() {
      var params = {
        params: {
          "deviceCategoryId": this.proParams.deviceCategoryId,
          "deviceSubCategoryId": this.proParams.deviceSubCategoryId,
          "nodeId": "switch",
          "brandId": -1
        }
      }

      queryCommands(params).then((res) => {
        console.log(res)
        if (res.data.code === 200) {
          // this.$message({
          //   type: 'success',
          //   message: '编辑成功'
          // })

          if(res.data.data.length){
            this.ruleForm.nodeId = res.data.data[0].nodeId
            this.ruleForm.commandArrays = []
            let obj = {
              key: '',
              value: ''
            }

            res.data.data.forEach((item, i) => {
              this.ruleForm.commandArrays.push(obj)
              this.ruleForm.commandArrays[i].key = item.commandKey
              this.ruleForm.commandArrays[i].value = item.commandValue
            })
          }

          console.log(12313, this.ruleForm)
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      })
    },
    confirm() {
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          console.log(888, this.ruleForm)
          return

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
                deviceCategoryId: this.proParams.deviceCategoryId,
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
          if(this.proParams.type === 'category'){
            if(this.proParams.val === 'son'){
              delete params.params.categoryId
              params.params.deviceCategoryId =  this.proParams.deviceCategoryId
              params.params.subCategoryId = this.proParams.prokey
              params.params.deviceSubCategoryId = this.proParams.deviceSubCategoryId
              params.params.brandId = this.proParams.brandId           
              editSonModel(params).then((res) => {
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
            }else if(this.proParams.val === 'sec'){
              delete params.params.categoryId
              params.params.deviceCategoryId =  this.proParams.deviceCategoryId
              params.params.subCategoryId = this.proParams.prokey
              params.params.deviceSubCategoryId = this.proParams.deviceSubCategoryId
              editSecModel(params).then((res) => {
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
            }else{
              editSubModel(params).then((res) => {
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
            }
          }else{
            editModel(params).then((res) => {
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
          } 
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
