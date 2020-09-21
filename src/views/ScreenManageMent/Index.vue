<template>
  <div class="screen-container">
    <h3>屏幕配置列表</h3>
    <el-table
      :data="tableData"
      border
      style="width: 1100px">
      <el-table-column
        fixed
        prop="date"
        label="配置日期"
        width=""/>
      <el-table-column
        prop="name"
        label="配置名"
        width=""/>
      <el-table-column
        prop="province"
        label="备注"
        width=""/>
      <el-table-column
        label="操作"
        width="">
        <template slot-scope="scope">
          <el-button
            type="text"
            size="small"
            @click="handleClick(scope.row)">查看</el-button>
          <el-button
            type="text"
            @click="handleClick(scope.row)"
            size="small">编辑</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  name: 'Index',

  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '配置1',
        province: '屏幕配置',
      }, {
        date: '2016-05-02',
        name: '配置2',
        province: '屏幕配置',
      }, {
        date: '2016-05-02',
        name: '配置3',
        province: '屏幕配置',
      }, {
        date: '2016-05-02',
        name: '配置4',
        province: '屏幕配置',
      }, ]
    }
  },
  methods: {
    handleClick(row) {
      this.$router.push('/screenManagement/screenEdite')
    }
  },
}
</script>

<style scoped>
.screen-container{
  margin: 0px 20px;
}
</style>
