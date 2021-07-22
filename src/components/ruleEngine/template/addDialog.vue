<template>
  <div>
    <!-- 创建场景弹窗 -->
    <el-dialog center width="720px" class="doc-dialog"
          :title="dialogType == 1 ? '创建模板' : dialogType == 2 ? '查看模板' : '编辑模板'" :visible.sync="addDialogVisible" :before-close="resetForm" v-loading="loading" element-loading-text="正在加载···">
      <el-form ref="permissionForm" :model="form" label-width="90px" :disabled="dialogType==2" label-position="left" :rules="formRules" >
        <el-form-item label="场景序号" prop="sort">
          <el-input v-model="form.sort" type="number" placeholder="请输入序号"></el-input>
        </el-form-item>

        <el-form-item label="场景类型" prop="sceneType">
          <el-select v-model="form.sceneType" placeholder="请选择类型" @change="changeSceneType(form.sceneType)" class="width540">
            <el-option v-for="(item, index) in sceneType" :key="index" :label="item" :value="index"></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="场景名称" prop="sceneName">
            <el-input :readonly="isToModify?true:false" v-model="form.sceneName" placeholder="请输入场景名称"></el-input>
        </el-form-item>

        <el-form-item label="场景背景" prop="sceneBgIconId">
          <el-select v-model="form.sceneBgIconId" :popper-append-to-body="false" placeholder="请选择场景背景" class="dialog_select width540">
            <el-option v-for="(item, index) in sceneBackground" :label="item.displayName" :key="index" :value="item.id">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.fileUrl"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="详情背景" prop="sceneDetailIconId">
          <el-select v-model="form.sceneDetailIconId" :popper-append-to-body="false" placeholder="请选择详情背景" class="dialog_select width540">
            <el-option v-for="(item, index) in sceneDetailBackground" :label="item.displayName" :key="index" :value="item.id">
              <el-image
                style="width: 100px; height: 100px"
                :src="item.fileUrl"
                fit="fit"></el-image>
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="场景图标" prop="sceneIconId">
          <el-select v-model="form.sceneIconId" :popper-append-to-body="false" placeholder="请选择图标" class="dialog_select width540">
            <el-option v-for="(item, index) in sceneIcon" :label="item.displayName" :key="index" :value="item.id">
              <el-image
                style="width: 100%; height: 100%"
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

        <div class="scene_details">
          <div class="name">场景详情</div>
          <div class="content">
            <div v-if="form.sceneType == '1'" class="relation">
              <el-radio v-model="condition" label="0">满足任意关系时</el-radio>
              <el-radio v-model="condition" label="1">满足全部关系时</el-radio>
            </div>

            <div v-if="form.sceneType == '1'">
              <div class="trigger" v-for="(item, index) in form.condition" :key="index+'a'">
                <el-row class="trigger_row">
                  <el-col :span="19">
                    <div><span class="star">*</span>触发条件{{+index+1}}</div>

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
                      <el-select v-if="item.conditionType === 0 || item.conditionType === 2" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position position_left">
                        <el-option v-for="(item, index) in modelCondition[index].unFacilityIcon" :label="item.displayName" :key="index" :value="item.id">
                          <el-image
                            style="width: 100%; height: 100%"
                            :src="item.fileUrl"
                            fit="fit"></el-image>
                        </el-option>
                      </el-select>

                      <!-- -------设备------- -->

                      <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].categoryId" @change="changeCondition(index, item.conditionProps[0].categoryId)" placeholder="请选择大品类">
                        <el-option
                          v-for="(fac, idx) in facility"
                          :key="idx"
                          :label="fac.categoryName"
                          :value="fac.categoryNumber">
                        </el-option>
                      </el-select>

                      <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].subCategoryId" @change="getSubModelCondition(index, item.conditionProps[0].categoryId, item.conditionProps[0].subCategoryId)" placeholder="请选择子品类">
                        <el-option
                          v-for="(faci, idx) in modelCondition[index].facilityChild"
                          :key="idx"
                          :label="faci.subCategoryName"
                          :value="faci.subCategoryId">
                        </el-option>
                      </el-select>

                      <el-select v-if="item.conditionType === 1 && item.conditionProps[0].subCategoryId && modelCondition[index].brand.length" v-model="item.conditionProps[0].businessId" @change="getBrandModelCondition(index, item.conditionProps[0].categoryId, item.conditionProps[0].subCategoryId, item.conditionProps[0].businessId)" placeholder="请选择品牌">
                        <el-option
                          v-for="(br, idx) in modelCondition[index].brand"
                          :key="idx"
                          :label="br.subCategoryName"
                          :value="br.brandId">
                        </el-option>
                      </el-select>

                      <!-- 设备图标 -->
                      <!-- <el-select v-if="item.conditionType === 1 && item.conditionProps[0].categoryId" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position" :class="{position_left: item.conditionProps[0].subCategoryId != 0}">
                        <el-option v-for="(item, index) in modelCondition[index].facilityIcon" :label="item.fileName" :key="index" :value="item.picId">
                          <el-image
                            class="img"
                            style="width: 100%; height: 100%"
                            :src="item.fileUrl"
                            fit="cover"></el-image>
                        </el-option>
                      </el-select> -->

                      <el-select v-if="item.conditionType === 1" v-model="item.conditionProps[0].propertyName" @change="changeAttrCondition(index, item.conditionProps[0].propertyName)" placeholder="请选择属性">
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

                      <el-select 
                        v-if="item.conditionType === 1 && modelCondition[index].ifShowSpecs" v-model="item.conditionProps[0].compareValue" placeholder="请选择属性值">
                        <el-option
                          v-for="(com, idx) in modelCondition[index].specs"
                          :key="idx"
                          :label="com"
                          :value="idx">
                        </el-option>
                      </el-select>

                      <el-input v-if="item.conditionType === 1 && modelCondition[index].ifShowInput" class="width200" v-model="item.conditionProps[0].compareValue" placeholder="请输入内容"></el-input>

                      <!-- -------时间------- -->

                      <el-select v-if="item.conditionType === 0" v-model="item.conditionProps[0].propertyName" @change="changeTimeType(index, item.conditionProps[0].propertyName)" placeholder="请选择执行方式">
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
                        format="HH:mm"
                        value-format="HH:mm"
                        :picker-options="{
                          selectableRange: '00:00:00 - 23:59:00'
                        }"
                        placeholder="请选择时间">
                      </el-time-picker>

                      <el-date-picker
                        v-if="item.conditionType === 0 && item.conditionProps[0].propertyName === 0"
                        v-model="item.conditionProps[1].compareValue"
                        type="date"
                        :picker-options="pickerOptions"
                        value-format="yyyy-MM-dd"
                        placeholder="请选择日期"
                        class="width200">
                      </el-date-picker>

                      <el-checkbox-group 
                        v-if="item.conditionType === 0 && item.conditionProps[0].propertyName === 1"
                        v-model="item.conditionProps[1].compareValue">
                        <el-checkbox v-for="(week, idx) in modelCondition[index].weeks" :label="idx" :key="idx">{{ week }}</el-checkbox>
                      </el-checkbox-group>

                      <!-- -------在家安防------- -->

                      <el-select v-if="item.conditionType === 2" v-model="item.conditionProps[0].propertyName" @change="changeOperation(index, 'condition', item.conditionProps[0].propertyName)" placeholder="请选择安防">
                        <el-option
                          v-for="(ope, idx) in modelCondition[index].operation"
                          :key="idx"
                          :label="ope.name"
                          :value="ope.identifier">
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
                    <el-button type="success" icon="el-icon-plus" circle @click="addCondition(index)"></el-button>
                    <el-button type="danger" icon="el-icon-delete" circle @click="delCondition(index)"></el-button>
                  </el-col>
                </el-row>
              </div>
            </div>
            
            <div class="trigger" v-for="(item, index) in form.action" :key="index+'b'">
              <el-row class="trigger_row">
                <el-col :span="19">
                  <div><span class="star">*</span>执行动作{{+index+1}}</div>

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
                    <el-select v-if="item.actionType === 0" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position position_left">
                      <el-option v-for="(item, idx) in modelAction[index].unFacilityIcon" :label="item.displayName" :key="idx" :value="item.id">
                        <el-image
                          style="width: 100%; height: 100%"
                          :src="item.fileUrl"
                          fit="fit"></el-image>
                      </el-option>
                    </el-select>

                    <!-- -------设备------- -->

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].categoryId" @change="changeAction(index, item.actionProps[0].categoryId)" placeholder="请选择大品类">
                      <el-option
                        v-for="(fac, idx) in facility"
                        :key="idx"
                        :label="fac.categoryName"
                        :value="fac.categoryNumber">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].subCategoryId" @change="getSubModelAction(index, item.actionProps[0].categoryId, item.actionProps[0].subCategoryId)" placeholder="请选择子品类">
                      <el-option
                        v-for="(faci, idx) in modelAction[index].facilityChild"
                        :key="idx"
                        :label="faci.subCategoryName"
                        :value="faci.subCategoryId">
                      </el-option>
                    </el-select>

                    <el-select v-if="item.actionType === 1 && item.actionProps[0].subCategoryId && modelAction[index].brand.length" v-model="item.actionProps[0].businessId" @change="getBrandModelAction(index, item.actionProps[0].categoryId, item.actionProps[0].subCategoryId, item.actionProps[0].businessId)" placeholder="请选择品牌">
                      <el-option
                        v-for="(br, idx) in modelAction[index].brand"
                        :key="idx"
                        :label="br.subCategoryName"
                        :value="br.brandId">
                      </el-option>
                    </el-select>

                    <!-- 设备图标 -->
                    <!-- <el-select v-if="item.actionType === 1" v-model="item.resourceId" :popper-append-to-body="false" placeholder="请选择背景" class="dialog_select position" :class="{position_left: item.actionProps[0].subCategoryId != 0}">
                      <el-option v-for="(item, ind) in modelAction[index].facilityIcon" :label="item.fileName" :key="ind" :value="item.picId">
                        <el-image
                          class="img"
                          style="width: 100%; height: 100%" 
                          :src="item.fileUrl"
                          fit="cover"></el-image>
                      </el-option>
                    </el-select> -->

                    <el-select v-if="item.actionType === 1" v-model="item.actionProps[0].propertyName" @change="changeAttrAction(index, item.actionProps[0].propertyName)" placeholder="请选择属性">
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

                    <el-select 
                        v-if="item.actionType === 1 && modelAction[index].ifShowSpecs" v-model="item.actionProps[0].compareValue" placeholder="请选择属性值">
                      <el-option
                        v-for="(com, idx) in modelAction[index].specs"
                        :key="idx"
                        :label="com"
                        :value="idx">
                      </el-option>
                    </el-select>

                    <el-input v-if="item.actionType === 1 && modelAction[index].ifShowInput" class="width200" v-model="item.actionProps[0].compareValue" placeholder="请输入内容"></el-input>

                    <!-- -------家庭安防------- -->

                    <el-select v-if="item.actionType === 0" v-model="item.actionProps[0].propertyName" @change="changeOperation(index, 'action', item.actionProps[0].propertyName)" placeholder="请选择安防">
                      <el-option
                        v-for="(ope, idx) in modelAction[index].operation"
                        :key="idx"
                        :label="ope.name"
                        :value="ope.identifier">
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
                  </div>
                </el-col>

                <el-col :span="4" :offset="1" class="btn">
                  <el-button type="success" icon="el-icon-plus" circle @click="addMotion(index)"></el-button>
                  <el-button type="danger" icon="el-icon-delete" circle @click="delMotion(index)"></el-button>
                </el-col>
              </el-row>
            </div>
          </div>
        </div>
      </el-form>

      <div slot="footer" class="dialog-footer">
          <el-button v-if="dialogType != 2" @click="resetForm">取 消</el-button>
          <el-button type="primary" @click="addOrEdit">{{isToModify?'保存修改':'确 定'}}</el-button>
      </div>
    </el-dialog>

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
  </div>
</template>

<script>
import { validaNum, validaTemplateName } from '@/utils/validate'
import { getSenceSelectList, addSenceTemplate, editSenceTemplate, senceTemplateDetail } from '@/api/ruleEngine.js'
import { subAllCategory, sonCategory, getModel, getModels, getSonModel, getSonModels, getSecModel, brandList } from '@/api/categoryManager'
import { getByClasses } from '@/api/image'

export default {
  props: {
    addDialogVisible: {
      type: Boolean,
      default: false
    },
    editId: {
      type: Number,
      default: 0
    },
    dialogType: {
      type: Number,
      default: 1
    }
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
    const validateBgIcon = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请选择场景列表背景'))
      } else {
        callback()
      }
    }
    const sceneDetailIcon = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请选择场景详情背景'))
      } else {
        callback()
      }
    }
    const validateIcon = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请选择场景图标'))
      } else {
        callback()
      }
    }
    const validateSceneType = (rule, value, callback) => {
      if (!value) {
        callback(new Error('请选择模板类型'))
      } else {
        callback()
      }
    }

    return {
      loading: false,
      total: 0,                             // 分页功能, 到时候从后台获取
      listQuery: {
        page: 1,
        limit: 5
      },
      sceneList: [],                        // 模板类型
      sceneIcon: [],                        // 模板图标
      sceneBackground: [],                  // 模板列表背景图
      sceneDetailBackground: [],            // 模板详情背景图
      conditionImgs: [],                    // 触发条件图片集合（定时，设备，安防）
      actionAutoImgs: [],                   // 执行动作图片集合-自动 (家庭安防, 设备)
      actionManualImgs: [],                 // 执行动作图片集合-手动 (家庭安防, 设备)

      form: {
        "sort": '',                         // Y 排序
        'sceneType': 1,                     // Y 模板场景类型（0手动 1自动 2安防）
        "sceneName": '',                    // Y 场景名称
        "sceneBgIconId": '',                // Y 场景背景图片资源ID
        "sceneDetailIconId": '',            // y 场景详情图片资源ID
        "sceneIconId": '',                  // Y 场景icon的图片资源ID
        "typeId": '',                       // Y 模板类型ID
        "sceneDesc":'',                     // Y 模板描述
        "sceneIntroduce": '',               // Y 模板介绍
        "action": [                         //   执行动作
          {
            "actionOpType": 0,              // Y 关系类型（0：or 1：and）
            "actionType": "",               // Y 条件类型（0定时 1设备 2安防 3面板 4手动场景）
            "resourceId": "",               // Y 图片资源id
            "sort": 0,                      // Y 排序
            "actionProps": [{               // N 条件/动作物模型json	
                "businessId": "",           // N 设备所属厂商ID
                "categoryId": "",           // N 设备所属品类ID
                "categoryName": "",         //   大品类名称
                "subCategoryName": "",      //   小品类名称
                "propertyName": "",         // N 属性名称
                "compareType": "0",         // N 比较类型
                "compareValue": "",         // N 比较的值
                "deviceUuid": "",           // N 设备ID
                "subCategoryId": ""         // N 设备所属子品类ID
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
        "condition": [
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

      // 触发条件数据集合
      modelCondition: [
        {
          facilityIcon: [],       // 设备图片
          unFacilityIcon: [],     // 非设备图片
          facilityChild: [],      // 设备子品类
          brand: [],              // 品牌
          attribute: [],          // 属性
          specs: [],              // 属性值集合
          type: '',
          max: '',
          min: '',
          ifShowSpecs: false,
          ifShowInput: false,
          hasSwitch: false,
          comparison: ['大于', '等于', '小于'],
          executeMode: ['指定日期', '每周'],
          weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
          operation: [],          // 安防物模型
          autoExecute: []
        }
      ],

      // 执行动作数据集合
      modelAction: [
        {
          facilityIcon: [],       // 设备图片
          unFacilityIcon: [],     // 非设备图片
          facilityChild: [],      // 设备子品类
          brand: [],              // 品牌
          attribute: [],          // 属性
          specs: [],              // 属性值集合
          type: '',
          max: '',
          min: '',
          ifShowSpecs: false,
          ifShowInput: false,
          hasSwitch: false,
          comparison: ['大于', '等于', '小于'],
          operation: [],
          autoExecute: []
        }
      ],
      
      sceneType: ['手动','自动','安防'],
      detailsType: ['定时','设备','安防'],
      manualType: ['安防','设备'],
      facility: [],               // 设备大品类
      operationCondition: [],     // 触发安防
      operationAction: [],        // 手动安防
      defend: '',                 // 大品类安防
      brandList: [],              // 所有品类集合

      condition: 9,               // 触发条件 0或 1与
      isToModify: false,
      dialogVisible: false,       // 提示显示隐藏
      dialogContent: '',          // 提示内容
      affirmType: 2,              // 提示确认后调用的方法, 2选择触发条件, 3确认触发条件
      delId: '',
      pickerOptions: {
        disabledDate: function(time){
          return time < Date.now() - 8.64e7
        }
      },
      
      formRules: {
        sort: [{ required: true, validator: validateSort, trigger: 'blur' }],
        sceneType: [{ required: true, trigger: 'change'}],
        sceneName: [{ required: true, validator: validateName, trigger: 'blur'}],
        sceneBgIconId: [{ required: true, validator: validateBgIcon, trigger: 'change'}],
        sceneDetailIconId: [{ required: true, validator: sceneDetailIcon, trigger: 'change'}],
        sceneIconId: [{ required: true, validator: validateIcon, trigger: 'change'}],
        typeId: [{ required: true, validator: validateSceneType, trigger: 'change'}],
        // sceneDesc: [{ required: false, validator: '', trigger: 'blur'}],
        // sceneIntroduce: [{ required: false, validator: '', trigger: 'blur'}],
      }
    }
  },
  created() {
    // this.getCategory()
    this.getSenceSelect()
    this.getSceneImage()
    this.getSafety()
    this.getBrand()

    // 获取大品类列表
    subAllCategory({ params: {} }).then((res) => {
      this.defend = res.data.data.filter(item => item.categoryNumber == 10000)
      this.facility = res.data.data.filter(item => item.categoryNumber != 10000)

      if(this.dialogType == 2 || this.dialogType == 3){
        this.loading = true
        this.editScene(this.editId)
      }
    })
  },
  methods: {
    // 获取安防
    getSafety() {
      const params = {
        deviceCategoryId: 10000,
        deviceSubCategoryId: 0,
        key: '',
        modeType: 2,
        brandId: ''
      }

      getModel({ params }).then((res) => {
        if(res.data.code == 200){
          var operation = res.data.data.thingModel.properties
          this.operationCondition = operation.filter(item => (item.action == 0 || item.action == 1))
          this.operationAction = operation.filter(item => (item.action == 0 || item.action == 2))
        }
      })
    },
    // 获取模板类型列表
    getSenceSelect() {
      getSenceSelectList({ params: {} }).then((res) => {
        if(res.code == 200){
          this.sceneList = res.data
        }
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
        if(res.data.code == 200){
          this.facility = res.data.data.list
        }
      })
    },
    // 获取模板图片
    getSceneImage() {  
      // let imgPath = "http://pho-uat.oss-cn-shenzhen.aliyuncs.com/";

      getByClasses({
        identityNames: ['scene_background', 'scene_icon', 'trigger_condition_icon', 'trigger_task_man_icon', 'trigger_task_auto_icon', 'scene_detail_background'] 
      }).then((res) => {
        if(res.code == 200){
          let data = res.data
          this.sceneBackground = data.scene_background
          this.sceneIcon = data.scene_icon
          this.conditionImgs = data.trigger_condition_icon
          this.actionAutoImgs = data.trigger_task_auto_icon
          this.actionManualImgs = data.trigger_task_man_icon
          this.sceneDetailBackground = data.scene_detail_background
        }
      })
    },
    // 获取所有品类
    getBrand() {
      brandList({ params: 1 }).then((res) => {
        if(res.data.code == 200){
          this.brandList = res.data.data
        }
      })
    },
    // 切换模板类型
    changeSceneType(val) {
      if(val == 1 && !this.form.condition.length){
        this.addCondition()
      }
    },
     // 选择触发条件
    seleceTouch(index, val){
      this.modelCondition[index].facilityIcon = []
      this.modelCondition[index].unFacilityIcon = []

      // this.modelCondition[index].facilityChild = []
      // this.modelCondition[index].attribute = []
      // this.modelCondition[index].facilityIcon = []
      // this.modelCondition[index].unFacilityIcon = []
      // this.modelCondition[index].specs = []
      // this.modelCondition[index].ifShowSpecs = false
      // this.modelCondition[index].ifShowInput = false

      //       -- 触发条件图标分类
      //     0定时   trigger_condition_time
      //     1设备   trigger_condition_device 
      //     2安防   trigger_condition_safe
      //     3延时   trigger_condition_delay
      //     4天气   trigger_condition_weather
      //     5场景   trigger_condition_scene
      //     6其它   trigger_condition_other

      var classify = ''

      if(val == 1){
        // 设备
        classify = 'trigger_condition_device'

        let obj = {
          conditionOpType: 0,
          conditionType: val,
          resourceId: "",
          conditionProps: [{
            businessId: "",
            categoryId: "",
            categoryName: "",
            propertyName: "",
            compareType: "",
            compareValue: "",
            deviceUuid: "",
            subCategoryId: "",
            subCategoryName: ""
          }]
        }
        this.form.condition.splice(index, 1, obj)
      }else if(val == 0){
        // 定时
        classify = 'trigger_condition_time'

        let obj = {
          conditionOpType: 0,
          conditionType: val,
          resourceId: "",
          conditionProps: [{
            propertyName: "",
            compareType: 1,
            compareValue: "",
          },
          {
            propertyName: "",
            compareType: 1,
            compareValue: "",
          }]
        }

        this.form.condition.splice(index, 1, obj)
      }else if(val == 2){
        // 安防
        classify = 'trigger_condition_safe'

        let obj = {
          conditionOpType: 0,
          conditionType: val,
          resourceId: "",
          conditionProps: [{
            businessId: -1,
            categoryId: 10000,
            categoryName: "security",
            propertyName: "",
            compareType: 1,
            compareValue: "",
            deviceUuid: "",
            subCategoryId: 0,
            subCategoryName: ""
          }]
        }

        this.form.condition.splice(index, 1, obj)
        this.modelCondition[index].operation = this.operationCondition

        // if(this.modelCondition[index].operation.length == 1){
        //   this.form.condition[index].conditionProps[0].compareType = 0
        // }
      }

      // 按分类筛选触发图标
      if(classify){
        var res = ''
        this.conditionImgs.forEach(item => {
          if(item.classIdentityName == classify){
            res = item
          }
        })

        if(res){
          this.modelCondition[index].unFacilityIcon.push(res)
        }
      }
    },
    // 选择执行动作
    seleceExecute(index, val){
      this.modelAction[index].facilityIcon = []
      this.modelAction[index].unFacilityIcon = []

      //        -- 执行动作图标分类-自动
      //     1设备   trigger_condition_device 
      //     2天气   trigger_condition_weather
      //     3家庭安防   trigger_condition_safe

      //        -- 执行动作图标分类-手动
      //     1安防   trigger_condition_safe 
      //     3场景   trigger_condition_scene
      //     3设备   trigger_condition_device

      var classify = ''

      if(val == 1){
        // 设备
        classify = 'trigger_condition_device'

        let obj = {
          actionOpType: 0,
          actionType: val,
          resourceId: "",
          sort: 0,
          actionProps: [{	
              businessId: "",
              categoryId: "",
              categoryName: "",
              propertyName: "",
              compareType: "",
              compareValue: "",
              deviceUuid: "",
              subCategoryId: "",
              subCategoryName: ""
          }]
        }

        this.form.action.splice(index, 1, obj)
      }else if(val == 0){
        // 家庭安防
        classify = 'trigger_condition_safe'

        let obj = {
          actionOpType: 0,
          actionType: val,
          resourceId: "",
          actionProps: [{
            businessId: -1,
            categoryId: 10000,
            categoryName: "security",
            propertyName: "",
            compareType: 1,
            compareValue: "",
            deviceUuid: "",
            subCategoryId: 0,
            subCategoryName: ""
          }]
        }

        this.form.action.splice(index, 1, obj)
        this.modelAction[index].operation = this.operationAction
      }

      // 按分类筛选触发图标
      if(classify){
        var res = ''

        if(this.form.sceneType == 0){
          this.actionManualImgs.forEach(item => {
            if(item.classIdentityName == classify){
              res = item
            }
          })
        }else{
          this.actionAutoImgs.forEach(item => {
            if(item.classIdentityName == classify){
              res = item
            }
          })
        }

        if(res){
          this.modelAction[index].unFacilityIcon.push(res)
        }
      }
    },
    // 切换定时时执行方法
    changeTimeType(index, val){
      if(val == 0){
        this.form.condition[index].conditionProps[0].propertyName = 0
        this.form.condition[index].conditionProps[0].compareType = 1
        this.form.condition[index].conditionProps[0].compareValue = ''
        this.form.condition[index].conditionProps[1].propertyName = 0
        this.form.condition[index].conditionProps[1].compareType = 1
        this.form.condition[index].conditionProps[1].compareValue = ''
      }else{
        this.form.condition[index].conditionProps[1].propertyName = 1
        this.form.condition[index].conditionProps[1].compareType = 1
        this.form.condition[index].conditionProps[1].compareValue = []
      }
    },

    // 切换大品类，获取子品类（触发条件）
    changeCondition(index, num) {
      var id = ''
      this.facility.forEach((o, i) => {
        if(o.categoryNumber == num){
          this.form.condition[index].conditionProps[0].categoryName = o.categoryName
          id = o.categoryId
        }
      })

      // 切换时清空子品类
      this.form.condition[index].conditionProps[0].categoryId = num
      this.form.condition[index].conditionProps[0].subCategoryId = ''
      this.form.condition[index].conditionProps[0].businessId = ''
      this.form.condition[index].conditionProps[0].deviceUuid = ''
      this.form.condition[index].conditionProps[0].subCategoryName = ''
      this.form.condition[index].conditionProps[0].length = 1
      this.form.condition[index].conditionProps[0].propertyName = ''
      this.form.condition[index].conditionProps[0].compareType = ''
      this.form.condition[index].conditionProps[0].compareValue = ''
      this.form.condition[index].resourceId = ''

      this.modelCondition[index].facilityChild = []
      this.modelCondition[index].attribute = []
      this.modelCondition[index].facilityIcon = []
      this.modelCondition[index].unFacilityIcon = []
      this.modelCondition[index].specs = []
      this.modelCondition[index].type = ''
      this.modelCondition[index].max = ''
      this.modelCondition[index].min = ''
      this.modelCondition[index].hasSwitch = false
      this.modelCondition[index].ifShowSpecs = false
      this.modelCondition[index].ifShowInput = false

      // 获取大品类物模型
      this.getModelData('condition', index, num)

      const params = {
        categoryId: id,
        subCategoryName: '',
        pageNumber: this.listQuery.page,
        pageSize: 9999
      }

      // 获取二级子品类列表
      sonCategory({ params }).then((res) => {
        if(res.data.code == 200){
          this.modelCondition[index].facilityChild = res.data.data.list
        }
      })
    },

    // 切换大品类，获取子品类（执行动作）
    changeAction(index, num) {
      var id = ''
      this.facility.forEach((o, i) => {
        if(o.categoryNumber == num){
          this.form.action[index].actionProps[0].categoryName = o.categoryName
          id = o.categoryId
        }
      })

      // 切换时清空子品类
      this.form.action[index].actionProps[0].categoryId = num
      this.form.action[index].actionProps[0].subCategoryId = ''
      this.form.action[index].actionProps[0].businessId = ''
      this.form.action[index].actionProps[0].deviceUuid = ''
      this.form.action[index].actionProps[0].subCategoryName = ''
      this.form.action[index].actionProps[0].length = 1
      this.form.action[index].actionProps[0].propertyName = ''
      this.form.action[index].actionProps[0].compareType = ''
      this.form.action[index].actionProps[0].compareValue = ''
      this.form.action[index].resourceId = ''

      this.modelAction[index].facilityChild = []
      this.modelAction[index].attribute = []
      this.modelAction[index].facilityIcon = []
      this.modelAction[index].unFacilityIcon = []
      this.modelAction[index].specs = []
      this.modelAction[index].type = ''
      this.modelAction[index].max = ''
      this.modelAction[index].min = ''
      this.modelAction[index].hasSwitch = false
      this.modelAction[index].ifShowSpecs = false
      this.modelAction[index].ifShowInput = false

      // 获取大品类物模型
      this.getModelData('action', index, num)

      const params = {
        categoryId: id,
        subCategoryName: '',
        pageNumber: this.listQuery.page,
        pageSize: 9999
      }

      // 获取二级子品类列表
      sonCategory({ params }).then((res) => {
        if(res.data.code == 200){
          this.modelAction[index].facilityChild = res.data.data.list
        }
      })
    },

    // 获取大品类物模型
    getModelData(type, index, num) {
      if(type == 'condition'){
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
              this.modelCondition[index].attribute = res.data.data.thingModel.properties
              this.hasAction(type, index)
            }
          })

          // getModels({ params: [Number(num)] }).then((res) => {
          //   if(res.data.code == 200){
          //     if(type == 'condition'){
          //       this.modelCondition[index].facilityIcon = res.data.data[0].fileList
          //     }else{
          //       this.modelAction[index].facilityIcon = res.data.data[0].fileList
          //     }
          //   }
          // })
        }
      }else{
        const params = {
          deviceCategoryId: Number(num),
          deviceSubCategoryId: 0,
          key: '',
          modeType: this.form.action[index].actionType,
          brandId: ''
        }

        if(num){
          getModel({ params }).then((res) => {
            if(res.data.code == 200){
              // 拿到大品类物模型，赋值
              this.modelAction[index].attribute = res.data.data.thingModel.properties
              this.hasAction(type, index)
            }
          })
        }
      }
      
    },
    // 切换子品类,获取子品类物模型并获取品牌（触发条件）
    getSubModelCondition(index, num, sunId) {
      let subNumber = 0
      this.modelCondition[index].facilityChild.forEach((o, i) => {
        if(o.subCategoryId == sunId){
          this.form.condition[index].conditionProps[0].subCategoryName = o.subCategoryName
          subNumber = o.subCategoryNumber
        }
      })

      // this.form.condition[index].conditionProps[0].subCategoryId = Number(subNumber)
      this.form.condition[index].conditionProps[0].businessId = ''
      this.form.condition[index].conditionProps[0].propertyName = ''
      this.form.condition[index].conditionProps[0].compareType = ''
      this.form.condition[index].conditionProps[0].compareValue = ''
      this.form.condition[index].resourceId = ''

      this.modelCondition[index].attribute = []
      this.modelCondition[index].facilityIcon = []
      this.modelCondition[index].unFacilityIcon = []
      this.modelCondition[index].specs = []
      this.modelCondition[index].type = ''
      this.modelCondition[index].max = ''
      this.modelCondition[index].min = ''
      this.modelCondition[index].hasSwitch = false
      this.modelCondition[index].ifShowSpecs = false
      this.modelCondition[index].ifShowInput = false

      if(subNumber){
        const params = {
          deviceCategoryId: Number(num),
          deviceSubCategoryId: Number(subNumber),
          key: '',
          modeType: this.form.condition[index].conditionType
        }

        getSecModel({ params }).then((res) => {
          if(res.data.code == 200){
            // 拿到子品类物模型，赋值
            this.modelCondition[index].attribute = res.data.data.thingModel.properties
            this.hasAction('condition', index)
          }
        })

        // const params2 = {
        //   deviceCategoryId: Number(num),
        //   deviceSubCategoryId: Number(sunNum),
        //   brandId: this.form.condition[index].conditionProps[0].businessId
        // }

        // getSonModels({ params: [params2] }).then((res) => {
        //   if(res.data.code == 200){
        //     this.modelCondition[index].facilityIcon = res.data.data[0].fileList
        //   }
        // })

        const paramsC = {
          categoryId: sunId,
          subCategoryName: '',
          pageNumber: this.listQuery.page,
          pageSize: 9999
        }

        // 获取品牌
        sonCategory({ params: paramsC }).then((res) => {
          if(res.data.code == 200){
            let arr = res.data.data.list

            for(let k=0; k<arr.length; k++){
              for(let l=0; l<this.brandList.length; l++){
                if(arr[k].brandId == this.brandList[l].brandId){
                  arr[k].subCategoryName = this.brandList[l].brandName
                }
              }
            }

            this.modelCondition[index].brand = arr
          }
        })
      }
    },
    // 切换子品类,获取子品类物模型并获取品牌（执行动作）
    getSubModelAction(index, num, sunId) {
      let subNumber = 0
      this.modelAction[index].facilityChild.forEach((o, i) => {
        if(o.subCategoryId == sunId){
          this.form.action[index].actionProps[0].subCategoryName = o.subCategoryName
          subNumber = o.subCategoryNumber
        }
      })

      // this.form.action[index].actionProps[0].subCategoryId = Number(subNumber)
      this.form.action[index].actionProps[0].businessId = ''
      this.form.action[index].actionProps[0].propertyName = ''
      this.form.action[index].actionProps[0].compareType = ''
      this.form.action[index].actionProps[0].compareValue = ''
      this.form.action[index].resourceId = ''

      this.modelAction[index].attribute = []
      this.modelAction[index].facilityIcon = []
      this.modelAction[index].unFacilityIcon = []
      this.modelAction[index].specs = []
      this.modelAction[index].type = ''
      this.modelAction[index].max = ''
      this.modelAction[index].min = ''
      this.modelAction[index].hasSwitch = false
      this.modelAction[index].ifShowSpecs = false
      this.modelAction[index].ifShowInput = false

      if(subNumber){
        const params = {
          deviceCategoryId: Number(num),
          deviceSubCategoryId: Number(subNumber),
          key: '',
          modeType: this.form.action[index].actionType
        }

        getSecModel({ params }).then((res) => {
          if(res.data.code == 200){
            // 拿到子品类物模型，赋值
            this.modelAction[index].attribute = res.data.data.thingModel.properties
            this.hasAction('action', index)
          }
        })

        // const params2 = {
        //   deviceCategoryId: Number(num),
        //   deviceSubCategoryId: Number(subNumber),
        //   brandId: this.form.action[index].actionProps[0].businessId
        // }

        // getSonModels({ params: [params2] }).then((res) => {
        //   if(res.data.code == 200){
        //     this.modelAction[index].facilityIcon = res.data.data[0].fileList
        //   }
        // })

        const paramsC = {
          categoryId: sunId,
          subCategoryName: '',
          pageNumber: this.listQuery.page,
          pageSize: 9999
        }
        
        // 获取品牌
        sonCategory({ params: paramsC }).then((res) => {
          if(res.data.code == 200){
            let arr = res.data.data.list

            for(let k=0; k<arr.length; k++){
              for(let l=0; l<this.brandList.length; l++){
                if(arr[k].brandId == this.brandList[l].brandId){
                  arr[k].subCategoryName = this.brandList[l].brandName
                }
              }
            }

            this.modelAction[index].brand = arr
          }
        })
      }
    },
    // 切换品牌，获取物模型（触发条件）
    getBrandModelCondition(index, num, sunId, brandId) {
      this.form.condition[index].conditionProps[0].propertyName = ''
      this.form.condition[index].conditionProps[0].compareType = ''
      this.form.condition[index].conditionProps[0].compareValue = ''
      this.form.condition[index].resourceId = ''

      this.modelCondition[index].attribute = []
      this.modelCondition[index].facilityIcon = []
      this.modelCondition[index].unFacilityIcon = []
      this.modelCondition[index].specs = []
      this.modelCondition[index].type = ''
      this.modelCondition[index].max = ''
      this.modelCondition[index].min = ''
      this.modelCondition[index].hasSwitch = false
      this.modelCondition[index].ifShowSpecs = false
      this.modelCondition[index].ifShowInput = false

      let subNumber = 0
      this.modelCondition[index].facilityChild.forEach((o, i) => {
        if(o.subCategoryId == sunId){
          this.form.condition[index].conditionProps[0].subCategoryName = o.subCategoryName
          subNumber = o.subCategoryNumber
        }
      })

      const params = {
        deviceCategoryId: Number(num),
        deviceSubCategoryId: Number(subNumber),
        key: '',
        modeType: this.form.condition[index].conditionType,
        brandId: brandId
      }

      getSonModel({ params }).then((res) => {
        if(res.data.code == 200){
          // 拿到子品类物模型，赋值
          this.modelCondition[index].attribute = res.data.data.thingModel.properties
          this.hasAction('condition', index)
        }
      })
    },
    // 切换品牌，获取物模型（执行动作）
    getBrandModelAction(index, num, sunId, brandId) {
      this.form.action[index].actionProps[0].propertyName = ''
      this.form.action[index].actionProps[0].compareType = ''
      this.form.action[index].actionProps[0].compareValue = ''
      this.form.action[index].resourceId = ''

      this.modelAction[index].attribute = []
      this.modelAction[index].facilityIcon = []
      this.modelAction[index].unFacilityIcon = []
      this.modelAction[index].specs = []
      this.modelAction[index].type = ''
      this.modelAction[index].max = ''
      this.modelAction[index].min = ''
      this.modelAction[index].hasSwitch = false
      this.modelAction[index].ifShowSpecs = false
      this.modelAction[index].ifShowInput = false
      
      let subNumber = 0
      this.modelAction[index].facilityChild.forEach((o, i) => {
        if(o.subCategoryId == sunId){
          this.form.action[index].actionProps[0].subCategoryName = o.subCategoryName
          subNumber = o.subCategoryNumber
        }
      })

      const params = {
        deviceCategoryId: Number(num),
        deviceSubCategoryId: Number(subNumber),
        key: '',
        modeType: this.form.action[index].actionType,
        brandId: brandId
      }

      getSonModel({ params }).then((res) => {
        if(res.data.code == 200){
          // 拿到子品类物模型，赋值
          this.modelAction[index].attribute = res.data.data.thingModel.properties
          this.hasAction('action', index)
        }
      })
    },
    // 回显判断属性类型
    attrType(type, attr, j) {
      attr.forEach((item, m) => {
        if(type == 'condition'){
          if(item.identifier == this.form.condition[j].conditionProps[0].propertyName){
            this.modelCondition[j].specs = item.dataType.specs
            this.modelCondition[j].type = item.dataType.type

            // 判断显示枚举还是输入框
            if(JSON.stringify(this.modelCondition[j].specs) != '{}' &&
              (item.dataType.type == 'enum' || item.dataType.type == 'bool')){
              this.modelCondition[j].ifShowSpecs = true
              this.modelCondition[j].ifShowInput = false
            }else{
              this.modelCondition[j].ifShowSpecs = false
              this.modelCondition[j].ifShowInput = true
            }

            if(this.modelCondition[j].type == 'int'){
              this.modelCondition[j].max = item.dataType.specs.max
              this.modelCondition[j].min = item.dataType.specs.min
            }
          }
        }else{
          if(item.identifier == this.form.action[j].actionProps[0].propertyName){
            this.modelAction[j].specs = item.dataType.specs
            this.modelAction[j].type = item.dataType.type

            // 判断显示枚举还是输入框
            if(JSON.stringify(this.modelAction[j].specs) != '{}' &&
              (item.dataType.type == 'enum' || item.dataType.type == 'bool')){
              this.modelAction[j].ifShowSpecs = true
              this.modelAction[j].ifShowInput = false
            }else{
              this.modelAction[j].ifShowSpecs = false
              this.modelAction[j].ifShowInput = true
            }

            if(this.modelAction[j].type == 'int'){
              this.modelAction[j].max = item.dataType.specs.max
              this.modelAction[j].min = item.dataType.specs.min
            }
          }
        }
      })
    },
    // 判断action属性
    hasAction(type, index) {
      // action: 0:触发条件和执行动作, 1:触发条件, 2:执行动作, 3:非出发条件和执行动作
      let newAttr = [];
      if(type == 'condition'){
        // 自动场景筛选action为0和2的属性
        newAttr = this.modelCondition[index].attribute.filter((o, i) => {
          return o.action == 0 || o.action == 1
        })

        this.modelCondition[index].attribute = newAttr
      }else{
        // 手动场景筛选action为1和2的属性
        newAttr = this.modelAction[index].attribute.filter((o, i) => {
          return o.action == 0 || o.action == 2
        })

        this.modelAction[index].attribute = newAttr
      }

      let hasSwitch = newAttr.some(item => item.identifier == 'switch')
      if(hasSwitch){
        if(type == 'condition'){
          this.modelCondition[index].hasSwitch = true
        }else{
          this.modelAction[index].hasSwitch = true
        }
      }

      // // 如果属性有开关,则加开关属性
      // let hasSwitch = newAttr.some(item => item.identifier == 'switch')
      // if(hasSwitch){
      //   let attr = {
      //     "propertyName": "switch",
      //     "compareType": "==",
      //     "compareValue": "1",
      //   }
      //   if(type == 'condition'){
      //     this.form.condition[index].conditionProps.unshift(attr)
      //   }else{
      //     this.form.action[index].actionProps.unshift(attr)
      //   }
      // }
    },
    // 选择属性值(触发条件)
    changeAttrCondition(index, name) {
      this.modelCondition[index].attribute.forEach((item, i) => {
        if(item.identifier == name){
          this.modelCondition[index].specs = item.dataType.specs
          this.modelCondition[index].type = item.dataType.type

          // 判断显示枚举还是输入框
          if(JSON.stringify(this.modelCondition[index].specs) != '{}' &&
            (item.dataType.type == 'enum' || item.dataType.type == 'bool')){
            this.modelCondition[index].ifShowSpecs = true
            this.modelCondition[index].ifShowInput = false
          }else{
            this.modelCondition[index].ifShowSpecs = false
            this.modelCondition[index].ifShowInput = true
          }

          if(this.modelCondition[index].type == 'int'){
            this.modelCondition[index].max = item.dataType.specs.max
            this.modelCondition[index].min = item.dataType.specs.min
          }
        }
      })
    },
    // 选择属性值(执行动作)
    changeAttrAction(index, name) {
      this.modelAction[index].attribute.forEach((item, i) => {
        if(item.identifier == name){
          this.modelAction[index].specs = item.dataType.specs
          this.modelAction[index].type = item.dataType.type

          if(JSON.stringify(this.modelAction[index].specs) != '{}' &&
            (item.dataType.type == 'enum' || item.dataType.type == 'bool')){
            this.modelAction[index].ifShowSpecs = true
            this.modelAction[index].ifShowInput = false
          }else{
            this.modelAction[index].ifShowSpecs = false
            this.modelAction[index].ifShowInput = true
          }

          if(this.modelAction[index].type == 'int'){
            this.modelAction[index].max = item.dataType.specs.max
            this.modelAction[index].min = item.dataType.specs.min
          }
        }
      })
    },
    // 选择安防
    changeOperation(index, type, name){
      if(type == 'condition'){
        this.modelCondition[index].operation.forEach((item, i) => {
          if(item.identifier == name){
            this.modelCondition[index].autoExecute = item.dataType.specs
          }
        })
      }else{
        this.modelAction[index].operation.forEach((item, i) => {
          if(item.identifier == name){
            this.modelAction[index].autoExecute = item.dataType.specs
          }
        })
      }
    },

    // 添加触发条件
    addCondition(i) {
      let tem = {
        conditionOpType: 1,
        conditionType: "",
        resourceId: "",
        conditionProps: [{
          businessId: "",
          categoryId: "",
          propertyName: "",
          categoryName: "",
          compareType: "",
          compareValue: "",
          deviceUuid: "",
          subCategoryId: "",
          subCategoryName: ""
        }]
      }

      this.form.condition.splice(i+1, 0, tem)

      let model = {
        facilityIcon: [],
        unFacilityIcon: [],
        facilityChild: [],
        brand: [],
        attribute: [],
        specs: [],
        type: '',
        max: '',
        min: '',
        ifShowSpecs: false,
        ifShowInput: false,
        hasSwitch: false,
        comparison: ['大于', '等于', '小于'],
        executeMode: ['指定日期','每周'],
        weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
        operation: [],
        autoExecute: []
      }

      this.modelCondition.splice(i+1, 0, model)
    },
    // 删除触发条件
    delCondition(i) {
      if(this.form.condition.length>1){
        this.form.condition.splice(i, 1)
        this.modelCondition.splice(i, 1)
      }else{
        this.affirmType = 2
        this.dialogVisible = true
        this.dialogContent = '别删了，就剩一个了！'
        return
      }
    },
    // 添加执行动作
    addMotion(i) {
      let tem = {
        actionOpType: 1,
        actionType: "",
        resourceId: "",
        sort: 0,
        actionProps: [{	
          businessId: "",
          categoryId: "",
          categoryName: "",
          propertyName: "",
          compareType: "",
          compareValue: "",
          deviceUuid: "",
          subCategoryId: "",
          subCategoryName: ""
        }]
      }

      this.form.action.splice(i+1, 0, tem)

      let model = {
        facilityIcon: [],
        unFacilityIcon: [],
        facilityChild: [],
        brand: [],
        attribute: [],
        specs: [],
        type: '',
        max: '',
        min: '',
        ifShowSpecs: false,
        ifShowInput: false,
        hasSwitch: false,
        comparison: ['大于', '等于', '小于'],
        operation: [],
        autoExecute: []
      }

      this.modelAction.splice(i+1, 0, model)
    },
    // 删除执行动作
    delMotion(i) {
      if(this.form.action.length>1){
        this.form.action.splice(i, 1)
        this.modelAction.splice(i, 1)
      }else{
        this.affirmType = 2
        this.dialogVisible = true
        this.dialogContent = '别删了，就剩一个了！'
        return
      }
    },

    // 查看编辑模板
    editScene(id) {
      const params = {
        id: id
      }

      senceTemplateDetail({ params }).then((res) => {
        if(res.code == 200){
          this.loading = false
          let data = res.data
          this.form.id = data.id
          this.form.sort = data.sort
          this.form.sceneName = data.sceneName
          this.form.sceneType = Number(data.sceneType)
          this.form.sceneBgIconId = Number(data.sceneBgIconId)
          this.form.sceneDetailIconId = Number(data.sceneDetailIconId)
          this.form.sceneIconId = Number(data.sceneIconId)
          this.form.typeId = data.typeId
          this.form.sceneDesc = data.sceneDesc
          this.form.sceneIntroduce = data.sceneIntroduce

          if(data.condition.length){
            this.condition = data.condition[0].conditionOpType+''
          }else{
            this.condition = data.action[0].actionOpType+''
          }

          this.form.condition = []
          this.modelCondition = []
          let conditionProps = []

          // 触发条件回显

          //       -- 触发条件图标分类
          //     0定时   trigger_condition_time
          //     1设备   trigger_condition_device 
          //     2安防   trigger_condition_safe
          //     3延时   trigger_condition_delay
          //     4天气   trigger_condition_weather
          //     5场景   trigger_condition_scene
          //     6其它   trigger_condition_other

          var classify = ''

          data.condition.forEach((item, i) => {
            conditionProps = JSON.parse(item.conditionProps)

            let tem = {
              conditionOpType: 0,
              conditionType: "",
              resourceId: "",
              conditionProps: [{
                businessId: 0,
                categoryId: "",
                categoryName: "",
                propertyName: "",
                compareType: "",
                compareValue: "",
                deviceUuid: '',
                subCategoryId: 0,
                subCategoryName: ""
              },
              {
                propertyName: "",
                compareType: "",
                compareValue: ""
              }]
            },

            model = {
              facilityIcon: [],
              unFacilityIcon: [],
              facilityChild: [],
              brand: [],
              attribute: [],
              specs: [],
              type: '',
              max: '',
              min: '',
              ifShowSpecs: false,
              ifShowInput: false,
              hasSwitch: false,
              comparison: ['大于', '等于', '小于'],
              executeMode: ['指定日期', '每周'],
              weeks: ['星期一', '星期二', '星期三', '星期四', '星期五', '星期六', '星期日'],
              operation: [],
              autoExecute: []
            }

            if(item.conditionType == 0){
              // 时间
              classify = 'trigger_condition_time'

              let name = ''
              switch (conditionProps[1].propertyName) {
                case 'appoint_date':
                  name = 0
                  break;
                case 'weeks':
                  name = 1
                  break;
                default:
                  break;
              }

              tem = {
                conditionOpType: item.conditionOpType,
                conditionType: item.conditionType,
                resourceId: Number(item.resourceId),
                conditionProps: [{
                  propertyName: name,
                  compareType: 1,
                  compareValue: conditionProps[0].compareValue
                },
                {
                  propertyName: name,
                  compareType: 1,
                  compareValue: conditionProps[1].compareValue
                }]
              }

              if(conditionProps[1].propertyName == 'weeks'){
                var weeks = conditionProps[1].compareValue.split(',')
                weeks.forEach((item, i) => {
                  return weeks[i] = Number(item)
                })

                tem.conditionProps[1].compareValue = weeks
              }
            }else if(item.conditionType == 1){
              // 触发设备
              classify = 'trigger_condition_device'

              if(conditionProps.length == 2){
                model.hasSwitch = true
                conditionProps.splice(0, 1)
              }

              tem = {
                conditionOpType: item.conditionOpType,
                conditionType: item.conditionType,
                resourceId: item.resourceId,
                conditionProps: [{
                  businessId: conditionProps[0].businessId != -1 ? Number(conditionProps[0].businessId) : '',
                  categoryId: Number(conditionProps[0].categoryId),
                  categoryName: conditionProps[0].categoryName,
                  subCategoryName: conditionProps[0].subCategoryName,
                  propertyName: conditionProps[0].propertyName,
                  compareType: '',
                  compareValue: conditionProps[0].compareValue,
                  deviceUuid: conditionProps[0].deviceUuid,
                  subCategoryId: conditionProps[0].subCategoryId ? Number(conditionProps[0].subCategoryId) : ''
                }]
              }

              let compareType = 1
              switch (conditionProps[0].compareType) {
                case '<':
                  compareType = 2
                  break;
                case '==':
                  compareType = 1
                  break;
                case '>':
                  compareType = 0
                  break;
                default:
                  break;
              }

              tem.conditionProps[0].compareType = compareType
              
            }else if(item.conditionType == 2){
              // 安防
              classify = 'trigger_condition_safe'

              tem = {
                conditionOpType: item.conditionOpType,
                conditionType: item.conditionType,
                resourceId: item.resourceId,
                conditionProps: [{
                  propertyName: conditionProps[0].propertyName,
                  compareType: 1,
                  compareValue: conditionProps[0].compareValue
                }]
              }

              model.operation = this.operationCondition

              model.operation.forEach(item => {
                if(item.identifier == conditionProps[0].propertyName){
                  model.autoExecute = item.dataType.specs
                }
              })
            }

            this.form.condition.push(tem)
            this.modelCondition.push(model)

            if(classify){
              var res = ''
              this.conditionImgs.forEach(item => {
                if(item.classIdentityName == classify){
                  res = item
                }
              })

              if(res){
                this.modelCondition[i].unFacilityIcon.push(res)
              }
            }
          })

          this.form.condition.forEach((item, j) => {
            if(item.conditionType == 1){
              // 转换ID，获取二级品类列表
              var id = ''
              this.facility.forEach((o, i) => {
                if(o.categoryNumber == item.conditionProps[0].categoryId){
                  id = o.categoryId
                }
              })
              
              const params = {
                categoryId: id,
                subCategoryName: '',
                pageNumber: this.listQuery.page,
                pageSize: 9999
              }

              sonCategory({ params }).then((res) => {
                if(res.data.code == 200){
                  this.modelCondition[j].facilityChild = res.data.data.list

                  var subNumber = item.conditionProps[0].subCategoryId,
                      subId = ''

                  this.modelCondition[j].facilityChild.forEach(item => {
                    if(item.subCategoryNumber == subNumber){
                      subId = item.subCategoryId
                      this.form.condition[j].conditionProps[0].subCategoryId = subId
                    }
                  })

                  // 判断是否有品牌ID，有品牌获取最终物模型，没有则判断是否有二级品类，获取物模型。
                  if(item.conditionProps[0].businessId !== ''){
                    // 获取品牌列表
                    const paramsC = {
                      categoryId: subId,
                      subCategoryName: '',
                      pageNumber: this.listQuery.page,
                      pageSize: 9999
                    }
                    
                    sonCategory({ params: paramsC }).then((res) => {
                      if(res.data.code == 200){
                        let arr = res.data.data.list

                        for(let m=0; m<arr.length; m++){
                          for(let l=0; l<this.brandList.length; l++){
                            if(arr[m].brandId == this.brandList[l].brandId){
                              arr[m].subCategoryName = this.brandList[l].brandName
                            }
                          }
                        }

                        this.modelCondition[j].brand = arr
                      }
                    })

                    // 获取最终物模型
                    const params = {
                      deviceCategoryId: Number(item.conditionProps[0].categoryId),
                      deviceSubCategoryId: Number(subNumber),
                      key: '',
                      modeType: this.form.condition[j].conditionType,
                      brandId: item.conditionProps[0].businessId
                    }

                    getSonModel({ params }).then((res) => {
                      if(res.data.code == 200){
                        // 拿到子品类物模型，赋值
                        this.modelCondition[j].attribute = res.data.data.thingModel.properties
                        this.attrType('condition', this.modelCondition[j].attribute, j)
                        this.hasAction('condition', j)
                      }
                    })
                  }else if(subNumber){
                    // 没有品牌ID，获取品牌列表和二级物模型
                    const paramsC = {
                      categoryId: subId,
                      subCategoryName: '',
                      pageNumber: this.listQuery.page,
                      pageSize: 9999
                    }
                    
                    sonCategory({ params: paramsC }).then((res) => {
                      if(res.data.code == 200){
                        let arr = res.data.data.list

                        for(let m=0; m<arr.length; m++){
                          for(let l=0; l<this.brandList.length; l++){
                            if(arr[m].brandId == this.brandList[l].brandId){
                              arr[m].subCategoryName = this.brandList[l].brandName
                            }
                          }
                        }

                        this.modelCondition[j].brand = arr
                      }
                    })

                    // 获取二级品类物模型
                    const params = {
                      deviceCategoryId: Number(item.conditionProps[0].categoryId),
                      deviceSubCategoryId: Number(subNumber),
                      key: '',
                      modeType: this.form.condition[j].conditionType
                    }

                    getSecModel({ params }).then((res) => {
                      if(res.data.code == 200){
                        // 拿到子品类物模型，赋值
                        this.modelCondition[j].attribute = res.data.data.thingModel.properties
                        this.attrType('condition', this.modelCondition[j].attribute, j)
                        this.hasAction('condition', j)
                      }
                    })
                  }else{
                    // 没有二级子品类，获取大品类物模型
                     const params = {
                      deviceCategoryId: Number(item.conditionProps[0].categoryId),
                      deviceSubCategoryId: 0,
                      key: '',
                      modeType: this.form.condition[j].conditionType,
                      brandId: ''
                    }

                    getModel({ params }).then((res) => {
                      if(res.data.code == 200){
                        // 拿到大品类物模型，赋值
                        this.modelCondition[j].attribute = res.data.data.thingModel.properties
                        this.attrType('condition', this.modelCondition[j].attribute, j)
                        this.hasAction('condition', j)
                      }
                    })
                  }
                }
              })
            }
          })

          // 执行动作回显
          this.form.action = []
          this.modelAction = []
          let actionProps = []

          //          -- 执行动作图标分类-自动
          //     1设备   trigger_condition_device
          //     2天气   trigger_condition_weather
          //     3家庭安防   trigger_condition_safe

          //          -- 执行动作图标分类-手动
          //     1安防   trigger_condition_safe
          //     3场景   trigger_condition_scene
          //     3设备   trigger_condition_device

          var classify = ''

          data.action.forEach((item, i) => {
            actionProps = JSON.parse(item.actionProps)

            let tem = {
              actionOpType: 0,
              actionType: "",
              resourceId: "",
              sort: 0,
              actionProps: [{
                businessId: "",
                categoryId: "",
                categoryName: "",
                subCategoryName: "",
                propertyName: "",
                compareType: "0",
                compareValue: "",
                deviceUuid: "",
                subCategoryId: ""
              }]
            },

            model = {
              facilityIcon: [],
              unFacilityIcon: [],
              facilityChild: [],
              brand: [],
              attribute: [],
              specs: [],
              type: '',
              max: '',
              min: '',
              ifShowSpecs: false,
              ifShowInput: false,
              hasSwitch: false,
              comparison: ['大于', '等于', '小于'],
              operation: [],
              autoExecute: []
            }

            if(item.actionType == 2){
              // 安防
              classify = 'trigger_condition_safe'

              tem = {
                actionOpType: item.actionOpType,
                actionType: 0,
                resourceId: Number(item.resourceId),
                actionProps: [{
                  propertyName: actionProps[0].propertyName,
                  compareType: 1,
                  compareValue: actionProps[0].compareValue
                }]
              }

              model.operation = this.operationAction

              model.operation.forEach(item => {
                if(item.identifier == actionProps[0].propertyName){
                  model.autoExecute = item.dataType.specs
                }
              })
            }else if(item.actionType == 1){
              // 执行动作设备
              classify = 'trigger_condition_device'

              if(actionProps.length == 2){
                model.hasSwitch = true
                actionProps.splice(0, 1)
              }

              tem = {
                actionOpType: item.actionOpType,
                actionType: item.actionType,
                resourceId: item.resourceId,
                sort: 0,
                actionProps: [{
                  businessId: actionProps[0].businessId != -1 ? actionProps[0].businessId : '',
                  categoryId: Number(actionProps[0].categoryId),
                  categoryName: actionProps[0].categoryName,
                  subCategoryName: actionProps[0].subCategoryName,
                  propertyName: actionProps[0].propertyName,
                  compareType: '',
                  compareValue: actionProps[0].compareValue,
                  deviceUuid: actionProps[0].deviceUuid,
                  subCategoryId: actionProps[0].subCategoryId ? Number(actionProps[0].subCategoryId) : ''
                }]
              }

              let compareType = 1
              switch (actionProps[0].compareType) {
                case '<':
                  compareType = 2
                  break;
                case '==':
                  compareType = 1
                  break;
                case '>':
                  compareType = 0
                  break;
                default:
                  break;
              }

              tem.actionProps[0].compareType = compareType
            }

            this.form.action.push(tem)
            this.modelAction.push(model)

            if(classify){
              var res = ''

              if(this.form.sceneType == 0){
                this.actionManualImgs.forEach(item => {
                  if(item.classIdentityName == classify){
                    res = item
                  }
                })
              }else{
                this.actionAutoImgs.forEach(item => {
                  if(item.classIdentityName == classify){
                    res = item
                  }
                })
              }

              if(res){
                this.modelAction[i].unFacilityIcon.push(res)
              }
            }
          })

          this.form.action.forEach((item, k) => {
            if(item.actionType == 1){
              // 转换ID，获取二级品类列表
              var id = ''
              this.facility.forEach(o => {
                if(o.categoryNumber == item.actionProps[0].categoryId){
                  id = o.categoryId
                }
              })
              
              const params = {
                categoryId: id,
                subCategoryName: '',
                pageNumber: this.listQuery.page,
                pageSize: 9999
              }

              sonCategory({ params }).then((res) => {
                if(res.data.code == 200){
                  this.modelAction[k].facilityChild = res.data.data.list

                  var subNumber = item.actionProps[0].subCategoryId,
                      subId = ''

                  this.modelAction[k].facilityChild.forEach(item => {
                    if(item.subCategoryNumber == subNumber){
                      subId = item.subCategoryId
                      this.form.action[k].actionProps[0].subCategoryId = subId
                    }
                  })

                  // 判断是否有品牌ID，有品牌获取最终物模型，没有则判断是否有二级品类，获取物模型。
                  if(item.actionProps[0].businessId !== ''){
                    // 获取品牌列表
                    const paramsC = {
                      categoryId: subId,
                      subCategoryName: '',
                      pageNumber: this.listQuery.page,
                      pageSize: 9999
                    }
                    
                    sonCategory({ params: paramsC }).then((res) => {
                      if(res.data.code == 200){
                        let arr = res.data.data.list

                        for(let n=0; n<arr.length; n++){
                          for(let l=0; l<this.brandList.length; l++){
                            if(arr[n].brandId == this.brandList[l].brandId){
                              arr[n].subCategoryName = this.brandList[l].brandName
                            }
                          }
                        }

                        this.modelAction[k].brand = arr
                      }
                    })

                    // 获取最终物模型
                    const params = {
                      deviceCategoryId: Number(item.actionProps[0].categoryId),
                      deviceSubCategoryId: Number(subNumber),
                      key: '',
                      modeType: this.form.action[k].actionType,
                      brandId: item.actionProps[0].businessId
                    }

                    getSonModel({ params }).then((res) => {
                      if(res.data.code == 200){
                        // 拿到子品类物模型，赋值
                        this.modelAction[k].attribute = res.data.data.thingModel.properties
                        this.attrType('action', this.modelAction[k].attribute, k)
                        this.hasAction('action', k)
                      }
                    })
                  }else if(subNumber){
                    // 没有品牌ID，获取品牌列表和二级物模型
                    const paramsC = {
                      categoryId: subId,
                      subCategoryName: '',
                      pageNumber: this.listQuery.page,
                      pageSize: 9999
                    }
                    
                    sonCategory({ params: paramsC }).then((res) => {
                      if(res.data.code == 200){
                        let arr = res.data.data.list

                        for(let n=0; n<arr.length; n++){
                          for(let l=0; l<this.brandList.length; l++){
                            if(arr[n].brandId == this.brandList[l].brandId){
                              arr[n].subCategoryName = this.brandList[l].brandName
                            }
                          }
                        }

                        this.modelAction[k].brand = arr
                      }
                    })

                    // 获取二级品类物模型
                    const params = {
                      deviceCategoryId: Number(item.actionProps[0].categoryId),
                      deviceSubCategoryId: Number(subNumber),
                      key: '',
                      modeType: this.form.action[k].actionType
                    }

                    getSecModel({ params }).then((res) => {
                      if(res.data.code == 200){
                        // 拿到子品类物模型，赋值
                        this.modelAction[k].attribute = res.data.data.thingModel.properties
                        this.attrType('action', this.modelAction[k].attribute, k)
                        this.hasAction('action', k)
                      }
                    })
                  }else{
                    // 没有二级子品类，获取大品类物模型
                     const params = {
                      deviceCategoryId: Number(item.actionProps[0].categoryId),
                      deviceSubCategoryId: 0,
                      key: '',
                      modeType: this.form.action[k].actionType,
                      brandId: ''
                    }

                    getModel({ params }).then((res) => {
                      if(res.data.code == 200){
                        // 拿到大品类物模型，赋值
                        this.modelAction[k].attribute = res.data.data.thingModel.properties
                        this.attrType('action', this.modelAction[k].attribute, k)
                        this.hasAction('action', k)
                      }
                    })
                  }
                }
              })
            }
          })

        }else{
          this.loading = false
        }
      })
    },
    
    // 确认添加模板
    addOrEdit() {
      if(this.dialogType == 2){
        // 关闭查看
        this.resetForm()
        return
      }
     
      //  弹窗校验
      this.$refs.permissionForm.validate(valid => {
        if (valid) {
          this.dealWithForm()     
        } else {
          console.log('error submit!!')
          return false
        }
      })

    },
    // 详情校验
    dealWithForm() {
      if(this.form.sceneType != 1){
        // 非自动类型置空触发条件
        this.form.condition = []
      }else{
        // 自动类型校验触发条件
        var cond = this.form.condition;
        for(var i=0; i<cond.length; i++){
          var item = cond[i]
          this.affirmType = 2;

          if(item.conditionType === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”未选择触发条件，请选择！'
            return
          }

          if(item.conditionType === 1 && item.conditionProps[0].categoryId === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”未选择大品类设备，请选择！'
            return
          }

          // if(item.conditionType === 1 && item.conditionProps[0].subCategoryId === '' && this.modelCondition[i].facilityChild.length){
          //   this.dialogVisible = true
          //   this.dialogContent = '“触发条件' +(+1+i)+ '”未选择子品类设备，请选择！'
          //   return
          // }

          if(item.conditionType != 1 && item.resourceId === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的图片不能为空，请选择！'
            return
          }

          if(item.conditionProps[0].propertyName === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的属性不能为空，请选择！'
            return
          }

          if(item.conditionProps[0].compareType === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的比较值不能为空，请选择！'
            return
          }

          if(item.conditionProps[0].compareValue === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的属性值不能为空，请选择或填写！'
            return
          }

          if(item.conditionType == 0 && item.conditionProps[1].propertyName === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的属性二不能为空，请选择！'
            return
          }

          if(item.conditionType == 0 && item.conditionProps[1].compareType === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的比较值二不能为空，请选择！'
            return
          }

          if(item.conditionType == 0 && item.conditionProps[1].propertyName != 'weeks' && item.conditionProps[1].compareValue === ''){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的属性值二不能为空，请选择或填写！'
            return
          }

          if(item.conditionType == 0 && item.conditionProps[1].propertyName == 'weeks' && !item.conditionProps[1].compareValue.length){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的属性值二不能为空，请选择或填写！'
            return
          }

          if(this.modelCondition[i].type === 'int' && ((item.conditionProps[0].compareValue-this.modelCondition[i].min<0) || (item.conditionProps[0].compareValue-this.modelCondition[i].max>0))){
            this.dialogVisible = true
            this.dialogContent = '“触发条件' +(+1+i)+ '”的属性值取值范围不对，请重新填写（提示：' + this.modelCondition[i].min + ' - ' + this.modelCondition[i].max + '）！'
            return
          }
        }
      }

      // 校验执行动作
      var acti = this.form.action;
      for(var i=0; i<acti.length; i++){
        var item = acti[i]
        // 关系类型
        item.actionOpType = 0
        this.affirmType = 2;

        if(item.actionType === ''){
          this.dialogVisible = true
          this.dialogContent = '“执行动作' +(+1+i)+ '”未选择执行动作，请选择！'
          return
        }

        if(item.actionType === 1 && item.actionProps[0].categoryId === ''){
          this.dialogVisible = true
          this.dialogContent = '“执行动作' +(+1+i)+ '”未选择大品类设备，请选择！'
          return
        }

        // if(item.actionType === 1 && item.actionProps[0].subCategoryId === '' && this.modelAction[i].facilityChild.length){
        //   this.dialogVisible = true
        //   this.dialogContent = '“执行动作' +(+1+i)+ '”未选择子品类设备，请选择！'
        //   return
        // }

        if(item.actionType === 0 && item.resourceId === ''){
          this.dialogVisible = true
          this.dialogContent = '“执行动作' +(+1+i)+ '”的图片不能为空，请重新选择！'
          return
        }

        if(item.actionProps[0].propertyName === ''){
          this.dialogVisible = true
          this.dialogContent = '“执行动作' +(+1+i)+ '”的属性不能为空，请重新选择！'
          return
        }

        if(item.actionProps[0].compareType === ''){
          this.dialogVisible = true
          this.dialogContent = '“执行动作' +(+1+i)+ '”的比较值不能为空，请重新选择！'
          return
        }

        if(item.actionProps[0].compareValue === ''){
          this.dialogVisible = true
          this.dialogContent = '“执行动作' +(+1+i)+ '”的属性值不能为空，请重新选择或填写！'
          return
        }

        if(this.modelAction[i].type === 'int' && ((item.actionProps[0].compareValue-this.modelAction[i].min<0) || (item.actionProps[0].compareValue-this.modelAction[i].max>0))){
          this.dialogVisible = true
          this.dialogContent = '“执行动作' +(+1+i)+ '”的属性值取值范围不对，请重新填写（提示：' + this.modelAction[i].min + ' - ' + this.modelAction[i].max + '）！'
          return
        }
      }

      // 判断触发条件的与或关系
      if(this.form.sceneType == 1){
        if(this.condition == 9){
          // 未选择关系
          var res = this.form.condition.every(o => {
            return o.conditionType == 1
          })

          if(res){
            this.affirmType = 2;
            this.dialogVisible = true;
            this.dialogContent = '请选择触发条件关系'
          }else{
            this.affirmType = 3;
            this.dialogVisible = true;
            this.dialogContent = '触发条件不可以与';
          }
        }else if(this.condition == 1){
          // 已选择与关系
          var res = this.form.condition.every(o => {
            return o.conditionType == 1
          })

          if(res){
            this.addSwitch()
          }else{
            this.affirmType = 3;
            this.dialogVisible = true;
            this.dialogContent = '触发条件不可以与';
          }
        }else{
          // 已选择或关系
          this.addSwitch()
        }
      }else{
        this.addSwitch()
      }
    },
    // 有按钮属性的添加switch
    addSwitch() {
      let params = {'params': JSON.parse(JSON.stringify(this.form))}
      let attr = {
        "businessId": -1,
        "categoryId": "",
        "categoryName": "",
        "subCategoryName": "",
        "deviceUuid": "",
        "subCategoryId": "",
        "propertyName": "switch",
        "compareType": "==",
        "compareValue": "1",
      }

      for(var i=0, cond=params.params.condition; i<cond.length; i++){
        let type = ''
        switch (cond[i].conditionProps[0].compareType) {
          case 0:
            type = '>'
            break;
          case 1:
            type = '=='
            break;
          case 2:
            type = '<'
            break;
          default:
            break;
        }

        cond[i].conditionProps[0].compareType = type

        if(cond[i].conditionType === 0 && cond[i].conditionProps[1].propertyName == 0){
          cond[i].conditionProps[1].compareType = '=='
          cond[i].conditionProps[0].propertyName = 'appoint_time'
          cond[i].conditionProps[1].propertyName = 'appoint_date'
        }
          
        if(cond[i].conditionType === 0 && cond[i].conditionProps[1].propertyName == 1){
          cond[i].conditionProps[1].compareType = '=='
          cond[i].conditionProps[0].propertyName = 'appoint_time'
          cond[i].conditionProps[1].propertyName = 'weeks'
          cond[i].conditionProps[1].compareValue = cond[i].conditionProps[1].compareValue.join()
        }

        if(cond[i].conditionType === 1 && cond[i].conditionProps[0].subCategoryId === ''){
          cond[i].conditionProps[0].subCategoryId = 0
        }

        if(cond[i].conditionType === 1 && cond[i].conditionProps[0].businessId === ''){
          cond[i].conditionProps[0].businessId = -1
        }

        for(let n=0, child = this.modelCondition[i].facilityChild; n<child.length; n++){
          if(child[n].subCategoryId == cond[i].conditionProps[0].subCategoryId){
            cond[i].conditionProps[0].subCategoryId = child[n].subCategoryNumber
          }
        }
      }

      for(var i=0, acti=params.params.action; i<acti.length; i++){
        let type = ''
        switch (acti[i].actionProps[0].compareType) {
          case 0:
            type = '>'
            break;
          case 1:
            type = '=='
            break;
          case 2:
            type = '<'
            break;
          default:
            break;
        }

        acti[i].actionProps[0].compareType = type

        if(acti[i].actionType === 1 && acti[i].actionProps[0].subCategoryId === ''){
          acti[i].actionProps[0].subCategoryId = 0
        }

        if(acti[i].actionType === 1 && acti[i].actionProps[0].businessId === ''){
          acti[i].actionProps[0].businessId = -1
        }

        for(let n=0, child = this.modelAction[i].facilityChild; n<child.length; n++){
          if(child[n].subCategoryId == acti[i].actionProps[0].subCategoryId){
            acti[i].actionProps[0].subCategoryId = child[n].subCategoryNumber
          }
        }

        if(acti[i].actionType == 0){
          acti[i].actionType = 2
        }
      }

      // this.modelCondition.forEach((item, i) => {
      //   if(item.hasSwitch && params.params.condition[i].conditionProps[0].propertyName != 'switch'){
      //     attr.businessId = params.params.condition[i].conditionProps[0].businessId
      //     attr.categoryId = params.params.condition[i].conditionProps[0].categoryId
      //     attr.categoryName = params.params.condition[i].conditionProps[0].categoryName
      //     attr.subCategoryName = params.params.condition[i].conditionProps[0].subCategoryName
      //     attr.deviceUuid = params.params.condition[i].conditionProps[0].deviceUuid
      //     attr.subCategoryId = params.params.condition[i].conditionProps[0].subCategoryId

      //     params.params.condition[i].conditionProps.unshift(attr)
      //   }
      // })

      this.modelAction.forEach((item, i) => {
        if(item.hasSwitch && params.params.action[i].actionProps[0].propertyName != 'switch'){
          attr.businessId = params.params.action[i].actionProps[0].businessId
          attr.categoryId = params.params.action[i].actionProps[0].categoryId
          attr.categoryName = params.params.action[i].actionProps[0].categoryName
          attr.subCategoryName = params.params.action[i].actionProps[0].subCategoryName
          attr.deviceUuid = params.params.action[i].actionProps[0].deviceUuid
          attr.subCategoryId = params.params.action[i].actionProps[0].subCategoryId

          params.params.action[i].actionProps.unshift(attr)
        }
      })

      console.log('7777----form----7777', params)
      // return

      if(this.dialogType == 1){
        this.addTemplate(params)
      }else if(this.dialogType == 3){
        this.editTemplate(params)
      }
    },
    // 添加模板
    addTemplate(params) {
      addSenceTemplate(params).then(res=>{
        if(res.code == 200){
          this.$message.success('新增成功')
          this.$emit('closeAddDialog', 1)
        }
      })
    },

    // 编辑模板
    editTemplate(params) {
      editSenceTemplate(params).then(res=>{
        if(res.code == 200){
          this.$message.success('编辑成功')
          this.$emit('closeAddDialog', 1)
        }
      })
    },
    // 弹窗确认按钮
    confirmDelete() {
      this.dialogVisible = false
      if(this.affirmType == 3){
        this.condition = '0'
      }
    },
    // 关闭弹窗
    resetForm() {
      this.$emit('closeAddDialog')
    }
  }
}
</script>

<style lang='scss' scoped>
  .doc-dialog{
    // 表单每行
    .el-form-item{
      margin-bottom: 20px;
    }

    // 场景详情
    .scene_details{
      .name{
        width: 64px;
        // text-align: right;
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
  
  .width200{
    width: 200px;
  }
  .width540{
    width: 540px;
  }

  .dialog_select.width540{
    /deep/ .el-select-dropdown{
      width: 540px;
    }
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

    /deep/ .el-select-dropdown__item:not(:nth-child(7n)){
      margin-right: 16px;
    }

    /deep/ .el-select-dropdown__item:nth-child(n+8){
      margin-top: 10px;
    }

    /deep/ .el-scrollbar__bar{
      display: none;
    }
  }

  .position{
    // 触发条件图标样式
    /deep/ .el-select-dropdown{
      // transform: translateX(-200px);
      width: 400px;

      /deep/ .el-select-dropdown__item{
        margin-top: 0;
      }

      /deep/ .el-select-dropdown__item:nth-child(n+6){
        margin-top: 10px;
      }

      /deep/ .popper__arrow{
        left: 226px !important;
      }
    }
  }

  .position_left{
    /deep/ .el-select-dropdown{
      transform: translateX(-200px);
    }
  }

  .star{
    color: red;
    margin-right: 4px;
  }

</style>
