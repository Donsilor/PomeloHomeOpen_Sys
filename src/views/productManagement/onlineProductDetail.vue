<template>
  <div class="app-container">
    <!--====================-->
    <el-button
      size="medium"
      @click="$router.go(-1)">返回</el-button>
    <el-button
      v-if="lineStatus === 'offline' && adminSuper"
      type="danger"
      size="medium"
      @click="removeProduct">删除该产品</el-button>
    <el-button
      v-if="lineStatus !== 'offline'"
      type="primary"
      size="medium"
      @click="productUnshelve">下架该产品</el-button>
    <el-button
      type="primary"
      size="medium"
      @click="toEdit">{{ edit?'保存':'编辑' }}产品信息</el-button>
    <el-button
      v-if="lineStatus === 'offline'"
      type="primary"
      size="medium"
      @click="reStocking">重新上架</el-button>
    <h3>{{ productDetail.brand_name+productDetail.type_name+productDetail.model }}</h3>
    <el-tabs
      v-model="activeName"
      type="card"
      style="padding-bottom: 30px;">
      <el-tab-pane
        label="基本信息"
        name="basic">
        <el-row class="">
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left">产品品类</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">{{ productDetail.type_name }}</el-col>
          </el-row>
          <el-row
            class="card-row"
            style="line-height: 40px;">
            <el-col
              :span="3"
              class="card-span-left">接入类型</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <el-select
                :readonly="!edit"
                :disabled="!edit"
                v-model="productDetail.device_access_type"
                placeholder="请选择">
                <el-option
                  v-for="item in accessType"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row class="card-row gg">
            <el-col
              :span="3"
              class="card-span-left">合作品牌
            </el-col>
            <el-col
              :span="20"
              :offset="1"
              class="card-span-right">
              <div class="brand-box">
                <el-row>
                  <span>品牌中文：{{ productDetail.brand_name }}</span>
                </el-row>
                <el-row style="margin: 10px auto">
                  <span>品牌英文：{{ productDetail.manufacturer_name }}</span>
                </el-row>
                <el-row>
                  <img
                    v-img:name
                    v-if="productDetail.brand_logo"
                    :src="productDetail.brand_logo"
                    alt="品牌logo">
                  <img
                    v-img:name
                    v-if="productDetail.brand_certs"
                    :src="productDetail.brand_certs"
                    alt="资格证书">
                </el-row>
              </div>
            </el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left edit-label">产品名称</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <el-input
                :readonly="!edit"
                :class="{'no-border':!edit}"
                v-model.trim="productDetail.name"/>
            </el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left edit-label">产品别名</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <el-input
                :readonly="!edit"
                :class="{'no-border':!edit}"
                v-model="productDetail.display_name"/>
            </el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left edit-label">产品型号</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <el-input
                :readonly="!edit || !productDetail.distributor_pid"
                :class="{'no-border':!edit || !productDetail.distributor_pid}"
                v-model="productDetail.model"/>
            </el-col>
          </el-row>

          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left edit-label">兼容机型</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <el-form :model="productDetail">
                <el-form-item
                  :rules="[{validator:validCompat}]"
                  prop="compat">
                  <el-input
                    :readonly="!edit"
                    :class="{'no-border':!edit}"
                    v-model="productDetail.compat"/>
                </el-form-item>
              </el-form>
            </el-col>
          </el-row>
          <el-row
            v-for="(it, idx) in productDetail.compat_ext"
            :key="idx"
            class="card-row">
            <el-row
              class="card-row">
              <el-col
                :span="3"
                class="card-span-left edit-label">{{ '兼容机型' + (idx + 2) }}</el-col>
              <el-col
                :span="2"
                :offset="1"
                class="card-span-right">
                <el-form :model="productDetail">
                  <el-form-item
                    prop="compat">
                    <el-input
                      :readonly="!edit"
                      v-model="it.brand"
                      placeholder="子品牌"
                      style="width: 150px;"/>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col
                :span="2"
                :offset="1"
                class="card-span-right">
                <el-form
                  :model="productDetail"
                  ref="productNameValid">
                  <el-form-item
                    :prop="'compat_ext.'+idx+'.name'"
                    :rules="nameRules.nameValidate">
                    <el-input
                      :readonly="!edit"
                      v-model.trim="it.name"
                      placeholder="产品名"
                      style="width: 150px;"/>
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col
                :span="2"
                :offset="1"
                class="card-span-right">
                <el-form
                  :model="it">
                  <el-form-item
                    :rules="[{validator:validModel}]"
                    prop="compat"
                    >
                    <el-input
                      :readonly="!edit"
                      v-model="it.compat"
                      placeholder="型号"
                      style="width: 150px;margin-right: 30px;"
                    />
                  </el-form-item>
                </el-form>
              </el-col>
              <el-col
                v-if="edit"
                :span="9">
                <el-form inline>
                  <el-form-item
                    label-width="70"
                    label="上传图片"
                    class="upload-img"
                    style="margin-right: 30px;margin-left: 50px;width: 300px;display: inline-block;">
                    <el-input
                      :readonly="!edit"
                      v-model="it.icon_url"
                      placeholder="图片支持jpeg,jpg,png"/>
                  </el-form-item>
                  <el-form-item>
                    <el-upload
                      :data="{type:26,token:token}"
                      :show-file-list="false"
                      :before-upload="beforeImgUpload"
                      :on-success="v => handleSuccess(v, idx)"
                      accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                      action="/api/index.php/files/save"
                    >
                      <el-button
                        type="primary">选择文件</el-button>
                    </el-upload>
                    <!--                                                    <fileupload :img_type="26" inputid="fileupload1" v-on:upload-data="handleSuccess" :needpreview="false" :buttontype="2" initclass="uploadSquare" order="0" accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp" :filtertype="1"></fileupload>-->
                  </el-form-item>
                </el-form>
              </el-col>
              <el-button
                v-if="idx == 0 && edit"
                :disabled ="!edit"
                type="primary"
                icon="el-icon-plus"
                @click="addCompat">添加</el-button>
              <el-button
                v-if="idx !=0 && edit"
                :disabled ="!edit"
                type="primary"
                icon="el-icon-minus"
                @click="removeCompat(idx)">删除</el-button>
            </el-row>
            <div v-if="!edit">
              <el-form>
                <el-form-item>
                  <el-row class="card-row">
                    <el-col
                      :span="3"
                      class="card-span-left edit-label"/>
                    <img
                      width="80"
                      style="margin-left: 50px;"
                      :src="it.icon_url"
                      alt="">
                  </el-row>
                </el-form-item>
              </el-form>

            </div>
          </el-row>


          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left">渠道商</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">{{ productDetail.distributor }}</el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left">渠道商ID</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">{{ productDetail.distributor_pid }}</el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              :class="{'edit-label':edit}"
              class="card-span-left">配网方式</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <span v-if="!edit">{{ productDetail.network_name }}</span>
              <el-select
                v-if="edit&&productDetail.distributor_id"
                v-model="productDetail.network_id"
                clearable
                placeholder="请选择"
                style="width: 100%">
                <el-option
                  v-for="item in networkList"
                  :key="item.id"
                  :label="item.network_name"
                  :value="item.id"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row
            v-if="!edit"
            class="card-row">
            <el-col
              :span="3"
              class="card-span-left">配网方式描述</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">{{ productDetail.network_des }}</el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left">产品小图</el-col>
            <el-col
              :span="20"
              :offset="1"
              class="card-span-right">
              <p style="margin-top: 5px;font-size: 13px;color: darkgrey;">用户添加设备时看到的列表图片，支持JPEG、JPG、PNG、BMP、GIF格式，大小5M以内</p>
              <img
                v-img:name
                v-if="productDetail.icon"
                :src="productDetail.icon"
                style="max-height: 120px"
                alt="图片加载失败">
              <el-upload
                v-if="edit&&productDetail.icon"
                :show-file-list="false"
                :on-success="handleImgSuccess"
                :before-upload="beforeImgUpload"
                :data="{type:26,token:token}"
                action="/api/index.php/files/save"
                accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp">
                <el-button
                  size="small"
                  type="primary">上传图片</el-button>
              </el-upload>
              <el-upload
                v-if="edit&&!productDetail.icon"
                :show-file-list="false"
                :on-success="handleImgSuccess"
                :before-upload="beforeImgUpload"
                :data="{type:26,token:token}"
                action="/api/index.php/files/save"
                style="display: inline-block;border: 1px solid #d8dce5;padding: 20px;"
                accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp">
                <i
                  class="el-icon-plus"
                  style="font-size: 60px;color: #d8dce5;"/>
              </el-upload>
            </el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left">产品图片（六观图）</el-col>
            <el-col
              :span="20"
              :offset="1"
              class="card-span-right">
              <p style="margin-top: 5px;font-size: 13px;color: darkgrey;">支持JPEG、JPG、PNG、BMP、GIF格式，大小5M以内</p>
              <div
                v-for="(item,index) in productDetail.images"
                :key="index"
                class="six-img">
                <img
                  v-img:name
                  :src="item.file_url"
                  alt="图片加载失败">
                <el-upload
                  v-if="edit"
                  :show-file-list="false"
                  :on-success="handleImgElseSuccess(item.id,index)"
                  :before-upload="beforeImgUpload"
                  :data="{type:12,token:token}"
                  action="/api/index.php/files/save"
                  accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp">
                  <el-button
                    size="small"
                    type="primary">上传图片</el-button>
                </el-upload>
              </div>
              <el-upload
                v-if="edit&&productDetail.images.length<6"
                :show-file-list="false"
                :on-success="addSixImg"
                :before-upload="beforeImgUpload"
                :data="{type:12,token:token}"
                action="/api/index.php/files/save"
                style="display: inline-block;border: 1px solid #d8dce5;padding: 20px;"
                accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp">
                <i
                  class="el-icon-plus"
                  style="font-size: 60px;color: #d8dce5;"/>
              </el-upload>
            </el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left"
              style="line-height: 32px;">产品规格书</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <a
                :href="productDetail.spec_url"
                class="is-link"
                target="_blank"
                download>{{ productDetail.spec_name }}</a>
              <a
                v-if="!edit&&productDetail.spec_url"
                :href="productDetail.spec_url"
                style="margin-left: 30px"
                target="_blank"
                download>
                <el-button
                  type="primary"
                  size="small">下载</el-button>
              </a>
              <el-upload
                v-if="edit"
                :show-file-list="false"
                :on-success="handleImgSuccess"
                :before-upload="beforeDocUpload"
                :data="{type:10,token:token}"
                class="p30"
                action="/api/index.php/files/save"
                accept=".doc,.docx,.pdf,.rar">
                <el-button
                  size="small"
                  type="primary">更换文档</el-button>
              </el-upload>
            </el-col>
          </el-row>
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left"
              style="line-height: 32px;">产品使用说明书</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <a
                :href="productDetail.instruct_url"
                class="is-link"
                target="_blank"
                download>{{ productDetail.instruct_name }}</a>
              <a
                v-if="!edit&&productDetail.instruct_url"
                :href="productDetail.instruct_url"
                style="margin-left: 30px"
                target="_blank"
                download>
                <el-button
                  type="primary"
                  size="small">下载</el-button>
              </a>
              <el-upload
                v-if="edit"
                :show-file-list="false"
                :on-success="handleImgSuccess"
                :before-upload="beforeDocUpload"
                :data="{type:11,token:token}"
                class="p30"
                action="/api/index.php/files/save"
                accept=".doc,.docx,.pdf,.rar">
                <el-button
                  size="small"
                  type="primary">更换文档</el-button>
              </el-upload>
            </el-col>
          </el-row>

          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left edit-label"><span class="red">*</span>客服电话</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <el-form
                :model="productDetail"
                :rules="rules">
                <el-form-item prop="vendor_phone">
                  <el-input
                    :readonly="!edit"
                    :class="{'no-border':!edit}"
                    v-model="productDetail.vendor_phone"/>
                </el-form-item>
              </el-form>

            </el-col>
          </el-row>
        </el-row>
      </el-tab-pane>
      <el-tab-pane
        label="技术方案"
        name="tech">
        <el-row class="">
          <el-row class="card-row">
            <el-col
              :span="3"
              class="card-span-left">选择技术方案</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <div
                :class="{'active':productDetail.type==1,'dis':!edit}"
                class="accessProgram"
                @click="chooseAccess(1)">
                <i class="el-icon-circle-check"/>
                <div class="c-icon wifi"/>
                <p class="cname">Wi-Fi方案</p>
                <p class="cdes">适合空调、空气净化器、洗衣机等</p>
              </div>
              <div
                :class="{'active':productDetail.type==3,'dis':!edit}"
                class="accessProgram"
                @click="chooseAccess(3)">
                <div class="c-icon bluetooth"/>
                <i class="el-icon-circle-check"/>
                <p class="cname">蓝牙方案</p>
                <p class="cdes">适合音箱、健康监护设备等…</p>
              </div>
              <div
                :class="{'active':productDetail.type==2,'dis':!edit}"
                class="accessProgram"
                @click="chooseAccess(2)">
                <div class="c-icon zigbee"/>
                <i class="el-icon-circle-check"/>
                <p class="cname">ZigBee方案</p>
                <p class="cdes">适合门锁、报警器等…</p>
              </div>
            </el-col>
          </el-row>
          <el-row
            v-show="productDetail.type==1"
            class="card-row">
            <el-col
              :span="3"
              :class="{'edit-label':edit}"
              class="card-span-left">模组/芯片信息</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <span v-if="!edit">{{ productDetail.type_vendor }}</span>
              <el-select
                v-if="edit"
                v-model="productDetail.type_vendor"
                placeholder="请选择"
                style="width: 100%"
                @change="changeModel">
                <el-option
                  v-for="item in module_list"
                  :key="item.vendor"
                  :label="item.vendor"
                  :value="item.vendor"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row
            v-show="productDetail.type==1"
            class="card-row">
            <el-col
              :span="3"
              :class="{'edit-label':edit}"
              class="card-span-left">型号</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <span v-if="!edit">{{ productDetail.type_model }}</span>
              <el-select
                v-if="edit"
                v-model="productDetail.type_key"
                placeholder="请选择"
                style="width: 100%">
                <el-option
                  v-for="item in model_list"
                  :key="item.module_id"
                  :label="item.model"
                  :value="item.module_id"/>
              </el-select>
            </el-col>
          </el-row>
          <el-row
            v-show="productDetail.type==2 || productDetail.type==3"
            class="card-row">
            <el-col
              :span="3"
              :class="{'edit-label':edit}"
              class="card-span-left">协议</el-col>
            <el-col
              :span="16"
              :offset="1"
              class="card-span-right">
              <span v-if="!edit">{{ productDetail.agreement }}</span>
              <el-select
                v-if="edit"
                v-model="productDetail.type_key"
                placeholder="请选择"
                style="width: 100%">
                <el-option
                  v-for="item in agreement_list"
                  :key="item.agreement_id"
                  :label="item.agreement"
                  :value="item.agreement_id"/>
              </el-select>
            </el-col>
          </el-row>
        </el-row>
      </el-tab-pane>
      <el-tab-pane
        label="功能点设置"
        name="fps">
        <h5>必选功能点</h5>
        <el-table
          :data="must_fps"
          :span-method="spanMethod"
          class="attr-table"
          highlight-current-row
          border
          stripe
          fit
          style="width:100%;">
          <el-table-column
            align="center"
            label="node_ID"
            prop="nodeid"/>
          <el-table-column
            align="center"
            label="参数名称"
            prop="remark"/>
          <el-table-column
            align="center"
            label="value"
            prop="origin_value_string">
            <template slot-scope="scope">
              <div v-if="scope.row.key_type=='1'">
                <div
                  v-for="item in scope.row.origin_value_list"
                  :key="item"
                  class="gavin-attr">
                  {{ item }}
                </div>
              </div>
              <div v-else>
                {{ scope.row.origin_value_string }}
              </div>

            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="是否开启">
            <template slot-scope="scope">
              <div v-if="scope.row.key_type=='1'">
                <div
                  v-for="item in scope.row.origin_value_list"
                  :key="item"
                  class="gavin-attr">
                  <el-switch
                    :value="true"
                    disabled/>
                </div>

              </div>
              <div v-else>
                <el-switch
                  :value="true"
                  disabled/>
              </div>

            </template>
          </el-table-column>
        </el-table>
        <h5>可选功能点</h5>
        <el-table
          :data="opt_fps"
          :span-method="spanMethod"
          class="attr-table"
          highlight-current-row
          border
          stripe
          fit
          style="width:100%;">
          <el-table-column
            align="center"
            label="node_ID"
            prop="nodeid"/>
          <el-table-column
            align="center"
            label="参数名称"
            prop="remark"/>
          <el-table-column
            align="center"
            class="gavin-attr-box"
            label="value"
            prop="origin_value_string">
            <template slot-scope="scope">
              <div v-if="scope.row.key_type=='1'">
                <div
                  v-for="item in scope.row.origin_value_list"
                  :key="item"
                  class="gavin-attr">
                  {{ item }}
                </div>
              </div>
              <div v-else>
                <div v-if="edit">
                  <div v-if="scope.row.key_type=='2'">
                    <el-input
                      v-model="scope.row.origin_value_list[1]"
                      style="width: 35%;"/>
                    <span style="margin: 0 5px;">-</span>
                    <el-input
                      v-model="scope.row.origin_value_list[2]"
                      style="width: 35%;"/>
                    <span>{{ scope.row.unit }}</span>
                  </div>
                  <div v-if="scope.row.key_type=='4'">
                    <el-input
                      v-model="scope.row.origin_value_list[0]"
                      style="width: 70%;"/>
                    <span>{{ scope.row.unit }}</span>
                  </div>
                </div>
                <div v-else>
                  {{ scope.row.origin_value_string }}
                </div>
              </div>

            </template>
          </el-table-column>
          <el-table-column
            align="center"
            label="是否开启"
            prop="is_enable">
            <template slot-scope="scope">
              <div v-if="scope.row.key_type=='1'">
                <div
                  v-for="item in scope.row.origin_value_list"
                  :key="item"
                  class="gavin-attr">
                  <el-switch
                    :value="scope.row.value_list.indexOf(item)>=0?true:false"
                    :disabled="!edit"
                    @change="setEnable(scope.row,item)"/>
                </div>

              </div>
              <div v-else>
                <el-switch
                  :value="scope.row.value_list.length?true:false"
                  :disabled="!edit"
                  @change="setEnable(scope.row)"/>
              </div>

            </template>
          </el-table-column>
        </el-table>
      </el-tab-pane>
      <el-tab-pane
        label="版本信息"
        name="version">
        <h5>客户端H5控制页</h5>
        <el-table
          :data="h5version_list"
          highlight-current-row
          border
          stripe
          fit
          style="width:100%;">
          <el-table-column
            label="版本号"
            prop="version_no"/>
          <el-table-column
            label="版本描述"
            prop="des"/>
          <el-table-column
            :formatter="statusMap"
            label="状态"
            prop="status"/>
          <el-table-column
            label="创建时间"
            prop="created_at_txt"/>
        </el-table>
        <h5>固件</h5>
        <el-table
          :data="version_list"
          highlight-current-row
          border
          stripe
          fit
          style="width:100%;">
          <el-table-column
            label="版本号"
            prop="version_no"/>
          <el-table-column
            label="版本描述"
            prop="des"/>
          <el-table-column
            :formatter="statusMap"
            label="状态"
            prop="status"/>
          <el-table-column
            label="创建时间"
            prop="created_at_txt"/>
        </el-table>
      </el-tab-pane>
      <el-tab-pane
        label="离线提示语"
        name="offline_hint">
        <el-row class="card-row">
          <el-col
            :span="3"
            class="card-span-left edit-label">离线提示语</el-col>
          <el-col
            :span="16"
            :offset="1"
            class="card-span-right">
            <el-form :model="productDetail">
              <el-form-item prop="offline_hint">
                <el-input
                  :readonly="!edit"
                  :class="{'no-border':!edit}"
                  :rows="5"
                  v-model="productDetail.offline_hint"
                  :maxlength="1000"
                  type="textarea"/>
              </el-form-item>
            </el-form>
          </el-col>
        </el-row>
      </el-tab-pane>

      <el-tab-pane
        label="配置文件"
        name="config_file">
        <el-row>
          <el-col
            :span="16"
            class="filebd"/>
        </el-row>
        <el-table
          :data="configList"
          style="width: 100%"
          border
          stripe>
          <el-table-column
            prop="version_no"
            label="版本号"/>
          <el-table-column
            prop="des"
            label="版本说明"/>
          <el-table-column
            prop="created_at_txt"
            label="创建时间"/>
          <el-table-column label="操  作">
            <template
              slot="header"
              slot-scope="scope">
              <span class="handle">操作</span>
              <el-button
                class="addbtn"
                type="primary"
                size="small"
                @click="addFormVisiable=true">添加配置文件</el-button>
            </template>
            <template slot-scope="scope">
              <el-button
                type="text"
                @click="handleCheck(scope.$index, scope.row)">查看</el-button>
              <el-button
                type="text"
                @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
                <!-- <el-button
                type="text"
                @click="handleDelect(scope.$index, scope.row)">删除</el-button> -->
            </template>
          </el-table-column>
        </el-table>
        <!-- 添加文件弹框 -->
        <el-dialog
          :visible.sync="addFormVisiable"
          title="添加配置文件">
          <el-form
            ref="addForm"
            :model="addForm"
            :rules="rules"
            status-icon
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item
              label="版本号"
              prop="version_no">
              <el-input v-model="addForm.version_no"/>
            </el-form-item>
            <el-form-item
              label="版本说明"
              prop="des">
              <el-input
                v-model="addForm.des"
                class="introduce"/>
            </el-form-item>
            <el-form-item
              label="配置文件"
              prop="file_list.filename"
              class="formfile">
              <el-input
                v-model="addForm.file_list.filename"
                :readonly="true"
                class="uploadName"/>
              <!-- 预览 -->
              <el-upload
                :before-upload="beforeAvatarUpload"
                :on-success="handleUploadSuccess"
                :show-file-list="false"
                :data="{type:33,token:token}"
                style="display: inline-block"
                class="upload-demo"
                action="/api/index.php/files/save"
                accept=".lua">
                <el-button>预览</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="submitForm"
                @click="submitForm('addForm')">提交</el-button>
              <el-button
                class="cancelForm"
                @click="addFormVisiable = false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <!-- 查看文件弹框 -->
        <el-dialog
          :visible.sync="checkDialog"
          title="查看配置文件">
          <el-form
            :model="checkForm"
            :rules="rules"
            status-icon
            label-width="100px"
            class="check-dialog">
            <el-form-item
              label="版本号"
              prop="version_no">
              <span>{{ checkForm.version_no }}</span>
            </el-form-item>
            <el-form-item
              label="版本说明"
              prop="des">
              <span>{{ checkForm.des }}</span>
            </el-form-item>
            <el-form-item
              label="创建时间"
              prop="time">
              <span>{{ checkForm.created_at_txt }}</span>
            </el-form-item>
            <el-form-item
              label="配置文件"
              prop="file_list.filename">
              <span>{{ checkForm.file_list.filename }}</span>
              <!-- <el-button type="text" class="download">点击可下载</el-button> -->
              <a
                :href="checkForm.file_list.file_url"
                target="_blank"
                download="">点击可下载</a>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="closeForm"
                @click="checkDialog = false">关闭</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <!-- 编辑文件弹框 -->
        <el-dialog
          :visible.sync="editDialog"
          title="编辑配置文件">
          <el-form
            ref="editForm"
            :model="editForm"
            :rules="rules"
            status-icon
            label-width="100px"
            class="demo-ruleForm">
            <el-form-item
              label="版本号"
              prop="version_no">
              <el-input v-model="editForm.version_no"/>
            </el-form-item>
            <el-form-item
              label="版本说明"
              prop="des">
              <el-input
                v-model="editForm.des"
                class="introduce"/>
            </el-form-item>
            <el-form-item
              label="配置文件"
              prop="file_list.filename"
              class="formfile">
              <el-input
                v-model="editForm.file_list.filename"
                :readonly="true"
                class="uploadName"/>
              <!-- 预览 -->
              <el-upload
                :before-upload="beforeAvatarUpload"
                :on-success="handleUploadSuccess"
                :show-file-list="false"
                :data="{type:33,token:token}"
                style="display: inline-block"
                class="upload-demo"
                action="/api/index.php/files/save"
                accept=".lua">
                <el-button>预览</el-button>
              </el-upload>
            </el-form-item>
            <el-form-item>
              <el-button
                type="primary"
                class="submitForm"
                @click="submitForm('editForm')">提交</el-button>
              <el-button
                class="cancelForm"
                @click="editDialog=false">取消</el-button>
            </el-form-item>
          </el-form>
        </el-dialog>
        <!-- 删除配置弹框 -->
        <el-dialog
          :visible.sync="delectDialog"
          title="删除配置文件"
          width="25%"
          class="delect">
          <i class="el-icon-info"/>
          <div>
            <span>你确定删除配置此文件吗？</span>
            <p>删除后可能回导致部分设备配置出错</p>
          </div>
          <span
            slot="footer"
            class="dialog-footer">
            <el-button @click="submitForm">确 定</el-button>
            <el-button @click="delectDialog = false">取 消</el-button>
          </span>
        </el-dialog>

      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script>
import { getProductInfo, productUnshelve } from '@/api/check'
import utils from '@/utils/helper'
import { getToken } from '@/utils/auth'
import fetch from '@/utils/fetch'
import { Message, Dialog } from 'element-ui'
import { mapGetters } from 'vuex'
import Cookies from 'js-cookie'
export default {
  name: 'OnlineProductDetail',

  data() {
    var checkPhone = (rule, value, callback) => {
      // const reg = /^1\d{10}$/
      const reg = /^[0-9\-]{3,20}$/ // 3-20位 数字或者 - 固定电话
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('请输入正确的手机号'))
      }
    }
    var productNameRules = (rule, value, callback) => {
      if (!value) {
        callback()
        return
      }
      const reg = /^[\u4e00-\u9fa50-9]+$/
      if (reg.test(value)) {
        callback()
      } else {
        return callback(new Error('产品名称仅能汉字数字组合，且中间不能存在空格！'))
      }
    }
    return {
      accessType:[
        {
          value: 0,
          label: '中控接入'
        }, {
          value: 1,
          label: '云云对接'
        }, {
          value: 2,
          label: 'APP对接'
        }, {
          value: 3,
          label: '云中控接入'
        },
      ],
      value: '',
      token: getToken(),
      product_id: '', // 产品id
      productDetail: {},
      copyProductDetail: {},
      must_fps: [// 必选功能点
      ],
      opt_fps: [// 可选功能点
      ],
      spanMap: {}, // 合并map
      activeName: 'basic',
      edit: false,
      networkList: [],
      agreement_list: [],
      module_list: [],
      model_list: [],
      modifyData: { images: [] },
      attr_map: {},
      version_list: [],
      h5version_list: [],

      rules: {
        // 客服电话验证规则
        vendor_phone: [
          { required: true, message: '请输入客服电话', trigger: 'blur' },
          { validator: checkPhone }
        ],
        version_no: [
          { required: true, message: '请输入0.0.0格式版本号', trigger: 'blur' },
        ],
        'file_list.filename': [
          { required: true, message: '请选择配置文件', trigger: 'change' }
        ],
        // uploadName: [
        //   { required: true, message: '请选择文件', trigger: 'blur' },
        // ],
      },

      // 配置文件
      configFile: {},
      configList: [],

      addFormVisiable:false,
      checkDialog:false,
      editDialog:false,
      delectDialog:false,
      addForm:{
        version_no: "",
        des: "",
        file_list: {}
      },
      checkForm:{
        version_no: "",
        des: "",
        created_at_txt:"",
        file_list: {}
      },
      editForm:{
        version_no: "",
        des: "",
        file_list: {}
      },
      ruleForm: {},
      lineStatus: '',
      adminSuper: '',
      nameRules: {
        nameValidate: [
          {
            validator: productNameRules
          }
        ]
      }
    }
  },
  computed: {
    ...mapGetters([
      'isSuperAdmin'
    ])
  },
  created() {
    console.log('cookie=', document.cookie)
    this.adminSuper = JSON.parse(Cookies.get('ISSUPERADMIN'))
    this.product_id = this.$route.query.product_id
    this.lineStatus = this.$route.query.lineStatus
  },
  mounted() {
    this.getReviewInfo()
    this.getConfigList()
  },
  deactivated() {
    this.$destroy()
  },
  methods: {
    // 校验产品名称 只能中文和数字
    productNameValidate() {
      if (!this.productDetail.name) return
      let reg = /^[\u4e00-\u9fa50-9]+$/
      let flag = reg.test(this.productDetail.name)
      return flag
    },
    productAliaNameValidate() {
      if (!this.productDetail.display_name) return
      let reg = /^[\u4e00-\u9fa50-9]+$/
      let flag = reg.test(this.productDetail.display_name)
      return flag
    },
    submitForm(formName) {
      this.$refs[formName].validate(async valid => {
        if (valid) {
          if (formName == "editForm") {
            // 修改
            let editFile = ''
            if(this.configFile.filename){ // 选择了新文件
              editFile = JSON.stringify(this.configFile)
            } else {
              editFile = JSON.stringify(this.editForm.file_list)
            }

            fetch({
              url: '/product_agreement/versionedit',
              method: 'post',
              data:{
                id: this.editForm.id,
                product_id: this.product_id,
                version_no: this.editForm.version_no,
                des: this.editForm.des,
                file: editFile
              }
            }).then(res=>{
              this.getConfigList()
              this.editDialog = false
              this.$refs.editForm.resetFields()
            })
          } else if (formName == "addForm") {
            // 新增
            fetch({
              url: '/product_agreement/versionadd',
              method: 'post',
              data:{
                product_id:this.product_id,
                version_no:this.addForm.version_no,
                des: this.addForm.des,
                file: JSON.stringify(this.configFile)
              }
            }).then(res=>{
              this.getConfigList()
              this.addFormVisiable = false
              this.$refs.addForm.resetFields()
            })
          }
        }
      })
    },
    // 查看
    handleCheck(index, row){
      console.log(index, row)
      this.checkForm = row
      this.checkDialog = true
    },
    // 编辑
    handleEdit(index, row){
      this.configFile = {}
      this.editDialog = true
      this.editForm = row
    },
    // 删除数据
    handleDelect(index,item) {
      this.$confirm("你确定删除配置此文件吗？ 删除后可能会导致部分设备配置出错", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(async() => {
          // 确认
          // console.log(item);
          // let res = await this.$http.delete(`users/${item.id}`);
          // console.log(res)
          // if (res.data.meta.status == 200) {
          //   this.search();
          // }
          this.tableData.splice(index,1)
          this.$message({
            type: "success",
            message: "删除成功"
          })
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "取消成功"
          })
        })
    },
    beforeAvatarUpload(file) {
      console.log(file.type)
      const filter = file.name.indexOf('.lua') > -1
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!filter) {
        this.$message.error('请上传2M大小内lua格式的文件')
      }
      if (!isLt2M) {
        this.$message.error('请上传2M大小内lua格式的文件')
      }
      return filter && isLt2M
    },
    // 配置文件 upload上传
    handleUploadSuccess(file, fileList) {
      if(file.code!==200){
        this.$message.error(file.msg)
        return
      }
      if(this.editDialog){
        this.editForm = Object.assign(this.editForm, {
          file_list: {
            filename: file.result.filename
          }
        })
      } else if(this.addFormVisiable) {
        this.addForm = Object.assign(this.addForm, {
          file_list: {
            filename: file.result.filename
          }
        })
      }

      let tmp = Object.assign({},file.result)
      tmp.url = tmp.file_url
      this.configFile = tmp
    },
    // 上传配置文件
    uploadFiles() {
      console.log(this.configFile)
      if(this.configFile){
        fetch({
          url: '/admin/product_edit',
          method: 'post',
          data: {
            'id': this.product_id,
            'agreement_file': this.configFile
          }
        }).then(res=>{
          console.log(res)
        })
      } else {
        this.$message.error('请先选择配置文件')
      }
    },

    // 获取详情
    getReviewInfo() {
      const _this = this
      const params = {
        product_id: this.product_id
      }
      getProductInfo(params).then(response => {
        // console.log(response);
        // this.uploadName = response.agreement_file_name

        this.productDetail = response
        this.value = this.productDetail.device_access_type
        const arry = []
        for (const k in response.images_new) {
          arry.push({ id: k, file_url: response.images_new[k] })
        }
        this.productDetail.images = arry
        this.modifyData.images = arry.map(function(v) {
          return { id: v.id }
        })
        if (this.productDetail.network_id == 0) {
          this.productDetail.network_id = ''
        }
        if (!this.productDetail.compat_ext || this.productDetail.compat_ext.length == 0) {
          this.productDetail.compat_ext = []
          this.addCompat()
        } else {
          this.productDetail.compat_ext = this.productDetail.compat_ext.map(val => {
            return {
              ...val,
              brand: val.brand,
              compat: val.compat,
              name: val.name,
              icon_url: val.icon_url || ''
            }
          })
        }

        this.copyProductDetail = JSON.parse(JSON.stringify(response))
        response.attr_list.forEach(function(item) {
          const key = item.is_default ? 'must_fps' : 'opt_fps'
          if (item.list) {
            utils.spanAnalyseDataElse(item, _this[key], _this.spanMap)
          } else {
            _this[key].push(item)
          }
        })
        response.version_list.list.forEach(v => {
          if (v.type == 1) {
            this.version_list.push(v)
          } else {
            this.h5version_list.push(v)
          }
        })
      })
    },
    getConfigList() {
      fetch({
        url: '/product_agreement/versionlists',
        method: 'post',
        data: {
          'product_id': this.product_id
        }
      }).then(res=>{
        console.log(res.list)
        this.configList = res.list
      })
    },
    // 图片预览
    imgPreview(e) {
      fancyBox(e.target, this.productDetail.images)
    },

    // 下架产品
    productUnshelve() {
      const params = {
        product_id: this.product_id
      }
      this.$confirm('下架后，该产品将无法继续使用，同时相应产品开发资料将全部作废，确认请继续', '下架该产品').then(() => {
        productUnshelve(params).then(response => {
          if (response) {
            Message({
              message: '下架成功',
              type: 'success',
              duration: 2 * 1000
            })
            this.$router.go(-1)
          }
        })
      })
    },
    statusMap(row) {
      const map = { 1: '开发中', 2: '已发布' }
      return map[row.status]
    },
    arrayToString(row) {
      return row.value_list.join('/')
    },
    // 合并行
    spanMethod({ row, column, rowIndex, columnIndex }) {
      const pt = this.spanMap[row.nodeid]
      return utils.spanMethod(pt, columnIndex, rowIndex)
    },
    toEdit() {
      if (this.edit) {
        this.modify()
        return
      }
      this.edit = true
      if (this.productDetail.distributor_id) {
        this.getNetworkList(this.productDetail.distributor_id)
      }
      if (this.productDetail.type) {
        this.getAgreementList(this.productDetail.type)
      }
    },
    beforeImgUpload(file) {
      const isLt5M = file.size / 1024 / 1024 < 5
      if (!isLt5M) {
        this.$message.error('请上传5M大小内图片文件')
      }
      return isLt5M
    },
    beforeDocUpload(file) {
      const isLt50M = file.size / 1024 / 1024 < 50
      if (!isLt50M) {
        this.$message.error('请上传50M大小内文件')
      }
      return isLt50M
    },
    handleImgSuccess(res, file) {
      if (res.code !== 200) {
        this.$message.error('上传出错，请重新上传')
        return
      }
      let obj
      if (res.result.type == 26) { // 产品小图
        this.productDetail.icon = res.result.file_url
        if (this.productDetail.icon_id) {
          obj = Object.assign({ id: this.productDetail.icon_id }, res.result)
          this.modifyData.icon = obj
        } else {
          this.modifyData.icon = res.result
        }
      } else if (res.result.type == 10) { // 产品规格书
        this.productDetail.spec_url = res.result.file_url
        this.productDetail.spec_name = res.result.filename
        obj = Object.assign({ id: this.productDetail.spec_id }, res.result)
        this.modifyData.spec = obj
      } else if (res.result.type == 11) { // 产品使用说明书
        this.productDetail.instruct_url = res.result.file_url
        this.productDetail.instruct_name = res.result.filename
        obj = Object.assign({ id: this.productDetail.instruct_id }, res.result)
        this.modifyData.instruct = obj
      }
    },
    addSixImg(res, file) {
      if (res.code !== 200) {
        this.$message.error('上传出错，请重新上传')
        return
      }
      this.productDetail.images.push({ id: 'add', file_url: res.result.file_url })
      this.modifyData.images.push(res.result)
    },
    handleImgElseSuccess(id, index) {
      const _this = this
      return function g(res, file, fileList, key = id, ind = index) {
        if (res.code !== 200) {
          _this.$message.error('上传出错，请重新上传')
          return
        }
        _this.productDetail.images[ind]['file_url'] = res.result.file_url
        if (key == 'add') {
          _this.modifyData.images.splice(ind, 1, res.result)
        } else {
          _this.modifyData.images.splice(ind, 1, Object.assign({ id: key }, res.result))
        }
      }
    },
    // 获得配网方式列表
    getNetworkList(distributors_id) {
      fetch({
        url: '/admin/distribution/get',
        method: 'post',
        data: { distributors_id }
      }).then(res => {
        this.networkList = res
      })
    },
    // 处理技术方案切换
    chooseAccess(str) {
      if (!this.edit) {
        return false
      }
      this.productDetail.type = str
      this.productDetail.type_key = ''
      this.getAgreementList(str)
    },
    getAgreementList(str) {
      if (str == 3 || str == 2) {
        this.getAgreementData(str)
      } else {
        if (this.module_list.length === 0) {
          this.getWiFiList()
        }
      }
    },
    // 获得wifi方案列表
    getWiFiList() {
      fetch({
        url: '/admin/wifimodule/lists',
        method: 'post',
        data: { 'type_id': this.productDetail.type_id }
      }).then(data => {
        this.module_list = data.list
        if (this.productDetail.type_vendor) {
          this.module_list.forEach(v => {
            if (v.vendor == this.productDetail.type_vendor) {
              this.model_list = v.modellist
            }
          })
        }
      }).catch(e => {
        this.module_list = []
        this.$message.error(e.msg)
      })
    },
    getAgreementData(str) {
      fetch({
        url: '/admin/agreement/lists',
        method: 'post',
        data: { 'type_id': this.productDetail.type_id, 'agreement_type': str }
      }).then(data => {
        this.agreement_list = data.list
      }).catch(e => {
        this.agreement_list = []
        this.$message.error(e.msg)
      })
    },
    changeModel(val) {
      this.productDetail.type_key = ''
      this.module_list.forEach(v => {
        if (v.vendor == val) {
          this.model_list = v.modellist
        }
      })
    },
    modify() {
      this.modifyData.device_access_type = this.productDetail.device_access_type

      if (!this.productDetail.name) {
        return this.$message.error('产品名称不能为空！')
      }
      if (!this.productDetail.vendor_phone) {
        return this.$message.error('客服电话不能为空！')
      }
      if (!this.productDetail.model) {
        return this.$message.error('产品型号不能为空！')
      }
      if (!this.productNameValidate() || !this.productAliaNameValidate()) {
        return this.$message.error('产品名称仅能汉字数字组合，且中间不能存在空格！')
      }
      if (this.productDetail.model != this.copyProductDetail.model) {
        this.modifyData.model = this.productDetail.model
      }
      if (this.productDetail.name != this.copyProductDetail.name) {
        this.modifyData.name = this.productDetail.name
      }
      if (this.productDetail.vendor_phone != this.copyProductDetail.vendor_phone) {
        this.modifyData.vendor_phone = this.productDetail.vendor_phone
      }
      if (this.productDetail.compat != this.copyProductDetail.compat) {
        this.modifyData.compat = this.productDetail.compat
      }
      // 兼容机型2
      if (this.productDetail.compat_ext != this.copyProductDetail.compat_ext) {
        this.modifyData.compat_ext = this.productDetail.compat_ext
      }

      if (this.productDetail.offline_hint.replace(/\s/g, '') == '') {
        this.$message.error('离线提示语不能为空')
        return
      }
      if (this.productDetail.offline_hint != this.copyProductDetail.offline_hint) {
        this.modifyData.offline_hint = this.productDetail.offline_hint
      }
      if (this.productDetail.network_id != this.copyProductDetail.network_id) {
        this.modifyData.network_id = this.productDetail.network_id
      }
      if (this.productDetail.type != this.copyProductDetail.type) {
        this.modifyData.type = this.productDetail.type
      }
      if (this.productDetail.type_key != this.copyProductDetail.type_key) {
        if (this.productDetail.type == 1) {
          this.modifyData.module_id = this.productDetail.type_key
        } else {
          this.modifyData.agreement_id = this.productDetail.type_key
        }
      }
      this.modifyData.attr_list = this.calAttr()
      this.modifyData.id = this.productDetail.id
      const formData = JSON.parse(JSON.stringify(this.modifyData))
      if (formData.icon) {
        formData.icon = JSON.stringify(formData.icon)
      }
      if (formData.images) {
        formData.images = JSON.stringify(formData.images)
      }
      if (formData.spec) {
        formData.spec = JSON.stringify(formData.spec)
      }
      if (formData.instruct) {
        formData.instruct = JSON.stringify(formData.instruct)
      }
      if (formData.attr_list) {
        formData.attr_list = JSON.stringify(formData.attr_list)
      }
      formData.display_name = this.productDetail.display_name
      // // 配置协议
      // if (this.configFile && this.configFile.file_url) {
      //   formData.agreement_file = JSON.stringify(this.configFile)
      // }
      let flag = true
      for (let i = 0; i < this.$refs.productNameValid.length; i++) {
        const argument = this.$refs.productNameValid[i]
        argument.validate(bool => {
          if (!bool) {
            flag = false
          }
        })
        if (!flag) {
          break
        }
      }

      if (flag) {
        fetch({
          url: '/admin/product_edit',
          method: 'post',
          data: formData
        }).then(res => {
          this.$message.info('保存成功')
          this.$router.go(-1)
        }).catch(e => {
          this.$message.error(e.msg)
        })
      }


    },
    setEnable(row, attr) {
      if (row.key_type == '1') {
        const index = row.value_list.indexOf(attr)
        if (index >= 0) {
          row.value_list.splice(index, 1)
        } else {
          if (row.is_checkbox + '' == '1') {
            row.value_list.push(attr)
          } else {
            row.value_list.length = 0
            row.value_list.push(attr)
          }
        }
      } else {
        row.value_list = row.value_list.length > 0 ? [] : row.origin_value_list
      }
    },
    validCompat(rule, value, callback) {
      if (value) {
        if (!/^[a-zA-Z0-9,$%&*./\-_#!~|<>^+=]*$/.test(value)) {
          callback('请输入字母/数字/特殊符号组成的机型，以英文逗号隔开；')
        }
      }
      callback()
    },
    validModel(rule, value, callback) {
      if (value) {
        if (/[\u4e00-\u9fa5]/.test(value)) {
          callback(new Error('不能输入汉字'))
        } else {
          callback()
        }
      } else {
        callback()
      }
    },
    calAttr() {
      const arry = []
      const map = {}
      this.opt_fps.forEach(item => {
        if (!map[item.attr_id]) {
          map[item.attr_id] = []
        }
        if (item.level == 1) {
          if (item.value_list.length) {
            map[item.attr_id][item.index] = {
              value_list: item.key_type == '1' ? item.value_list : item.origin_value_list,
              key: item.key,
              key_type: item.key_type,
              is_checkbox: item.is_checkbox,
              value_string: item.value_string
            }
          }
        } else if (item.level == 2) {
          if (item.value_list.length) {
            if (!map[item.attr_id][item.index]) {
              map[item.attr_id][item.index] = {
                value_list: [],
                key: item.p_key,
                key_type: item.p_key_type
              }
            }
            map[item.attr_id][item.index].value_list.push({
              value_list: item.key_type == '1' ? item.value_list : item.origin_value_list,
              key: item.key,
              key_type: item.key_type,
              is_checkbox: item.is_checkbox,
              value_string: item.value_string
            })
          }
        }
      })
      for (const k in map) {
        if (map[k].length) {
          arry.push({
            attr_id: k,
            is_default: 0,
            list: map[k]
          })
        }
      }
      return arry
    },

    // 添加兼容机型
    addCompat(){
      this.productDetail.compat_ext.push({
        "brand": '',
        "compat": '',
        "name": '',
        "icon_url": '',
        "icon": ''
      })
    },
    // 移除兼容机型
    removeCompat(idx) {
      this.productDetail.compat_ext.splice(idx, 1)
    },
    // 删除产品(超级管理员才行)
    removeProduct() {
      this.$confirm('确认删除该产品？', '重新上架').then(() => {
        fetch({
          url: 'product/admin_del',
          method: 'post',
          data: { 'product_id': this.product_id }
        }).then(data => {
          this.$router.push('/productManagement/offlineProducts')
        })
      })
    },
    // 重新上架
    reStocking() {
      this.$confirm('确认重新上架该产品？', '重新上架').then(() => {
        fetch({
          url: 'admin/product_reschedule',
          method: 'post',
          data: { 'product_id': this.product_id }
        }).then(data => {
          this.$router.push('/productManagement/offlineProducts')
        })
      })
    },
    // 兼容机型上传图片
    handleSuccess(res, idx) {
      if (res.code === 200) {
        this.productDetail.compat_ext[idx].icon_url = res.result.file_url
        this.productDetail.compat_ext[idx].icon = res.result
      }
    }
  },
}
</script>

<style lang="scss">
.six-img {
  margin-right: 15px;
  float: left;
  img {
    height: 100px;
  }
}
.edit-label {
  height: 40px;
  line-height: 40px;
}
.no-border {
  .el-input__inner {
    border: none;
    padding-left: 0;
    font-size: 15px;
    color: #000000;
  }
  .el-textarea__inner {
    border: none;
    font-size: 15px;
    color: #000000;
    resize: none;
    padding-top: 10px;
  }
}
.p30 {
  display: inline-block;
  margin-left: 15px;
}
.accessProgram {
  width: 224px;
  height: 224px;
  border: 1px #ddd solid;
  margin: 0 48px 20px 0px;
  float: left;
  text-align: center;
  cursor: pointer;
  position: relative;
  &.active {
    border: 1px solid #15a05d;
    background: #f8f9fc;
    .el-icon-circle-check {
      color: #15a05d;
    }
  }
  &.dis {
    cursor: not-allowed;
  }
  &:last-child {
    margin-right: 0px;
  }
  .el-icon-circle-check {
    position: absolute;
    right: 10px;
    top: 10px;
    font-size: 20px;
    color: #f1f1f1;
  }
  .c-icon {
    width: 224px;
    height: 42px;
    margin: 75px 0px 45px;
    &.wifi {
      background: url('../../assets/wifi.png');
      height: 38px;
      margin: 75px 0px 45px;
    }
    &.bluetooth {
      background: url('../../assets/bluetooth.png');
    }
    &.zigbee {
      background: url('../../assets/zibee.png') 0px -1px;
    }
  }
  p {
    &.cdes {
      font-size: 12px;
      color: #999;
    }
    &.cname {
      font-size: 14px;
      color: #333;
      margin-bottom: 8px;
      font-weight: bold;
    }
  }
}
.gg {
  .brand-box {
    padding: 0;
    img {
      max-height: 120px;
      margin-right: 15px;
    }
  }
}
.gavin-attr {
  padding: 12px 0;
  border-bottom: 1px solid #e6ebf5;
}
.attr-table.el-table .cell {
  padding: 0;
}
.attr-table .gavin-attr:last-child {
  border-bottom: none;
  padding-bottom: 0;
}
.attr-table .gavin-attr:first-child {
  padding-top: 0;
}
.red {
  color: red;
}
.filebd {
  height: 1px;
  width: 100%;
  background-color: #ccc;
  margin: 30px 0;
}
.handle{
  margin-right: 4px;
}
.addbtn{
  padding: 8px 4px;
}
.el-dialog{
  width: 610px;
  padding-right: 80px;
  .el-form-item__label{
    text-align: left;
    padding-left: 15px;
  }
  .uploadName{
    width: 80%;
    margin-right: 4px;
  }
  .introduce .el-input__inner{
    height: 75px;
  }
  .formfile{
    margin-bottom: 60px;
  }
  .submitForm{
    margin-right: 100px;
  }
  .submitForm{
    width: 135px;
    margin-right: 105px;
  }
  .cancelForm{
    width: 135px;
  }
  .el-icon-close{
    font-size: 24px;
  }
  .check-dialog{
    .el-form-item__content{
      padding-left: 30px;
      .download{
        margin-left: 30px;
      }
    }
  }
}
.delect{
  height: 400px;
    .el-dialog__body{
      display: flex;
      justify-content: space-around;
      .el-icon-info{
        font-size: 40px;
        color: orange;
        margin-left: 20px;
      }
      >div{
        div{
          margin-top: 20px;
        }
      }
    }
    .el-dialog__footer{
      .el-button{
        width: 100px;
        margin-right: 20px;
      }
    }
  }
</style>
