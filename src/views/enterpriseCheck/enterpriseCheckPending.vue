<template>
  <div class="app-container calendar-list-container">
    <div class="filter-container">

      <el-form :inline="true" :model="queryCondition" ref="queryCondition" class="demo-form-inline">
        <el-form-item label="公司名称" prop="business_name">
          <el-input v-model="queryCondition.business_name" placeholder="公司名称"></el-input>
        </el-form-item>

        <el-form-item label="联系人" prop="contacts">
          <el-input v-model="queryCondition.contacts" placeholder="联系人"></el-input>
        </el-form-item>

        <el-form-item label="联系手机" prop="contacts_mobile">
          <el-input v-model="queryCondition.contacts_mobile" placeholder="联系手机"></el-input>
        </el-form-item>

        <el-form-item label="提交时间" prop="created_date">
          <el-date-picker v-model="queryCondition.created_date"
                  type="datetimerange"
                  placeholder="选择时间范围"
                  align="right"
                          format="yyyy-MM-dd HH:mm:ss"
          >
          </el-date-picker>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="getList">查询</el-button>
          <el-button @click="resetForm('queryCondition')">重置</el-button>
        </el-form-item>
      </el-form>
    </div>

    <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" border fit highlight-current-row style="width: 100%">


      <el-table-column label="公司">
        <template slot-scope="scope">
          <span>{{scope.row.business_name}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="联系人" width="95">
        <template slot-scope="scope">
          <span>{{scope.row.business_name}}</span>
        </template>
      </el-table-column>

      <el-table-column align="center" label="联系手机" width="95">
        <template slot-scope="scope">
          <span>{{scope.row.business_contacts_mobile}}</span>
        </template>
      </el-table-column>

      <el-table-column width="180px" align="center" label="提交时间">
        <template slot-scope="scope">
          <span>{{scope.row.created_at_txt}}</span>
        </template>
      </el-table-column>

      <el-table-column class-name="status-col" label="状态" width="110">
        <template slot-scope="scope">
          <el-tag >{{scope.row.status_txt}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column align="center" label="操作" width="150">
        <template slot-scope="scope">
          <el-button v-if="scope.row.status!='published'" size="small" type="success"
                     @click="goCheckDetail(scope.row)">
            查看详情
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading" class="pagination-container">
      <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange" :current-page.sync="listQuery.page"
                     :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit" layout="total, sizes, prev, pager, next, jumper" :total="total">
      </el-pagination>
    </div>



  </div>
</template>

<script>
  import { getReviewList } from '@/api/check'
  import { parseTime } from '@/utils'

  export default {
    name: 'enterPriseCheckPengding',

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
          contacts: '',
          contacts_mobile: '',
          created_date: '',
          created_start: this.created_start,
          created_end: '',
        },
      }
    },
    computed: {
    },
    mounted() {
      this.getList();
    },
    methods: {
      getList() {
//        console.log(this.queryCondition.created_date);
        if (this.queryCondition.created_date[0]) {
          this.queryCondition.created_start = parseTime(this.queryCondition.created_date[0], '{y}-{m}-{d} {h}:{i}:{s}');
          this.queryCondition.created_end = parseTime(this.queryCondition.created_date[1], '{y}-{m}-{d} {h}:{i}:{s}');
        } else {
          this.queryCondition.created_start = '';
          this.queryCondition.created_end = '';
        }
//        console.log(this.queryCondition.created_start);
        this.listLoading = true;
        let params = {
          type: 1, // 1 = 企业审核，2 = 合作产品审核，3 = 产品创建审核， 4 = 产品上线审核
          status: 0, // 0 = 审批中，1 = 审批通过，2 = 审批不通过
          limit: this.listQuery.limit,
          page: this.listQuery.page
        };
        Object.assign(params, this.queryCondition);
        getReviewList(params).then(response => {
          console.log('企业审核列表', response);
          this.list = response.data;
          this.total = response.total;
          this.listLoading = false
        })
      },

      // 查询条件重置
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },

      // 跳转到待审核详情页
      goCheckDetail(row) {
        console.log('row', row);
        this.$router.push({path: '/enterpriseCheck/enterpriseCheckDetail', query: row});
      },

      handleSizeChange(val) {
        this.listQuery.limit = val;
        this.getList()
      },
      handleCurrentChange(val) {
        this.listQuery.page = val;
        this.getList()
      },

    }
  }
</script>
