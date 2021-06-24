<template>
  <div class="app-container">
    <el-row class="title">
      <el-button
        type="primary" 
        @click="createdTemplate(1)">创建模板</el-button>

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
          <el-tag type="success" v-if="!scope.row.isEnable">已启用</el-tag>
          <el-tag type="info" v-else>已禁用</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="320">
        <template slot-scope="scope">
          <el-button @click="resetData(), openDialog(type=2, scope.row.id)" size="small" type="primary">查看</el-button>
          <el-button @click="resetData(), openDialog(type=3, scope.row.id)" size="small" type="primary">编辑</el-button>
          <el-button v-if="!scope.row.isEnable" @click="ifEnable(scope.row)" size="small" type="primary">禁用</el-button>
          <el-button v-else @click="ifEnable(scope.row)" size="small" type="primary">启用</el-button>
          <el-button @click="deleteFault(scope.row.id)" size="small" type="primary">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 创建场景弹窗 -->
    <el-dialog center width="720px" class="doc-dialog"
          :title="type == 1 ? '创建模板' : type == 2 ? '查看模板' : '编辑模板'" :visible.sync="dialogShow" positi>
      <el-form ref="permissionForm" :model="form" label-width="90px" :disabled="type==2" label-position="left" :rules="formRules" >
        <el-form-item :required="true" label="场景序号" prop="sort">
          <el-input v-model="form.sort" type="number" placeholder="请输入序号"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="场景类型" prop="sceneType">
          <el-select v-model="form.sceneType" placeholder="请选择类型" class="width540" @change="changeSceneType(form.sceneType)">
            <el-option v-for="(item, index) in sceneType" :key="index" :label="item" :value="index"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="场景名称" prop="sceneName">
            <el-input :readonly="isToModify?true:false" v-model="form.sceneName" placeholder="请输入场景名称"></el-input>
        </el-form-item>

        <el-form-item :required="true" label="场景背景" prop="sceneBgIconId">
          <el-select v-model="form.sceneBgIconId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select width540">
            <el-option v-for="(item, index) in sceneBackground" :label="item.displayName" :key="index" :value="item.pathKey">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.fileUrl"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item :required="true" label="场景图标" prop="sceneIconId">
          <el-select v-model="form.sceneIconId" :popper-append-to-body="false" placeholder="请选择图标" class="dialog_select width540">
            <el-option v-for="(item, index) in sceneIcon" :label="item.displayName" :key="index" :value="item.pathKey">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.fileUrl"
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

        <div v-if="form.sceneType != '2'" class="scene_details">
          <div class="name">场景详情</div>
          <div v-if="form.sceneType == '1'" class="content">
            <!-- 自动 -->

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
                  <div>触发条件{{+index+1}}</div>

                  <div style="margin-top: 4px">
                    <el-select v-model="item.conditionType" placeholder="请选择触发条件" @change="seleceTouch(index, item.conditionType)">
                      <el-option
                        v-for="(det, idx) in detailsType"
                        :key="idx"
                        :label="det"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <!-- ------设备------- -->

                    <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].categoryId" @change="changeCondition(index, item.conditionProps[0].categoryId)" placeholder="请选择大品类">
                      <el-option
                        v-for="(fac, idx) in facility"
                        :key="idx"
                        :label="fac.categoryName"
                        :value="fac.categoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.conditionType === 1 && facilityChild.length" v-model="item.conditionProps[0].subCategoryId" @change="getSubModelCondition(index, item.conditionProps[0].categoryId, item.conditionProps[0].subCategoryId)" placeholder="请选择子品类">
                      <el-option
                        v-for="(faci, idx) in facilityChild"
                        :key="idx"
                        :label="faci.subCategoryName"
                        :value="faci.subCategoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].propertyName" placeholder="请选择属性">
                      <el-option
                        v-for="(attr, idx) in attribute"
                        :key="idx"
                        :label="attr.name"
                        :value="attr.identifier">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].compareType" placeholder="请选择比较值">
                      <el-option
                        v-for="(com, idx) in comparison"
                        :key="idx"
                        :label="com"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-input v-if="item.conditionType === 1" class="width200" v-model="item.conditionProps[0].compareValue" placeholder="请输入内容"></el-input>

                    <!-- ------时间------- -->

                    <el-select v-if="item.conditionType === 0" v-model="item.conditionProps[0].compareType" @change="changeTimeType(index, item.conditionProps[0].compareType)" placeholder="请选择执行方式">
                      <el-option
                        v-for="(exe, idx) in executeMode"
                        :key="idx"
                        :label="exe"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-time-picker
                      class="width200"
                      v-if="item.conditionType === 0 && item.conditionProps[0].compareType === 0"
                      v-model="item.conditionProps[0].compareValue"
                      arrow-control
                      value-format="HH:mm:ss"
                      :picker-options="{
                        selectableRange: '00:00:00 - 23:59:00'
                      }"
                      placeholder="请选择时间">
                    </el-time-picker>

                    <el-date-picker
                      v-if="item.conditionType === 0 && item.conditionProps[0].compareType === 1"
                      v-model="item.conditionProps[0].compareValue"
                      type="date"
                      value-format="yyyy-mm-dd"
                      placeholder="请选择日期"
                      class="width200">
                    </el-date-picker>

                    <el-checkbox-group 
                      v-if="item.conditionType === 0 && item.conditionProps[0].compareType === 2"
                      v-model="item.conditionProps[0].compareValue">
                      <el-checkbox v-for="(week, idx) in weeks" :label="idx" :key="idx">{{ week }}</el-checkbox>
                    </el-checkbox-group>

                    <!-- ------安防------- -->

                    <el-select v-if="item.conditionType === 2" v-model="item.conditionProps[0].compareValue" placeholder="请选择操作">
                      <el-option
                        v-for="(ope, idx) in operation"
                        :key="idx"
                        :label="ope"
                        :value="idx">
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

            <div class="trigger" v-for="(item, index) in form.action" :key="index+'b'">
              <el-row class="trigger_row">
                <el-col :span="19">
                  <div>执行动作{{+index+1}}</div>

                  <div style="margin-top: 4px">
                    <el-select v-model="item.actionType" placeholder="请选择执行动作" @change="seleceExecute(index, item.actionType)">
                      <el-option
                        v-for="(det, idx) in manualType"
                        :key="idx"
                        :label="det"
                        :value="idx">
                      </el-option>
                    </el-select>

                     <!-- ------设备------- -->

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].categoryId" @change="changeAction(index, item.actionProps[0].categoryId)" placeholder="请选择大品类">
                      <el-option
                        v-for="(fac, idx) in facility"
                        :key="idx"
                        :label="fac.categoryName"
                        :value="fac.categoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1 && facilityChild.length" v-model="item.actionProps[0].subCategoryId" @change="getSubModelAction(index, item.actionProps[0].categoryId, item.actionProps[0].subCategoryId)" placeholder="请选择子品类">
                      <el-option
                        v-for="(faci, idx) in facilityChild"
                        :key="idx"
                        :label="faci.subCategoryName"
                        :value="faci.subCategoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].propertyName" placeholder="请选择属性">
                      <el-option
                        v-for="(attr, idx) in attribute"
                        :key="idx"
                        :label="attr.name"
                        :value="attr.identifier">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].compareType" placeholder="请选择比较值">
                      <el-option
                        v-for="(com, idx) in comparison"
                        :key="idx"
                        :label="com"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-input v-if="item.actionType === 1" class="width200" v-model="item.actionProps[0].compareValue" placeholder="请输入内容"></el-input>

                    <!-- ------家庭安防------- -->

                    <el-select v-if="item.actionType === 0" v-model="item.actionProps[0].compareType" placeholder="请选择安防">
                      <el-option
                        v-for="(ope, idx) in motion"
                        :key="idx"
                        :label="ope"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 0" v-model="item.actionProps[0].compareValue" placeholder="请选择操作">
                      <el-option label="启用" value="1" ></el-option>
                      <el-option label="停用" value="0" ></el-option>
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

          <div v-else class="content">
            <!-- 手动 -->
            <div class="trigger" v-for="(item, index) in form.condition" :key="index+'a'">
              <el-row class="trigger_row">
                <el-col :span="19">
                  <div>执行动作{{+index+1}}</div>

                  <div style="margin-top: 4px">
                    <el-select v-model="item.conditionType" placeholder="请选择触发条件" @change="seleceTouch(index, item.conditionType)">
                      <el-option
                        v-for="(det, idx) in manualType"
                        :key="idx"
                        :label="det"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <!-- ------设备------- -->

                    <el-select v-if="item.conditionType === 1" v-model="item.categoryId" @change="changeCondition(index, item.categoryId)" placeholder="请选择大品类">
                      <el-option
                        v-for="(fac, idx) in facility"
                        :key="idx"
                        :label="fac.categoryName"
                        :value="fac.categoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.conditionType === 1 && facilityChild.length" v-model="item.conditionProps.subCategoryId" @change="getSubModelData(index, item.categoryId, item.conditionProps.subCategoryId)" placeholder="请选择子品类">
                      <el-option
                        v-for="(faci, idx) in facilityChild"
                        :key="idx"
                        :label="faci.subCategoryName"
                        :value="faci.subCategoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.conditionType === 1" v-model="item.conditionProps.propertyName" placeholder="请选择属性">
                      <el-option
                        v-for="(attr, idx) in attribute"
                        :key="idx"
                        :label="attr.name"
                        :value="attr.identifier">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.conditionType === 1" v-model="item.conditionProps.compareType" placeholder="请选择比较值">
                      <el-option
                        v-for="(com, idx) in comparison"
                        :key="idx"
                        :label="com"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-input v-if="item.conditionType === 1" class="width200" v-model="item.conditionProps.compareValue" placeholder="请输入内容"></el-input>

                    <!-- ------家庭安防------- -->

                    <el-select v-if="item.conditionType === 0" v-model="item.conditionProps.compareValue" placeholder="请选择操作">
                      <el-option
                        v-for="(ope, idx) in motion"
                        :key="idx"
                        :label="ope"
                        :value="idx">
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
          </div>
        </div>
      </el-form>

      <div slot="footer" class="dialog-footer">
          <el-button v-if="type != 2" @click="dialogShow = false">取 消</el-button>
          <el-button type="primary" @click="addOrEdit">{{isToModify?'保存修改':'确 定'}}</el-button>
      </div>
    </el-dialog>

    <!-- 确认删除    dialogType: 1删除，2 -->
    <!-- 非设备时不能为关系与的提示 -->
    <el-dialog
      title="提示"
      :visible.sync="dialogVisible"
      width="30%">
      <span>{{ dialogContent }}</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="confirmDelete()">确 定</el-button>
      </span>
    </el-dialog>

    <Paging 
        :total="total" 
        @changePage="changePage"/>

  </div>
</template>

<script>
import { validaNum, validaTemplateName } from '@/utils/validate'
import { getSenceTemplate, addSenceTemplate, getSenceList, getSenceSelectList, delSenceTemplate, enableSenceTemplate, senceTemplateDetail, editSenceTemplate } from '@/api/ruleEngine.js'
import Paging from '@/components/paging'
import { primaryCategory, subCategory, sonCategory, getModel, getSonModel } from '@/api/categoryManager'
import { getByClass } from '@/api/image'

export default {
  components: {
    Paging,
  },
  data() {
    const validateSort = (rule, value, callback) => {
      if (!validaNum(value)) {
        callback(new Error('请输入正确的序号(正整数)'))
      } else {
        callback()
      }
    }
    const validateName = (rule, value, callback) => {
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
      tableData: [],
      sceneIcon: [],
      sceneBackground: [],
      // 分页功能
      total: 0, // 到时候从后台获取
      listQuery: {
        page: 1,
        limit: 5
      },

      form: {
        "sort": '',                         // Y 排序
        'sceneType': 1,                    // Y 模板场景类型（0手动 1自动 2安防）
        "sceneName": '',               // Y 场景名称
        "sceneBgIconId": '',              // Y 场景背景图片资源ID
        "sceneIconId": '',                // Y 场景icon的图片资源ID
        "typeId": '',                       // Y 模板类型ID
        "sceneDesc":'',             // Y 模板描述
        "sceneIntroduce": '',           // Y 模板介绍
        "action": [                        //   执行动作
          {
            "actionOpType": 0,          // Y 关系类型（0：or 1：and）
            "actionType": "",            // Y 条件类型（0定时 1设备 2安防 3面板 4手动场景）
            "resourceId": "",            // Y 图片资源id
            "sort": 0,                  // Y 排序
            "actionProps": [{                 // N 条件/动作物模型json	
                "businessId": "",      // N 设备所属厂商ID
                "categoryId": "",       // N 设备所属品类ID
                "categoryName":"zaqwsx",
                "subCategoryName":"zaqwsx",
                "propertyName": "",     // N 属性名称
                "compareType": "0",          // N 比较类型
                "compareValue": "",         // N 比较的值
                "deviceUuid": "",       // N 设备ID
                "subCategoryId": ""    // N 设备所属子品类ID
            }]
          },
          // {
          //     "actionOpType": 0,
          //     "actionType": 0,
          //     "resourceId": 0,
          //     "sort": 0,
          //     "actionProps": [
          //         {
          //             "propertyName": "",
          //             "compareType": "",
          //             "compareValue": ""
          //         },
          //         {
          //             "propertyName": "",
          //             "compareType": "",
          //             "compareValue": ""
          //         }
          //     ]
          
          // }
        ],
        "condition": [                     // 触发条件
          {
            "conditionOpType": 0,
            "conditionType": "",
            "resourceId": "",
            "conditionProps": [{
                "businessId": "",
                "categoryId": "",
                "categoryName":"zaqwsx",
                "subCategoryName":"zaqwsx",
                "propertyName": "",
                "compareType": "",
                "compareValue": "",
                "deviceUuid": "",
                "subCategoryId": ""
            }]
          }
        ]
      },
      
      sceneType: ['手动','自动','安防'],
      detailsType: ['定时','设备','安防'],
      facility: [],        // 设备大品类
      facilityChild: [],   // 设备子品类
      attribute: [],       // 属性
      comparison: ['大于', '等于', '小于'],
      executeMode: ['只执行一次','指定日期','每周'],
      weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
      operation: ['报警', '在家安防', '离家安防', '撤防'], 
      autoExecute: ['回家', '离家'],
      manualType: ['家庭安防','设备'],
      motion: ['在家安防', '离家安防', '撤防'],
      
      condition: 9,           // 触发条件 0或 1与
      isToModify: false,
      listLoading: false,
      rules: {},
      dialogVisible: false,   // 提示显示隐藏
      dialogContent: '',      // 提示内容
      dialogType: 1,          // 提示确认后调用的方法, 1删除列表模板, 2选择触发条件, 3确认触发条件
      delId: '',
      
      formRules: {
        sort: [{ required: true, validator: validateSort, trigger: 'blur' }],
        sceneName: [{ required: true, validator: validateName, trigger: 'blur'}]
      },
    }
  },
  computed: {
    // 调用排序
    newdataList: function() {
      // return this.sortKey(this.list, "status");
    }
  },
  created() {
    this.getList()
    
  },
  methods: {
    // 创建模板
    createdTemplate(type){
      this.resetData()
      this.type = type
      this.dialogShow = true
      this.getSenceSelect()
      this.getCategory()
      this.getSceneImage()
    },
    // 重置数据
    resetData(){
      this.form = {
        "sort": '',
        'sceneType': 1,
        "sceneName": '',
        "sceneBgIconId": '',
        "sceneIconId": '',
        "typeId": '',
        "sceneDesc":'',
        "sceneIntroduce": '',
        "action": [
          {
            "actionOpType": 0,
            "actionType": "",
            "resourceId": "",
            "sort": 0,
            "actionProps": [{	
                "businessId": "",
                "categoryId": "",
                "categoryName": "",
                "propertyName": "",
                "compareType": "",
                "compareValue": "",
                "deviceUuid": "",
                "subCategoryId": "",
                "subCategoryName": ""
            }]
          }
        ],
        "condition": [
          {
            "conditionOpType": 0,
            "conditionType": "",
            "resourceId": "",
            "conditionProps": [{
                "businessId": "",
                "categoryId": "",
                "categoryName": "",
                "propertyName": "",
                "compareType": "",
                "compareValue": "",
                "deviceUuid": "",
                "subCategoryId": "",
                "subCategoryName": ""
            }]
          }
        ]
      }
    },
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
    // 切换模板类型
    changeSceneType(type){
      this.resetData()
      this.form.sceneType = type
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
      getByClass({ identityName: 'scene_background' }).then((res) => {
        this.sceneBackground = res.data
      })

      getByClass({ identityName: 'scene_icon' }).then((res) => {
        this.sceneIcon = res.data
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
    // 选择触发条件
    seleceTouch(index, val){
      let obj = {
        "conditionOpType": 0,
        "conditionType": val,
        "resourceId": "",
        "conditionProps": [{
          "businessId": "",
          "categoryId": "",
          "categoryName": "",
          "propertyName": "",
          "compareType": "",
          "compareValue": "",
          "deviceUuid": "",
          "subCategoryId": "",
          "subCategoryName": ""
        }]
      }

      this.form.condition.splice(index, 1, obj)
          
      if(val == 0){
        // 定时
        this.form.condition[index].conditionProps[0].propertyName = 'appoint_time'
        this.form.condition[index].conditionProps[0].compareType = 0
        this.form.condition[index].conditionProps[0].compareValue = ''
      }else if(val == 2){
        this.form.condition[index].conditionProps[0].propertyName = 'security_status'
      }

    },
    // 选择执行动作
    seleceExecute(index, val){
      let obj = {
        "actionOpType": 0,
        "actionType": val,
        "resourceId": "",
        "sort": 0,
        "actionProps": [{	
            "businessId": "",
            "categoryId": "",
            "categoryName": "",
            "propertyName": "",
            "compareType": "",
            "compareValue": "",
            "deviceUuid": "",
            "subCategoryId": "",
            "subCategoryName": ""
        }]
      }

      this.form.action.splice(index, 1, obj)

      if(val == 0){
        this.form.condition[index].conditionProps[0].propertyName = 'security_status'
      }
    },
    // 切换定时时执行方法
    changeTimeType(index, val){
      if(val == 0){
        this.form.condition[index].conditionProps[0].propertyName = 'appoint_time'
        this.form.condition[index].conditionProps[0].compareValue = ''
      }else if(val == 1){
        this.form.condition[index].conditionProps[0].propertyName = 'appoint_date'
        this.form.condition[index].conditionProps[0].compareValue = ''
      }else if(val == 2){
        this.form.condition[index].conditionProps[0].propertyName = 'weeks'
        this.form.condition[index].conditionProps[0].compareValue = []
      }
    },

    // 切换大品类，获取子品类（触发条件）
    changeCondition(index, id) {
      this.facility.forEach((o, i) => {
        if(o.categoryId == id){
          this.form.condition[index].conditionProps[0].categoryName = this.facility[i].categoryName
        }
      })

      // 切换时清空子品类
      this.facilityChild = ''
      this.form.condition[index].conditionProps[0].length = 1
      this.form.condition[index].conditionProps[0].categoryId = id
      this.form.condition[index].conditionProps[0].propertyName = ''
      this.form.condition[index].conditionProps[0].compareType = ''
      this.form.condition[index].conditionProps[0].compareValue = ''

      const params = {
        categoryId: id,
        subCategoryName: '',
        pageNumber: this.listQuery.page,
        pageSize: 9999
      }

      sonCategory({ params }).then((res) => {
        if(res.data.code == 200){
          this.facilityChild = res.data.data.list
        }

        // 没有子品类直接调大品类物模型
        if(!this.facilityChild.length){
          this.getModelData('condition', index, id)
          // 只有一个子品类，直接调子品类物模型
        }else if(this.facilityChild.length == 1){
          this.getSubModelCondition(index, id, this.facilityChild[0].subCategoryId)
        }
      })
    },

    // 切换大品类，获取子品类（执行动作）
    changeAction(index, id) {
      this.facility.forEach((o, i) => {
        if(o.categoryId == id){
          this.form.action[index].actionProps[0].categoryName = this.facility[i].categoryName
        }
      })

      // 切换时清空子品类
      this.facilityChild = ''
      this.form.action[index].actionProps[0].length = 1
      this.form.action[index].actionProps[0].categoryId = id
      this.form.action[index].actionProps[0].propertyName = ''
      this.form.action[index].actionProps[0].compareType = ''
      this.form.action[index].actionProps[0].compareValue = ''

      const params = {
        categoryId: id,
        subCategoryName: '',
        pageNumber: this.listQuery.page,
        pageSize: 9999
      }

      sonCategory({ params }).then((res) => {
        if(res.data.code == 200){
          this.facilityChild = res.data.data.list
        }

        // 没有子品类直接调大品类物模型
        if(!this.facilityChild.length){
          this.getModelData('action', index, id)
          // 只有一个子品类，直接调子品类物模型
        }else if(this.facilityChild.length == 1){
          this.getSubModelAction(index, id, this.facilityChild[0].subCategoryId)
        }
      })
    },

    // 获取大品类物模型
    getModelData(type, index, id) {
      const params = {
        categoryId: id,
        key: ''
      }

      if(id){
        getModel({ params }).then((res) => {
          if(res.data.code == 200){
            // 拿到大品类物模型，赋值
            this.attribute = res.data.data.thingModel.properties
            this.hasAction(type, index)
          }
        })
      }
    },
    // 切换子品类,获取子品类物模型（触发条件）
    getSubModelCondition(index, bigId, id) {
      this.facilityChild.forEach((o, i) => {
        if(o.subCategoryId == id){
          this.form.condition[index].conditionProps[0].subCategoryName = this.facilityChild[i].subCategoryName
        }
      })

      this.form.condition[index].conditionProps[0].categoryId = bigId
      this.form.condition[index].conditionProps[0].subCategoryId = id
      this.form.condition[index].conditionProps[0].propertyName = ''
      this.form.condition[index].conditionProps[0].compareType = ''
      this.form.condition[index].conditionProps[0].compareValue = ''

      const params = {
        subCategoryId: id,
        key: ''
      }

      if(id){
        getSonModel({ params }).then((res) => {
          if(res.data.code == 200){
            // 拿到子品类物模型，赋值
            this.attribute = res.data.data.thingModel.properties
            this.hasAction('condition', index)
          }
        })
      }
    },
    // 切换子品类,获取子品类物模型（执行动作）
    getSubModelAction(index, bigId, id) {
      this.facilityChild.forEach((o, i) => {
        if(o.subCategoryId == id){
          this.form.action[index].actionProps[0].subCategoryName = this.facilityChild[i].subCategoryName
        }
      })

      this.form.action[index].actionProps[0].categoryId = bigId
      this.form.action[index].actionProps[0].subCategoryId = id
      this.form.action[index].actionProps[0].propertyName = ''
      this.form.action[index].actionProps[0].compareType = ''
      this.form.action[index].actionProps[0].compareValue = ''

      const params = {
        subCategoryId: id,
        key: ''
      }

      if(id){
        getSonModel({ params }).then((res) => {
          if(res.data.code == 200){
            // 拿到子品类物模型，赋值
            this.attribute = res.data.data.thingModel.properties
            this.hasAction('action', index)
          }
        })
      }
    },
    // 操作属性,判断action和是否有开关
    hasAction(type, index) {
      // action: 0:触发条件, 1:执行动作, 2:触发条件和执行动作, 3:非出发条件和执行动作
      let newAttr = [];
      if(type == 'condition'){
        // 自动场景筛选action为0和2的属性
        newAttr = this.attribute.filter((o, i) => {
          return o.action == 0 || o.action == 2
        })
      }else{
        // 手动场景筛选action为1和2的属性
        newAttr = this.attribute.filter((o, i) => {
          return o.action == 1 || o.action == 2
        })
      }

      this.attribute = newAttr

      // 如果属性有开关,则加开关属性
      let hasSwitch = newAttr.some(item => item.identifier == 'switch')
      if(hasSwitch){
        let attr = {
          "propertyName": "switch",
          "compareType": "==",
          "compareValue": "1",
        }
        if(type == 'condition'){
          this.form.condition[index].conditionProps.push(attr)
        }else{
          this.form.active[index].conditionProps.push(attr)
        }
      }
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
    openDialog(type, id) {
      this.resetData()
      this.type = type
      this.dialogShow = true
      this.getSenceSelect()
      this.getCategory()
      this.getSceneImage()

      const params = {
        id: id
      }

      senceTemplateDetail({ params }).then((res) => {
        if(res.code == 200){
          let data = res.data;
          this.form.id = data.id
          this.form.sort = data.sort
          this.form.sceneName = data.sceneName
          this.form.sceneBgIconId = data.sceneBgIconId
          this.form.sceneIconId = data.sceneIconId
          this.form.typeId = data.typeId
          this.form.sceneDesc = data.sceneDesc
          this.form.sceneIntroduce = data.sceneIntroduce
          this.condition = data.condition[0].conditionOpType+''

          let conditionProps = []
          data.condition.forEach((item, i) => {
            if(i > 0){
              this.addCondition()
            }

            this.form.condition[i].conditionOpType = item.conditionOpType
            this.form.condition[i].conditionType = item.conditionType
            this.form.condition[i].resourceId = item.resourceId

            conditionProps = JSON.parse(item.conditionProps)

            this.form.condition[i].conditionProps[0].businessId = conditionProps[0].businessId
            this.form.condition[i].conditionProps[0].categoryId = conditionProps[0].categoryId
            this.form.condition[i].conditionProps[0].propertyName = conditionProps[0].propertyName
            this.form.condition[i].conditionProps[0].compareType = conditionProps[0].compareType
            this.form.condition[i].conditionProps[0].compareValue = conditionProps[0].compareValue
            this.form.condition[i].conditionProps[0].deviceUuid = conditionProps[0].deviceUuid
            this.form.condition[i].conditionProps[0].subCategoryId = conditionProps[0].subCategoryId
            this.form.condition[i].conditionProps[0].categoryName = conditionProps[0].categoryName
            this.form.condition[i].conditionProps[0].subCategoryName = conditionProps[0].subCategoryName

            if(conditionProps.length > 1){
              let attr = {
                "propertyName": "switch",
                "compareType": "==",
                "compareValue": "1",
              }

              this.form.condition[i].conditionProps.push(attr)
            }
          })
        }
      })
    },
    // 删除模板
    deleteFault(id) {
      this.dialogType = 1
      this.dialogVisible = true
      this.dialogContent = '是否确认删除这条模板信息？'
      this.delId = id
    },
    // 弹窗确认按钮
    confirmDelete() {
      // 确认删除模板
      if(this.dialogType == 1){
        const params = {
          id: this.delId
        }

        delSenceTemplate({ params }).then((res) => {
          if(res.code == 200){
            this.dialogVisible = false
            this.getList()
          }
        })
      // 选择触发条件
      }else if(this.dialogType == 2){
        this.dialogVisible = false
      // 确认触发条件
      }else if(this.dialogType == 3){
        this.condition = 0
        this.dialogVisible = false
      }
    },
    // 启用禁用模板
    ifEnable(row){
      const params = {
        id: row.id,
        isEnable: row.isEnable ? 0 : 1
      }

      enableSenceTemplate({ params }).then((res) => {
        if(res.code == 200){
          this.$message({
              type: 'success',
              message: '修改成功!'
          })
          this.getList()
        }
      })
    },
    // 添加触发条件
    addCondition() {
      let tem = {
        "conditionOpType": 1,
        "conditionType": "",
        "resourceId": "",
        "conditionProps": [{
            "businessId": "",
            "categoryId": "",
            "propertyName": "",
            "categoryName": "",
            "compareType": "",
            "compareValue": "",
            "deviceUuid": "",
            "subCategoryId": "",
            "subCategoryName": ""
        }]
      }

      this.form.condition.push(tem)
    },
    // 删除触发条件
    delCondition(i) {
      this.form.condition.splice(i, 1)
    },
    // 添加执行动作
    addMotion() {
      let tem = {
        "actionOpType": 1,
        "actionType": "",
        "resourceId": "",
        "sort": 0,
        "actionProps": [{	
            "businessId": "",
            "categoryId": "",
            "categoryName": "",
            "propertyName": "",
            "compareType": "",
            "compareValue": "",
            "deviceUuid": "",
            "subCategoryId": "",
            "subCategoryName": ""
        }]
      }

      this.form.action.push(tem)
    },
    // 删除执行动作
    delMotion(i) {
      this.form.details.carryOut.content.splice(i, 1)
    },
    // 确认添加模板
    addOrEdit() {
      if(this.type == 2){
        this.dialogShow = false
        return
      }

      this.$refs.permissionForm.validate(valid => {
        if (valid) {
          // 判断触发条件的关系（‘或’或者‘与’）
          if(this.condition == 9){
            // 未选择
            var res = this.form.condition.every(o => {
              return o.conditionType == 1
            })

            if(res){
              this.dialogType = 2;
              this.dialogVisible = true;
              this.dialogContent = '请选择触发条件的关系'
            }else{
              this.dialogType = 3;
              this.dialogVisible = true;
              this.dialogContent = '请选择触发条件的关系，当前关系只能为\'或\'关系';
            }
          }else if(this.condition == 1){
            // 与
            var res = this.form.condition.every(o => {
              return o.conditionType == 1
            })

            if(res){
              if(this.type == 1){
                this.addTemplate()
              }else if(this.type ==3){
                this.editTemplate()
              }
            }else{
              this.dialogType = 3;
              this.dialogVisible = true;
              this.dialogContent = '请选择触发条件的关系，当前关系只能为\'或\'关系';
            }
          }else{
              // 或
              if(this.type == 1){
                this.addTemplate()
              }else if(this.type ==3){
                this.editTemplate()
              }
          }

        } else {
          console.log('error submit!!')
          return false
        }
      })

    
      // this.addTemplate() 
    },
    // 添加模板
    addTemplate() {
      // console.log(121212, this.form)
      // return
      this.form.condition.forEach(item => {
        item.conditionOpType = this.condition
      })

      this.form.action.forEach(item => {
        item.conditionOpType = this.condition
      })

      let params = {'params': Object.assign({}, this.form)} 
      addSenceTemplate(params).then(res=>{
        if(res.code == 200){
          this.dialogShow = false
          this.getList()
          this.$message.success('保存成功')
        }
      })
    },
    // 编辑模板
    editTemplate() {
      this.form.condition.forEach(item => {
        item.conditionOpType = this.condition
      })

      this.form.action.forEach(item => {
        item.conditionOpType = this.condition
      })

      let params = {'params': Object.assign({}, this.form)} 
      editSenceTemplate(params).then(res=>{
        if(res.code == 200){
          this.dialogShow = false
          this.getList()
          this.$message.success('编辑成功')
        }
      })
    },
     // 分页管理
    changePage(val) {
      this.listQuery = val
      this.getList()
    }
  }
}
</script>

<style lang='scss' scoped>
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


