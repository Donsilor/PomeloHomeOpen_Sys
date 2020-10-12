<template>
  <el-dialog
    :visible="dialogVisible"
    :title="title"
    center
    width="70%"
    @close="close">
    <div class="title">
      <span>屏幕配置名称：</span>
      <el-input
        :disabled="title==='查看模板'"
        v-model="localObj.name"
        autocomplete="off"/>
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
    <div
      v-if="title!=='查看模板'"
      class="button-contaier">
      <button
        class="save-btn"
        @click="save">保存当前选中
      </button>
      <button
        class="save-btn"
        @click="reset">重置
      </button>
    </div>
    <div
      v-if="title!=='查看模板'"
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
import {screenEdite} from '@/api/screenManage.js'
export default {
  name: 'Edite',
  props: {
    dialogVisible: {
      type: Boolean,
      default: true
    },
    title: {
      type: String,
      default: '新增模板'
    },
    templateObj: {
      type: Object,
      default(){
        return {}
      }
    }
  },
  data() {
    return {
      localObj:{},
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
  watch:{
    templateObj:{
      handler(value){
        if (!value.template) return
        this.localObj = Object.assign({},value)
        console.log('this.localObj----', this.localObj)
        let template = JSON.parse(value.template)
        this.ScreenArray = template
        if (this.title==='查看模板'){
          this.itemList.forEach(item=>{
            item.isSave = 1
          })
          template.forEach((arr,index)=>{
            let itemArr = arr[1]
            itemArr.forEach(item=>{
              let rectItem = this.itemList.find(item1=>item1.key===item)
              rectItem.color = this.color(index+1)
            })
          })
        } else if (this.title==='编辑模板'){
          this.itemList.forEach(item=>{
            item.isSave = 1
          })
          template.forEach((arr,index)=>{
            let itemArr = arr[1]
            itemArr.forEach(item=>{
              let rectItem = this.itemList.find(item1=>item1.key===item)
              rectItem.color = this.color(index+1)
            })
          })
        }
      },
      immediate:true
    }
  },
  methods:{
    color(index){
      let color = '#3a8ee6'
      if (index===1){
        color = '#668B8B'
      }else if (index===2){
        color = '#FFDAB9'
      }else if (index===3){
        color = '#23e01e'
      }else if (index===4){
        color = '#b45342'
      }else if (index===5){
        color = '#e2ce66'
      }
      return color
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
      let arr = [positionArr,indexarr]
      this.ScreenArray.push(arr)
      let ScreenArrayLenth = this.ScreenArray.length
      let color = this.color(ScreenArrayLenth)
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
      if (!this.localObj.name){
        this.$message.error('请输入模版名称')
        return
      }
      console.log('提交----', this.itemList)
      const isAllSaved = (item) => item.isSave === 1
      let result =this.itemList.every(isAllSaved)
      if (result){
        let type = 1
        if (this.title==='修改模板'){
          type = 2
        }
        this.ScreenArray.sort((a,b)=>{
          let first = a[1][0]
          let second = b[1][0]
          return first-second
        })
        // console.log('this.ScreenArray=====22', this.ScreenArray)
        let template =  JSON.stringify(this.ScreenArray)
        let params = {
          "operator":type,
          "id": this.localObj.id,
          "template": template,
          "name": this.localObj.name
        }
        screenEdite(params).then(res=>{
          this.$message.success('保存成功')
          this.$emit('update:dialogVisible', false)
          this.$emit('refresh')
        })
      }else {
        this.$message.error('置屏幕不完整，请分配完所有的格子')
      }
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
    width: 410px;
    height: 410px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin: 10px auto;
  }
  .title{
    width:50% ;
    margin: 15px auto;
  }
  .el-button{
    margin-right: 15px;
    font-size: 16px;
  }
  .screen-item {
    user-select:none;
    width: 100px;
    height: 100px;
    text-align: center;
    line-height: 100px;
    border: 1px solid lightblue;
  }
 .button-contaier{
   width: 250px;
   margin: 10px auto;
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
