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
      <el-form label-width="120px">
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
        enable: 1    // 暂时不能进行删除，默认传1
      }
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
      fetch({
        url: 'api/ext/gtags/global',
        data:params
      }).then( res => {
        console.log('2222222', res)
        this.tagList = res.data.data
        this.tagList.forEach((ele)=>{
          ele.create_time = this.dataFormat(ele.create_time*1000)
          ele.update_time = this.dataFormat(ele.update_time*1000)
        })
        this.total = res.data.page_info.total
        this.listLoading = false
      })
    },
    

    handleSizeChange(val) {  // 分页功能
      this.listQuery.limit = val
      console.log(val)
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
      console.log('*row*------------------', row)  
      this.isEdit = true
      this.formVisible = true
      this.formItem = row
    },
    onSubmit() {
      fetch({
        url: 'api/ext/gtags/global',
        method: 'post',
        data: this.formItem
      }).then(res => {
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getTagList()
      })
    }
  }
}
</script>
