<template>
  <div class="app-container">
    <el-row class="product-menu">
      <el-col>
        <el-button 
          type="primary" 
          class="first-btn" 
          @click="createdTemplate(1)">创建模板</el-button>
      </el-col>
      <el-col :span="12">
        <el-input 
          v-model="searchVal" 
          placeholder="请输入模板名称" 
          class="input-with-select"
          @keyup.enter.native="search">
          
          <el-button 
            slot="append" 
            icon="el-icon-search" 
            @click="search"/>
        </el-input>
      </el-col>
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
          <el-button @click="openDialog(type=2, scope.row.id)" size="small" type="primary">查看</el-button>
          <el-button @click="openDialog(type=3, scope.row.id)" size="small" type="primary">编辑</el-button>
          <el-button v-if="!scope.row.isEnable" @click="ifEnable(scope.row)" size="small" type="warning">禁用</el-button>
          <el-button v-else @click="ifEnable(scope.row)" size="small" type="primary">启用</el-button>
          <el-button @click="deleteFault(scope.row.id)" size="small" type="danger">删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- 创建场景弹窗 -->
    <el-dialog center width="720px" class="doc-dialog"
          :title="type == 1 ? '创建模板' : type == 2 ? '查看模板' : '编辑模板'" :visible.sync="dialogShow" positi>
      <el-form ref="permissionForm" :model="form" label-width="90px" :disabled="type==2" label-position="left" :rules="formRules" >
        <el-form-item label="场景序号" prop="sort">
          <el-input v-model="form.sort" type="number" placeholder="请输入序号"></el-input>
        </el-form-item>

        <el-form-item label="场景类型" prop="sceneType">
          <el-select v-model="form.sceneType" placeholder="请选择类型" class="width540">
            <el-option v-for="(item, index) in sceneType" :key="index" :label="item" :value="index"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="场景名称" prop="sceneName">
            <el-input :readonly="isToModify?true:false" v-model="form.sceneName" placeholder="请输入场景名称"></el-input>
        </el-form-item>

        <el-form-item label="场景背景" prop="sceneBgIconId">
          <el-select v-model="form.sceneBgIconId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select width540">
            <el-option v-for="(item, index) in sceneBackground" :label="item.displayName" :key="index" :value="item.pathKey">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.fileUrl"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="场景图标" prop="sceneIconId">
          <el-select v-model="form.sceneIconId" :popper-append-to-body="false" placeholder="请选择图标" class="dialog_select width540">
            <el-option v-for="(item, index) in sceneIcon" :label="item.displayName" :key="index" :value="item.pathKey">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.fileUrl"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="模板类型" prop="typeId">
          <el-select v-model="form.typeId" :popper-append-to-body="false" placeholder="请选择模板类型" class="width540">
            <el-option v-for="(item, index) in sceneList" :label="item['typeName']" :key="index" :value="item['id']">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="简介" prop="sceneDesc">
          <el-input v-model="form.sceneDesc" placeholder="简介"></el-input>
        </el-form-item>

        <el-form-item label="详细介绍" prop="sceneIntroduce">
          <el-input v-model="form.sceneIntroduce" placeholder="详细介绍"></el-input>
        </el-form-item>

        <div v-if="form.sceneType != '2'" class="scene_details">
          <div class="name">场景详情</div>
          <div class="content">
            <div v-if="form.sceneType == '1'" class="relation">
              <el-radio v-model="condition" label="0">满足全部关系时</el-radio>
              <el-radio v-model="condition" label="1">满足任意关系时</el-radio>
            </div>

            <div v-if="form.sceneType == '1'">
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

                      <!-- 非设备图标 -->
                      <el-select v-if="item.conditionType === 0 || item.conditionType === 2" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position">
                        <el-option v-for="(item, index) in modelCondition[index].unFacilityIcon" :label="item.displayName" :key="index" :value="item.fileId">
                          <el-image
                            style="width: 100%; height: 100%"
                            :src="item.fileUrl"
                            fit="fit"></el-image>
                        </el-option>
                      </el-select>

                      <!-- ------设备------- -->

                      <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].categoryId" @change="changeCondition(index, item.conditionProps[0].categoryId)" placeholder="请选择大品类">
                        <el-option
                          v-for="(fac, idx) in facility"
                          :key="idx"
                          :label="fac.categoryName"
                          :value="fac.categoryNumber">
                        </el-option>
                      </el-select>

                      <el-select v-if="item.conditionType === 1 && modelCondition[index].facilityChild.length" v-model="item.conditionProps[0].subCategoryId" @change="getSubModelCondition(index, item.conditionProps[0].categoryId, item.conditionProps[0].subCategoryId)" placeholder="请选择子品类">
                        <el-option
                          v-for="(faci, idx) in modelCondition[index].facilityChild"
                          :key="idx"
                          :label="faci.subCategoryName"
                          :value="faci.subCategoryNumber">
                        </el-option>
                      </el-select>

                      <!-- 设备图标 -->
                      <el-select v-if="item.conditionType === 1 && item.conditionProps[0].categoryId" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position">
                        <el-option v-for="(item, index) in modelCondition[index].facilityIcon" :label="item.fileName" :key="index" :value="item.fileId">
                          <el-image
                            class="img"
                            style="width: 100%; height: 100%"
                            :src="item.fileUrl"
                            fit="cover"></el-image>
                        </el-option>
                      </el-select>

                      <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].propertyName" placeholder="请选择属性">
                        <el-option
                          v-for="(attr, idx) in modelCondition[index].attribute"
                          :key="idx"
                          :label="attr.name"
                          :value="attr.identifier">
                        </el-option>
                      </el-select>

                      <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].compareType" placeholder="请选择比较值">
                        <el-option
                          v-for="(com, idx) in modelCondition[index].comparison"
                          :key="idx"
                          :label="com"
                          :value="idx">
                        </el-option>
                      </el-select>

                      <el-input v-if="item.conditionType === 1" class="width200" v-model="item.conditionProps[0].compareValue" placeholder="请输入内容"></el-input>

                      <!-- ------时间------- -->

                      <el-select v-if="item.conditionType === 0" v-model="item.conditionProps[0].compareType" @change="changeTimeType(index, item.conditionProps[0].compareType)" placeholder="请选择执行方式">
                        <el-option
                          v-for="(exe, idx) in modelCondition[index].executeMode"
                          :key="idx"
                          :label="exe"
                          :value="idx">
                        </el-option>
                      </el-select>

                      <el-time-picker
                        class="width200"
                        v-if="item.conditionType === 0"
                        v-model="item.conditionProps[0].compareValue"
                        arrow-control
                        value-format="HH:mm:ss"
                        :picker-options="{
                          selectableRange: '00:00:00 - 23:59:00'
                        }"
                        placeholder="请选择时间">
                      </el-time-picker>

                      <el-date-picker
                        v-if="item.conditionType === 0 && (item.conditionProps[0].compareType === 0 || item.conditionProps[0].compareType === 1)"
                        v-model="item.conditionProps[1].compareValue"
                        type="date"
                        value-format="yyyy-mm-dd"
                        placeholder="请选择日期"
                        class="width200">
                      </el-date-picker>

                      <el-checkbox-group 
                        v-if="item.conditionType === 0 && item.conditionProps[0].compareType === 2"
                        v-model="item.conditionProps[1].compareValue">
                        <el-checkbox v-for="(week, idx) in modelCondition[index].weeks" :label="idx" :key="idx">{{ week }}</el-checkbox>
                      </el-checkbox-group>

                      <!-- ------在家安防------- -->

                      <el-select v-if="item.conditionType === 2" v-model="item.conditionProps[0].compareType" placeholder="请选择操作">
                        <el-option
                          v-for="(ope, idx) in modelCondition[index].operation"
                          :key="idx"
                          :label="ope"
                          :value="idx">
                        </el-option>
                      </el-select>

                      <el-select v-if="item.conditionType === 2" v-model="item.conditionProps[0].compareValue" placeholder="请选择操作">
                        <el-option
                          v-for="(ope, idx) in modelCondition[index].autoExecute"
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

                    <!-- 非设备图标 -->
                    <el-select v-if="item.actionType === 0" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position">
                      <el-option v-for="(item, idx) in modelAction[index].unFacilityIcon" :label="item.displayName" :key="idx" :value="item.fileId">
                        <el-image
                          style="width: 100px; height: 100px"
                          :src="item.fileUrl"
                          fit="fit"></el-image>
                      </el-option>
                    </el-select>

                    <!-- ------设备------- -->

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].categoryId" @change="changeAction(index, item.actionProps[0].categoryId)" placeholder="请选择大品类">
                      <el-option
                        v-for="(fac, idx) in facility"
                        :key="idx"
                        :label="fac.categoryName"
                        :value="fac.categoryNumber">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1 && modelAction[index].facilityChild.length" v-model="item.actionProps[0].subCategoryId" @change="getSubModelAction(index, item.actionProps[0].categoryId, item.actionProps[0].subCategoryId)" placeholder="请选择子品类">
                      <el-option
                        v-for="(faci, idx) in modelAction[index].facilityChild"
                        :key="idx"
                        :label="faci.subCategoryName"
                        :value="faci.subCategoryNumber">
                      </el-option>
                    </el-select>

                    <!-- 设备图标 -->
                    <el-select v-if="item.actionType === 1" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position">
                      <el-option v-for="(item, index) in modelAction[index].facilityIcon" :label="item.fileName" :key="index" :value="item.fileId">
                        <el-image
                          class="img"
                          style="width: 100%; height: 100%"
                          :src="item.fileUrl"
                          fit="cover"></el-image>
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].propertyName" placeholder="请选择属性">
                      <el-option
                        v-for="(attr, idx) in modelAction[index].attribute"
                        :key="idx"
                        :label="attr.name"
                        :value="attr.identifier">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].compareType" placeholder="请选择比较值">
                      <el-option
                        v-for="(com, idx) in modelAction[index].comparison"
                        :key="idx"
                        :label="com"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-input v-if="item.actionType === 1" class="width200" v-model="item.actionProps[0].compareValue" placeholder="请输入内容"></el-input>

                    <!-- ------家庭安防------- -->

                    <el-select v-if="item.actionType === 0" v-model="item.actionProps[0].compareType" placeholder="请选择安防">
                      <el-option
                        v-for="(ope, idx) in modelAction[index].operation"
                        :key="idx"
                        :label="ope"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 0" v-model="item.actionProps[0].compareValue" placeholder="请选择操作">
                      <el-option
                        v-for="(ope, idx) in modelAction[index].autoExecute"
                        :key="idx"
                        :label="ope"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <!-- <el-select v-if="item.actionType === 0" v-model="item.actionProps[0].compareValue" placeholder="请选择操作">
                      <el-option label="启用" value="1" ></el-option>
                      <el-option label="停用" value="0" ></el-option>
                    </el-select> -->
                  </div>
                </el-col>

                <el-col :span="4" :offset="1" class="btn">
                  <el-button type="success" icon="el-icon-plus" circle @click="addMotion()"></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle @click="delMotion(index)"></el-button>
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
import { primaryCategory, subCategory, sonCategory, getModel, getModels, getSonModel, getSonModels } from '@/api/categoryManager'
import { getByClass, getByPathKeyList } from '@/api/image'

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
                "categoryName": "",
                "subCategoryName": "",
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
            "conditionProps": [
              {
                "businessId": "",
                "categoryId": "",
                "categoryName": "",
                "subCategoryName": "",
                "propertyName": "",
                "compareType": "",
                "compareValue": "",
                "deviceUuid": "",
                "subCategoryId": ""
              },
              {
                "propertyName": "",
                "compareType": "",
                "compareValue": ""
              }
            ]
          }
        ]
      },

      // 物模型触发条件数据集合
      modelCondition: [
        {
          facilityIcon: [],    // 设备图片
          unFacilityIcon: [],  // 非设备图片
          facilityChild: [],   // 设备子品类
          attribute: [],       // 属性
          comparison: ['大于', '等于', '小于'],
          executeMode: ['只执行一次','指定日期','每周'],
          weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          operation: ['报警', '在家安防', '离家安防', '撤防'],
          autoExecute: ['回家', '离家']
        }
      ],

      // 物模型执行动作数据集合
      modelAction: [
        {
          facilityIcon: [],    // 设备图片
          unFacilityIcon: [],  // 非设备图片
          facilityChild: [],   // 设备子品类
          attribute: [],       // 属性
          comparison: ['大于', '等于', '小于'],
          operation: ['报警', '在家安防', '离家安防', '撤防'],
          autoExecute: ['回家', '离家']
        }
      ],
      
      sceneType: ['手动','自动','安防'],
      detailsType: ['定时','设备','安防'],
      manualType: ['家庭安防','设备'],
      facility: [],        // 设备大品类
      conditionImgs: [],   //触发条件图片集合（定时，设备，安防）

      condition: 9,           // 触发条件 0或 1与
      isToModify: false,
      listLoading: false,
      rules: {},
      dialogVisible: false,   // 提示显示隐藏
      dialogContent: '',      // 提示内容
      dialogType: 1,          // 提示确认后调用的方法, 1删除列表模板, 2选择触发条件, 3确认触发条件
      delId: '',
      ifSelectIcon: true,       // 触发icon，当选择设备时不可选择
      
      formRules: {
        // sort: [{ required: true, validator: validateSort, trigger: 'blur' }],
        // sceneType: [{ required: true, trigger: 'change'}],
        // sceneName: [{ required: true, validator: validateName, trigger: 'blur'}],
        // sceneBgIconId: [{ required: true, validator: '', trigger: 'blur'}],
        // sceneIconId: [{ required: true, validator: '', trigger: 'blur'}],
        // typeId: [{ required: true, validator: '', trigger: 'blur'}],
        // sceneDesc: [{ required: false, validator: '', trigger: 'blur'}],
        // sceneIntroduce: [{ required: false, validator: '', trigger: 'blur'}],
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
            },
            {
              "propertyName": "",
              "compareType": "",
              "compareValue": ""
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

      getByClass({ identityName: 'trigger_condition_icon' }).then((res) => {
        var imgPath = "http://pho-uat.oss-cn-shenzhen.aliyuncs.com/";

        this.conditionImgs = res.data
        this.conditionImgs.forEach((item, index) => {
          this.conditionImgs[index].fileUrl = imgPath + item.pathKey
        })
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

      this.modelCondition[index].facilityIcon = []
      this.modelCondition[index].unFacilityIcon = []
      if(this.conditionImgs){
        this.modelCondition[index].unFacilityIcon.push(this.conditionImgs[val])
      }

      if(val == 1){
        // 设备
        this.form.condition.splice(index, 1, obj)
      }else if(val == 0){
        // 定时
        obj = {
          "conditionOpType": 0,
          "conditionType": val,
          "resourceId": "",
          "conditionProps": [{
            "propertyName": "appoint_time",
            "compareType": 0,
            "compareValue": "",
          },
          {
            "propertyName": "appoint_date",
            "compareType": 0,
            "compareValue": "",
          }]
        }

        this.form.condition.splice(index, 1, obj)
      }else if(val == 2){
        obj = {
          "conditionOpType": 0,
          "conditionType": val,
          "resourceId": "",
          "conditionProps": [{
            "propertyName": "security_status",
            "compareType": "",
            "compareValue": "",
          }]
        }

        this.form.condition.splice(index, 1, obj)
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

      this.modelAction[index].facilityIcon = []
      this.modelAction[index].unfacilityIcon = []

      if(val == 1){
        // 设备
        this.form.action.splice(index, 1, obj)
      }else if(val == 0){
        obj = {
          "actionOpType": 0,
          "actionType": val,
          "resourceId": "",
          "actionProps": [{
            "propertyName": "security_status",
            "compareType": "",
            "compareValue": "",
          }]
        }

        this.form.action.splice(index, 1, obj)
      }

    },
    // 切换定时时执行方法
    changeTimeType(index, val){
      if(val == 0 || val == 1){
        this.form.condition[index].conditionProps[0].propertyName = 'appoint_time'
        this.form.condition[index].conditionProps[0].compareType = val
        this.form.condition[index].conditionProps[0].compareValue = ''
        this.form.condition[index].conditionProps[1].propertyName = 'appoint_date'
        this.form.condition[index].conditionProps[1].compareType = val
        this.form.condition[index].conditionProps[1].compareValue = ''
      }else if(val == 2){
        this.form.condition[index].conditionProps[1].propertyName = 'weeks'
        this.form.condition[index].conditionProps[1].compareType = val
        this.form.condition[index].conditionProps[1].compareValue = []
      }
    },

    // 切换大品类，获取子品类（触发条件）
    changeCondition(index, num) {
      var id = ''
      this.facility.forEach((o, i) => {
        if(o.categoryNumber == num){
          this.form.condition[index].conditionProps[0].categoryName = this.facility[i].categoryName
          id = this.facility[i].categoryId
        }
      })

      // 切换时清空子品类
      this.form.condition[index].conditionProps[0].categoryId = num
      this.form.condition[index].conditionProps[0].subCategoryId = ''
      this.form.condition[index].conditionProps[0].length = 1
      this.form.condition[index].conditionProps[0].propertyName = ''
      this.form.condition[index].conditionProps[0].compareType = ''
      this.form.condition[index].conditionProps[0].compareValue = ''
      this.form.condition[index].resourceId = ''

      this.modelCondition[index].facilityChild = []
      this.modelCondition[index].attribute = []
      this.modelCondition[index].facilityIcon = []
      this.modelCondition[index].unFacilityIcon = []

      const params = {
        categoryId: id,
        subCategoryName: '',
        pageNumber: this.listQuery.page,
        pageSize: 9999
      }

      sonCategory({ params }).then((res) => {
        if(res.data.code == 200){
          this.modelCondition[index].facilityChild = res.data.data.list
        }

        // 没有子品类直接调大品类物模型
        if(!this.modelCondition[index].facilityChild.length){
          this.getModelData('condition', index, num)
          // 只有一个子品类，直接调子品类物模型
        }else if(this.modelCondition[index].facilityChild.length == 1){
          this.getSubModelCondition(index, this.form.condition[index].conditionProps[0].categoryId, this.modelCondition[index].facilityChild[0].subCategoryNumber)
        }
      })
    },

    // 切换大品类，获取子品类（执行动作）
    changeAction(index, num) {
      var id = ''
      this.facility.forEach((o, i) => {
        if(o.categoryNumber == num){
          this.form.action[index].actionProps[0].categoryName = this.facility[i].categoryName
          id = this.facility[i].categoryId
        }
      })

      // 切换时清空子品类
      this.form.action[index].actionProps[0].categoryId = num
      this.form.action[index].actionProps[0].subCategoryId = ''
      this.form.action[index].actionProps[0].length = 1
      this.form.action[index].actionProps[0].propertyName = ''
      this.form.action[index].actionProps[0].compareType = ''
      this.form.action[index].actionProps[0].compareValue = ''
      this.form.action[index].resourceId = ''

      this.modelAction[index].facilityChild = []
      this.modelAction[index].attribute = []
      this.modelAction[index].facilityIcon = []
      this.modelAction[index].unFacilityIcon = []

      const params = {
        categoryId: id,
        subCategoryName: '',
        pageNumber: this.listQuery.page,
        pageSize: 9999
      }

      sonCategory({ params }).then((res) => {
        if(res.data.code == 200){
          this.modelAction[index].facilityChild = res.data.data.list
        }

        // 没有子品类直接调大品类物模型
        if(!this.modelAction[index].facilityChild.length){
          this.getModelData('action', index, num)
          // 只有一个子品类，直接调子品类物模型
        }else if(this.modelAction[index].facilityChild.length == 1){
          this.getSubModelAction(index, this.form.action[index].actionProps[0].categoryId, this.modelAction[index].facilityChild[0].subCategoryNumber)
        }
      })
    },

    // 获取大品类物模型
    getModelData(type, index, num) {
      const params = {
        deviceCategoryId: Number(num),
        deviceSubCategoryId: 0,
        key: '',
        modeType: this.form.condition[index].conditionType,
        brandId: ''
      }

      if(num){
        getModel({ params }).then((res) => {
          if(res.data.code == 200){
            // 拿到大品类物模型，赋值
            if(type == 'condition'){
              this.modelCondition[index].attribute = res.data.data.thingModel.properties
            }else{
              this.modelAction[index].attribute = res.data.data.thingModel.properties
            }
          this.hasAction(type, index)
          }
        })

        getModels({ params: [Number(num)] }).then((res) => {
          if(res.data.code == 200){
            if(type == 'condition'){
              this.modelCondition[index].facilityIcon = res.data.data[0].fileList
            }else{
              this.modelAction[index].facilityIcon = res.data.data[0].fileList
            }
          }
        })
      }
    },
    // 切换子品类,获取子品类物模型（触发条件）
    getSubModelCondition(index, num, sunNum) {
      this.modelCondition[index].facilityChild.forEach((o, i) => {
        if(o.subCategoryNumber == sunNum){
          this.form.condition[index].conditionProps[0].subCategoryName = this.modelCondition[index].facilityChild[i].subCategoryName
        }
      })

      this.form.condition[index].conditionProps[0].subCategoryId = Number(sunNum)
      this.form.condition[index].conditionProps[0].propertyName = ''
      this.form.condition[index].conditionProps[0].compareType = ''
      this.form.condition[index].conditionProps[0].compareValue = ''
      this.form.condition[index].conditionProps[0].businessId = ''
      this.form.condition[index].resourceId = ''

      this.modelCondition[index].facilityIcon = []
      this.modelCondition[index].unFacilityIcon = []
      this.modelCondition[index].attribute = []

      const params = {
        deviceCategoryId: Number(num),
        deviceSubCategoryId: Number(sunNum),
        key: '',
        modeType: this.form.condition[index].conditionType,
        brandId: ''
      }

      if(sunNum){
        getSonModels({ params: [Number(sunNum)] }).then((res) => {
          if(res.data.code == 200){
            this.modelCondition[index].facilityIcon = res.data.data[0].fileList
            this.form.condition[index].conditionProps[0].businessId = Number(res.data.data.brandId)
            params.brandId = Number(res.data.data.brandId)
          }
        })

        if(params.brandId){
          getSonModel({ params }).then((res) => {
            if(res.data.code == 200){
              // 拿到子品类物模型，赋值
              // this.form.condition[index].conditionProps[0].businessId = Number(res.data.data.brandId)
              this.modelCondition[index].attribute = res.data.data.thingModel.properties
              this.hasAction('condition', index)
            }
          })
        }
      }
    },
    // 切换子品类,获取子品类物模型（执行动作）
    getSubModelAction(index, num, sunNum) {
      // var id = ''
      this.modelCondition[index].facilityChild.forEach((o, i) => {
        if(o.subCategoryNumber == sunNum){
          this.form.action[index].actionProps[0].subCategoryName = this.facilityChild[i].subCategoryName
          // id = this.facilityChild[i].subCategoryId
        }
      })

      this.form.action[index].actionProps[0].categoryId = Number(num)
      this.form.action[index].actionProps[0].subCategoryId = Number(sunNum)
      this.form.action[index].actionProps[0].propertyName = ''
      this.form.action[index].actionProps[0].compareType = ''
      this.form.action[index].actionProps[0].compareValue = ''
      this.form.action[index].actionProps[0].businessId = ''
      this.form.action[index].resourceId = ''

      this.modelAction[index].facilityIcon = []
      this.modelAction[index].unFacilityIcon = []
      this.modelAction[index].attribute = []

      const params = {
        deviceCategoryId: Number(num),
        deviceSubCategoryId: Number(sunNum),
        key: '',
        modeType: this.form.action[index].actionType,
        brandId: ''
      }

      if(sunNum){
        getSonModels({ params: [Number(sunNum)] }).then((res) => {
          if(res.data.code == 200){
            this.modelAction[index].facilityIcon = res.data.data[0].fileList
            this.form.action[index].actionProps[0].businessId = Number(res.data.data.brandId)
            params.brandId = Number(res.data.data.brandId)
          }
        })

        if(params.brandId){
          getSonModel({ params }).then((res) => {
            if(res.data.code == 200){
              // 拿到子品类物模型，赋值
              // this.form.action[index].actionProps[0].businessId = Number(res.data.data.brandId)
              this.modelAction[index].attribute = res.data.data.thingModel.properties
              this.hasAction('action', index)
            }
          })
        }
      }
    },
    // 操作属性,判断action和是否有开关
    hasAction(type, index) {
      // action: 0:触发条件, 1:执行动作, 2:触发条件和执行动作, 3:非出发条件和执行动作
      let newAttr = [];
      if(type == 'condition'){
        // 自动场景筛选action为0和2的属性
        newAttr = this.modelCondition[index].attribute.filter((o, i) => {
          return o.action == 0 || o.action == 2
        })

        this.modelCondition[index].attribute = newAttr
      }else{
        // 手动场景筛选action为1和2的属性
        newAttr = this.modelAction[index].attribute.filter((o, i) => {
          return o.action == 1 || o.action == 2
        })

        this.modelAction[index].attribute = newAttr
      }

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
          this.form.action[index].actionProps.push(attr)
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
          this.form.sceneType = Number(data.sceneType)
          this.form.typeId = data.typeId
          this.form.sceneDesc = data.sceneDesc
          this.form.sceneIntroduce = data.sceneIntroduce

          if(data.condition.length){
            this.condition = data.condition[0].conditionOpType+''
          }else{
            this.condition = data.action[0].actionOpType+''
          }

          var sceneBgIcon = data.sceneBgIconId,
              sceneIcon = data.sceneIconId;

          if(sceneBgIcon && sceneBgIcon.indexOf('oss_temp') != -1){
            this.form.sceneBgIconId = sceneBgIcon.slice(sceneBgIcon.indexOf('oss_temp'))
          }

          if(sceneIcon && sceneIcon.indexOf('oss_temp') != -1){
            this.form.sceneIconId = sceneIcon.slice(sceneIcon.indexOf('oss_temp'))
          }

          this.form.condition = []
          this.modelCondition = []
          let conditionProps = []

          // 触发条件回显
          data.condition.forEach((item, i) => {
            conditionProps = JSON.parse(item.conditionProps)

            let tem = '',
                model = {
                  facilityIcon: [],
                  facilityChild: [],   // 设备子品类
                  attribute: [],       // 属性
                  comparison: ['大于', '等于', '小于'],
                  executeMode: ['只执行一次','指定日期','每周'],
                  weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
                  operation: ['报警', '在家安防', '离家安防', '撤防'],
                  autoExecute: ['回家', '离家']
                }

            if(item.conditionType == 0){
              // 时间
              tem = {
                conditionOpType: item.conditionOpType,
                conditionType: item.conditionType,
                resourceId: item.resourceId,
                conditionProps: [{
                  propertyName: conditionProps[0].propertyName,
                  compareType: Number(conditionProps[0].compareType),
                  compareValue: conditionProps[0].compareValue
                },
                {
                  propertyName: conditionProps[1].propertyName,
                  compareType: Number(conditionProps[1].compareType),
                  compareValue: conditionProps[1].compareValue
                }]
              }

              if(conditionProps[1].compareType == 2){
                var weeks = conditionProps[1].compareValue.split(',')
                weeks.forEach((item, i) => {
                  return weeks[i] = Number(item)
                })

                tem.conditionProps[1].compareValue = weeks
              }
            }else if(item.conditionType == 1){
              // 触发设备
              tem = {
                conditionOpType: item.conditionOpType,
                conditionType: item.conditionType,
                resourceId: item.resourceId,
                conditionProps: [{
                    businessId: conditionProps[0].businessId,
                    categoryId: Number(conditionProps[0].categoryId),
                    propertyName: conditionProps[0].propertyName,
                    categoryName: conditionProps[0].categoryName,
                    compareType: Number(conditionProps[0].compareType),
                    compareValue: conditionProps[0].compareValue,
                    deviceUuid: conditionProps[0].deviceUuid,
                    subCategoryId: Number(conditionProps[0].subCategoryId),
                    subCategoryName: conditionProps[0].subCategoryName
                }]
              }
            }else if(item.conditionType == 2){
              // 安防
              tem = {
                conditionOpType: item.conditionOpType,
                conditionType: item.conditionType,
                resourceId: item.resourceId,
                conditionProps: [{
                  propertyName: conditionProps[0].propertyName,
                  compareType: Number(conditionProps[0].compareType),
                  compareValue: Number(conditionProps[0].compareValue)
                }]
              }
            }

            this.form.condition.push(tem)
            this.modelCondition.push(model)

            if(item.conditionType == 1){
              // 设备获取物模型
              var sunNum = Number(conditionProps[0].subCategoryId)
              const params = {
                deviceCategoryId: Number(conditionProps[0].categoryId),
                deviceSubCategoryId: 0,
                key: '',
                modeType: item.conditionType,
                brandId: ''
              }

              if(sunNum){
                //  如果有子品类，获取子品类设备和物模型
                var id = ''    //通过Number获取大品类id
                this.facility.forEach((item, idx) => {
                  if(item.categoryNumber == conditionProps[0].categoryId){
                    id = item.categoryId
                  }
                })

                const obj = {
                  categoryId: id,
                  subCategoryName: '',
                  pageNumber: this.listQuery.page,
                  pageSize: 9999
                }

                sonCategory({ params: obj }).then((res) => {
                  if(res.data.code == 200){
                    this.modelCondition[i].facilityChild = res.data.data.list
                  }
                })

                params.deviceSubCategoryId = sunNum

                getSonModels({ params: [sunNum] }).then((res) => {
                  if(res.data.code == 200){
                    this.modelCondition[i].facilityIcon = res.data.data[0].fileList
                    this.form.condition[i].conditionProps[0].businessId = Number(res.data.data.brandId)
                    params.brandId = Number(res.data.data.brandId)
                  }
                })

                if(params.brandId){
                  getSonModel({ params }).then((res) => {
                    if(res.data.code == 200){
                      // 拿到子品类物模型，赋值
                      this.modelCondition[i].attribute = res.data.data.thingModel.properties
                      this.hasAction('condition', i)
                    }
                  })
                }
              }else{
                // 没有子品类获取大品类物模型
                getModel({ params }).then((res) => {
                  if(res.data.code == 200){
                    // 拿到大品类物模型，赋值
                    this.modelCondition[i].attribute = res.data.data.thingModel.properties
                    this.hasAction(type, i)
                  }
                })

                getModels({ params: [conditionProps[0].categoryId] }).then((res) => {
                  if(res.data.code == 200){
                    this.modelCondition[i].facilityIcon = res.data.data[0].fileList
                  }
                })
              }

              if(conditionProps.length > 1){
                // 有开关
                let attr = {
                  "propertyName": "switch",
                  "compareType": "==",
                  "compareValue": "1"
                }

                this.form.condition[i].conditionProps.push(attr)
              }
            }
          })

          // 执行动作回显
          this.form.action = []
          this.modelAction = []
          let actionProps = []

          data.action.forEach((item, i) => {
            actionProps = JSON.parse(item.actionProps)

            let tem = '',
                model = {
                  facilityIcon: [],
                  unFacilityIcon: [],
                  facilityChild: [],
                  attribute: [],
                  comparison: ['大于', '等于', '小于'],
                  operation: ['报警', '在家安防', '离家安防', '撤防'],
                  autoExecute: ['回家', '离家']
                }

            if(item.actionType == 0){
              // 安防
              tem = {
                actionOpType: item.actionOpType,
                actionType: item.actionType,
                resourceId: item.resourceId,
                actionProps: [{
                  propertyName: actionProps[0].propertyName,
                  compareType: Number(actionProps[0].compareType),
                  compareValue: Number(actionProps[0].compareValue)
                }]
              }
            }else if(item.actionType == 1){
              // 执行动作设备
              tem = {
                actionOpType: item.actionOpType,
                actionType: item.actionType,
                resourceId: item.resourceId,
                sort: 0,
                actionProps: [{
                    businessId: actionProps[0].businessId,
                    categoryId: Number(actionProps[0].categoryId),
                    categoryName: actionProps[0].categoryName,
                    subCategoryName: actionProps[0].subCategoryName,
                    propertyName: actionProps[0].propertyName,
                    compareType: Number(actionProps[0].compareType),
                    compareValue: actionProps[0].compareValue,
                    deviceUuid: actionProps[0].deviceUuid,
                    subCategoryId: actionProps[0].subCategoryName
                }]
              }
            }

            this.form.action.push(tem)
            this.modelAction.push(model)

            if(item.actionType == 1){
              // 设备获取物模型
              var sunNum = Number(actionProps[0].subCategoryId)
              const params = {
                deviceCategoryId: Number(actionProps[0].categoryId),
                deviceSubCategoryId: 0,
                key: '',
                modeType: '',
                brandId: ''
              }

              if(sunNum){
                //  如果有子品类，获取子品类设备和物模型
                var id = ''    //通过Number获取大品类id
                this.facility.forEach((item, idx) => {
                  if(item.categoryNumber == actionProps[0].categoryId){
                    id = item.categoryId
                  }
                })

                const obj = {
                  categoryId: id,
                  subCategoryName: '',
                  pageNumber: this.listQuery.page,
                  pageSize: 9999
                }

                sonCategory({ params: obj }).then((res) => {
                  if(res.data.code == 200){
                    this.modelAction[i].facilityChild = res.data.data.list
                  }
                })

                params.deviceSubCategoryId = sunNum

                getSonModels({ params: [sunNum] }).then((res) => {
                  if(res.data.code == 200){
                    this.modelAction[i].facilityIcon = res.data.data[0].fileList
                    this.form.action[i].actionProps[0].businessId = Number(res.data.data.brandId)
                    params.brandId = Number(res.data.data.brandId)
                  }
                })

                if(params.brandId){
                  getSonModel({ params }).then((res) => {
                    if(res.data.code == 200){
                      // 拿到子品类物模型，赋值
                      this.modelAction[i].attribute = res.data.data.thingModel.properties
                      this.hasAction('condition', i)
                    }
                  })
                }
              }else{
                // 没有子品类获取大品类物模型
                getModel({ params }).then((res) => {
                  if(res.data.code == 200){
                    // 拿到大品类物模型，赋值
                    this.modelAction[i].attribute = res.data.data.thingModel.properties
                    this.hasAction(type, i)
                  }
                })

                getModels({ params: [actionProps[0].categoryId] }).then((res) => {
                  if(res.data.code == 200){
                    this.modelAction[i].facilityIcon = res.data.data[0].fileList
                  }
                })
              }

              if(actionProps.length > 1){
                // 有开关
                let attr = {
                  "propertyName": "switch",
                  "compareType": "==",
                  "compareValue": "1"
                }

                this.form.action[i].actionProps.push(attr)
              }
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
        this.condition = '0'
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

      let moudel = {
          facilityIcon: [],
          facilityChild: [],   // 设备子品类
          attribute: [],       // 属性
          comparison: ['大于', '等于', '小于'],
          executeMode: ['只执行一次','指定日期','每周'],
          weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          operation: ['报警', '在家安防', '离家安防', '撤防'],
          autoExecute: ['回家', '离家']
        }
      
      this.modelCondition.push(moudel)
    },
    // 删除触发条件
    delCondition(i) {
      this.form.condition.splice(i, 1)
      this.modelCondition.splice(i, 1)
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

      let moudel = {
          facilityIcon: [],    // 设备图片
          unFacilityIcon: [],  // 非设备图片
          facilityChild: [],   // 设备子品类
          attribute: [],       // 属性
          comparison: ['大于', '等于', '小于'],
          operation: ['报警', '在家安防', '离家安防', '撤防'],
          autoExecute: ['回家', '离家']
        }
      
      this.modelAction.push(moudel)
    },
    // 删除执行动作
    delMotion(i) {
      this.form.action.splice(i, 1)
      this.modelAction.splice(i, 1)
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
      console.log(121212, this.form)
      return
      this.form.condition.forEach(item => {
        item.conditionOpType = this.condition
      })

      this.form.action.forEach(item => {
        item.actionOpType = this.condition
      })

      this.form.condition.forEach((item, i) => {
        if(item.conditionProps.length == 2 && item.conditionProps[1].propertyName == 'weeks'){
          item.conditionProps[1].compareValue = item.conditionProps[1].compareValue.join()
        }
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

    /deep/ .el-select-dropdown__item:nth-child(n+9){
      margin-top: 10px;
    }

    /deep/ .el-scrollbar__bar{
      display: none;
    }
  }

  .position{
    // 触发条件图标样式
    /deep/ .el-select-dropdown{
        transform: translateX(-200px);
        width: 400px;

      /deep/ .el-select-dropdown__item{
        margin-top: 0;
      }

      /deep/ .el-select-dropdown__item:nth-child(n+6){
        margin-top: 10px;
      }
    }

    /deep/ .popper__arrow{
      left: 226px !important;
    }
  }

  .img{
    .el-image__inner{
      border: 2px solid red;
    }
  }

  .product-menu{
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
    .showOnline{
      margin-right: 20px;
    }
    .is-justify-end{
      align-items: center;
    }
    .left{
      span{
        margin-right: 20px;
        font-size: 20px;
        font-weight: 600;
      }
      .first-btn{
        margin-right: 10px;
      }
      .refalsh{
        margin-right: 20px;
      }
    }
  }

  .dataList{
    background-color: white;
    margin-bottom: 20px;
    .cell{
      text-align: center;
    }
  }

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


