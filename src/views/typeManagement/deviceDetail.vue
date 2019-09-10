<template>
  <div class="app-container calendar-list-container">
    <el-row :gutter="30">
      <el-col :span="24">
        <el-button
          type="ghost"
          @click="handleBackEvent"
        >返回</el-button>
        <el-button
          type="primary"
          @click="editDevice"
        >{{ editText }}</el-button>
        <el-button
          v-show="!isEdit"
          type="danger"
          @click="handleDelEvent"
        >删除该引导页</el-button>
      </el-col>
      <el-col
        :span="24"
        style="margin: 20px 0px;padding-bottom: 40px;"
      >
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="form"
          label-width="80px"
          style="margin-top: 20px;"
          size="large"
        >
          <el-tabs type="border-card">
            <el-tab-pane label="基本信息">
              <el-col :span="24">
                <el-form-item label-width="120px">
                  <el-col :span="12">
                    <!-- <el-checkbox
                      v-model="is_mixapp"
                      :true-label="1"
                      :false-label="0"
                      disabled
                    >是否是融合版APP</el-checkbox>
                    <br> -->
                    <el-checkbox
                      v-model="is_evergrande"
                      :true-label="1"
                      :false-label="0"
                      disabled
                    >属于{{ COLTD }}快联产品设备</el-checkbox>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="品类"
                  label-width="120px"
                >
                  <el-col :span="12">
                    <el-input
                      v-model="form.type_name"
                      disabled
                    />
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-if="!is_evergrande"
                  label="厂商"
                  label-width="120px"
                >
                  <el-col :span="12">
                    <el-input
                      v-model="form.business_name"
                      disabled
                    />
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-if="!is_evergrande"
                  label="品牌"
                  label-width="120px"
                >
                  <el-col :span="12">
                    <el-input
                      v-model="form.brand_name"
                      disabled
                    />
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-if="!is_evergrande"
                  label="型号"
                  label-width="120px"
                >
                  <el-col :span="12">
                    <el-input
                      v-model="form.model"
                      disabled
                    />
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-if="!is_evergrande"
                  label="产品图片"
                  label-width="120px"
                >
                  <el-col :span="12">
                    <div class="flex">
                      <el-input
                        v-if="form.base_img"
                        v-model="form.base_img.filename"
                        :disabled="!isEdit"
                        readonly
                      />
                      <el-upload
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :data="form.base_img"
                        :disabled="!isEdit"
                        class="upload-container"
                        action="/api/index.php/files/save"
                        accept="image/png"
                      >
                        <el-button
                          :disabled="!isEdit"
                          size="middle"
                          type="primary"
                        >选择文件</el-button>
                      </el-upload>
                    </div>
                  </el-col>
                </el-form-item>
                <!--<el-form-item label="离线提示语" label-width="120px" prop="offline_hint">
                                    <el-col :span="12">
                                        <el-input
                                                type="textarea"
                                                :autosize="{ minRows: 3, maxRows: 3}"
                                                placeholder="请输入离线提示语"
                                                :maxlength="500"
                                                v-model="form.offline_hint" :disabled="!isEdit">
                                        </el-input>
                                    </el-col>
                                </el-form-item>-->

              </el-col>
            </el-tab-pane>
            <el-tab-pane label="添加方式">
              <el-col :span="24">
                <el-form-item
                  label="产品添加方式"
                  label-width="120px"
                  prop="add_type"
                >
                  <el-col :span="13">
                    <el-select
                      v-model="form.add_type"
                      :disabled="!isEdit"
                      placeholder="请选择添加方式"
                      style="width: 100%;"
                    >
                      <el-option
                        v-for="item in deviceAddTypeList"
                        :key="item.type_id"
                        :label="item.type_name"
                        :value="item.type_id"
                      />
                    </el-select>
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-show="form.add_type!=6"
                  label="第一步"
                  label-width="120px"
                >
                  <el-col :span="13">
                    <el-form-item
                      v-if="form.add1_img"
                      label="上传图片"
                      label-width="80px"
                    >
                      <div class="flex">
                        <!--<div class="desTitle">上传图片</div>-->
                        <el-input
                          v-model="form.add1_img.filename"
                          :disabled="!isEdit"
                          readonly
                        />
                        <el-upload
                          :show-file-list="false"
                          :on-success="handleAddImg1Success"
                          :before-upload="beforeAvatarUpload"
                          :data="form.add1_img"
                          :disabled="!isEdit"
                          class="upload-container"
                          action="/api/index.php/files/save"
                          accept="image/png"
                        >
                          <el-button
                            :disabled="!isEdit"
                            size="middle"
                            type="primary"
                          >选择文件</el-button>
                        </el-upload>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="13">
                    <div class="marT20">
                      <el-form-item
                        :prop="form.add_type!=6?'add1_tips':'Auth_2_0'"
                        label="提示文字"
                        label-width="80px"
                      >
                        <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                        <el-input
                          :autosize="{ minRows: 3, maxRows: 3}"
                          v-model="form.add1_tips"
                          :disabled="!isEdit"
                          :maxlength="255"
                          type="textarea"
                          placeholder="文字限制255个字符内"
                          class="add1TextArea"
                        />
                      </el-form-item>
                    </div>
                  </el-col>
                  <el-col :span="13">
                    <div class="marT20 flex">
                      <el-form-item
                        :prop="form.add_type!=6?'add1_button':'Auth_2_0'"
                        label="按钮文字"
                        label-width="80px"
                      >
                        <!--<div class="desTitle">按钮文字</div>-->
                        <el-input
                          v-model="form.add1_button"
                          :disabled="!isEdit"
                          :maxlength="8"
                        />
                      </el-form-item>
                    </div>
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-show="form.add_type!=6"
                  label="第二步"
                  label-width="120px"
                >
                  <el-col :span="13">
                    <el-form-item
                      v-if="form.add2_img"
                      label="上传图片"
                      label-width="80px"
                    >
                      <div class="flex">
                        <!--<div class="desTitle">上传图片</div>-->
                        <el-input
                          v-model="form.add2_img.filename"
                          :disabled="!isEdit"
                          readonly
                        />
                        <el-upload
                          :show-file-list="false"
                          :on-success="handleAddImg2Success"
                          :before-upload="beforeAvatarUpload"
                          :data="form.add2_img"
                          :disabled="!isEdit"
                          class="upload-container"
                          action="/api/index.php/files/save"
                          accept="image/png"
                        >
                          <el-button
                            :disabled="!isEdit"
                            size="middle"
                            type="primary"
                          >选择文件</el-button>
                        </el-upload>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="13">
                    <div class="marT20">
                      <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                      <el-form-item
                        :prop="form.add_type!=6?'add2_tips':'Auth_2_0'"
                        label="提示文字"
                        label-width="80px"
                      >
                        <el-input
                          :autosize="{ minRows: 3, maxRows: 3}"
                          v-model="form.add2_tips"
                          :disabled="!isEdit"
                          :maxlength="255"
                          type="textarea"
                          placeholder="文字限制255个字符内"
                          class="add1TextArea"
                        />
                      </el-form-item>
                    </div>
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-show="form.add_type==5"
                  label="第三步"
                  label-width="120px"
                >
                  <el-col :span="13">
                    <el-form-item
                      v-if="form.add3_img"
                      label="上传图片"
                      label-width="80px"
                    >
                      <div class="flex">
                        <!--<div class="desTitle">上传图片</div>-->
                        <el-input
                          v-model="form.add3_img.filename"
                          :disabled="!isEdit"
                          readonly
                        />
                        <el-upload
                          :show-file-list="false"
                          :on-success="handleAddImg3Success"
                          :before-upload="beforeAvatarUpload"
                          :data="form.add3_img"
                          :disabled="!isEdit"
                          class="upload-container"
                          action="/api/index.php/files/save"
                          accept="image/png"
                        >
                          <el-button
                            :disabled="!isEdit"
                            size="middle"
                            type="primary"
                          >选择文件</el-button>
                        </el-upload>
                      </div>
                    </el-form-item>
                  </el-col>
                  <el-col :span="13">
                    <div class="marT20">
                      <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                      <el-form-item
                        :prop="form.add_type==5?'add3_tips':'Auth_2_0'"
                        label="提示文字"
                        label-width="80px"
                      >
                        <el-input
                          :autosize="{ minRows: 3, maxRows: 3}"
                          v-model="form.add3_tips"
                          :disabled="!isEdit"
                          :maxlength="255"
                          type="textarea"
                          placeholder="文字限制255个字符内"
                          class="add1TextArea"
                        />
                      </el-form-item>
                    </div>
                  </el-col>
                </el-form-item>
              </el-col>
            </el-tab-pane>
            <el-tab-pane
              v-if="form.add_type!=6"
              label="连接方式">
              <el-col :span="24">
                <el-form-item
                  v-show="form.add_type!=6"
                  :prop="form.add_type!=6?'add_time':'Auth_2_0'"
                  label="超时时间"
                  label-width="120px"
                >
                  <el-col :span="13">
                    <el-input
                      v-model="form.add_time"
                      :disabled="!isEdit"
                      :maxlength="3"
                      placeholder="请输入整数，限制三位，单位为秒"
                    />
                  </el-col>
                </el-form-item>
              </el-col>
            </el-tab-pane>
            <el-tab-pane
              v-if="form.add_type!=6"
              label="重置方式">
              <el-col :span="24">
                <el-form-item
                  v-if="form.reset_img"
                  label="上传图片"
                  label-width="120px"
                >
                  <el-col :span="13">
                    <div class="flex">
                      <el-input
                        v-model="form.reset_img.filename"
                        :disabled="!isEdit"
                        readonly
                      />
                      <el-upload
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :data="form.reset_img"
                        :disabled="!isEdit"
                        class="upload-container"
                        action="/api/index.php/files/save"
                        accept="image/png"
                      >
                        <el-button
                          :disabled="!isEdit"
                          size="middle"
                          type="primary"
                        >选择文件</el-button>
                      </el-upload>
                    </div>
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-show="form.add_type!=6"
                  :prop="form.add_type!=6?'reset_tips':'Auth_2_0'"
                  label="提示文字"
                  label-width="120px"
                >
                  <el-col :span="13">
                    <el-input
                      :autosize="{ minRows: 3, maxRows: 3}"
                      v-model="form.reset_tips"
                      :disabled="!isEdit"
                      :maxlength="255"
                      type="textarea"
                      placeholder="请输入其他说明"
                    />
                  </el-col>
                </el-form-item>
              </el-col>
            </el-tab-pane>
            <el-tab-pane
              v-if="form.add_type==6"
              label="对接信息">
              <el-col :span="24">
                <el-form-item
                  v-show="form.add_type==6"
                  :prop="form.add_type==6?'plantform_name':'Auth_2_0'"
                  label="平台名称"
                  label-width="120px">
                  <el-col :span="13">
                    <el-input
                      v-model="form.plantform_name"
                      :maxlength="30"
                      placeholder="请输入"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-show="form.add_type==6"
                  :prop="form.add_type==6?'plantform_service':'Auth_2_0'"
                  label="服务用语"
                  label-width="120px">
                  <el-col :span="13">
                    <el-input
                      v-model="form.plantform_service"
                      :maxlength="30"
                      placeholder="请输入"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-show="form.add_type==6"
                  :prop="form.add_type==6?'plantform_des':'Auth_2_0'"
                  label="平台介绍"
                  label-width="120px">
                  <el-col :span="13">
                    <el-input
                      v-model="form.plantform_des"
                      :maxlength="30"
                      placeholder="请输入"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  v-show="form.add_type==6"
                  :prop="form.add_type==6?'plantform_connect':'Auth_2_0'"
                  label="连接步骤"
                  label-width="120px">
                  <el-col :span="13">
                    <el-input
                      :autosize="{ minRows: 5}"
                      v-model="form.plantform_connect"
                      type="textarea"
                      placeholder="请输入"/>
                  </el-col>
                </el-form-item>
              </el-col>
            </el-tab-pane>
          </el-tabs>
        </el-form>
      </el-col>
    </el-row>
  </div>

</template>
<style>
.upload-container {
  float: right;
}
.el-table__body-wrapper {
  overflow: hidden;
}
.upload-container {
  float: right;
  margin-left: 20px;
}
.flex {
  display: flex;
}
.desTitle {
  display: inline-block;
  padding-right: 15px;
  color: #5a5e66;
  min-width: 81px;
}
.marT20 {
  margin-top: 20px;
}
</style>

<script>
import { Loading } from 'element-ui'
import fetch from '@/utils/fetch'
import helper from '@/utils/helper'
import { getToken } from '@/utils/auth'
import { COLTD } from '@/utils/config'
import addTechnical from './addTechnical.vue'
import addAttribute from './addAttribute.vue'
export default {
  name: 'ExistedCategory',
  components: {
    addTechnical,
    addAttribute
  },
  data() {
    var checkTime = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入提示文字'))
      }
      if (!Number.isInteger(+value)) {
        callback(new Error('请输入数字值'))
      } else {
        callback()
      }
    }
    return {
      typeid: this.$route.query.id,
      token: getToken(),
      isLoadData: false,
      isEdit: false, // 判断是否是编辑
      editText: '编辑引导页',
      product: {},
      type: {},
      business: {},
      brand: {},
      model: {},
      is_evergrande: 0,
      // is_mixapp: 0,
      COLTD: COLTD,
      form: {
        add3_img: {
          'type': '24',
          'token': getToken(),
          'filename': ''
        },
        add3_tips: '',
        plantform_name: '',
        plantform_service: '',
        plantform_des: '',
        plantform_connect: '',
      },
      addType: '',
      deviceAddTypeList: [],
      rules: {
        type: [
          { required: true, message: '请选择产品品类', trigger: 'change' }
        ],
        add_type: [
          { required: true, message: '请选择产品添加方式', trigger: 'change' }
        ],
        //                  'add1_img.filename': [
        //                        {validator(rule, value, callback, source, options) {
        //                            var errors = [];
        //                            if (!value) {
        //                                callback('添加方式的图片不能为空');
        //                            }
        //                            callback(errors);
        //                        }}
        //                    ],
        add1_tips: [
          { required: true, message: '请输入提示文字', trigger: 'blur' },
          { max: 255, message: '提示文字不能超过255个字符', trigger: 'blur' }
        ],
        add1_button: [
          { required: true, message: '请输入按钮文字', trigger: 'blur' },
          { max: 8, message: '按钮文字不能超过8个字符', trigger: 'blur' }
        ],
        //                    'add2_img.filename': [
        //                        {validator(rule, value, callback, source, options) {
        //                            var errors = [];
        //                            if (!value) {
        //                                callback('添加方式的图片不能为空');
        //                            }
        //                            callback(errors);
        //                        }}
        //                    ],
        add2_tips: [
          { required: true, message: '请输入提示文字', trigger: 'blur' },
          { max: 255, message: '提示文字不能超过255个字符', trigger: 'blur' }
        ],
        add3_tips: [
          { required: true, message: '请输入提示文字', trigger: 'blur' },
          { max: 255, message: '提示文字不能超过255个字符', trigger: 'blur' }
        ],
        //                    'reset_img.filename': [
        //                        {validator(rule, value, callback, source, options) {
        //                            var errors = [];
        //                            if (!value) {
        //                                callback('添加方式的图片不能为空');
        //                            }
        //                            callback(errors);
        //                        }}
        //                    ],
        reset_tips: [
          { required: true, message: '请输入重置提示文字', trigger: 'blur' },
          { max: 255, message: '重置提示文字不能超过255个字符', trigger: 'blur' }
        ],
        add_time: [
          { required: true, validator: checkTime, trigger: 'blur' }
        ],
        plantform_name: [
          { required: true, message: '请输入提示文字', trigger: 'blur' },
          { max: 30, message: '提示文字不能超过30个字符', trigger: 'blur' }
        ],
        plantform_service: [
          { required: true, message: '请输入提示文字', trigger: 'blur' },
          { max: 30, message: '提示文字不能超过30个字符', trigger: 'blur' }
        ],
        plantform_des: [
          { required: true, message: '请输入提示文字', trigger: 'blur' },
          { max: 30, message: '提示文字不能超过30个字符', trigger: 'blur' }
        ],
        plantform_connect: [
          { required: true, message: '请输入提示文字', trigger: 'blur' },
        ],
        Auth_2_0: [
          { required: false, trigger: 'blur' }
        ]
        /* offline_hint:[
                    {required:true,message:'请输入离线提示语',trigger: 'blur' }
                ]*/
      }
    }
  },
  computed: {
  },
  created() {
  },
  mounted() {
    this.getDeviceInfo()
    //            this.getDeviceSelectAddtype();
    //            this.getDeviceSelect();
  },
  methods: {
    // 获取设备添加方式
    getDeviceSelectAddtype() {
      fetch({
        url: '/device/deviceAddtype',
        method: 'post',
        data: {
          'token': this.token
        }
      }).then(res => {
        this.deviceAddTypeList = res
      })
    },
    // 获取品类详情信息
    getDeviceInfo() {
      fetch({
        url: '/device/deviceInfo',
        method: 'post',
        data: {
          'id': this.typeid
        }
      }).then(res => {
        this.form = res
        if (this.form.type == 3) {
          this.is_evergrande = 1
        }
        this.form.add_type = this.form.add_type == '0' ? '' : Number(this.form.add_type)
        if (!this.form.offline_hint) {
          this.form.offline_hint = ''
        }
        // if (this.form.app_id === '100001') {
        //   this.is_mixapp = 1
        // }
        this.isLoadData = true
        this.handleImgAddToken()
        this.getDeviceSelectAddtype()
      })
    },

    handleImgAddToken() {
      this.form.base_img.token = this.token
      this.form.reset_img.token = this.token
      this.form.add1_img.token = this.token
      this.form.add2_img.token = this.token
      this.form.add3_img.token = this.token
    },

    handleAvatarSuccess(res, file) {
      const data = res.result
      switch (data.type) {
      case 23: this.form.base_img = data; this.form.base_img.token = this.token; break
      case 25: this.form.reset_img = data; this.form.reset_img.token = this.token
      }
      this.$message({
        type: 'success',
        message: '上传成功！'
      })
    },

    handleAddImg1Success(res, file) {
      this.form.add1_img = res.result
      this.form.add1_img.token = this.token
      this.$message({
        type: 'success',
        message: '上传成功！'
      })
    },
    handleAddImg2Success(res, file) {
      this.form.add2_img = res.result
      this.form.add2_img.token = this.token
      this.$message({
        type: 'success',
        message: '上传成功！'
      })
    },
    handleAddImg3Success(res, file) {
      this.form.add3_img = res.result
      this.form.add3_img.token = this.token
      this.$message({
        type: 'success',
        message: '上传成功！'
      })
    },
    beforeAvatarUpload(file) {
      console.log(file)
      const filter = file.type === 'image/png'
      const isLt5M = file.size / 1024 / 1024 < 5

      if (!filter) {
        this.$message.error('请上传5M大小内PNG格式的文件')
      }
      if (!isLt5M) {
        this.$message.error('请上传5M大小内PNG格式的文件')
      }
      return filter && isLt5M
    },

    // 删除设备
    delectDevice() {
      fetch({
        url: '/device/deviceDel',
        method: 'post',
        data: {
          'id': this.$route.query.id
        }
      }).then(res => {
        this.$message({
          showClose: true,
          message: '删除成功！',
          type: 'success'
        })
        setTimeout(() => {
          this.$router.push({ path: '/typeManagement/deviceManager' })
        }, 2000)
      })
    },
    // 编辑设备信息
    editDevice() {
      if (!this.isEdit) {
        this.isEdit = true
        this.editText = '确定并提交修改'
      } else {
        this.$confirm('是否确认保存修改后引导页信息？', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.saveDeviceInfo()
        }).catch(() => {
          this.isEdit = false
          this.editText = '编辑引导页'
        })
      }
    },

    // 保存品类信息事件处理
    saveDeviceInfo() {
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          if(this.form.add_type == 6) {
            this.form.add1_button = ''
            this.form.add1_img = {}
            this.form.add1_tips = ''
            this.form.add2_img = {}
            this.form.add2_tips = ''
            this.form.add3_img = {}
            this.form.add3_tips = ''
            this.form.reset_img = {}
            this.form.reset_tips = ''
            this.form.add_time = ''
          } else if(this.form.add_type != 5) {
            this.form.add3_img = {}
            this.form.add3_tips = ''
            this.form.plantform_connect = ''
            this.form.plantform_des = ''
            this.form.plantform_name = ''
            this.form.plantform_service = ''
          } else {
            this.form.plantform_connect = ''
            this.form.plantform_des = ''
            this.form.plantform_name = ''
            this.form.plantform_service = ''
          }
          this.editText = '编辑引导页'
          this.form.token = this.token
          fetch({
            url: '/device/deviceEdit',
            method: 'post',
            data: this.form
          }).then(res => {
            this.isEdit = false
            this.$message({
              type: 'success',
              message: '编辑引导页成功!'
            })
            /* setTimeout(()=>{
                        this.$router.push({path: '/typeManagement/deviceManager'});
                    },2000);*/
          }).catch(res => {
            this.$message({
              type: 'error',
              message: res.msg
            })
          })
        } else {
          this.$message({
            type: 'error',
            message: '请把表单填写完整再提交修改！'
          })
        }
      })
    },

    // 处理删除事件
    handleDelEvent() {
      this.$confirm('是否确认删除此引导页，删除不能恢复。', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.delectDevice()
      }).catch(() => {
      })
    },

    // 处理返回事件
    handleBackEvent() {
      if (!this.isEdit) {
        this.$router.push({ path: '/typeManagement/deviceManager' })
      } else {
        this.$confirm('是否确认返回? 所修改的信息将不会被保存!', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
        }).then(() => {
          this.$router.push({ path: '/typeManagement/deviceManager' })
        }).catch(() => {

        })
      }
    },

    // 添加技术方案
    addTechnical() {

    },

    // 获取子组件传回来的功能属性方案数据
    getAttr() {

    },

    // 获取子组件传回来的技术方案数据
    getTech(val) {
      console.log(val)
      fetch({
        url: 'producttype/technologyadd',
        method: 'post',
        data: val
      }).then(res => {
        this.$message({
          type: 'success',
          message: '添加方案成功！'
        })
        this.getTechList(1)
        this.getTechList(2)
        this.getTechList(3)
      }).catch(res => {
        this.$message({
          type: 'error',
          message: res.msg
        })
      })
    },
    getTechList(technology_type) {
      fetch({
        url: 'producttype/technologylists',
        method: 'post',
        data: {
          'token': getToken(),
          'type_id': this.typeid,
          'technology_type': technology_type
        }
      }).then(res => {
        switch (technology_type) {
        case 1: this.technical_wifi = res.list; break
        case 2: this.technical_zigbee = res.list; break
        case 3: this.technical_bluetooth = res.list; break
        }
      }).catch(res => {
        this.$message({
          type: 'error',
          message: res.msg
        })
      })
    },
    // 当前行row、当前列column、当前行号rowIndex、当前列号columnIndex
    arrayWifiSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: this.technical_wifi.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    arrayBlueToothSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: this.technical_bluetooth.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    },
    arrayZigbeeSpanMethod({ row, column, rowIndex, columnIndex }) {
      if (columnIndex === 0) {
        if (rowIndex === 0) {
          return {
            rowspan: this.technical_zigbee.length,
            colspan: 1
          }
        } else {
          return {
            rowspan: 0,
            colspan: 0
          }
        }
      }
    }
  },
}
</script>
