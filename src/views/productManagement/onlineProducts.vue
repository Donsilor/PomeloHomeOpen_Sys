<template>
    <div class="app-container calendar-list-container">
        <el-row style="padding-bottom: 30px;">
            <el-select v-model="queryCondition.business_id" clearable placeholder="全部厂商">
                <el-option v-for="(item,index) in businessList" :key="index" :label="item.name" :value="item.business_id">

                </el-option>
            </el-select>
            <el-select v-model="queryCondition.brand_id" clearable placeholder="全部品牌">
                <el-option v-for="(item,index) in brandsList" :key="index" :label="item.brand_name" :value="item.brand_id">

                </el-option>
            </el-select>
            <el-select v-model="queryCondition.type_id" clearable placeholder="全部品类">
                <el-option v-for="(item,index) in typeList" :key="index" :label="item.name" :value="item.id">

                </el-option>
            </el-select>
            <el-button type="primary" @click="handleCurrentChange(1)">查找</el-button>
        </el-row>
        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">
            <el-table-column align="center" label="品类" prop="type_name">
            </el-table-column>

            <el-table-column align="center" label="品牌" prop="brand_name">
            </el-table-column>

            <el-table-column align="center" label="型号" prop="model">
            </el-table-column>

            <el-table-column align="center" label="厂商" prop="business_name">
            </el-table-column>

            <el-table-column align="center" label="版本号">
                <template slot-scope="scope">
                    {{scope.row.version_no_H5?'H5控制页版本'+scope.row.version_no_H5:''}}{{' 固件版本'+scope.row.version_no_firmware}}
                </template>
            </el-table-column>

            <el-table-column align="center" label="创建时间" prop="created_at">
            </el-table-column>

            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="toDetai(scope.row)" size="small" type="primary">
                        查看详情
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
    import { getProductList } from '@/api/check'
import fetch from '@/utils/fetch'
import { getToken } from '@/utils/auth'
    export default {
      name: 'onlineProducts',
      data() {
        return {
          // ====table===
          list: null,
          total: null,
          listLoading: false,
          businessList: [],
          brandsList: [],
          typeList: [],
          queryCondition: {
            business_id: '',
            brand_id: '',
            type_id: ''
          },
          listQuery: {
            page: 1,
            limit: 15
          }
        }
      },
      computed: {},
      created() {
        this.getBusinessList()
        this.getTypeList()
        this.getBrandList()
  },
      mounted() {
        this.$nextTick(() => {
          this.refresh()
        })
  },
      methods: {
        refresh() {
          this.getList()
        },
        getList() {
          this.listLoading = true
          const params = {
            limit: this.listQuery.limit,
            page: this.listQuery.page,
            search_type: 1
          }
          if (this.queryCondition.business_id != '') {
            params.business_id = this.queryCondition.business_id
          }
          if (this.queryCondition.brand_id != '') {
            params.brand_id = this.queryCondition.brand_id
          }
          if (this.queryCondition.type_id != '') {
            params.type_id = this.queryCondition.type_id
          }
          getProductList(params).then(response => {
            this.list = response.data
            this.total = response.total
            this.listLoading = false
          })
        },
        getBusinessList() {
          fetch({
            url: '/user/select',
            method: 'get',
            data: { is_online: 1 }
          }).then(res => {
            this.businessList = res
          })
        },
        getBrandList() {
          fetch({
            url: '/brand/select',
            method: 'post',
            data: { is_online: 1 }
          }).then(res => {
            this.brandsList = res
          })
        },
        getTypeList() {
          fetch({
            url: '/admin/product/type_lists',
            method: 'post',
            data: {}
          }).then(res => {
            this.typeList = res.list
          }).catch(e => {
            this.$message.error(e.msg)
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
        toDetai(row) {
          const query = {
            product_id: row.product_id
          }
          this.$router.push({ path: '/productManagement/onlineProductDetail', query: query })
        }
      }
    }
</script>
