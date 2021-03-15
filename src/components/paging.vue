<template>
  <div>
    <!-- 分页管理 -->
    <el-row
      v-show="!listLoading"
      class="pagination-container"
      type="flex" 
      justify="end"
    >
      <!-- 页码按钮的数量currenCurrent  sizeChange -->
      <el-pagination
        :small="pagingStatus?true:false"
        :current-page.sync="listQuery.page"
        :page-sizes="pageSize?pageSize:pageStatus"
        :page-size="listQuery.limit"
        :total="total"
        :layout="layout"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"/>
    </el-row>
  </div>
</template>
<script>

export default {
  props: {
    total: {
      type: Number,
      default:0
    },
    pagingStatus: { // 在抽屉组件中使用
      type: String,
      default:''
    },
    pageSize: {
      type: Array || null,
    },
    pageQuery: {
      type: Object || null,
    }
  },
  data() {
    return {
      layout: this.pagingStatus ? 'sizes, total, prev, pager, next ' : 'total, sizes, prev, pager, next, jumper',
      pageStatus: this.pagingStatus ? [5, 10] : [5, 15, 20, 30, 50],
      listLoading: false, // 根据loading来进行显示/隐藏
      listQuery: this.pageQuery ? this.pageQuery : {
        page: 1,
        limit: 5
      }
    }
  },
  watch: {
    total: {
      handler(val) {
        if (val) {
          this.listLoading = false
        } else {
          this.listLoading = true
        }
      },
      immediate: true
    }
  },
  created() {
    console.log('pageQuery:',this.pageQuery)
  },
  methods: {
    // 分页管理
    handleSizeChange(val) {
      console.log('页码', val)
      this.listQuery.page = 1
      this.listQuery.limit = val
      this.$emit('changePage', this.listQuery)
    },
    // 改变页码
    handleCurrentChange(val) {
      this.listQuery.page = val
      this.$emit('changePage', this.listQuery)
    }
  }
}
</script>

<style lang='scss' scoped>
  .pagination-container{
    margin-top: 10px;
  }
</style>
