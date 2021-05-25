<template>
  <div class="wrap">
    <div class="btn-group">
      <div class="left">
        <!-- <el-button type="primary" @click="handlerClick('addBasic')">添加标准功能</el-button> -->
        <el-button @click="handlerClick('addCustom')">添加自定义功能</el-button>
        <el-button @click="handlerClick('into')">快速导入</el-button>
        <el-button @click="handlerClick('PhysicalModel')">物模型TSL</el-button>
      </div>
    </div>
    <!-- table -->
    <div class="table">
      <el-table
        :data="tableData"
        :header-cell-style="{background:'#eef1f6',color:'#606266'}"
        style="width: 100%">
        <template slot="empty">
          <emptyView style="margin:10px"/>
        </template>
        <el-table-column
          prop="parentId"
          label="功能类型"
          align="center"
        />
        <el-table-column
          prop="name"
          label="功能名称"
          align="center"
        />
        <el-table-column
          prop="identifier"
          label="标识符"
          align="center"
        />
        <el-table-column
          prop="types"
          label="数据类型/调用方式/事件类型"
          align="center"
        />
        <el-table-column
          label="操作"
          align="center"
        >
          <template slot-scope="scope">
            <el-button
              size="mini"
              type="primary"
              @click="handlerEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button
              size="mini"
              type="danger"
              @click="handlerDel(scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <!-- 导入物模型 -->
    <modelDialog 
      v-if="showImportModel.show" 
      :show-import-model="showImportModel" 
      :import-phydata="importPhydata" 
      @close-view="showImportModel.show = false" 
      @getImportPhyData="getImportPhyData"/>
    <!-- 物模型数据展示dialog -->
    <physicalModelDailog 
      :res-data="resData" 
      :dialog-visible="dialogVisible" 
      @open="dialogVisible=false"/>
    <!-- 编辑dialog -->
    <viewMoreDailog 
      v-if="infosDialogVisible" 
      :pro-params="proParams" 
      :rowsdata="rowsData" 
      :infos-dialog-visible="infosDialogVisible" 
      @open-view-dialog="infosDialogVisible=false"/>
    <!-- 添加自定义dialog -->
    <addCustomDailog 
      v-if="addCustomDialogVisible" 
      :pro-params="proParams" 
      :add-custom-dialog-visible="addCustomDialogVisible" 
      @open-addcustom-dialog="addCustomDialogVisible=false"/>
  </div>
</template>
<script>
// import { copy } from '@/utils'
import { getModel, delModel } from '@/api/categoryManager'
import { unitsName, publishModel } from '@/api/productRegistration'
import emptyView from '@/components/ruleEngine/empty'
import modelDialog from '@/components/functionDefinitionDailogs/importModelDialog' // TODO:
import physicalModelDailog from '@/components/functionDefinitionDailogs/PhysicalModelDailog'
import viewMoreDailog from '@/components/functionDefinitionDailogs/viewMoreDailog' // TODO:
import addCustomDailog from '@/components/functionDefinitionDailogs/addCustomDailog' // TODO:
export default {
  components: {
    emptyView,
    modelDialog,
    physicalModelDailog, 
    viewMoreDailog,
    addCustomDailog
  },
  props: {
    categoryId: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      sRow: null,
      tableData: [],
      resData: [], // 传给数据展示dialog的值
      rowsData: {}, // 传给编辑dialog的值
      showImportModel: { // modelDialog开关
        show: false
      },
      dialogVisible: false, // physicalModelDailog开关
      importPhydata: {
        type: 'category',
        beforeKey: '',
        date: Date.parse(new Date())
      },
      infosDialogVisible: false, // infosDialog开管
      addCustomDialogVisible: false, // addcustomdialog开关
      proParams: {}
    }
  },
  created() {
    // this.sRow = JSON.parse(this.$route.query.sRow)
    this.getDraftModelData()
    this.getUnitsName()
    // this.getThingModelData()
  },
  mounted() {
  },
  methods: {
    getImportPhyData(val) {
      this.getDraftModelData(val)
    },
    /* getThingModelData (val) {
      console.log(val)
      this.tableData = []
      const params = {
        params: {
          productKey: val || this.sRow.productKey
        }
      }
      getThingModel(params).then(res => {
        this.resData = res.data.data.thingModel // 模型数据展示时需要profile'
        const physicalModelData = Object.assign({}, res.data.data.thingModel)
        delete physicalModelData.profile
        // console.log(Object.values(physicalModelData).reverse())
        for (let index = 0; index < Object.values(physicalModelData).length; index++) {
          Object.values(physicalModelData)[index].forEach((item) => {
            if (index === 0) {
              item.parentId = '服务'
            } else if (index === 1) {
              item.parentId = '属性'
            } else {
              item.parentId = '事件'
            }
          })
        }
        Object.values(physicalModelData).forEach((item) => {
          item.forEach((ele) => {
            if (ele.callType) ele.types = ele.callType
            if (ele.dataType) ele.types = ele.dataType.type
            if (ele.type) ele.types = ele.type
            // if (ele.accessMode) ele.accessMode = ele.accessMode === 'r' ? '只读' : '读写'
            this.tableData.push(ele)
          })
        })
        console.log(this.tableData)
      }).then(() => {
        this.getUnitsName()
      })
    }, */
    // 获取modelData
    getDraftModelData(val) {
      this.tableData = []
      const params = {
        params: {
          categoryId: this.categoryId
        }
      }
      getModel(params).then(res => {
        console.log(res.data.data)
        this.resData = res.data.data.thingModel // 模型数据展示时需要profile'
        const physicalModelData = Object.assign({}, res.data.data.thingModel)
        delete physicalModelData.profile
        // console.log(Object.values(physicalModelData).reverse())
        for (let index = 0; index < Object.values(physicalModelData).length; index++) {
          Object.values(physicalModelData)[index].forEach((item) => {
            if (index === 0) {
              item.parentId = '服务'
            } else if (index === 1) {
              item.parentId = '属性'
            } else {
              item.parentId = '事件'
            }
          })
        }
        Object.values(physicalModelData).forEach((item) => {
          item.forEach((ele) => {
            if (ele.callType) ele.types = ele.callType
            if (ele.dataType) ele.types = ele.dataType.type
            if (ele.type) ele.types = ele.type
            this.tableData.push(ele)
          })
        })
        console.log(this.tableData)
      })
    },
    // 获取单位名称
    getUnitsName() {
      const params = {
        params: {}
      }
      unitsName(params).then((res) => {
        res.data.data.forEach((item) => {
          this.uName = item.unitName + '/' + item.unit
          item.uName = this.uName
        })
        console.log(res.data.data)
        sessionStorage.setItem('selList', JSON.stringify(res.data.data))
      })
    },
    goBack() {
      window.history.go(-1)
    },
    copy(val) {
      console.log(1)
      /* copy(val, () => {
        this.$message({
          type: 'success',
          message: '复制成功'
        })
      }) */
    },
    handlerClick(val) {
      switch (val) {
      case 'addBasic':
        console.log('addBasic')
        break
      case 'addCustom':
        this.proParams.type = 'category'
        this.proParams.prokey = this.categoryId
        this.addCustomDialogVisible = true
        console.log('addCustom')
        break
      case 'into':
        this.importPhydata.date = Date.parse(new Date())
        this.importPhydata.beforeKey = this.categoryId
        this.showImportModel.show = true
        break
      case 'PhysicalModel':
        this.dialogVisible = true
        break
      }
    },
    handlerEdit(index, row) {
      // this.proParams.prokey = this.sRow.productKey
      this.proParams.type = 'category'
      this.proParams.prokey = this.categoryId
      this.infosDialogVisible = true
      row.status = 'edit'
      row.index = index
      this.rowsData = row
      console.log(index, row)
    },
    handlerDel(row) {
      this.$confirm('确定删除?', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(() => {
        console.log(row)
        const params = {
          params: {
            categoryId: this.categoryId,
            identifier: row.identifier,
            abilityType: row.parentId === '服务' ? 2 : row.parentId === '事件' ? 3 : 1
          }
        }
        console.log('parans', params)
        delModel(params).then((res) => {
          if (res.data.code === 200) {
            this.$message.success('删除成功')
            this.getDraftModelData()
          }
        })
      }).catch(() => {
        this.$message({
          type: 'info',
          message: '已取消删除'
        })
      })
    },
    publish() {
      const params = {
        params: {
          productKey: this.sRow.productKey
        }
      }
      publishModel(params).then((res) => {
        if (res.data.code === 200) {
          window.history.go(-1)
        }
      })
    }
  }
}
</script>

<style lang='scss' scoped>
  .header{
    display: flex;
    align-items: center;
    margin-bottom: 24px;
    .go-back{
      cursor: pointer;
    }
    .el-icon-back{
      font-size: 20px;
      font-weight: bold;
      width: 25px;
    }
    .name{
      margin-left: 20px;
      font-size: 28px;
      font-weight: 900;
    }
  }
  .infos{
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    font-size: 12px;
    margin-bottom: 16px;
    .infos-wrap{
      margin-bottom: 8px;
      span{
        margin-left: 20px;
        cursor: pointer;
        color: rgb(0, 112, 204);
      }
      .title{
        color: #888888;
      }
    }
  }
  .btn-group{
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    .right{
      margin-left: 10px;
    }
  }
  .table{
    margin-bottom: 20px;
  }
  .el-button--default{
    background-color: #fafafa;
  }
  .el-button--default, .el-button--danger,.el-button--primary{
    border-radius: 0;
    padding: 0 16px;
    line-height: 30px;
    font-size: 12px;
    border-width: 1px;
  }
</style>
