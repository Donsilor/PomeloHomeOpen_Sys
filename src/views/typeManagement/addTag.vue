<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addTag">
        新增编组tag
      </el-button>
    </el-row>

    <el-table 
      v-loading="listLoading" 
      :data="tagList" 
      element-loading-text="给我一点时间" 
      stripe 
      fit 
      highlight-current-row 
      style="width: 100%">
      <el-table-column 
        align="center" 
        label="标签编号" 
        prop="gtag_id"/>
      <el-table-column 
        align="center" 
        label="标签名称" 
        prop="gtag_name"/>
      <el-table-column 
        align="center" 
        label="enable" 
        prop="enable"/>
      <el-table-column 
        align="center" 
        label="创建时间" 
        prop="create_time"/>
      <el-table-column 
        align="center" 
        label="更新时间" 
        prop="update_time"/>

      <el-table-column 
        align="center" 
        label="操作" 
        width="150">
        <template slot-scope="scope">
          <el-button 
            size="small" 
            type="danger"
            @click="delTag(scope.row)" >
            删除
          </el-button>
          <el-button 
            size="small" 
            type="primary" 
            @click="editTag(scope.row, true)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div 
      v-show="!listLoading" 
      class="pagination-container">
      <!-- 页码按钮的数量： currenCurrent
           会sizeChange 
       -->
      <el-pagination 
        :current-page.sync="listQuery.page" 
        :page-sizes="[15,20,30, 50]" 
        :page-size="listQuery.limit" 
        :total="total" 
        layout="total, sizes, prev, pager, next, jumper" 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange"/>
    </div>

    <el-dialog 
      :visible.sync="formVisible" 
      :title="dialogTitle">
      <el-form label-width="200px" class="form">
        <el-form-item 
          v-show="isEdit == false" 
          label="标签编号">
          <el-input 
            v-model="formItem.gtag_id" 
            type="textarea"/>
        </el-form-item>
        <el-form-item label="标签名称">
          <el-input 
            v-model="formItem.gtag_name" 
            type="textarea"/>
        </el-form-item>
        <el-form-item label="上传图片">
          <el-upload
            class="upload-demo"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-change="handleChange"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload>
        </el-form-item>

        <el-form-item label="">
          <template slot="label">
            <div class="bottom_text">
              编组数量限制（非必填）<br>
              <span class="">用于面板屏幕配置多设备选择设备</span>
            </div>
          </template>
          <el-input v-model="formItem.input" placeholder="请输入正整数，0表示无穷大"></el-input>
        </el-form-item>

        <el-form-item label="面板是否可用">
           <el-radio v-model="formItem.radio" label="1">是</el-radio>
          <el-radio v-model="formItem.radio" label="2">否</el-radio>
        </el-form-item>
        
        <el-row :span="24"  class="imgContent">
          <el-col :span="4" class="checkContent">
            <el-checkbox v-model="formItem.checked">1*1</el-checkbox>
          </el-col>
          <el-col :span="20" class="imglist">
            <el-row :span="24" type="flex" align="middle" >
              <el-col :span="4">安卓图片：</el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4"><el-button icon="el-icon-plus" size="mini">新增图片</el-button></el-col>
            </el-row>
            <el-row :span="24" type="flex" align="middle" >
              <el-col :span="4">安卓图片：</el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4"><el-button icon="el-icon-plus" size="mini">新增图片</el-button></el-col>
            </el-row>
            <el-row :span="24" type="flex" align="middle" >
              <el-col :span="4">安卓图片：</el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4">图片1<span class="el-icon-close" style="color:red"></span></el-col>
              <el-col :span="4"><el-button icon="el-icon-plus" size="mini">新增图片</el-button></el-col>
            </el-row>
          </el-col>
        </el-row>

      </el-form>
      <span 
        slot="footer" 
        class="dialog-footer">

        <el-button 
          type="primary" 
          @click="onSubmit">提交</el-button>
        <el-button @click="formVisible=false">取消</el-button>
      </span>
    </el-dialog>

  </div>
</template>

<script>
import fetch from '@/utils/fetch'
import { getGlobalTags,addGlobalTags } from '@/api/check'
export default {
  data() {
    return {
      // ====table===
      list: null,
      total: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 15
      },
      formVisible: false,
      isEdit: false,
      tagList: [],
      formItem: {
        gtag_name: '',
        gtag_id: '',
        enable: 1,    // 暂时不能进行删除，默认传1
        input:1,
        radio:'',
        list:[
          {
            width:1,
            height:1
          },
           {
            width:2,
            height:1
          },
           {
            width:2,
            height:2
          },
           {
            width:2,
            height:3
          },
           {
            width:2,
            height:4
          }
        ]
      },
      fileList:[]
    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? 'edit tag' : 'add tag'
    }
  },
  created() {},
  mounted() {
    this.refresh()
  },
  methods: {
    dataFormat(originVal) { // 后台传回来的S
      const date = new Date(originVal)
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s
    },
    refresh() {
      this.$nextTick(() => {
        this.getTagList()
      })
    },
    
    getTagList(){
      this.listLoading = true
      const params = {
        size: this.listQuery.limit,
        page: this.listQuery.page
      }
      getGlobalTags(params).then(res=>{
        this.tagList = res.data
        this.tagList.forEach((ele)=>{
          ele.create_time = this.dataFormat(ele.create_time*1000)
          ele.update_time = this.dataFormat(ele.update_time*1000)
        })
        this.total = res.page_info.total
        this.listLoading = false
      })
    },

    handleSizeChange(val) {  // 分页功能
      this.listQuery.limit = val
      this.getTagList()
    },
    handleCurrentChange(val) { // 改变页码数量
      this.listQuery.page = val
      this.getTagList()
    },
    addTag() {   // button按钮事件
      this.isEdit = false // 编辑状态开关
      this.formVisible = true // 蒙版开关
      this.formItem = {}
    },
    editTag(row, isEdit) {
      this.isEdit = true
      this.formVisible = true
      this.formItem = row
    },
    delTag(row){
      this.$confirm('确认删除？')
        .then(_ => {
          this.formItem = row
          this.formItem.enable = 0 //enable传0表示删除
          this.onSubmit() //调用onSubmit借口发起请求
        })
        .catch(_ => {})
    },
    onSubmit() {
      const params = this.formItem
      addGlobalTags(params).then(res => {
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getTagList()
      })
    },
     handleChange(file, fileList) {
        this.fileList = fileList.slice(-3);
      }
  }
}
</script>
<style lang="scss">
.form{
  .bottom_text{
    line-height: 20px;
    span{
      font-size: 10px;
    color: rgba(128, 128, 128, 0.529411764705882);
    }
    .addBtn{

    }
  }
  .imgContent{
    .checkContent{
      margin-top: 5px;
    }
    .imglist{
      .el-row{
        margin-top: 10px;
      }
    }
  }
}
</style>