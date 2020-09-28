<template>
  <el-dialog
    :visible="dialogVisible"
    center
    width="70%"
    title="新增模版"
    @close="close">
    <el-form :model="form">
      <el-form-item
        :label-width="formLabelWidth"
        label="模版名称:">
        <el-input
          v-model="form.name"
          autocomplete="off"/>
      </el-form-item>
    </el-form>
    <div class="full-screen">
      <div
        v-for="(item,index) in itemList"
        :key="index"
        :class="{click:item.isClick,isSave:item.isSave}"
        :style="{ backgroundColor: item.color}"
        class="screen-item"
        @click="itemCick(item)">{{ index+1 }}
      </div>
    </div><button
      class="save-btn"
      @click="save">保存
    </button>
    <button
      class="save-btn"
      @click="reset">重置
    </button>
    <div
      slot="footer"
      class="dialog-footer">
      <el-button @click="close">取 消</el-button>
      <el-button
        type="primary"
        @click="submit">提 交
      </el-button>
    </div>
  </el-dialog>
</template>

<script>
export default {
  name: 'Edite',
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      itemList: [
        { isClick: 0, isSave: 0, key: 1, xIndex: 1, yIndex: 1, color:'' },
        { isClick: 0, isSave: 0, key: 2, xIndex: 2, yIndex: 1 ,color:''},
        { isClick: 0, isSave: 0, key: 3, xIndex: 3, yIndex: 1 ,color:''},
        { isClick: 0, isSave: 0, key: 4, xIndex: 4, yIndex: 1 ,color:''},
        { isClick: 0, isSave: 0, key: 5, xIndex: 1, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 6, xIndex: 2, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 7, xIndex: 3, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 8, xIndex: 4, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 9, xIndex: 1, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 10, xIndex: 2, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 11, xIndex: 3, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 12, xIndex: 4, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 13, xIndex: 1, yIndex: 4 ,color:''},
        { isClick: 0, isSave: 0, key: 14, xIndex: 2, yIndex: 4 ,color:''},
        { isClick: 0, isSave: 0, key: 15, xIndex: 3, yIndex: 4 ,color:''},
        { isClick: 0, isSave: 0, key: 16, xIndex: 4, yIndex: 4 ,color:''}
      ],
      ScreenArray: [],
      ItemArray: [],
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      formLabelWidth: '90px'
    }
  },
  methods:{
    save() {
      this.ItemArray.sort(function(a, b) {
        return a.key - b.key
      })
      if (this.ItemArray.length === 0) return
      let IndexArray = this.ItemArray.map(item => {
        return item.key
      })
      let indexarr = IndexArray.slice(0)
      let leftArray = this.ItemArray.map(item => {
        return item.xIndex
      })

      let topArray = this.ItemArray.map(item => {
        return item.yIndex
      })
      let leftSet = new Set(leftArray)
      let topSet = new Set(topArray)
      let width = new Set(leftArray).size
      let height = new Set(topArray).size
      if(indexarr.length!==width*height) {
        this.$message.error('选择的方块不能组成矩形')
        return
      }
      let positionArr = [width,height]
      let arr = [indexarr, positionArr]
      this.ScreenArray.push(arr)
      let ScreenArrayLenth = this.ScreenArray.length
      let color = '#3a8ee6'
      if (ScreenArrayLenth===1){
        color = '#668B8B'
      }else if (ScreenArrayLenth===2){
        color = '#FFDAB9'
      }else if (ScreenArrayLenth===3){
        color = '#23e01e'
      }else if (ScreenArrayLenth===4){
        color = '#b45342'
      }else if (ScreenArrayLenth===5){
        color = '#e2ce66'
      }
      this.ItemArray.forEach(item => {
        item.isSave = 1
        item.color = color
      })
      this.ItemArray = []
      console.log('ScreenArray----', this.ScreenArray)
    },
    itemCick(Item) {
      if (Item.isSave) return
      Item.isClick = Item.isClick === 0 ? 1 : 0
      if (Item.isClick) {
        this.ItemArray.push(Item)
      } else {
        let index = this.ItemArray.indexOf(Item)
        this.ItemArray.splice(index, 1)
      }
    },
    submit() {
      console.log('提交')
    },
    reset() {
      this.ScreenArray = []
      this.ItemArray = []
      this.itemList = [
        { isClick: 0, isSave: 0, key: 1, xIndex: 1, yIndex: 1, color:'' },
        { isClick: 0, isSave: 0, key: 2, xIndex: 2, yIndex: 1 ,color:''},
        { isClick: 0, isSave: 0, key: 3, xIndex: 3, yIndex: 1 ,color:''},
        { isClick: 0, isSave: 0, key: 4, xIndex: 4, yIndex: 1 ,color:''},
        { isClick: 0, isSave: 0, key: 5, xIndex: 1, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 6, xIndex: 2, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 7, xIndex: 3, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 8, xIndex: 4, yIndex: 2 ,color:''},
        { isClick: 0, isSave: 0, key: 9, xIndex: 1, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 10, xIndex: 2, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 11, xIndex: 3, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 12, xIndex: 4, yIndex: 3 ,color:''},
        { isClick: 0, isSave: 0, key: 13, xIndex: 1, yIndex: 4 ,color:''},
        { isClick: 0, isSave: 0, key: 14, xIndex: 2, yIndex: 4 ,color:''},
        { isClick: 0, isSave: 0, key: 15, xIndex: 3, yIndex: 4 ,color:''},
        { isClick: 0, isSave: 0, key: 16, xIndex: 4, yIndex: 4 ,color:''}
      ]
    },
    close(){
      this.$emit('update:dialogVisible', false)
    }
  }

}
</script>

<style scoped>
  .el-input{
    width: 300px;
  }
  .full-screen {
    margin-left: 20px;
    width: 340px;
    height: 340px;
    /*border: 1px solid red;*/
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  .title{
    margin: 15px 20px;
  }
  .el-button{
    margin-right: 15px;
    font-size: 16px;
  }
  .screen-item {
    width: 82px;
    height: 82px;
    text-align: center;
    line-height: 82px;
    border: 1px solid lightblue;
  }

  .click {
    background: #cbcbcb;
  }

  .isSave {
    background: gray;
  }

  .save-btn {
    margin: 20px;
  }
</style>
