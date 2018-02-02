<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="primary" @click="addDevice">新增设备</el-button>
                <el-button type="ghost" @click="addFucSetModal=true">添加方式设置</el-button>
            </el-col>
        </el-row>
        <div class="table-container">
            <template>
                <el-table :data="tableData" border stripe style="width: 100%">
                    <el-table-column  prop="type_name" label="子品类" width="220"></el-table-column>
                    <el-table-column  prop="parent_type_name" label="所属大品类" width="220"></el-table-column>
                    <el-table-column prop="model" label="设备型号" width="150"></el-table-column>
                    <el-table-column prop="business_name" label="厂商"></el-table-column>
                    <el-table-column prop="business_name" label="是否默认设备" align="center">
                        <template slot-scope="scope">
                            <span v-if="scope.row.is_default">是</span>
                            <span v-else>否</span>
                        </template>
                    </el-table-column>
                    <el-table-column  prop="created_at" label="创建时间" width="220"></el-table-column>
                    <el-table-column label="操作"  width="130" align="center">
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
                        layout="prev, pager, next"
                        :total="total"
                        :page-size="limit"
                        @current-change="handleCurrentChange"
                >
                </el-pagination>
            </template>

        </div>
        <el-dialog
                title="添加方式设置"
                :visible.sync="addFucSetModal"
                width="30%">
            <span class="danger" style="display: inline-block;margin-bottom: 20px;">该设置影响所有设备的添加方式，请确认后操作</span>
            <div v-for="item in addFucForm">
                <el-checkbox v-model="item.status">{{item.name}}</el-checkbox>
            </div>
            <!--<div><el-checkbox v-model="addFucForm.isAllowChooseModel">添加设备时允许选择品牌型号</el-checkbox></div>-->
            <span slot="footer" class="dialog-footer">
                <el-button @click="addFucSetModal = false">取 消</el-button>
                <el-button type="primary" @click="addFuc">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>
<style>
    .table-container{
        margin-top: 20px;
        padding-bottom: 60px;
    }
</style>
<script>
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
  export default {
      name: 'existedCategory',
      computed: {
      },
      created() {
      },
      mounted() {
          this.getList(1);
          this.getAddType();
      },
      data() {
          return {
              tableData: [],
              addFucSetModal : false,
              addFucForm:[],
              total : 0,
              limit : 0,
              token : getToken()
          }
      },
      methods: {
          handleCurrentChange(val){
            this.getList(val);
          },
          getList(page){
              fetch({
                  url: '/device/deviceList',
                  method: 'post',
                  data: {
                      'page' :page,
                      'token' : getToken(),
                      'limit' : 15
                  }
              }).then(res=>{
                  this.tableData = res.data;
                  this.total = Number(res.total);
                  this.limit = Number(res.per_page);
              }).catch(res=>{
                  this.$message({
                      type: 'error',
                      message: res.msg
                  });
              })
          },
          handleEnterPage(row){
              this.$router.push({path: '/typeManagement/deviceDetail', query: {'id' : row.id}});
          },
          //添加设备
          addDevice(){
              this.$router.push({path: '/typeManagement/addDevice'});
          },
          //获取添加方式设置
          getAddType(){
              fetch({
                  url: '/device/getAddtype',
                  method: 'post',
                  data: {
                  }
              }).then(res=>{
                  this.addFucForm = res;
                  this.addFucForm.forEach((val,index)=>{
                      val.status = val.status ? true : false;
                  });
              }).catch(res=>{
                  this.$message({
                      type: 'error',
                      message: res.msg
                  });
              })
          },
          //添加方式设置
          addFuc(){
              this.addFucForm.forEach((val,index)=>{
                  val.status = val.status ? 1 : 0;
              });
              fetch({
                  url: '/device/setAddtype',
                  method: 'post',
                  data:{
                      'token' : this.token,
                      'settings' : this.addFucForm
                  },
              }).then(res=>{
                  this.$message({
                      type: 'success',
                      message: '修改设置成功'
                  });
                  this.addFucSetModal = false;
                    this.addFucForm.forEach((val,index)=>{
                      val.status = val.status ? true :  false;
                  });
              }).catch(res=>{
                  this.$message({
                      type: 'error',
                      message: res.msg
                  });
              })
          }
      }
  }
</script>
