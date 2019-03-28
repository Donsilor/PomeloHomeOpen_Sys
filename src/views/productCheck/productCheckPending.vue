<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">

      <!--=========查询条件==========-->
      <el-form :inline="true" :model="queryCondition" ref="queryCondition" class="demo-form-inline" >
        <el-form-item label="公司名称" prop="business_name">
          <el-input v-model="queryCondition.business_name" placeholder="公司名称"></el-input>
        </el-form-item>

        <el-form-item label="品牌" prop="brand_name">
          <el-input v-model="queryCondition.brand_name" placeholder="品牌"></el-input>
        </el-form-item>

        <el-form-item label="品类" prop="type_id">
          <el-select placeholder="请选择" v-model="queryCondition.type_id">
            <el-option v-for="item in productTypeList"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="型号" prop="model">
          <el-input v-model="queryCondition.model" placeholder="型号"></el-input>
        </el-form-item>

        <el-form-item label="创建时间" prop="created_date">
          <el-date-picker v-model="queryCondition.created_date"
                  type="datetimerange"
                  placeholder="选择时间范围"
                  align="right">
          </el-date-picker>
        </el-form-item>

        <el-form-item label="接入方式" prop="technology_type">
          <el-select placeholder="请选择" v-model="queryCondition.technology_type">
            <el-option v-for="item in productTechnologyType"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" icon="el-icon-search" @click="getList">查询</el-button>
          <el-button @click="resetForm('queryCondition')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!--==========table start=============-->
    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%">
      <!--<el-table-column align="center"  label="record_id" prop="record_id">-->
      <!--</el-table-column>-->

      <el-table-column align="center"  label="公司" prop="business_name">
      </el-table-column>

      <el-table-column align="center"  label="品牌" prop="product_brand_name">
      </el-table-column>

      <el-table-column align="center"  label="品类" prop="product_type_name" width="95">
      </el-table-column>

      <el-table-column align="center"  label="型号" prop="product_model">
      </el-table-column>

      <el-table-column align="center"  label="创建时间" min-width="150">
        <template slot-scope="scope">
          <span>{{scope.row.approved_at_txt}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="接入方式" width="95" prop="product_technology_type">
      </el-table-column>

      <el-table-column  align="center"  class-name="status-col" label="状态" width="110" prop="status_txt">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status | statusFilter">{{scope.row.status_txt}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="100">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status!='published'" size="small" type="success"
                     @click="goCheckDetail(scope.row)">
            <svg-icon icon-class="check2" />审批
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--==========table end=============-->

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
                     :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import { getReviewList, getProductType } from '@/api/check'
  import { productTechnologyType } from '@/utils/config'
import { parseTime } from '@/utils'

  export default {
    name: 'productCheckpending',
    data() {
      return {
        // ====table===
        list: null,
        total: null,
        listLoading: false,
        listQuery: {
          page: 1,
          limit: 10
        },
        // =====查询条件=====
        queryCondition: {
          business_name: '',
          brand_name: '',
          type_id: '',
          model: '',
          created_date: '',
          created_start: '',
          created_end: '',
          technology_type: ''
        },
        productTypeList: [], // 产品品类
        productTechnologyType: productTechnologyType // 接入方式

      }
    },
  //    mounted() {
  // //      console.log('配置文件', productTechnologyType);
  //      this.getList();
  //      this.getProductType();
  //    },
    activated() {
    //      console.log('配置文件', productTechnologyType);
      this.getList()
      this.getProductType()
  },
    methods: {
      getList() {
        // 时间格式化
        if (this.queryCondition.created_date[0]) {
          this.queryCondition.created_start = parseTime(this.queryCondition.created_date[0], '{y}-{m}-{d} {h}:{i}:{s}')
          this.queryCondition.created_end = parseTime(this.queryCondition.created_date[1], '{y}-{m}-{d} {h}:{i}:{s}')
        } else {
          this.queryCondition.created_start = ''
          this.queryCondition.created_end = ''
        }
        this.listLoading = true
        const params = {
          type: 3, // 1 = 企业审核，2 = 合作产品审核，3 = 产品创建审核， 4 = 产品上线审核
          status: 0, // 0 = 审批中，1 = 审批通过，2 = 审批不通过
          limit: this.listQuery.limit,
          page: this.listQuery.page
        }
        Object.assign(params, this.queryCondition)
        getReviewList(params).then(response => {
          console.log('审核产品列表', response)
          this.list = response.data
          this.total = response.total
          this.listLoading = false
        })
      },

      // 获取产品品类
      getProductType() {
        getProductType().then(response => {
          console.log('产品品类', response)
          this.productTypeList = response.list
        })
      },

      handleSizeChange(val) {
        this.listQuery.limit = val
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val
        this.getList()
      },

      // 查询条件重置
      resetForm(formName) {
        this.$refs[formName].resetFields()
        this.handleCurrentChange(1)
      },

      // 跳转到待审核详情页
      goCheckDetail(row) {
        row.approved_user = '' // 防止为null时报错

        this.$router.push({ path: '/productCheck/productCheckDetail', query: row })
      }

    }
  }
</script>
