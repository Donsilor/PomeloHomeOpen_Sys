<template>
  <div class="app-container calendar-list-container addDevice">
    <el-row :gutter="30">
      <el-col :span="24">
        <el-button
          type="ghost"
          @click="handleBackEvent">返回</el-button>
        <el-button
          type="primary"
          @click="confirmDevice">确认并添加该引导页</el-button>
      </el-col>
      <el-col
        :span="24"
        style="margin: 20px 0px;padding-bottom: 40px;">
        <el-form
          ref="ruleForm"
          :rules="rules"
          :model="form"
          label-width="80px"
          style="margin-top: 20px;"
          size="large"
          label-position="left">
          <div class="title">基本信息</div>
          <!-- <el-form-item label-width="120px">
            <el-col :span="12">
              <el-checkbox
                v-model="is_mixapp"
                :true-label="1"
                :false-label="0">是否是融合版APP</el-checkbox>
            </el-col>
          </el-form-item> -->
          <el-form-item label-width="120px">
            <el-col :span="12">
              <el-checkbox
                v-model="is_evergrande"
                :true-label="1"
                :false-label="0">属于{{ COLTD }}快联产品设备</el-checkbox>
            </el-col>
          </el-form-item>
          <el-form-item
            label="品类"
            label-width="120px"
            prop="type_id">
            <el-col :span="12">
              <el-select
                v-if="!is_evergrande"
                v-model="form.type_id"
                placeholder="请选择产品品类"
                style="width: 100%;"
                @change="changeType">
                <el-option
                  v-for="item in type"
                  :key="item.type_id"
                  :label="item.type_name"
                  :value="item.type_id"/>
              </el-select>
              <el-select
                v-else
                v-model="form.type_id"
                placeholder="请选择产品品类"
                style="width: 100%;">
                <el-option
                  v-for="item in categoryList"
                  :key="item.id"
                  :label="item.name"
                  :value="item.id"/>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item
            v-show="!is_evergrande"
            label="厂商"
            label-width="120px">
            <el-col :span="12">
              <el-select
                v-model="form.business_id"
                placeholder="请选择厂商"
                style="width: 100%;"
                @change="changeBusiness">
                <el-option
                  v-for="item in business"
                  :key="item.business_id"
                  :label="item.business_name"
                  :value="item.business_id"/>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item
            v-show="!is_evergrande"
            label="品牌"
            label-width="120px">
            <el-col :span="12">
              <el-select
                v-model="form.brand_id"
                placeholder="请选择品牌"
                style="width: 100%;"
                @change="changeBrand">
                <el-option
                  v-for="item in brand"
                  :key="item.brand_id"
                  :label="item.brand_name"
                  :value="item.brand_id"/>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item
            v-show="!is_evergrande"
            label="型号"
            label-width="120px">
            <el-col :span="12">
              <el-select
                v-model="form.product_id"
                placeholder="请选择型号"
                style="width: 100%;">
                <el-option
                  v-for="item in model"
                  :key="item.product_id"
                  :label="item.model"
                  :value="item.product_id"/>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item
            v-show="!is_evergrande"
            label="产品图片"
            label-width="120px">
            <el-col :span="12">
              <div class="flex">
                <el-input
                  v-model="form.base_img.filename"
                  readonly
                  placeholder="图片支持jpeg、jpg、png格式，大小5M内"/>
                <el-upload
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :data="form.base_img"
                  class="upload-container"
                  action="/api/index.php/files/save"
                  accept="image/png,image/jpeg,image/jpg">
                  <el-button
                    size="middle"
                    type="primary">选择文件</el-button>
                </el-upload>
              </div>
            </el-col>
          </el-form-item>
          <!--<el-form-item label="离线提示语" label-width="120px" prop="offline_hint">
                        <el-col :span="12">
                            <el-input
                                    type="textarea"
                                    :autosize="{ minRows: 3, maxRows: 3}"
                                    :maxlength="500"
                                    placeholder="请输入离线提示语"
                                    v-model="form.offline_hint">
                            </el-input>
                        </el-col>
                    </el-form-item>-->

          <div class="title">添加方式</div>
          <el-form-item
            label="产品添加方式"
            label-width="120px"
            prop="add_type">
            <el-col :span="12">
              <el-select
                v-model="form.add_type"
                placeholder="请选择添加方式"
                style="width: 100%;">
                <el-option
                  v-for="item in deviceAddTypeList"
                  :key="item.type_id"
                  :label="item.type_name"
                  :value="item.type_id"/>
              </el-select>
            </el-col>
          </el-form-item>
          <el-form-item
            v-show="form.add_type!=6"
            label="第一步"
            label-width="120px">
            <el-col :span="12">
              <el-form-item
                label="上传图片"
                label-width="80px">
                <!--<div class="desTitle">上传图片</div>-->
                <div class="flex">
                  <el-input
                    v-model="form.add1_img.filename"
                    readonly
                    placeholder="图片支持jpeg、jpg、png格式，大小5M内"/>
                  <el-upload
                    :show-file-list="false"
                    :on-success="handleAddImg1Success"
                    :before-upload="beforeAvatarUpload"
                    :data="form.add1_img"
                    class="upload-container"
                    action="/api/index.php/files/save"
                    accept="image/png,image/jpeg,image/jpg">
                    <el-button
                      size="middle"
                      type="primary">选择文件</el-button>
                  </el-upload>
                </div>
              </el-form-item>
              <div class="marT20">
                <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                <el-form-item
                  :prop="form.add_type!=6?'add1_tips':'Auth_2_0'"
                  label="提示文字"
                  label-width="80px">
                  <el-input
                    :autosize="{ minRows: 3, maxRows: 3}"
                    v-model="form.add1_tips"
                    :maxlength="255"
                    type="textarea"
                    placeholder="文字限制255个字符内"
                    class="add1TextArea"/>
                </el-form-item>
              </div>
              <div class="marT20 flex">
                <el-form-item
                  :prop="form.add_type!=6?'add1_button':'Auth_2_0'"
                  label="按钮文字"
                  label-width="80px">
                  <!--<div class="desTitle">按钮文字</div>-->
                  <el-input
                    v-model="form.add1_button"
                    :maxlength="8"
                    placeholder="文字最好控制在8个字内"/>
                </el-form-item>
              </div>
            </el-col>
          </el-form-item>
          <el-form-item
            v-show="form.add_type!=6"
            label="第二步"
            label-width="120px">
            <el-col :span="12">
              <el-form-item
                label="上传图片"
                label-width="80px">
                <div class="flex">
                  <!--<div class="desTitle">上传图片</div>-->
                  <el-input
                    v-model="form.add2_img.filename"
                    readonly
                    placeholder="图片支持jpeg、jpg、png格式，大小5M内"/>
                  <el-upload
                    :show-file-list="false"
                    :on-success="handleAddImg2Success"
                    :before-upload="beforeAvatarUpload"
                    :data="form.add2_img"
                    class="upload-container"
                    action="/api/index.php/files/save"
                    accept="image/png,image/jpeg,image/jpg">
                    <el-button
                      size="middle"
                      type="primary">选择文件</el-button>
                  </el-upload>
                </div>
              </el-form-item>
              <div class="marT20">
                <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                <el-form-item
                  :prop="form.add_type!=6?'add2_tips':'Auth_2_0'"
                  label="提示文字"
                  label-width="80px">
                  <el-input
                    :autosize="{ minRows: 3, maxRows: 3}"
                    v-model="form.add2_tips"
                    :maxlength="255"
                    type="textarea"
                    placeholder="文字限制255个字符内"
                    class="add1TextArea"/>
                </el-form-item>
              </div>
            </el-col>
          </el-form-item>
          <el-form-item
            v-show="form.add_type==5"
            label="第三步"
            label-width="120px">
            <el-col :span="12">
              <el-form-item
                label="上传图片"
                label-width="80px">
                <div class="flex">
                  <!--<div class="desTitle">上传图片</div>-->
                  <el-input
                    v-model="form.add3_img.filename"
                    readonly
                    placeholder="图片支持jpeg、jpg、png格式，大小5M内"/>
                  <el-upload
                    :show-file-list="false"
                    :on-success="handleAddImg3Success"
                    :before-upload="beforeAvatarUpload"
                    :data="form.add3_img"
                    class="upload-container"
                    action="/api/index.php/files/save"
                    accept="image/png,image/jpeg,image/jpg">
                    <el-button
                      size="middle"
                      type="primary">选择文件</el-button>
                  </el-upload>
                </div>
              </el-form-item>
              <div class="marT20">
                <!--<div class="desTitle" style="vertical-align: top;">提示文字</div>-->
                <el-form-item
                  :prop="form.add_type==5?'add3_tips':'Auth_2_0'"
                  label="提示文字"
                  label-width="80px">
                  <el-input
                    :autosize="{ minRows: 3, maxRows: 3}"
                    v-model="form.add3_tips"
                    :maxlength="255"
                    type="textarea"
                    placeholder="文字限制255个字符内"
                    class="add1TextArea"/>
                </el-form-item>
              </div>
            </el-col>
          </el-form-item>
          <div
            v-show="form.add_type==6"
            class="title">对接信息</div>
          <el-form-item
            v-show="form.add_type==6"
            :prop="form.add_type==6?'plantform_name':'Auth_2_0'"
            label="平台名称"
            label-width="120px">
            <el-col :span="12">
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
            <el-col :span="12">
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
            <el-col :span="12">
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
            <el-col :span="12">
              <el-input
                :autosize="{ minRows: 5}"
                v-model="form.plantform_connect"
                type="textarea"
                placeholder="请输入"/>
            </el-col>
          </el-form-item>
          <div
            v-show="form.add_type!=6"
            class="title">连接方式</div>
          <el-form-item
            v-show="form.add_type!=6"
            :prop="form.add_type!=6?'add_time':'Auth_2_0'"
            label="超时时间"
            label-width="120px">
            <el-col :span="12">
              <el-input
                v-model="form.add_time"
                :maxlength="3"
                placeholder="请输入整数，限制三位，单位为秒"/>
            </el-col>
          </el-form-item>
          <div
            v-show="form.add_type!=6"
            class="title">重置方式</div>
          <el-form-item
            v-show="form.add_type!=6"
            label="上传图片"
            label-width="120px">
            <el-col :span="12">
              <div class="flex">
                <el-input
                  v-model="form.reset_img.filename"
                  readonly
                  placeholder="图片支持jpeg、jpg、png格式，大小5M内"/>
                <el-upload
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload"
                  :data="form.reset_img"
                  class="upload-container"
                  action="/api/index.php/files/save"
                  accept="image/png,image/jpeg,image/jpg">
                  <el-button
                    size="middle"
                    type="primary">选择文件</el-button>
                </el-upload>
              </div>

            </el-col>
          </el-form-item>
          <el-form-item
            v-show="form.add_type!=6"
            :prop="form.add_type!=6?'reset_tips':'Auth_2_0'"
            label="提示文字"
            label-width="120px">
            <el-col :span="12">
              <el-input
                :autosize="{ minRows: 3, maxRows: 3}"
                v-model="form.reset_tips"
                :maxlength="255"
                type="textarea"
                placeholder="文字限制255个字符内"/>
            </el-col>
          </el-form-item>
        </el-form>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
    .addDevice{
        .el-form-item__error{
            padding: 5px 15px!important;
        }
        .title{
            height: 30px;
            border-bottom: 1px #ededed solid;
            width: 80%;
            margin-bottom: 30px;
        }
        .upload-container{
            float: right;
            margin-left: 20px;
        }
        .flex{
            display: flex;
        }

        .desTitle{
            display: inline-block;
            padding-right: 15px;
            color: #5a5e66;
            min-width: 81px;
        }
        .add1TextArea{
            display: inline-block;
            vertical-align: bottom;
            margin-top: 0px;
        }
        .marT20{
            margin-top: 20px;
        }

    }
    .app-container{
        padding: 20px 40px;
    }
</style>

<script>
import { Loading } from 'element-ui'
import fetch from '@/utils/fetch'
import helper from '@/utils/helper'
import { COLTD } from '@/utils/config'
import { getToken } from '@/utils/auth'
export default {
  name: 'AddDevice',
  components: {

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
      lists: '',
      typeid: this.$route.query.id,
      token: getToken(),
      product: {},
      type: {},
      business: {},
      brand: {},
      model: {},
      is_evergrande: 0,
      // is_mixapp: 0,
      COLTD: COLTD,
      form: {
        type: '',
        id_type: '', // 设备类型,1:品牌类型，2：产品类型',3:大品类类型
        business_id: '',
        brand_id: '',
        product_id: '',
        // offline_hint :'',
        add_type: '', // 设备添加方式
        base_img: {
          type: 23,
          token: getToken()
        },
        add1_tips: '',
        add1_button: '',
        add1_img: {
          'type': '24',
          'token': getToken(),
          'filename': ''
        },
        add2_img: {
          'type': '24',
          'token': getToken(),
          'filename': ''
        },
        add3_img: {
          'type': '24',
          'token': getToken(),
          'filename': ''
        },
        add2_tips: '',
        add3_tips: '',
        reset_img: {
          'type': '25',
          'token': getToken(),
          'filename': ''
        },
        reset_tips: '',
        add_time: '',
        plantform_name: '',
        plantform_service: '',
        plantform_des: '',
        plantform_connect: '',
      },
      rules: {
        type_id: [
          { required: true, message: '请选择产品品类', trigger: 'change' }
        ],
        add_type: [
          { required: true, message: '请选择产品添加方式', trigger: 'change' }
        ],
        //                    'add1_img.filename': [
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
        //                                callback('重置方式的图片不能为空');
        //                            }
        //                            callback(errors);
        //                        }}
        //                    ],
        reset_tips: [
          { required: true, message: '请输入重置提示文字', trigger: 'blur' },
          { max: 255, message: '重置提示文字不能超过255个字符', trigger: 'blur' }
        ],
        Auth_2_0: [
          { required: false, trigger: 'blur' },
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
        ]
        /* offline_hint:[
                        { required:true,message:'请输入离线提示语',trigger: 'blur' }
                    ]*/
      },
      deviceAddTypeList: [],
      categoryList: []
    }
  },
  computed: {
  },
  watch: {
    'is_evergrande'(curVal, oldVal) {
      this.form.type_id = ''
      this.form.business_id = ''
      this.form.brand_id = ''
      this.form.product_id = ''
      this.business = {}
      this.brand = {}
      this.model = {}
      /* if(curVal==1){
                this.form.business = '';
                this.form.brand = '';
                this.form.id = '';
                this.form.base_img='';
                this.form.base_des = '';
            }*/
    }
  },
  created() {
  },
  mounted() {
    this.getDeviceSelect()
    this.getDeviceSelectAddtype()
    this.getBigCategory()
  },
  methods: {
    changeType(val) {
      this.business = this.lists.find((x) => x.type_id === val).business
      this.form.business_id = ''
      this.form.brand_id = ''
      this.form.product_id = ''
    },
    changeBusiness(val) {
      this.brand = this.business.find((x) => x.business_id === val).brand
      this.form.brand_id = ''
      this.form.product_id = ''
    },
    changeBrand(val) {
      this.model = this.brand.find(x => x.brand_id == val).model
      this.form.product_id = ''
    },
    handleAvatarSuccess(res, file) {
      const data = res.result
      switch (data.type) {
      case 23 : this.form.base_img = data; this.form.base_img.token = this.token; break
      case 25 : this.form.reset_img = data; this.form.reset_img.token = this.token; break
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
      const isFormat = file.type === 'image/jpeg' || 'image/jpg' || 'image/png'
      const isLt5M = file.size / 1024 / 1024 < 5

      if (!isFormat) {
        this.$message.error('请上传5M大小内JEPG、JPG、PNG格式的文件')
        return false
      }
      if (!isLt5M) {
        this.$message.error('请上传5M大小内JEPG、JPG、PNG格式的文件')
        return false
      }
      //                return filter && isLt5M;
    },
    // 获取下拉选择列表
    getDeviceSelect() {
      fetch({
        url: '/device/deviceSelect',
        method: 'post',
        data: {
          'token': this.token
        }
      }).then(res => {
        this.type = res
        this.lists = res
      })
    },
    // 获取大品类
    getBigCategory() {
      fetch({
        url: '/product/parenttype_lists',
        method: 'post',
        data: {
          'token': this.token
        }
      }).then(res => {
        this.categoryList = res.list
      })
    },
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

    // 处理返回事件
    handleBackEvent() {
      this.$router.push({ path: '/typeManagement/deviceManager' })
    },
    confirmDevice() {
      console.log(this.form.type_id)
      this.$refs['ruleForm'].validate((valid) => {
        if (valid) {
          if(this.form.add_type == 6) {
            this.form.add1_button = ''
            this.form.add1_img = {
              'type': '24',
              'token': getToken(),
              'filename': ''
            }
            this.form.add1_tips = ''
            this.form.add2_img = {
              'type': '24',
              'token': getToken(),
              'filename': ''
            }
            this.form.add2_tips = ''
            this.form.add3_img = {
              'type': '24',
              'token': getToken(),
              'filename': ''
            }
            this.form.add3_tips = ''
            this.form.reset_img = {
              'type': '25',
              'token': getToken(),
              'filename': ''
            }
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
          const formData = JSON.parse(JSON.stringify(this.form))
          if (!this.is_evergrande) {
            formData.id_type = this.form.product_id ? 2 : this.form.brand_id ? 5 : this.form.business_id ? 4 : 1
            formData.id = this.form.product_id ? this.form.product_id : this.form.brand_id ? this.form.brand_id : this.form.business_id ? this.form.business_id : this.form.type_id
          } else {
            formData.id_type = 3
            formData.id = this.form.type_id
          }
          // if (this.is_mixapp) {
          //   formData.app_id = '100001'
          // } else {
          formData.app_id = ''
          // }

          fetch({
            url: '/device/deviceAdd',
            method: 'post',
            data: formData
          }).then(res => {
            this.$message({
              type: 'success',
              message: '新增引导页成功！'
            })
            setTimeout(() => {
              this.$router.push({ path: '/typeManagement/deviceManager' })
            }, 2000)
          }).catch(error => {
            this.$message({
              type: 'error',
              message: error.msg
            })
            this.form.id = ''
          })
        } else {
          this.$message({
            type: 'error',
            message: '请完整填写表单再提交！'
          })
        }
      })
    }
  },
}
</script>
