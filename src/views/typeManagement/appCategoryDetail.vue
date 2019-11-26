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
                  label="app品类排序"
                  prop="sort">
                  <el-col :span="12">
                    <el-input
                      v-model="form.sort"
                      :disabled="disabled"
                      :span="6"
                      placeholder=""/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="app品类名称"
                  prop="name">
                  <el-col :span="12">
                    <el-input
                      v-model="form.name"
                      :disabled="disabled"
                      :span="6"
                      placeholder="请输入app品类名称"/>
                  </el-col>
                </el-form-item>
                <el-form-item
                  label="下属品类"
                  required>
                  <el-col :span="12">
                    <div
                      v-for="(v,i) in form.belongCategoryList"
                      :key="i"
                      style="padding-bottom: 20px;">
                      <el-row>
                        <el-col :span="4">
                          <el-form-item
                            :prop="`belongCategoryList.${i}.order`"
                            :rules="sortRule"
                            style="width: 80%">
                            <el-input
                              v-model="v.order"
                              :disabled="disabled"
                              placeholder=""/>
                          </el-form-item>
                        </el-col>
                        <el-col :span="12">
                          <el-form-item
                            :prop="`belongCategoryList.${i}.type_id`"
                            :rules="{ required: true, message: '请选择品类', trigger: 'change' }">
                            <el-select
                              v-model="v.type_id"
                              :disabled="disabled"
                              @change="vm => categoryIdChange(vm, i)"
                              placeholder="请选择"
                              style="width: 90%">
                              <el-option v-for="v in categorySelectList" :key="v.id" :label="v.name" :value="v.id"/>
                            </el-select>
                          </el-form-item>
                        </el-col>
                        <el-col :span="2">
                          <el-button
                            v-if="form.belongCategoryList.length > 1"
                            :disabled="disabled"
                            icon="el-icon-minus"
                            circle
                            size="small"
                            @click="removeBelongCategory(i)"/>
                        </el-col>
                        <el-col :span="2">
                          <el-button
                            v-if="form.belongCategoryList.length === i + 1"
                            :disabled="disabled"
                            icon="el-icon-plus"
                            circle
                            size="small"
                            @click="addBelongCategory"/>
                        </el-col>
                      </el-row>
                    </div>
                  </el-col>
                </el-form-item>
              </el-form>
            </el-col>
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
export default {
  components: {},
  data() {
    var validateId = (rule, value, callback) => {
      if (!value) {
        return callback(new Error('请输入品类排序'))
      }
      else {
        if (/^\+?[1-9][0-9]*$/.test(value)) {
          callback()
        }else{
          callback(new Error('请输入大于0的正整数'))
        }
      }
    }
    return {
      isEdit: !!this.$route.query.id,
      token: getToken(),
      isLoadData: false,
      editText: '编辑品类信息',
      disabled: !!this.$route.query.id,
      form: {
        sort:'',
        name: '',
        belongCategoryList: [{
          order: 1,
          type_id: ''
        }]
      },
      rules: {
        sort: [
          { required: true, validator:validateId, trigger: 'blur' },
        ],
        name: [
          { required: true, message: '请输入app品类名称', trigger: 'blur' },
          { max: 32, message: 'app品类名称不能超过32个字符', trigger: 'blur' }
        ],
        belongCategory: [
          { required: true }
        ]
      },
      sortRule:[{ required: true, message: '输入排序', trigger: 'blur' },{validator:validateId}],
      categorySelectList: []
    }
  },
  computed: {},
  watch: {

  },
  created() {
    this.getCategorySelectList()
    if (this.isEdit) {
      this.getCategoryInfo()
    }
  },
  mounted() { },
  methods: {
    getCategoryInfo() {
      fetch({
        url: 'apptype/info',
        method: 'post',
        data: {
          id: this.$route.query.id
        }
      }).then(res => {
        let { order, child_list, name } = res
        this.form.sort = order
        this.form.name = name
        this.form.belongCategoryList = child_list
      })
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
              url: 'apptype/save',
              method: 'post',
              data: {
                name: this.form.name,
                order: this.form.sort,
                child_list: this.form.belongCategoryList,
                id: this.$route.query.id
              }
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
              url: 'apptype/save',
              method: 'post',
              data: {
                name: this.form.name,
                order: this.form.sort,
                child_list: this.form.belongCategoryList
              }
            })
              .then(res => {
                this.$message({
                  type: 'success',
                  message: '保存成功!'
                })
                setTimeout(() => {
                  this.$router.push({ path: '/typeManagement/appCategory' })
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
        url: 'apptype/del',
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
          this.$router.push({ path: '/typeManagement/appCategory' })
        }, 2000)
      })
    },
    // 删除品类
    handleDelEvent() {
      this.$confirm('确认删除该品类？', '提示', {
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
      this.$router.push({ path: '/typeManagement/appCategory' })
    },
    addBelongCategory() {
      this.form.belongCategoryList.push({
        order: Math.floor(this.form.belongCategoryList[this.form.belongCategoryList.length - 1].order) + 1,
        type_id: ''
      })
    },
    removeBelongCategory(index) {
      this.form.belongCategoryList.splice(index, 1)
    },
    getCategorySelectList() {
      fetch({
        url: '/product/parenttype_lists',
        method: 'post',
        data: {limit: 200, page: 1}
      }).then(res => {
        this.categorySelectList = res.list
      })
    },
    categoryIdChange(id, index) {
      // this.form.belongCategoryList[index].type_id = id
      let ids = this.form.belongCategoryList.map(val => val.type_id)
      let newarr = Array.from(new Set(ids))
      if (ids.length !== newarr.length) {
        this.$message.warning('请勿选择相同的品类')
        this.form.belongCategoryList[index].type_id = ''
      }
    }
  }
}
</script>
