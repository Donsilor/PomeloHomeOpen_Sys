<template>
  <div class="app-container">
    <el-row class="title">
      <el-button
        type="primary" 
        @click="dialogShow=true, type=1">创建模板</el-button>

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

    <el-table :data="tableData" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row style="width: 100%; marginTop: 20px">
      <el-table-column align="center" label="序号" prop="sort">
      </el-table-column>
      <el-table-column align="center" label="触发类型" prop="">
        <template slot-scope="scope">
          <div>{{ scope.row.sceneType == 0 ? '手动' : scope.row.sceneType == 1 ? '自动' : '安防' }}</div>
        </template>
      </el-table-column>
      <el-table-column align="center" label="场景名称" prop="sceneName">
      </el-table-column>
      <el-table-column align="center" label="类型" prop="typeName">
        <!-- <template slot-scope="scope">
          <div>{{ getSenceType(scope.row.typeId, sceneList) }}</div>
        </template> -->
      </el-table-column>
      <el-table-column align="center" label="简介" prop="sceneDesc">
      </el-table-column>
      <el-table-column align="center" label="创建时间" prop="createdTime">
      </el-table-column>
      <el-table-column align="center" label="修改时间" prop="updatedTime">
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

    <!-- 创建场景弹窗 -->
    <el-dialog center width="720px" class="doc-dialog"
          :title="type == 1 ? '创建模板' : type == 2 ? '查看模板' : '编辑模板'" :visible.sync="dialogShow" positi>
      <el-form ref="permissionForm" :model="form" label-width="90px" label-position="left" :rules="formRules" >
        <el-form-item :required="true" label="场景序号" prop="sort">
          <el-input v-model="form.sort" type="number" placeholder="请输入序号"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="场景类型" prop="sceneType">
          <el-select v-model="form.sceneType" placeholder="请选择类型" class="width540">
            <el-option v-for="(item, index) in sceneType" :key="index" :label="item" :value="index"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="场景名称" prop="sceneName">
            <el-input :readonly="isToModify?true:false" v-model="form.sceneName" placeholder="请输入场景名称"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="场景背景" prop="scene_icon">
          <el-select v-model="form.scene_icon" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select width540">
            <el-option v-for="(item, index) in img_url" :key="index" :value="item.name">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.url"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="场景图标" prop="scene_icon">
          <el-select v-model="form.scene_icon" :popper-append-to-body="false" placeholder="请选择图标" class="dialog_select width540">
            <el-option v-for="(item, index) in img_url" :key="index" :value="item.name">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.url"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="模板类型" prop="typeId">
          <el-select v-model="form.typeId" :popper-append-to-body="false" placeholder="请选择模板类型" class="width540">
            <el-option v-for="(item, index) in sceneList" :label="item['typeName']" :key="index" :value="item['id']">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="简介" prop="sceneDesc">
          <el-input v-model="form.sceneDesc" placeholder="简介"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="详细介绍" prop="sceneIntroduce">
          <el-input v-model="form.sceneIntroduce" placeholder="详细介绍"></el-input>
        </el-form-item>

        <div class="scene_details">
          <div class="name">场景详情</div>
          <!-- 自动详情 -->
          <div v-if="form.sceneType == '0'" class="content">
            <!-- <div>
              <el-tooltip class="item" effect="dark" show-overflow-tooltip content="与：满足所有条件才会触发；或：满足任一条件即可触发" placement="right">
                <div class="tip">
                  <span>触发条件</span> <i class="el-icon-question"></i>
                </div>
              </el-tooltip>
            </div> -->
          
            <div class="relation">
              <el-radio v-model="condition" label="0">满足全部关系时</el-radio>
              <el-radio v-model="condition" label="1">满足任意关系时</el-radio>
            </div>

            <div class="trigger" v-for="(item, index) in form.condition" :key="index+'a'">
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

                    <el-select v-if="item.type == '设备'" v-model="item.condition" @change="changeCondition(item.condition)" placeholder="请选择大品类">
                      <el-option
                        v-for="(fac, index) in facility"
                        :key="index"
                        :label="fac.categoryName"
                        :value="fac.categoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.facilityChild" @change="getSubModel(item.facilityChild)" placeholder="请选择子品类">
                      <el-option
                        v-for="(fac, index) in facilityChild"
                        :key="index"
                        :label="fac.subCategoryName"
                        :value="fac.categoryId">
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

            <!-- <div class="trigger" v-for="(item, index) in form.details.carryOut.content" :key="index+'b'">
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
            </div> -->

          </div>
          <!-- 手动详情 -->
          <div v-else class="content">
            <div class="trigger" v-for="(item, index) in form.action" :key="index+'a'">
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

                    <el-select v-if="item.type == '设备'" v-model="item.facilityT" placeholder="请选择大品类">
                      <el-option
                        v-for="(fac, index) in facility"
                        :key="index"
                        :label="fac"
                        :value="fac">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.type == '设备'" v-model="item.facilityTChild" placeholder="请选择子品类">
                      <el-option
                        v-for="(fac, index) in facilityTChild"
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

    <Paging 
        :total="total" 
        @changePage="changePage"/>

  </div>
</template>

<script>
import { validaTemplateName } from '@/utils/validate'
import { getSenceTemplate, addSenceTemplate, getSenceList, getSenceSelectList } from '@/api/ruleEngine.js'
import Paging from '@/components/paging'
import { primaryCategory, subCategory, getSubCategory, getModel } from '@/api/categoryManager'
import { getByClass } from '@/api/image'

export default {
  components: {
    Paging,
  },
  data() {
    const validateFrom = (rule, value, callback) => {
      if (!validaTemplateName(value)) {
        callback(new Error('请输入正确的场景名称'))
      } else {
        callback()
      }
    }

    return {
      dialogShow: false,      // 弹窗显示隐藏
      type: 1,                // 弹窗类型： 1为创建，2为查看，3为编辑  
      searchVal: '',          // 搜索值
      sceneList: [],          // 场景类型列表
      condition: 0,           // 触发条件 0或 1与

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

      // 分页功能
      total: 0, // 到时候从后台获取
      listQuery: {
        page: 1,
        limit: 5
      },
      // ------------
      tableData: [],

      form: {
        "sort": '',                         // Y 排序
        'sceneType': 0,                    // Y 模板场景类型（0手动 1自动 2安防）
        "sceneName": '',               // Y 场景名称
        "sceneBgIconId": '',              // Y 场景背景图片资源ID
        "sceneIconId": '',                // Y 场景icon的图片资源ID
        "typeId": '',                       // Y 模板类型ID
        "sceneDesc":'',             // Y 模板描述
        "sceneIntroduce": '',           // Y 模板介绍
        "action": [                        //   执行动作
          {
            "actionOpType":0,          // Y 关系类型（0：or 1：and）
            "actionType":1,            // Y 条件类型（0定时 1设备 2安防 3面板 4手动场景）
            "resourceId":0,            // Y 图片资源id
            "sort":0,                  // Y 排序
            "actionProps": [{                 // N 条件/动作物模型json	
                "businessId":"",      // N 设备所属厂商ID
                "categoryId":"",       // N 设备所属品类ID
                "propertyName":"",     // N 属性名称
                "compareType":"",          // N 比较类型
                "compareValue":"",         // N 比较的值
                "deviceUuid":"",       // N 设备ID
                "subCategoryId":""    // N 设备所属子品类ID
            }]
          },
          {
              "actionOpType":0,
              "actionType":0,
              "resourceId":0,
              "sort":0,
              "actionProps": [
                  {
                      "propertyName":"",
                      "compareType":"",
                      "compare_value":""
                  },
                  {
                      "propertyName":"",
                      "compareType":"",
                      "compareValue":""
                  }
              ]
          
          }
        ],
        "condition": [                     // 触发条件
          {
            "conditionOpType":1,
            "conditionType":2,
            "resourceId":10,
            "conditionProps": [{
                "businessId":"",
                "categoryId":"",
                "propertyName":"",
                "compareType":"",
                "compareValue":"",
                "deviceUuid":"",
                "subCategoryId":""
            }]
          }
        ]
      },
      sceneType: ['自动','手动','安防'],

      // 自动方式
      detailsType: ['设备', '定时', '家庭安防'],
      facility: [],       // 设备品类
      facilityChild: [],
      attribute: ['温度', '风速', '模式'],
      comparison: ['大于', '等于', '小于'],
      executeMode: ['只执行一次','指定日期','每周'],
      weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      operation: ['报警', '在家安防', '离家安防', '撤防'], 
      motion: ['回家', '离家'],

      // 手动方式
      detailsTypeT: ['家庭安防', '设备'],
      facilityT: ['灯', '空调', '面板'],
      facilityTChild: ['桐灯', '挂式空调'],
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
        limit: 5
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
    this.getSenceSelect()
    this.getCategory()
    this.getSceneImage()
    this.getSub()
  },
  methods: {
    // 分页方法
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.listQuery.page = 1
      this.listQuery.limit = val
      this.getList()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.listQuery.page = 1
      this.listQuery.limit = val
      this.getList()
    },
    // 获取场景列表
    getList() {
      const params = {
        pageNumber: this.listQuery.page,
        pageSize: this.listQuery.limit,
        sceneName: ""
      }
      getSenceTemplate({ params }).then((res) => {
        const resData = res.data
        this.total = resData.total
        this.tableData = resData.list
      })
    },
    // 获取模板类型列表
    getSenceSelect() {
      const params = {}
      getSenceSelectList({ params }).then((res) => {
        this.sceneList = res.data
      })
    },
    // 获取模板图片
    getSceneImage() {
      const params = {
        identityName: 'scen_icon'
      }
      console.log(4567)
      getByClass({ params }).then((res) => {
        console.log(21212, res)
      })
    },
    // 获取大品类列表
    getCategory() {
      const params = {
        pageNumber: this.listQuery.page,
        pageSize: 9999,
        categoryName: ""
      }

      subCategory({ params }).then((res) => {
        this.facility = res.data.data.list
      })
    },
    // 切换大品类
    changeCondition(id) {
      this.getSub(id)
    },
    // 获取子品类
    getSub(id){
      const params = {
        categoryId: id,
        subCategoryName: '',
        pageNumber: this.listQuery.page,
        pageSize: 9999
      }

      getSubCategory({ params }).then((res) => {
        console.log(369, res)
        this.facilityChild = res.data.data.list
      })
    },
    getSubModel(id) {
      const params = {
        subCategoryId: id,
        key: ''
      }

      getModel({ params }).then((res) => {
        console.log(258, res)
        // this.facilityChild = res.data.data.list
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
      // -----------------数据格式 -----------------------
      // params: {
      //   "sort": 0,                         // Y 排序
      //   'sceneType': 1,                    // Y 模板场景类型（0手动 1自动 2安防）
      //   "sceneName": '123',                // Y 场景名称
      //   "sceneBgIconId": 'sceneBgIconId',  // Y 场景背景图片资源ID
      //   "sceneIconId": 'sceneIconId',      // Y 场景icon的图片资源ID
      //   "typeId": 'typeId',                // Y 模板类型ID
      //   "sceneDesc": '回家吧',             // Y 模板描述
      //   "sceneIntroduce": '789',           // Y 模板介绍
      //   "action": [                        //   执行动作
      //       {
      //           "actionOpType":0,          // Y 关系类型（0：or 1：and）
      //           "actionType":1,            // Y 条件类型（0定时 1设备 2安防 3面板 4手动场景）
      //           "resourceId":0,            // Y 图片资源id
      //           "sort":0,                  // Y 排序
      //           "actionProps": {                 // N 条件/动作物模型json	
      //               "businessId":"zxcvbnm",      // N 设备所属厂商ID
      //               "categoryId":"zaqwsx",       // N 设备所属品类ID
      //               "propertyName":"switch",     // N 属性名称
      //               "compareType":"==",          // N 比较类型
      //               "compareValue":"on",         // N 比较的值
      //               "deviceUuid":"123456",       // N 设备ID
      //               "subCategoryId":"QAZXAQS"    // N 设备所属子品类ID
      //           }
      //       },
      //       {
      //           "actionOpType":0,
      //           "actionType":0,
      //           "resourceId":0,
      //           "sort":0,
      //           "actionProps": [
      //               {
      //                   "propertyName":"appoint_time",
      //                   "compareType":"==",
      //                   "compare_value":"15:30"
      //               },
      //               {
      //                   "propertyName":"appoint_date",
      //                   "compareType":"==",
      //                   "compareValue":"2021-12-15"
      //               }
      //           ]
      //       }
      //   ],
      //   "condition": [                     // 触发条件
      //       {
      //           "conditionOpType":1,
      //           "conditionType":2,
      //           "resourceId":10,
      //           "conditionProps": {
      //               "businessId":"zxcvbnm",
      //               "categoryId":"zaqwsx",
      //               "propertyName":"switch",
      //               "compareType":"==",
      //               "compareValue":"on",
      //               "deviceUuid":"123456",
      //               "subCategoryId":"QAZXAQS"
      //           }
      //       }
      //   ]
      // }

      // ---------------------------------------------


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

        let template =  JSON.stringify(this.ScreenArray)
        let params = {
          "params": {
            "sort": this.form.sort,
            'sceneType': this.form.sceneType,
            "sceneName": this.form.sceneName,
            "sceneBgIconId": this.form.sceneIconId,
            "sceneIconId": this.form.sceneIconId,
            "typeId": this.form.typeId,
            "sceneDesc": this.form.sceneDesc,
            "sceneIntroduce": this.form.sceneIntroduce,
            "action": [
                {
                    "actionOpType":0,
                    "actionType":1,
                    "resourceId":0,
                    "sort":0,
                    "actionProps": [{
                        "businessId":"",
                        "categoryId":"",
                        "propertyName":"",
                        "compareType":"",
                        "compareValue":"",
                        "deviceUuid":"",
                        "subCategoryId":""
                    }]
                },
                {
                    "actionOpType":0,
                    "actionType":0,
                    "resourceId":0,
                    "sort":0,
                    "actionProps": [
                        {
                            "propertyName":"",
                            "compareType":"",
                            "compare_value":""
                        },
                        {
                            "propertyName":"",
                            "compareType":"",
                            "compareValue":""
                        }
                    ]
                }
            ],
            "condition": [
                {
                    "conditionOpType":1,
                    "conditionType":2,
                    "resourceId":10,
                    "conditionProps": [{
                        "businessId":"",
                        "categoryId":"",
                        "propertyName":"",
                        "compareType":"",
                        "compareValue":"",
                        "deviceUuid":"",
                        "subCategoryId":""
                    }]
                }
            ]
          }
        }

        console.log(44556, params)

        // return

        addSenceTemplate(params).then(res=>{
          if(res.code == 200){
            this.$message.success('保存成功')
          }
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

    },
     // 分页管理
    changePage(val) {
      this.listQuery = val
      this.getList()
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


