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
            <el-option v-for="item in productTechonologyType"
                       :key="item.id"
                       :label="item.name"
                       :value="item.id">
            </el-option>
          </el-select>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
          <el-button @click="resetForm('queryCondition')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <!--==========table start=============-->
    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%">

      <el-table-column min-width="110px" label="公司">
        <template scope="scope">
          <span>{{scope.row.business_name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="110px" label="品牌">
        <template scope="scope">
          <span>{{scope.row.product_brand_name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="110px" label="品类">
        <template scope="scope">
          <span>{{scope.row.product_type_name}}</span>
        </template>
      </el-table-column>

      <el-table-column min-width="110px" label="型号">
        <template scope="scope">
          <span>{{scope.row.product_model}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="创建时间">
        <template scope="scope">
          <span>{{scope.row.approved_at_txt}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="接入方式" width="95">
        <template scope="scope">
          <span>{{scope.row.product_techonology_type}}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="状态" width="110">
        <template scope="scope">
          <el-tag >{{scope.row.status_txt}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="150">
        <template scope="scope">
          <el-button v-if="scope.row.status!='published'" size="small" type="success"
                     @click="goCheckPengdingDetail(scope.row)">
            查看详情
          </el-button>
        </template>
      </el-table-column>

    </el-table>
    <!--==========table end=============-->

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
                     :page-sizes="[10,20,30, 50]" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>

  </div>
</template>

<script>
  import { getReviewList, getProductType } from '@/api/check'
  import waves from '@/directive/waves/index.js' // 水波纹指令
  import { productTechonologyType } from '@/utils/config';

  export default {
    name: 'productCheckpending',
    directives: {
      waves
    },
    data() {
      return {
        // ====table===
        list: null,
        total: null,
        listLoading: false,
        listQuery: {
          page: 1,
          limit: 10,
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
        productTechonologyType: productTechonologyType, // 接入方式

      }
    },
    filters: {
      statusFilter(status) {
        const statusMap = {
          published: 'success',
          draft: 'gray',
          deleted: 'danger'
        }
        return statusMap[status]
      },
      typeFilter(type) {
        return calendarTypeKeyValue[type]
      }
    },
    created() {
//      console.log('配置文件', productTechonologyType);
      this.getList();
      this.getProductType();
    },
    methods: {
      getList() {
        this.listLoading = true
        let params = {
          token: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vZGV2cGhvLmV2ZXJncmFuZGUuY24vaW5kZXgucGhwL2FkbWluL2xvZ2luIiwiaWF0IjoxNTEwNzExMDkxLCJleHAiOjE1MTE5MjA2OTEsIm5iZiI6MTUxMDcxMTA5MSwianRpIjoiMjFwelkzeld1ZUhtS0haaiIsInN1YiI6M30.cx2jVQcZ_Z-a2jlbu9eJ3lVDBOCnfr_l6TDK908MR-I',
          type: 3, // 1 = 企业审核，2 = 合作产品审核，3 = 产品创建审核， 4 = 产品上线审核
          status: 0, // 0 = 审批中，1 = 审批通过，2 = 审批不通过
          limit: 10,
          page: this.listQuery.page,
//          business_name: 'test',
//          model: 'modle'
        };
        Object.assign(params, this.queryCondition);
        getReviewList(params).then(response => {
          console.log('审核产品列表', response.data);
          this.list = response.data.result.data;
          this.total = response.data.result.total;
          this.listLoading = false
        })
      },

      // 获取产品品类
      getProductType() {
        getProductType().then(response => {
//          console.log('产品品类', response.data);
          this.productTypeList = response.data.result.list;
        });
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
        this.$refs[formName].resetFields();
      },

      // 跳转到待审核详情页
      goCheckPengdingDetail() {
        this.$router.push({path: '/productCheck/productCheckDetail', query: {}});
      },

    }
  }
</script>
