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
        prop="gtag_id" />
      <el-table-column 
        align="center"
        label="标签名称"
        prop="gtag_name" />
      <el-table-column 
        align="center"
        label="面板是否可调"
        prop="panel_can">
        <template slot-scope="scope">
          <div>
            {{scope.row.panel_can.toString() === '1'?'是':'否' }}
          </div>
        </template>
      </el-table-column>>
      <el-table-column 
        align="center"
        label="创建时间"
        prop="create_time" />
      <el-table-column 
        align="center"
        label="更新时间"
        prop="update_time" />

      <el-table-column 
        align="center"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button 
            size="small"
            type="danger"
            @click="delTag(scope.row)">
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
        @current-change="handleCurrentChange" />
    </div>
    <!-- 添加或编辑tag弹窗 -->
    <addTagView 
      @getTagList="getTagList"
      :isEdit="isEdit" 
      :formVisible="formVisible" 
      @closeView="formVisible = false" 
      :row="editRow"  />

  </div>
</template>

<script>
import fetch from '@/utils/fetch'
import { getGlobalTags, addGlobalTags } from '@/api/check'
import addTagView from '@/components/typeManagement/addTagView';
export default {
  components:{
    addTagView
  },
  data() {
    return {
      total: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 15
      },
      formVisible: false,
      isEdit: false,
      tagList: [],
      editRow:null
    }
  },
  computed: {
  },
  watch: {
    cardList(){
      console.log('cardList变化了')
    }
  },
  created() { },
  mounted() {
    this.refresh()
    // this.getCardSizeList()
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

    getTagList() {
      this.listLoading = true
      const params = {
        size: this.listQuery.limit,
        page: this.listQuery.page
      }
      getGlobalTags(params).then(res => {
        this.tagList = res.data
        console.log('this.tagList:', this.tagList)
        this.tagList.forEach((ele,index) => {
          ele.create_time = this.dataFormat(ele.create_time * 1000)
          ele.update_time = this.dataFormat(ele.update_time * 1000)
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
      this.editRow = null
      this.isEdit = false // 编辑状态开关
      this.formVisible = true // 蒙版开关
    },
    editTag(row, isEdit) {
      this.editRow = row
      this.isEdit = true
      this.formVisible = true
    },
    delTag(row) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.onSubmit(row) //调用onSubmit借口发起请求
        })
        .catch(_ => { })
    },
    onSubmit(row) {
      const params = Object.assign({},row,{
        enable:0,//enable传0表示删除
        gtag_img:row.gtag_img&&row.gtag_img.indexOf('http') > -1?'oss_temp'+row.gtag_img.split('oss_temp')[1]:row.gtag_img
      })
      console.log('删除发送的params：',params);
      addGlobalTags(params).then(res => {
        this.$message.success('操作成功！')
        this.getTagList()
      }).catch(e=>{
        console.log('出错了：',e);
      })
    }
  }
}
</script>
<style lang="scss">
</style>