<template>
  <div class="app-container">
    <el-row class="title">
      <el-button
        type="primary" 
        @click="dialogShow=true, type=1">创建场景</el-button>

      <el-input
        v-model="searchVal"
        size="small" 
        type="string"
        class="width200"
        style="margin: 0 10px 0 30px"
        @keyup.enter.native="search">
        <i slot="suffix" class="el-input__icon el-icon-search" @click="search"></i>
      </el-input>

      <el-button
        type="primary"
        size="small"
        @click="search">搜索</el-button>
    </el-row>

    <el-table :data="newdataList" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row style="width: 100%; marginTop: 20px">
      <el-table-column align="center" label="序号" prop="scene_num">
      </el-table-column>
      <el-table-column align="center" label="触发类型" prop="scene_type">
      </el-table-column>
      <el-table-column align="center" label="场景名称" prop="scene_name">
      </el-table-column>
      <el-table-column align="center" label="类型" prop="relevance_scene">
      </el-table-column>
      <el-table-column align="center" label="简介" prop="brief">
      </el-table-column>
      <el-table-column align="center" label="创建时间" prop="establish_time">
      </el-table-column>
      <el-table-column align="center" label="修改时间" prop="amend_time">
      </el-table-column>
      <el-table-column align="center" label="状态">
        <template slot-scope="scope">
          <el-tag type="success" v-if="scope.row.is_valid">已启用</el-tag>
          <el-tag type="info" v-else>已禁用</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="320">
        <template slot-scope="scope">
          <el-button @click="type=2, openDialog(scope.row)" size="small" type="primary">查看</el-button>
          <el-button @click="type=3, openDialog(scope.row)" size="small" type="primary">编辑</el-button>
          <el-button v-if="scope.row.is_valid" @click="list[scope.$index].is_valid = false" size="small" type="primary">禁用</el-button>
          <el-button v-else @click="list[scope.$index].is_valid = true" size="small" type="primary">启用</el-button>
          <el-button @click="deleteFault(scope.$index)" size="small" type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 分页 -->
    <div class="pagination">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

    <!-- 创建场景弹窗 -->
    <el-dialog center width="720px" class="doc-dialog"
          :title="type == 1 ? '创建场景' : type == 2 ? '查看场景' : '编辑场景'" :visible.sync="dialogShow" positi>
      <el-form ref="permissionForm" :model="form" label-width="90px" label-position="left" :rules="formRules" >
        <el-form-item :required="true" label="场景序号" prop="scene_num">
          <el-input v-model="form.scene_num" type="number" placeholder="请输入序号"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="场景类型" prop="scene_type">
          <el-select v-model="form.scene_type" placeholder="请选择类型" class="width540">
            <el-option label="自动" value="auto"></el-option>
            <el-option label="手动" value="manual"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="场景名称" prop="scene_name">
            <el-input :readonly="isToModify?true:false" v-model="form.scene_name" placeholder="请输入场景名称"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="场景图标" prop="scene_icon">
          <el-select v-model="form.scene_icon" :popper-append-to-body="false" placeholder="请选择类型" class="dialog_select width540">
            <el-option v-for="(item, index) in img_url" :key="index" :value="item.name">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.url"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="模板类型" prop="tem_type">
          <el-select v-model="form.tem_type" :popper-append-to-body="false" placeholder="请选择模板类型" class="width540">
            <el-option v-for="(item, index) in templateType" :key="index" :value="item">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="简介" prop="synopsis">
          <el-input v-model="form.synopsis" placeholder="简介"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="详细介绍" prop="detailed">
          <el-input v-model="form.detailed" placeholder="详细介绍"></el-input>
        </el-form-item>

        <div class="scene_details">
          <div class="name">场景详情</div>
          <!-- 自动详情 -->
          <div v-if="form.scene_type == 'auto'" class="content">
            <!-- <div>
              <el-tooltip class="item" effect="dark" show-overflow-tooltip content="与：满足所有条件才会触发；或：满足任一条件即可触发" placement="right">
                <div class="tip">
                  <span>触发条件</span> <i class="el-icon-question"></i>
                </div>
              </el-tooltip>
            </div> -->
          
            <div class="relation">
              <el-radio v-model="form.details.trigger.relation" label="1">满足全部关系时</el-radio>
              <el-radio v-model="form.details.trigger.relation" label="2">满足任意关系时</el-radio>
            </div>

            <div class="trigger" v-for="(item, index) in form.details.trigger.content" :key="index+'a'">
              <el-row class="trigger_row">
                <el-col :span="19">
                  <div>触发条件1</div>

                  <div style="margin-top: 4px">
                    <el-select v-model="item.type" placeholder="请选择触发条件">
                      <el-option
                        v-for="(det, index) in detailsType"
                        :key="index"
                        :label="det"
                        :value="det">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.facility" placeholder="请选择设备">
                      <el-option
                        v-for="(fac, index) in facility"
                        :key="index"
                        :label="fac"
                        :value="fac">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.attribute" placeholder="请选择属性">
                      <el-option
                        v-for="(attr, index) in attribute"
                        :key="index"
                        :label="attr"
                        :value="attr">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.comparison" placeholder="请选择比较值">
                      <el-option
                        v-for="(com, index) in comparison"
                        :key="index"
                        :label="com"
                        :value="com">
                      </el-option>
                    </el-select>

                    <el-input v-if="item.type == '设备'" class="width200" v-model="item.input" placeholder="请输入内容"></el-input>

                    <el-input v-if="item.type == '定时'" class="width200" v-model="item.time" placeholder="请输入指定时间 HH:MM"></el-input>

                    <el-select v-if="item.type == '定时'" v-model="item.operation" placeholder="请选择执行方式">
                      <el-option
                        v-for="(exe, index) in executeMode"
                        :key="index"
                        :label="exe"
                        :value="exe">
                      </el-option>
                    </el-select>

                    <el-date-picker
                      v-if="item.type == '定时' && item.operation == '指定日期'"
                      v-model="item.data"
                      type="date"
                      placeholder="选择日期"
                      class="width200">
                    </el-date-picker>

                    <el-checkbox-group 
                      v-if="item.type == '定时' && item.operation == '每周'"
                      v-model="item.weeks">
                      <el-checkbox v-for="(week, index) in weeks" :label="week" :key="index">{{week}}</el-checkbox>
                    </el-checkbox-group>

                    <el-select v-if="item.type == '家庭安防'" v-model="item.operation" placeholder="请选择操作">
                      <el-option
                        v-for="(ope, index) in operation"
                        :key="index"
                        :label="ope"
                        :value="ope">
                      </el-option>
                    </el-select>
                  </div>
                </el-col>

                <el-col :span="4" :offset="1" style="height: 100%;display: flex;justify-content: center;align-items: center">
                  <el-button type="success" icon="el-icon-plus" circle @click="addCondition()"></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle @click="delCondition(index)"></el-button>
                </el-col>
              </el-row>
            </div>

            <div class="trigger" v-for="(item, index) in form.details.carryOut.content" :key="index+'b'">
              <el-row class="trigger_row">
                <el-col :span="19">
                  <div>执行动作</div>

                  <div style="margin-top: 4px">
                    <el-select v-model="item.type" placeholder="请选择执行动作">
                      <el-option
                        v-for="(det, index) in motion"
                        :key="index"
                        :label="det"
                        :value="det">
                      </el-option>
                    </el-select>
                  </div>
                </el-col>

                <el-col :span="4" :offset="1" class="btn">
                  <el-button type="success" icon="el-icon-plus" circle @click="addMotion()"></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle @click="delMotion(index)"></el-button>
                </el-col>
              </el-row>
            </div>

          </div>
          <!-- 手动详情 -->
          <div v-else class="content">
            <div class="trigger" v-for="(item, index) in form.details.trigger.content" :key="index+'a'">
              <el-row class="trigger_row">
                <el-col :span="19">
                  <div>触发条件1</div>

                  <div style="margin-top: 4px">
                    <el-select v-model="item.type" placeholder="请选择执行动作">
                      <el-option
                        v-for="(det, index) in detailsTypeT"
                        :key="index"
                        :label="det"
                        :value="det">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '家庭安防'" v-model="item.operation" placeholder="请选择安防">
                      <el-option
                        v-for="(swi, index) in switchSecurity"
                        :key="index"
                        :label="swi"
                        :value="swi">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '家庭安防'" v-model="item.switchSecurity" placeholder="请选择操作">
                      <el-option
                        v-for="(swi, index) in operationT"
                        :key="index"
                        :label="swi"
                        :value="swi">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.facilityT" placeholder="请选择设备">
                      <el-option
                        v-for="(fac, index) in facility"
                        :key="index"
                        :label="fac"
                        :value="fac">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.attributeT" placeholder="请选择属性">
                      <el-option
                        v-for="(attr, index) in attributeT"
                        :key="index"
                        :label="attr"
                        :value="attr">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.comparison" placeholder="请选择比较值">
                      <el-option
                        v-for="(com, index) in comparison"
                        :key="index"
                        :label="com"
                        :value="com">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备' && (item.attributeT == 'bool' || item.attributeT == 'enum')" v-model="item.attributeVal" placeholder="请选择属性值">
                      <el-option
                        v-for="(attr, index) in attributeVal"
                        :key="index"
                        :label="attr"
                        :value="attr">
                      </el-option>
                    </el-select>

                    <el-input v-if="item.type == '设备' && (item.attributeT == 'int' || item.attributeT == 'float' || item.attributeT == 'double' || item.attributeT == 'text')" class="width200" v-model="item.input" placeholder="请输入属性值"></el-input>
                  </div>
                </el-col>

                <el-col :span="4" :offset="1" style="height: 100%;display: flex;justify-content: center;align-items: center">
                  <el-button type="success" icon="el-icon-plus" circle @click="addCondition()"></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle @click="delCondition(index)"></el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-form>

      <div slot="footer" class="dialog-footer">
          <el-button @click="dialogShow = false">取 消</el-button>
          <el-button v-if="status!=0" type="primary" @click="addOrEdit">{{isToModify?'保存修改':'确 定'}}</el-button>
      </div>
    </el-dialog>

    <!-- 非设备时不能为关系与的提示 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>{{ dialogContent }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="switchRelation(dialogType)">确 定</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import { validaTemplateName } from '@/utils/validate'
import { getSenceList, AddSenceTemplate } from '@/api/ruleEngine.js'

export default {
  data() {
    const validateFrom = (rule, value, callback) => {
      if (!validaTemplateName(value)) {
        callback(new Error('请输入正确的场景名称'))
      } else {
        callback()
      }
    }

    return {
      dialogShow: false,       // 弹窗显示隐藏
      type: 1,                // 弹窗类型： 1为创建，2为查看，3为编辑  
      searchVal: '',          // 搜索值
      list: [                 // 虚拟列表
        {scene_num: 1, scene_type: '自动', scene_name: '睡眠', relevance_scene: '关联一', establish_time: '1996-11-05 20:00:00', amend_time: '1996-11-5 20:0:0', is_valid: true},
        {scene_num: 2, scene_type: '自动', scene_name: '起床', relevance_scene: '关联一', establish_time: '1998-05-11 14:40:05', amend_time: '1996-11-5 20:0:0', is_valid: false},
        {scene_num: 3, scene_type: '手动', scene_name: '离家', relevance_scene: '关联一', establish_time: '1998-05-20 20:00:05', amend_time: '1996-11-5 20:0:0', is_valid: true},
        {scene_num: 4, scene_type: '自动', scene_name: '刷牙', relevance_scene: '关联一', establish_time: '2007-02-17 12:17:06', amend_time: '1996-11-5 20:0:0', is_valid: true},
        {scene_num: 5, scene_type: '手动', scene_name: '洗脚', relevance_scene: '关联一', establish_time: '2014-11-13 10:20:40', amend_time: '1996-11-5 20:0:0', is_valid: true},
        {scene_num: 6, scene_type: '手动', scene_name: '板状', relevance_scene: '关联一', establish_time: '1992-04-03 07:05:15', amend_time: '1996-11-5 20:0:0', is_valid: false},
      ],
      templateType: ['常见场景','健康','安防','休闲/娱乐','探索更多'],        // 模板类型
      img_url: [          
        {url: require('../../assets/imgs/adf.jpeg'), name: 'img_1'},
        {url: require('../../assets/imgs/adf.jpeg'), name: 'img_2'},
        {url: require('../../assets/imgs/adf.jpeg'), name: 'img_3'},
        {url: require('../../assets/imgs/adf.jpeg'), name: 'img_4'},
        {url: require('../../assets/imgs/adf.jpeg'), name: 'img_4'}
      ],
      currentPage1: 5,
      currentPage2: 5,
      currentPage3: 5,
      currentPage4: 4, 
      // 分页功能
      total: 0, // 到时候从后台获取
      listQuery: {
        page: 1,
        limit: 5
      },
      // ------------
      tableData: [],

      form: {       
        scene_num: 0,   
        scene_type: 'auto',   // auto自动，manual手动
        scene_name: '',
        scene_icon: '',
        tem_type: '',
        synopsis: '',
        detailed: '',
        details: {
          trigger: {                               //触发条件
            relation: '0',                         //或，与关系, 1为或关系，2为与关系
            content: [
              {type: '', facility: '', attribute: '', comparison: '', val: '', weeks: []}    // type: 类型（0设备，1定时，2安防），attr：属性，comparison：比较值， val：输入属性值
            ]
          },
          carryOut: {                              //执行动作
            content: [
              {type: ''}
            ]
          }
        }
      },

      // 自动方式
      detailsType: ['设备', '定时', '家庭安防'],
      facility: ['灯', '空调', '面板'],
      attribute: ['温度', '风速', '模式'],
      comparison: ['大于', '等于', '小于'],
      executeMode: ['只执行一次','指定日期','每周'],
      weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      operation: ['报警', '在家安防', '离家安防', '撤防'], 
      motion: ['回家', '离家'],

      // 手动方式
      detailsTypeT: ['家庭安防', '设备'],
      facilityT: ['灯', '空调', '面板'],
      attributeT: ['bool', 'enum', 'int','float','double','text'],
      attributeVal: ['1','2','3'],
      switchSecurity: ['在家安防', '离家安防', '撤防'],
      operationT: ['启用', '停用'],

      isToModify: false,
      status: 1,
      permissionList: [],
      listLoading: false,
      rules: {},
      listQuery: {
        page: 1,
        limit: 15
      },
      value: '',
      options: '',
      dialogVisible: false,   // 提示显示隐藏
      dialogContent: '',      // 提示内容
      dialogType: 0,          // 提示确认后调用的方法

      formRules: {
        scene_name: [{ required: true, validator: validateFrom }]
      },
    }
  },
  computed: {
    // 调用排序
    newdataList: function() {
      return this.sortKey(this.list, "status");
    }
  },
  created() {
    this.getList()
  },
  methods: {
    // 分页方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    // 获取场景列表
    getList() {
      const params = {
        pageNumber: this.listQuery.page,
        pageSize: this.listQuery.limit
      }
      getSenceList({ params }).then((res) => {
        const resData = res.data
        this.total = resData.total
        this.tableData = resData.list
        console.log(889, this.total, this.tableData)
      })
    },
    // 按时间排序
    sortKey(array, key) {
      return array.sort(function(a, b) {
        var x = a[key];
        var y = b[key];
        return x > y ? -1 : x < y ? 1 : 0;
      });
    },
    // 搜索
    search() {

    },
    // 编辑查看模板
    openDialog() {
      this.dialogShow = true;
    },
    // 删除模板
    deleteFault() {

    },
    // 添加触发条件
    addCondition() {
      // 当只有一个条件且为非设备是不可使用与关系
      // if(this.form.details.trigger.content.length == 1 && 
      //   this.form.details.trigger.relation == 1 && 
      //   this.form.details.trigger.content[0].type !== '设备'
      // ){
      //   this.dialogVisible = true
      // }else{
      // }

      var tem =  {type: '', weeks: []};
      this.form.details.trigger.content.push(tem)
    },
    // 删除触发条件
    delCondition(i) {
      this.form.details.trigger.content.splice(i, 1)
    },
    // 添加执行动作
    addMotion() {
      this.form.details.carryOut.content.push({type: ''})
    },
    // 删除执行动作
    delMotion(i) {
      this.form.details.carryOut.content.splice(i, 1)
    },
    // 确认添加模板
    addOrEdit() {
      // this.$refs.permissionForm.validate(valid => {
      //   if (valid) {
      //     // 判断触发条件的关系（‘或’或者‘与’）
      //     var tree = this.form.details.trigger;
      //     if(tree.relation == 0){
      //       var res = tree.content.every(o => {
      //         return o.type == '设备'
      //       })

      //       if(res){
      //         this.dialogType = 0;
      //         this.dialogVisible = true;
      //         this.dialogContent = '请选择触发条件的关系'
      //       }else{
      //         this.dialogType = 1;
      //         this.dialogVisible = true;
      //         this.dialogContent = '请选择触发条件的关系，当前关系只能为\'或\'关系';
      //       }
      //     }else if(tree.relation == 1){
      //       var res = tree.content.every(o => {
      //         return o.type == '设备'
      //       })

      //       if(!res){
      //         this.dialogType = 1;
      //         this.dialogVisible = true;
      //         this.dialogContent = '请选择触发条件的关系，当前关系只能为\'或\'关系';
      //       }
      //     }

      //   } else {
      //     console.log('error submit!!')
      //     return false
      //   }
      // })



      // const isAllSaved = (item) => item.isSave === 1
      // let result =this.itemList.every(isAllSaved)
      // if (result){
      //   let type = 1
      //   if (this.title==='修改模板'){
      //     type = 2
      //   }
      //   this.ScreenArray.sort((a,b)=>{
      //     let first = a[1][0]
      //     let second = b[1][0]
      //     return first-second
      //   })
        // console.log('this.ScreenArray=====22', this.ScreenArray)
        let template =  JSON.stringify(this.ScreenArray)
        let params = {
          params: {
            "templateName": '123',
            "templateDesc": '456',
            "templateIntroduce": '789',
            "templateType": '11',
            "usedTimes": 5,
            "isEnable": '是',
            "bigImage": require('../../assets/imgs/adf.jpeg'),
            "smallImage": require('../../assets/imgs/adf.jpeg'),
            "relationScene": 'aaa'
          }
        }

        AddSenceTemplate(params).then(res=>{
          this.$message.success('保存成功')
          // this.$emit('update:dialogVisible', false)
          // this.$emit('refresh')
        })
      // }else {
      //   this.$message.error('置屏幕不完整，请分配完所有的格子')
      // }
      
    },
    switchRelation(type) {
      this.dialogVisible = false;

      if(type == 1){
        this.form.details.trigger.relation = '2'
      }

    }
  }
}
</script>

<style lang='scss'>
  .width200{
    width: 200px;
  }
  .width540{
    width: 540px;
  }

  .dialog_select{
    // 场景图标样式
    /deep/ .el-select-dropdown__list{
      display: flex;
      flex-wrap: wrap;
      padding: 10px;
      border: 1px solid red;
    }

    /deep/ .el-select-dropdown__item{
      width: 60px;
      height: 60px;
      padding: 0;
    }

    /deep/ .el-select-dropdown__item:not(:nth-child(5n)){
      margin-right: 10px;
    }

    /deep/ .el-scrollbar__bar{
      display: none;
    }
  }
</style>

<style lang='scss' scoped>
  .pagination{
    margin: 50px 0 20px;
  }

  .doc-dialog{
    // 表单每行
    .el-form-item{
      margin-bottom: 20px;
    }

    // 场景详情
    .scene_details{
      .name{
        width: 64px;
        text-align: right;
        margin-bottom: 14px;
      }

      .content{
        padding-left: 40px;
        line-height: 30px;
        margin-bottom: 10px;
        .relation{
          margin-bottom: 14px;
        }

        .tip{
          display: inline-block;
          padding-right: 30px;
          cursor: pointer;
        }

        .trigger{
          display: flex;
          min-height: 96px;
          padding: 6px 10px 10px;
          background: #eee;
          margin-bottom: 10px;

          .trigger_row{
            width: 100%;
          }

          .btn{
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
        
      }
    }

  }
</style>


