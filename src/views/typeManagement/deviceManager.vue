<template>
  <div class="app-container calendar-list-container">
    <el-row :gutter="30">
      <el-col :span="24">
        <el-button type="primary" 
@click="addDevice">新增引导页</el-button>
        <el-button type="ghost" 
@click="addFucSetModal=true">客户端添加设备设置</el-button>
        <el-button class="frt" 
type="primary" @click="handleCurrentChange(1)">查找</el-button>
        <el-select v-model="business_id" class="frt" clearable placeholder="全部厂商">
          <el-option v-for="(item,index) in businessList" 
:key="index" :label="item.name" :value="item.business_id"/>
        </el-select>
        <el-select v-model="child_id" class="frt" clearable placeholder="全部子品类">
          <el-option v-for="(item,index) in childType" 
:key="index" :label="item.name" :value="item.type_id"/>
        </el-select>
        <el-select v-model="type_id" class="frt" clearable placeholder="全部大品类" @change="changeType">
          <el-option v-for="(item,index) in typeTree" 
:key="index" :label="item.name" :value="item.type_id"/>
        </el-select>

      </el-col>
    </el-row>
    <div class="table-container">
      <template>
        <el-table :data="tableData" 
border stripe style="width: 100%">
          <el-table-column prop="type_name" 
label="子品类" width="220"/>
          <el-table-column prop="parent_type_name" 
label="所属大品类" width="220"/>
          <el-table-column prop="model" 
label="产品型号" width="150"/>
          <el-table-column prop="business_name" 
label="厂商"/>
          <el-table-column prop="business_name" 
label="是否融合版" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.app_id=='100001'">是</span>
              <span v-else>否</span>
            </template>
          </el-table-column>
          <el-table-column prop="business_name" 
label="是否默认产品" align="center">
            <template slot-scope="scope">
              <span v-if="scope.row.is_default">是</span>
              <span v-else>否</span>
            </template>
          </el-table-column>
          <el-table-column prop="created_at" 
label="创建时间" width="220"/>
          <el-table-column label="操作" 
width="130" align="center">
            <template slot-scope="scope">
              <el-button
                size="mini"
                type="primary"
                align="center"
                @click="handleEnterPage(scope.row)">编辑</el-button>
            </template>
          </el-table-column>
        </el-table>
        <el-pagination 
@size-change="handleSizeChange" 
:current-page.sync="listQuery.page"
                                   @current-change="handleCurrentChange"
                       :page-sizes="[15,20,30, 50]" 
:page-size="listQuery.limit"
                       ref="pagination"
                       layout="total, sizes, prev, pager, next, jumper" 
:total="total"/>
      </template>
    </div>
    <el-dialog
      :visible.sync="addFucSetModal"
                title="客户端添加设备设置"
      width="30%">
      <span class="danger" 
style="display: inline-block;margin-bottom: 20px;">该设置影响客户端能否添加设备，请确认后谨慎操作</span>
      <div v-for="item in addFucForm">
        <el-checkbox v-model="item.status">{{ item.name }}</el-checkbox>
      </div>
      <!--<div><el-checkbox v-model="addFucForm.isAllowChooseModel">添加设备时允许选择品牌型号</el-checkbox></div>-->
      <span slot="footer" 
class="dialog-footer">
        <el-button @click="addFucSetModal = false">取 消</el-button>
        <el-button type="primary" 
@click="addFuc">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<style>
    .table-container{
        margin-top: 20px;
        padding-bottom: 60px;
    }
    .frt{
        float: right;
        margin-left: 12px;
    }
</style>
<script>
import fetch from '@/utils/fetch'
import helper from '@/utils/helper'
import { getToken } from '@/utils/auth'
export default {
  name: 'ExistedCategory',
      data() {
        return {
          addFucSetModal: false,
          addFucForm: [],
          token: getToken(),
          typeTree: [],
          childType: [],
          businessList: [],
          type_id: '',
          child_id: '',
          business_id: '',
          listQuery: {
            page: 1,
            limit: 15
          },
          tableData: [],
          total: 0,
          listLoading: false
        }
      },
      computed: {
      },
      created() {
      },
      mounted() {
        this.$nextTick(() => {
          this.getList()
          this.getAddType()
          this.getTypeTree()
          this.getBusinessList()
        })
  },
  methods: {
    handleSizeChange(val) {
      this.listQuery.limit = val
      this.listQuery.page = 1
      this.getList()
    },
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.getList()
    },
    getList() {
      this.listLoading = true
      fetch({
        url: '/device/deviceList',
        method: 'post',
        data: {
          'page': this.listQuery.page,
          'token': getToken(),
          'limit': this.listQuery.limit,
          'type_id': this.child_id,
          'parent_type_id': this.type_id==null?'':this.type_id,
          'business_id': this.business_id
        }
      }).then(res => {
        this.listLoading = false
        this.tableData = res.data
        this.total = res.total
        this.$nextTick(() => {
          this.$refs.pagination.internalCurrentPage = res.current_page
        })
      }).catch(res => {
        this.$message({
          type: 'error',
          message: res.msg
        })
      })
    },
    getTypeTree() {
      fetch({
        url: '/producttype/tree',
        method: 'post',
        data: {}
      }).then(res => {
        this.typeTree = res
      })
    },
    getBusinessList() {
      fetch({
        url: '/user/select',
        method: 'get',
        data: {}
      }).then(res => {
        this.businessList = res
      })
    },
    changeType(val) {
      const tmp = this.typeTree.find(item => {
        return item.type_id == parseInt(val)
      })
      this.childType = tmp ? tmp.children : []
      this.child_id = ''
    },
    handleEnterPage(row) {
      this.$router.push({ path: '/typeManagement/deviceDetail', query: { 'id': row.id }})
    },
    // 添加设备
    addDevice() {
      this.$router.push({ path: '/typeManagement/addDevice' })
    },
    // 获取添加方式设置
    getAddType() {
      fetch({
        url: '/device/getAddtype',
        method: 'post',
        data: {
        }
      }).then(res => {
        this.addFucForm = res
        this.addFucForm.forEach((val, index) => {
          val.status = !!val.status
        })
      }).catch(res => {
        this.$message({
          type: 'error',
          message: res.msg
        })
      })
    },
    // 添加方式设置
    addFuc() {
      this.addFucForm.forEach((val, index) => {
        val.status = val.status ? 1 : 0
      })
      fetch({
        url: '/device/setAddtype',
        method: 'post',
        data: {
          'token': this.token,
          'settings': this.addFucForm
        }
      }).then(res => {
        this.$message({
          type: 'success',
          message: '修改设置成功'
        })
        this.addFucSetModal = false
        this.addFucForm.forEach((val, index) => {
          val.status = !!val.status
        })
      }).catch(res => {
        this.$message({
          type: 'error',
          message: res.msg
        })
      })
    },
    search() {
      this.getList()
    }
  }
}
</script>
