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
                                    start-placeholder="选择开始日期"
                                    end-placeholder="选择结束日期"
                                    align="left"
                                    format="yyyy-MM-dd HH:mm:ss"
                    >
                    </el-date-picker>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary" icon="el-icon-search" @click="handleCurrentChange(1)">查询</el-button>
                    <el-button @click="resetForm('queryCondition')">重置</el-button>
                </el-form-item>
            </el-form>
        </div>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">

            <!--<el-table-column align="center"  label="record_id" prop="record_id" width="100">-->
            <!--</el-table-column>-->

            <el-table-column align="center" label="公司名称" prop="business_name">
            </el-table-column>

            <el-table-column align="center" label="联系人" prop="business_contacts">
            </el-table-column>

            <el-table-column align="center" label="联系手机" prop="business_contacts_mobile">
            </el-table-column>

            <el-table-column align="center" label="提交时间" prop="created_at_txt">
            </el-table-column>

            <!--<el-table-column align="center" class-name="status-col" label="状态" prop="status_txt" width="110">
                <template slot-scope="scope">
                    <el-tag :type="scope.row.status | statusFilter">{{scope.row.status_txt}}</el-tag>
                </template>
            </el-table-column>-->

            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button v-if="scope.row.status!='published'" size="small" type="primary"
                               @click="goCheckDetail(scope.row)">
                        <!--<svg-icon icon-class="check2"/>-->
                        进入审核
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page.sync="listQuery.page"
                           :page-sizes="[15,20,30, 50]" :page-size="listQuery.limit"
                           layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import { getReviewList } from '@/api/check'
    import { parseTime, transDictValue } from '@/utils'
    import { statusFilter } from '@/utils/filter'

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
            limit: 15
          },
          // =====查询条件=====
          queryCondition: {
            business_name: '',
            contacts: '',
            contacts_mobile: '',
            created_date: '',
            created_start: this.created_start,
            created_end: ''
          }
        }
      },
      computed: {},
      created() {
        // console.log(transDictValue('企业审核', 'checkType'));
      },
      mounted() {
        this.$nextTick(() => {
          this.getList()
        })
        this.$store.dispatch('GetAuditMenus')
  },
      activated() {
        this.getList()
  },
      methods: {
        getList() {
          if (this.queryCondition.created_date) {
            this.queryCondition.created_start = parseTime(this.queryCondition.created_date[0], '{y}-{m}-{d} {h}:{i}:{s}')
            this.queryCondition.created_end = parseTime(this.queryCondition.created_date[1], '{y}-{m}-{d} {h}:{i}:{s}')
          } else {
            this.queryCondition.created_start = ''
            this.queryCondition.created_end = ''
          }
          this.listLoading = true
          const params = {
            type: 1, // 1 = 企业审核，2 = 合作产品审核，3 = 产品创建审核， 4 = 产品上线审核
            status: 0, // 0 = 审批中，1 = 审批通过，2 = 审批不通过
            limit: this.listQuery.limit,
            page: this.listQuery.page
          }
          Object.assign(params, this.queryCondition)
          getReviewList(params).then(response => {
            this.list = response.data
            this.total = response.total
            this.listLoading = false
          })
        },

        // 查询条件重置
        resetForm(formName) {
          this.$refs[formName].resetFields()
          this.handleCurrentChange(1)
        },

        // 跳转到待审核详情页
        goCheckDetail(row) {
          this.$router.push({ path: '/auditManagement/enterpriseToAudit',
            query: { record_id: row.record_id, type: 'audit', business_name: row.business_name }})
        },

        handleSizeChange(val) {
          this.listQuery.limit = val
          this.getList()
        },
        handleCurrentChange(val) {
          this.listQuery.page = val
          this.getList()
        }

      }
    }
</script>
