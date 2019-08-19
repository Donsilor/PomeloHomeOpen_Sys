<template>
  <div class="app-container calendar-list-container addCategoryPage">
    <el-row :gutter="30">
      <el-col :span="24">
        <el-button
          type="ghost"
          @click="handleBackEvent">返回</el-button>
        <el-button
          v-if="!isEdit"
          type="primary"
          @click="addGory">确定并添加该品类</el-button>
        <el-button
          v-if="isEdit"
          type="primary"
          @click="editGory">{{
            editText
          }}</el-button>
        <el-button
          v-if="isEdit && disabled"
          type="danger"
          @click="handleDelEvent">删除该品类</el-button>
      </el-col>
      <el-col
        :span="24"
        style="margin: 20px 0px;padding-bottom: 40px;">
        <el-tabs type="border-card">
          <el-tab-pane label="基本信息">
            <el-col :span="24">
              <el-form
                ref="ruleForm"
                :rules="rules"
                :model="form"
                label-width="120px"
                style="margin-top: 20px;"
                size="large">
                <el-form-item
                  label="品类ID"
                  prop="id">
                  <el-col :span="12">
                    <el-input
                      v-model="form.id"
                      :span="6"
                      :disabled="disabled||isEdit"
                      placeholder="请输入大品类ID"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="大品类名称"
                  prop="name">
                  <el-col :span="12">
                    <el-input
                      v-model="form.name"
                      :span="6"
                      :disabled="disabled"
                      placeholder="请输入大品类名称"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="大品类英文名"
                  prop="name_e">
                  <el-col :span="12">
                    <el-input
                      v-model="form.name_e"
                      :disabled="disabled"
                      :span="6"
                      placeholder="请输入大品类英文"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="品类图标"
                  style="padding-bottom: 30px;">
                  <el-col :span="12">
                    <div class="fileuploadItem bigCategory">
                      <el-upload
                        :class="disabled ? 'disabled' : ''"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :disabled="disabled"
                        :data="high_light_data"
                        class="avatar-uploader"
                        action="/api/index.php/producttype/iconupload"
                        accept="image/png">
                        <img
                          v-if="high_light_data.file_id != ''"
                          :src="form.icon_list.high_light.file_url"
                          class="avatar" >
                        <i
                          v-else
                          class="el-icon-plus avatar-uploader-icon"/>
                      </el-upload>
                      <span class="file_upload_img_des">高亮状态</span>
                    </div>
                    <div class="fileuploadItem bigCategory">
                      <el-upload
                        :class="disabled ? 'disabled' : ''"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :disabled="disabled"
                        :data="normal_s_data"
                        class="avatar-uploader"
                        action="/api/index.php/producttype/iconupload"
                        accept="image/png">
                        <img
                          v-if="normal_s_data.file_id != ''"
                          :src="form.icon_list.normal_s.file_url"
                          class="avatar" >
                        <i
                          v-else
                          class="el-icon-plus avatar-uploader-icon"/>
                      </el-upload>
                      <span class="file_upload_img_des">默认状态小尺寸</span>
                    </div>
                    <div class="fileuploadItem bigCategory">
                      <el-upload
                        :class="disabled ? 'disabled' : ''"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :disabled="disabled"
                        :data="normal_data"
                        class="avatar-uploader"
                        action="/api/index.php/producttype/iconupload"
                        accept="image/png">
                        <img
                          v-if="normal_data.file_id != ''"
                          :src="form.icon_list.normal.file_url"
                          class="avatar" >
                        <i
                          v-else
                          class="el-icon-plus avatar-uploader-icon"/>
                      </el-upload>
                      <span class="file_upload_img_des">默认状态大尺寸</span>
                    </div>
                    <div class="fileuploadItem bigCategory">
                      <el-upload
                        :class="disabled ? 'disabled' : ''"
                        :show-file-list="false"
                        :on-success="handleAvatarSuccess"
                        :before-upload="beforeAvatarUpload"
                        :disabled="disabled"
                        :data="disabled_data"
                        class="avatar-uploader"
                        action="/api/index.php/producttype/iconupload"
                        accept="image/png">
                        <img
                          v-if="disabled_data.file_id != ''"
                          :src="form.icon_list.disabled.file_url"
                          class="avatar" >
                        <i
                          v-else
                          class="el-icon-plus avatar-uploader-icon"/>
                      </el-upload>
                      <span class="file_upload_img_des">不可用状态</span>
                    </div>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="品类离线提示语"
                  prop="offline_hint">
                  <el-col :span="12">
                    <el-input
                      :rows="4"
                      :maxlength="1000"
                      v-model="form.offline_hint"
                      :disabled="disabled"
                      :span="6"
                      type="textarea"
                      placeholder="请输入离线提示语"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="大品类是否在设备选择列表显示"
                  class="line25">
                  <el-col :span="12">
                    <el-radio-group
                      :disabled="disabled"
                      v-model="form.show_in_select_list">
                      <el-radio :label="1">是</el-radio>
                      <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                  </el-col>
                </el-form-item>

                <!-- <el-form-item
                  label="大品类是否在设备选择列表显示（融合版APP）"
                  class="line25">
                  <el-col :span="12">
                    <el-radio-group
                      :disabled="disabled"
                      v-model="form.app_show_in_select_list">
                      <el-radio :label="1">是</el-radio>
                      <el-radio :label="0">否</el-radio>
                    </el-radio-group>
                  </el-col>
                </el-form-item> -->

                <el-form-item label="是否高频使用">
                  <el-col :span="12">
                    <el-checkbox
                      :disabled="disabled"
                      :true-label="1"
                      :false-label="0"
                      v-model="form.is_high_frequency">是</el-checkbox>
                  </el-col>
                </el-form-item>

                <el-form-item
                  label="是否为智能开关关联设备品类"
                  class="line25">
                  <el-col :span="12">
                    <el-checkbox
                      :disabled="disabled"
                      :true-label="1"
                      :false-label="0"
                      v-model="form.is_relate_switch">是</el-checkbox>
                  </el-col>
                </el-form-item>

                <el-form-item label="是否依赖路由器">
                  <el-col :span="12">
                    <el-checkbox
                      :disabled="disabled"
                      :true-label="1"
                      :false-label="0"
                      v-model="form.is_depend_router">是</el-checkbox>
                  </el-col>
                </el-form-item>
              </el-form>
            </el-col>
          </el-tab-pane>
          <el-tab-pane
            v-if="isEdit"
            label="使用帮助">
            <div class="btns">
              <el-button @click="newItem('1', '新增帮助')">新增帮助</el-button>
            </div>
            <el-dialog
              :close-on-click-modal="false"
              :title="config.header"
              :visible.sync="config.visible"
              width="570px">
              <el-form
                ref="helpForm"
                :rules="helpRules"
                :model="config">
                <el-form-item
                  prop="title"
                  label="标题"
                  label-width="150">
                  <el-input
                    v-model="config.title"
                    placeholder="请输入标题"
                    auto-complete="off"/>
                </el-form-item>
                <el-form-item
                  prop="content"
                  label="详情"
                  label-width="150">
                  <el-input
                    :rows="6"
                    v-model="config.content"
                    type="textarea"
                    placeholder="请输入详情"/>
                </el-form-item>
              </el-form>
              <div
                slot="footer"
                class="dialog-footer">
                <el-button @click="config.visible = false">取 消</el-button>
                <el-button
                  type="primary"
                  @click="submit">确 定</el-button>
              </div>
            </el-dialog>

            <el-table
              :data="tableData"
              border
              stripe
              style="width: 100%">
              <el-table-column
                type="index"
                label="序号"
                width="80"/>
              <el-table-column
                prop="title"
                label="标题"/>
              <el-table-column label="创建时间">
                <template slot-scope="scope">
                  {{ scope.row.created_at | moment("YYYY-MM-DD HH:mm:ss") }}
                </template>
              </el-table-column>
              <el-table-column label="是否发布">
                <template slot-scope="scope">
                  <el-switch
                    v-model="scope.row.valid"
                    :active-value="1"
                    :inactive-value="0"
                    disabled
                    @click.native="showConfirm('2',scope.row)"/>
                </template>
              </el-table-column>
              <el-table-column
                label="操作"
                align="center">
                <template slot-scope="scope">
                  <el-button
                    type="text"
                    @click="newItem('2', '编辑帮助', scope.row)">编辑</el-button>
                  <el-button
                    type="text"
                    @click="deleteItem(scope.row.id)">删除</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </el-col>
    </el-row>
  </div>
</template>
<style lang="scss">
.el-switch.is-disabled .el-switch__core,
.el-switch.is-disabled .el-switch__label {
  cursor: pointer;
}
.addCategoryPage {
  .el-form-item__error {
    padding: 5px 15px !important;
  }
  .desTitle {
    border-bottom: 1px #ddd solid;
    line-height: 30px;
    height: 30px;
  }
  .desTitleTop {
    border-bottom: 1px #ddd solid;
    line-height: 30px;
    height: 30px;
    width: 100%;
  }

  .bigCategory .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
    width: 110px;
    height: 110px;
  }
  .bigCategory .el-upload:hover {
    border-color: #409eff;
  }
  .avatar-uploader-icon {
    font-size: 22px;
    color: #8c939d;
    width: 110px;
    height: 110px;
    line-height: 110px;
    text-align: center;
  }
  .avatar-uploader {
    display: inline-block;
    margin-right: 15px;
  }
  .avatar-uploader:last-child {
    margin-right: 0px;
  }
  .avatar {
    width: 110px;
    height: 110px;
    display: block;
  }
  .line25 .el-form-item__label {
    line-height: 25px;
  }
  .el-icon-delete {
    cursor: pointer;
  }
  .fileuploadItem {
    display: table-cell;
    position: relative;
  }
  .fileuploadItem .disabled .el-upload {
    background-color: #f5f7fa;
    cursor: not-allowed;
  }
  .fileuploadItem:last-child .avatar-uploader {
    margin-right: 0px !important;
  }
  .fileuploadItem .file_upload_img_des {
    position: absolute;
    top: 109px;
    text-align: center;
    color: #999;
    font-size: 12px;
    left: 57px;
    transform: translateX(-50%);
    width: 110px;
  }
  .el-tooltip__popper {
    max-width: 300px;
  }
  .btns {
    margin-bottom: 20px;
  }
}
</style>
<script>
import fetch from '@/utils/fetch'
import { getToken } from '@/utils/auth'
// import { Loading } from 'element-ui'
// import helper from '@/utils/helper'
// import addTechnical from './addTechnical.vue'
// import addAttribute from './addAttribute.vue'
export default {
  name: 'AddBigCategory',
  components: {},
  data() {
     var validateId = (rule, value, callback) => {
              if (!value) {
                return callback(new Error('请输入大品类ID'));
              }
               else {
                if (value >= 5000 || value < 1) {
                  callback(new Error('ID必须大于0，小于5000'))
                }else{
                  callback();
                }
              }
            };
    return {
      isEdit: !!this.$route.query.id,
      token: getToken(),
      isLoadData: false,
      editText: '编辑品类信息',
      disabled: !!this.$route.query.id,
      form: {
        // id: this.$route.query.id,
        id:'',
        name: '',
        name_e: '',
        offline_hint: '',
        show_in_select_list: 1,
        // app_show_in_select_list: 1,
        is_relate_switch: 0,
        is_high_frequency: 0,
        is_depend_router: 1,
        icon_list: {
          high_light: {
            file_id: '',
            file_url: '',
            file_name: ''
          },
          normal: {
            file_id: '',
            file_url: '',
            file_name: ''
          },
          normal_s: {
            file_id: '',
            file_url: '',
            file_name: ''
          },
          disabled: {
            file_id: '',
            file_url: '',
            file_name: ''
          }
        }
      },
      rules: {
        id: [
          { validator:validateId, trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入大品类名称', trigger: 'blur' },
          { max: 32, message: '大品类名称不能超过32个字符', trigger: 'blur' }
        ],
        name_e: [
          { required: true, message: '请输入大品类英文名称', trigger: 'blur' },
          { max: 32, message: '大品类英文名称不能超过32个字符', trigger: 'blur' }
        ],
        offline_hint: [{ required: true, message: '请输入离线提示语', trigger: 'blur' }]
      },

      helpRules: {
        title: [
          { required: true, message: '请输入标题', trigger: 'blur' }
        ],
        content: [
          { required: true, message: '请输入详情', trigger: 'blur' }
        ]
      },

      high_light_data: {
        token: getToken(),
        file_id: '',
        attribute: 'high_light'
      },
      normal_s_data: {
        token: getToken(),
        file_id: '',
        attribute: 'normal_s'
      },
      normal_data: {
        token: getToken(),
        file_id: '',
        attribute: 'normal'
      },
      disabled_data: {
        token: getToken(),
        file_id: '',
        attribute: 'disabled'
      },

      config: {
        type: '1', // 弹框类型  1 新增 2 编辑
        visible: false,
        header: '新增帮助',
        title: '',
        content: ''
      }, // 使用帮助弹框
      tableData: [] // 使用帮助
    }
  },
  computed: {},
  watch: {
    'config.visible'(val) {
      this.$nextTick(() => {
        if (this.config.type === '1') {
          this.$refs['helpForm'].resetFields()
        } else {
          this.$refs['helpForm'].clearValidate()
        }
      })
    }
  },
  created() {
    if (this.isEdit) {
      this.getCategoryInfo()
      this.getHelpList()
    }
  },
  mounted() { },
  methods: {
    // 是否发布
    showConfirm(type, item) {
      this.$confirm('是否改变发布状态?', '提示', {
        confirmButtonText: '确认',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        this.config.type = type
        if (type === '2' && item) {
          this.config.title = item.title
          this.config.content = item.content
          this.config.valid = +!item.valid
          this.config.id = item.id
          this.submitPost()
          this.$message({
            type: 'success',
            message: '操作成功!'
          })
        }
      })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消!'
          })
        })
    },
    // 获取大品类数据列表
    getHelpList() {
      return fetch({
        url: '/producttypehelp/lists',
        method: 'post',
        data: {
          type_id: this.$route.query.id
        }
      }).then(res => {
        this.tableData = res.list
      })
    },
    getCategoryInfo() {
      fetch({
        url: '/product/type_info',
        method: 'post',
        data: {
          id: this.$route.query.id
        }
      }).then(res => {
        console.log(res)

        this.form.name = res.name
        this.form.name_e = res.name_e
        this.form.id = res.id
        this.form.icon_list = res.icon_list
        this.form.offline_hint = res.offline_hint
        if (res.show_in_select_list !== undefined) {
          this.form.show_in_select_list = res.show_in_select_list
        }
        // if (res.app_show_in_select_list !== undefined) {
        //   this.form.app_show_in_select_list = res.app_show_in_select_list
        // }
        if (res.is_high_frequency !== undefined) {
          this.form.is_high_frequency = res.is_high_frequency
        }
        if (res.is_relate_switch !== undefined) {
          this.form.is_relate_switch = res.is_relate_switch
        }
        if (res.is_depend_router !== undefined) {
          this.form.is_depend_router = res.is_depend_router
        }
        this.handleIconList(this.form.icon_list)
      })
    },
    handleIconList(icon_list) {
      this.high_light_data.file_id = icon_list.high_light.file_id
      this.normal_s_data.file_id = icon_list.normal_s.file_id
      this.normal_data.file_id = icon_list.normal.file_id
      this.disabled_data.file_id = icon_list.disabled.file_id
    },
    handleAvatarSuccess(res, file) {
      if (res.code !== 200) {
        this.$message.error(res.msg)
        return
      }
      const data = res.result
      switch (res.result.type) {
      case 'high_light':
        this.form.icon_list.high_light = data.high_light
        this.high_light_data.file_id = data.high_light.file_id
        break
      case 'normal_s':
        this.form.icon_list.normal_s = data.normal_s
        this.normal_s_data.file_id = data.normal_s.file_id
        break
      case 'normal':
        this.form.icon_list.normal = data.normal
        this.normal_data.file_id = data.normal.file_id
        break
      case 'disabled':
        this.form.icon_list.disabled = data.disabled
        this.disabled_data.file_id = data.disabled.file_id
        break
      default:
        break
      }
    },
    beforeAvatarUpload(file) {
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
    // 编辑品类信息
    editGory() {
      if (this.disabled) {
        this.editText = '确认并提交修改'
        this.disabled = false
        return false
      }
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.$confirm('是否确认保存修改后品类信息？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            fetch({
              url: '/producttype/edit',
              method: 'post',
              data: this.form
            })
              .then(res => {
                this.disabled = true
                this.editText = '编辑品类信息'
                this.$message({
                  type: 'success',
                  message: '保存成功!'
                })
              })
              .catch(res => {
                this.$message({
                  type: 'error',
                  message: res.msg
                })
              })
          })
        }
      })
    },
    // 添加品类信息
    addGory() {
      this.$refs['ruleForm'].validate(valid => {
        if (valid) {
          this.$confirm('是否确定添加该品类？', '提示', {
            confirmButtonText: '确定',
            cancelButtonText: '取消',
            type: 'warning'
          }).then(() => {
            fetch({
              url: '/producttype/add',
              method: 'post',
              data: this.form
            })
              .then(res => {
                this.$message({
                  type: 'success',
                  message: '保存成功!'
                })
                setTimeout(() => {
                  this.$router.push({ path: '/typeManagement/bigCategory' })
                }, 2000)
              })
              .catch(res => {
                this.$message({
                  type: 'error',
                  message: res.msg
                })
              })
          })
        }
      })
    },

    // 删除品类
    delectGroy() {
      fetch({
        url: '/producttype/del',
        method: 'post',
        data: {
          id: this.$route.query.id
        }
      }).then(res => {
        this.$message({
          showClose: true,
          message: '删除成功！',
          type: 'success'
        })
        setTimeout(() => {
          this.$router.push({ path: '/typeManagement/bigCategory' })
        }, 2000)
      })
    },

    // 删除品类
    handleDelEvent() {
      this.$confirm('删除后，厂商将无法再进行该品类的开发合作，确认请继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          this.delectGroy()
        })
        .catch(() => { })
    },
    // 处理返回事件
    handleBackEvent() {
      this.$router.push({ path: '/typeManagement/bigCategory' })
    },
    // 新增和编辑 帮助
    newItem(type, header, item) {
      this.config.type = type
      this.config.header = header
      this.config.visible = true
      // 编辑
      if (type === '2' && item) {
        this.config.title = item.title
        this.config.content = item.content
        this.config.valid = item.valid
        this.config.id = item.id
      } else {
        this.config.title = ''
        this.config.content = ''
      }
    },
    // 删除帮助
    deleteItem(id) {
      this.$confirm('删除后，该帮助指引将不在帮助中显示，确认请继续', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        return fetch({
          url: 'producttypehelp/del',
          method: 'post',
          data: {
            id: id
          }
        })
      })
        .then(res => {
          this.getHelpList()
        })
        .then(() => {
          this.$message({
            type: 'success',
            message: '已删除成功'
          })
        })
        .catch(() => {
          this.$message({
            type: 'info',
            message: '已取消删除'
          })
        })
    },
    // 保存修改或者新增
    submitPost() {
      if (this.config.type === '1') {
        return fetch({
          url: '/producttypehelp/add',
          method: 'post',
          data: {
            type_id: this.$route.query.id,
            title: this.config.title,
            content: this.config.content
          }
        })
          .then(res => {
            this.config.visible = false
            this.getHelpList()
          })
      }
      if (this.config.type === '2') {
        return fetch({
          url: '/producttypehelp/edit',
          method: 'post',
          data: {
            title: this.config.title,
            content: this.config.content,
            valid: this.config.valid,
            id: this.config.id
          }
        })
          .then(res => {
            this.config.visible = false
            this.getHelpList()
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    // 保存修改或者新增
    submit() {
      this.$refs['helpForm'].validate(valid => {
        if (valid) {
          this.config.visible = false
          this.submitPost()
        }
      })
    }
  }
}
</script>
