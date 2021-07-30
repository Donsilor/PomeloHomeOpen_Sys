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
            disabled
            placeholder="请输入标识符" />
        </el-form-item>
        <!-- 属性独有 -->
        <el-form-item
          label="数据类型" 
          prop="type">
          <el-select 
            v-model="type"
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
          prop="commandArrays">
          <el-row>
            <el-col :span="12">参数值</el-col>
            <el-col :span="12">参数描述</el-col>
          </el-row>
          <el-row 
            v-for="(item,index) in ruleForm.commandArrays" 
            :key="index" 
            class="row"
            :class="{err: errs[index] !== ''}">
            <el-col :span="rowsdata.status==='view'? 11 : 10">
              <el-form-item >
                <el-input 
                  v-model="item.key"
                  :class="{border: errs[index] == 'key' || errs[index] == 'all'}"
                  placeholder="编号如0"/>
              </el-form-item>
            </el-col>
            <el-col 
              :span="2" 
              style="text-align:center"> ~ </el-col>
            <el-col :span="rowsdata.status==='view'? 11 : 10">
              <el-form-item >
                <el-input 
                  v-model="item.value"
                  :class="{border: errs[index] == 'value' || errs[index] == 'all'}"
                  placeholder="对该枚举项的描述"/>
              </el-form-item>
            </el-col>
            <el-col 
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
          <div v-if="errText" style="height: 20px;line-height: 20px;color: rgb(245, 108, 108);font-size: 12px">{{ errText }}</div>
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
import { queryCommands, insertCommands} from '@/api/categoryManager'
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
    instructParams: {
      type: Object,
      default: function(){
        return {}
      }
      
    }
  },
  mounted() {
    this.queryCommands()
  },
  data() {
    const enumVf = (rule, value, callback) => {
      

      callback()

      this.err = false
      this.errIndex = -1

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
            key: "",
            value: ""
          }
        ]
      },
      rules: {
        commandArrays: [
          { required: true, validator: enumVf, trigger: 'blur' }
        ]
      },
      errText: '',
      errType: '',
      errIndex: '',
      errs: []
    }
  },
  methods: {
    // 获取指令
    queryCommands() {
      this.ruleForm.deviceCategoryId = this.instructParams.deviceCategoryId
      this.ruleForm.deviceSubCategoryId = this.instructParams.deviceSubCategoryId
      this.ruleForm.brandId = this.instructParams.brandId
      this.ruleForm.nodeId = this.instructParams.nodeId
      this.ruleForm.modeType = this.instructParams.modeType

      var params = {
        params: {
          "deviceCategoryId": this.instructParams.deviceCategoryId,
          "deviceSubCategoryId": this.instructParams.deviceSubCategoryId,
          "nodeId": this.instructParams.nodeId,
          "brandId": this.instructParams.brandId
        }
      }

      queryCommands(params).then((res) => {
        if (res.data.code === 200) {
          if(res.data.data.length){
            this.ruleForm.commandArrays = []
            let obj = {}

            res.data.data.forEach((item, i) => {
              obj = {key: '', value: ''}
              this.ruleForm.commandArrays.push(obj)
              this.ruleForm.commandArrays[i].key = item.commandKey
              this.ruleForm.commandArrays[i].value = item.commandValue
            })
          }
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      })
    },
    // 编辑指令
    insertCommands() {
      var params = {
        params: this.ruleForm
      }

      insertCommands(params).then((res) => {
        if (res.data.code === 200) {
          this.handleClose()

          this.$message({
            type: 'success',
            message: '编辑成功'
          })
        } else {
          this.$message({
            type: 'error',
            message: res.data.message
          })
        }
      })
    },
    confirm() {
      const reg = /^[a-zA-Z]*$/
      const regN = /^(\-?)\d*$/
      let command = this.ruleForm.commandArrays

      // 判断key相同值
      const arr = []
      this.ruleForm.commandArrays.forEach((ele, index) => {
        if (arr.indexOf(ele.key) > -1) {
          this.keyFlag = true
        } else {
          this.keyFlag = false
          arr.push(ele.key)
        }
      })

      this.err = false

      var flag = '';
      this.errs = []
      
      for(let i=0; i<command.length; i++){
        flag = ''

        if(command[i].key === '' ||
          !regN.test(command[i].key) ||
          command[i].key < 0 || command[i].key > 2147483647)
        {
          flag = 'key'
        }

        if(command[i].value === '' || !reg.test(command[i].value)){
          if(flag === 'key'){
            flag = 'all'
          }else{
            flag = 'value'
          }
        }

        this.errs.push(flag)
      }

      for(let i=0; i<command.length; i++){
        if(command[i].key === '' || command[i].value === ''){
          if(command[i].key === ''){
            this.errType = 'key'
          }else{
            this.errType = 'value'
          }
          this.errIndex = i
          this.errText = '参数值跟描述值不能为空'
          return
        }else if(!regN.test(command[i].key)){
          this.errIndex = i
          this.errType = 'key'
          this.errText = '参数值只支持数字'
          return
        }else if(command[i].key < 0 || command[i].key > 2147483647){
          this.errIndex = i
          this.errType = 'key'
          this.errText = '参数值取值范围：0 ~ 2147483647'
          return
        }else if(!reg.test(command[i].value)){
          this.errIndex = i
          this.errType = 'value'
          this.errText = '参数描述仅支持英文'
          return
        }else if(this.keyFlag){
          this.errType = 'key'
          this.errText = '参数值不能重复'
          return
        }
      }

      this.insertCommands()
    },
    handleClose() {
      this.$emit('open-view-dialog')
    },
    addItem() {
      this.ruleForm.commandArrays.push({
        key: '',
        value: ''
      })
    },
    deleteItem(item, index) {
      this.ruleForm.commandArrays.splice(index, 1)
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
.err{
  .border{
    /deep/ .el-input__inner{
      border-color: red;
    }
  }
}
</style>
