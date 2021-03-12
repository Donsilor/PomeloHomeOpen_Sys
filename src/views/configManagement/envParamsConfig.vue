<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addCart">
        新增参数
      </el-button>
    </el-row>

    <el-table 
      v-loading="listLoading" 
      :data="tagList" 
      element-loading-text="给我一点时间" 
      stripe 
      fit 
      highlight-current-row 
     >
     <el-table-column
        v-for="(item,index) in paramsList"
        :key="index"
        align="center" 
        :label="item.title" 
        :prop="item.key"/>

      <!-- <el-table-column 
        align="center" 
        label="id">
        <template slot-scope="scope">
          <div>
            {{scope.row.x}}*{{scope.row.y}}
          </div>
        </template>
      </el-table-column>
        <el-table-column 
        align="center" 
        label="名称" 
        prop=""/>
         <el-table-column 
        align="center" 
        label="单位" 
        prop=""/>
         <el-table-column 
        align="center" 
        label='等级"低"名称' 
        prop=""/>
         <el-table-column 
        align="center" 
        label='等级"中"名称'  
        prop=""/>
         <el-table-column 
        align="center" 
        label='等级"高"名称' 
        prop=""/>
         <el-table-column 
        align="center" 
        label="调节间隔" 
        prop=""/>
         <el-table-column 
        align="center" 
        label="最小值" 
        prop=""/>
         <el-table-column 
        align="center" 
        label="调节默认低值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="舒适区默认低值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="舒适区默认高值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="调节默认高值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="最大值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="权重" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="函数期望值" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="函数方差" 
        prop=""/>
        <el-table-column 
        align="center" 
        label="启用/禁用" 
        prop=""/> -->
      <el-table-column 
        align="center" 
        label="操作" 
        width="250">
        <template slot-scope="scope">
          <!-- <el-button 
            size="small" 
            type="danger"
            @click="delCard(scope.row)" >
            删除
          </el-button> -->
          <el-button 
            size="small" 
            type="primary" 
            @click="editCard(scope.row)">
            修改
          </el-button>
          <el-button 
            icon="el-icon-upload2"
            size="small"
             @click="sortChange(scope.row,1)"
            type="">
          </el-button>
          <el-button 
            icon="el-icon-download"
            size="small"
            @click="sortChange(scope.row,1)" 
            type="">
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <!-- <div 
      v-show="!listLoading" 
      class="pagination-container">
      <el-pagination 
        :current-page.sync="listQuery.page" 
        :page-sizes="[15,20,30, 50]" 
        :page-size="listQuery.limit" 
        :total="total" 
        layout="total, sizes, prev, pager, next, jumper" 
        @size-change="handleSizeChange" 
        @current-change="handleCurrentChange"/>
    </div> -->

    <el-dialog 
      :visible.sync="formVisible" 
      :title="dialogTitle">
      <el-form label-width="120px">
        <el-form-item 
          label="宽">
          <el-input 
            v-model="formItem.x" 
            type="input"/>
        </el-form-item>
        <el-form-item label="高">
          <el-input 
            v-model="formItem.y" 
            type="input"/>
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

    <paramsConfigView 
      v-if="addView" 
      :configDetail="configDetail"
      :addView="addView"
      :op="op"
      @refresh="refresh"
      @closeView="closeView"/>
      <Paging
        :pageQuery="listQuery"
        :total="total"
        pagingStatus=""
        @changePage="currentPageChange"/>
  </div>
</template>

<script>
import fetch from '@/utils/fetch'
import { addGlobalTags } from '@/api/check'
import { cardSizeList,cardOperation } from '@/api/screenManage'
import paramsConfigView from "@/components/configManagement/paramsConfigView"
import { queryParams,updateParams } from '@/api/config.js';
import Paging from '@/components/paging'
export default {
  components:{
    paramsConfigView,
    Paging
  },
  data() {
    return {
      // ====table===
      list: null,
      // total: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 5
      },
      formVisible: false,
      isEdit: false,
      tagList: [],
      formItem: {
        y: '',
        x: '',
        operator: '' //1：新增、2：修改、3：删除
      },
      addView:false,
      configDetail:{},
      op:'',
       paramsList:[
        {title:'room_id',key:'room_id',required:true},
        {title:'名称',key:'param_name',required:true},
        {title:'单位',key:'unit',required:true},
        {title:'等级"低"名称',key:'name_low',required:true},
        {title:'等级"中"名称',key:'name_mid',required:true},
        {title:'等级"高"名称',key:'name_high',required:true},
        {title:'调节间隔',key:'step',required:true},
        {title:'最小值',key:'min',required:true},
        {title:'调节默认低值',key:'default_low',required:true},
        {title:'舒适默认低值',key:'comfort_low',required:true},
        {title:'舒适默认高值',key:'comfort_high',required:true},
        {title:'调节默认高值',key:'default_high',required:true},
        {title:'最大值',key:'max',required:true},
        {title:'权重',key:'weight',required:true},
        {title:'正太分布期望值',key:'expect',required:true},
        {title:'正太分布方差',key:'deviation',required:true},
        {title:'启用状态',key:'enable',required:true}
        // {title:'是否变更排序',key:'order_change',required:true}
      ],
      total:10,

    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? '修改卡片' : '新增卡片'
    }
  },
  created() {},
  mounted() {
    this.refresh()
  },
  methods: {
    sortChange(row,sort_change){
      const params = Object.assign({},row,{
        sort_change:sort_change
      })
      updateParams(params).then(res=>{
          console.log('修改参数返回：',res);
          if (res.code) {
            this.$message.success('修改成功！')
            this.refresh()
          }else{
            this.$message.error(res.msg)
          }
        })
    },
    currentPageChange (listQuery) {
      console.log('传入的分页查询参数：',listQuery);
      const params = {
         begin:listQuery.page-1,
          size:listQuery.limit
      }
      this.query(params)
      // Object.assign(this.listQuery, {
      //   page: listQuery.page,
      //   limit: listQuery.limit
      // })
      // this.getTaskList()
    },
    closeView(){
      this.addView = false
    },
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
        // this.getCardSizeList()
         const params = {
           begin:this.listQuery.page-1,
           size:this.listQuery.limit
         }
         this.query(params)
      })
    },
    query(params){
       this.listLoading = true
      queryParams(params).then(res=>{
          console.log('查询的结果：',res);
          this.tagList = res.data
           this.listLoading = false
        })
    },
    getCardSizeList(){
      this.listLoading = true
      const params = {
        size: this.listQuery.limit,
        page: this.listQuery.page
      }
      cardSizeList(params).then(res=>{
        console.log('2222222', res)
        this.tagList = res.data
        this.tagList.forEach((ele)=>{
          ele.create_time = this.dataFormat(ele.create_time*1000)
          ele.update_time = this.dataFormat(ele.update_time*1000)
        })
        //this.total = res.page_info.total
        this.listLoading = false
      })
    },

    handleSizeChange(val) {  // 分页功能
      this.listQuery.limit = val
      console.log(val)
      this.getCardSizeList()
    },
    handleCurrentChange(val) { // 改变页码数量
      this.listQuery.page = val
      this.getCardSizeList()
    },
    addCart() {   // button按钮事件
      this.op = "add"
      this.addView = true
      this.configDetail = {}
      // this.isEdit = false // 编辑状态开关
      // this.formVisible = true // 蒙版开关
      // this.formItem = {}
      // this.formItem.operator = 1
    },
    editCard(row) {
      console.log('row:',row);
      this.op = "edit"
      this.configDetail = row
      this.addView = true
      // console.log('*row*------------------', row)  
      // this.isEdit = true
      // this.formVisible = true
      // this.formItem = row
      //  this.formItem.operator = 2
    },
    delCard(row){
      // this.$confirm('确认删除？')
      //     .then(_ => {
      //       console.log(8888);
      //       this.formItem = row
      //        this.formItem.operator = 3
      //       this.onSubmit(); //调用onSubmit借口发起请求
      //     })
      //     .catch(_ => {});
    },
    onSubmit() {
      const params = this.formItem
      console.log('请求参数：',JSON.stringify(params));
      cardOperation(params).then(res => {
        console.log('返回的数据：',res);
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getCardSizeList()
      })
    }
  }
}
</script>
