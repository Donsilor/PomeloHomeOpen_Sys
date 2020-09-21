<template>
  <div>
    <div class="title">
      <el-button
        type="text"
        @click="back">返回</el-button><span>屏幕配置</span>
    </div>
    <div class="full-screen">
      <div
        v-for="(item,index) in itemList"
        :key="index"
        :class="{click:item.isClick,isSave:item.isSave}"
        :style="{ backgroundColor: item.color}"
        class="screen-item"
        @click="itemCick(item)">{{ index+1 }}
      </div>
    </div>
    <el-input/>
    <button
      class="save-btn"
      @click="save">保存
    </button>
    <button
      class="save-btn"
      @click="reset">重置
    </button>
    <button
      class="save-btn"
      @click="submit">提交
    </button>

  </div>
</template>

<script>
export default {
  name: 'ScreenEdite',
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
      ItemArray: []
    }
  },
  methods: {
    back(){
      this.$router.back()
    },
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
    }
  }
}
</script>

<style scoped>
  .full-screen {
    margin-left: 20px;
    width: 410px;
    height: 410px;
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
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
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
