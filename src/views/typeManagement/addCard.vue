<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        size="medium" 
        type="primary" 
        @click="addCard">
        新增卡片
      </el-button>
    </el-row>
    <div>
      <template v-for="item in cardView.cardList">
        <cardView :cardData="item"/>
      </template>
    </div>

    
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import {rectCard,rectPostCard} from '@/api/devCard'
import { cardSizeList } from '@/api/screenManage'
import cardView from '@/components/typeManagement/cardView';
export default {
  components:{
    cardView
  },
  data() {
    return {
      andImgList:[],
      iosImgList:[],
      ipadImgList:[
        /* {
          name: "我是ios图片一",
          url: "http://zsj-smarthome.oss-cn-shenzhen.aliyuncs.com/oss_temp/1/202009280856212308.png"
        } */
      ],
      cardList: [], // 卡片大小列表
      dataList: [], // 存放数据
      // 图片放大 dialog
      dialogImageUrl: '',
      dialogVisible: false, 
      and_base_img: {
        type: 12,
        token: getToken()
      },
      ios_base_img: {
        type: 12,
        token: getToken()
      },
      ipad_base_img: {
        type: 12,
        token: getToken()
      },
      formVisible: false,
      formItem:{

      },
      checked:{},
      addOperateImages:{},//用来保存用于操作添加卡片时候的图片
      cardView:{
        cardList:[]
      }
    }
  },
  async created() {
   // await this.getCardSizeList()
    this.getRectCard()
    this.initOperateImages()
  },
  mounted(){
  },
  methods: {
    initOperateImages(){
      //初始化用于操作的图片对象

    },
    returnList(item,ele,os){
        //item.images && item.images[ele.x+','+ele.y] && item.images[ele.x+','+ele.y]['0']?item.images[ele.x+','+ele.y]['0']:[]
        const filterImages =  
          item.images && 
          item.images[ele.x+','+ele.y] && 
          item.images[ele.x+','+ele.y][os.toString()]
          // item.images[ele.x+','+ele.y]['0'].name !== 'check' &&
          //  item.images[ele.x+','+ele.y]['0'].img.indexOf('check') <= -1
            ?item.images[ele.x+','+ele.y][os.toString()]:[]
        const images = []
        filterImages.forEach(item=>{
          if (item.name !== 'check' && item.img.indexOf('check') <= -1) {
              images.push(item)
            }
        })
        const opreateImages = []
        Object.keys(item.operateImages).forEach(key=>{
          if (
            item.operateImages[key].name !== 'check' &&
           item.operateImages[key].img.indexOf('check') <= -1
           ) {
            if (item.operateImages[key].x.toString() === ele.x.toString() && item.operateImages[key].y.toString() === ele.y.toString() && item.operateImages[key].os.toString() === os.toString()){
              opreateImages.push(item.operateImages[key])
            }
          }
          
        })
        console.log('images:',images);
         console.log('opreateImages:',opreateImages);
        return Object.assign([],images,opreateImages)
    },
    // get 请求 获取卡片列表
    getRectCard(){
      rectCard().then(res=>{
        console.log('this.cardView.cardList:',res.data);
        this.cardView.cardList = res.data
      })
    },
    // 获取卡片大小size请求
    getCardSizeList(){
      cardSizeList({}).then(res=>{
        this.cardList = res.data
        console.log('this.cardList:',this.cardList);
      })
    },
    resetCardCheck() {
      //for循环重置卡片的每个checked为false
      this.cardList.forEach(item=>{
        item.checked = {
            '0':false,
            '1':false,
            '2':false
          }
      })
    },
    // 新增卡片
    addCard(){
      this.formVisible = true
      this.formItem = {}
      this.addOperateImages = {}
      this.resetCardCheck()
    },
    //请求接口，添加卡片请求
    addNewCard(){
      //组装images参数返回给后台
      const imageList = []
      console.log('addOperateImages:',this.addOperateImages)
      console.log('this.cardList:',this.cardList)
      Object.keys(this.addOperateImages).forEach(key=>{
        const x = this.addOperateImages[key].x
        const y = this.addOperateImages[key].y
        //如果对应的图片是再被选中的列表里面
        // if (this.checked[x+','+y]) {
        //   imageList.push(item.operateImages[key])
        // }
        if (this.addOperateImages[key].op === 1 || this.addOperateImages[key].op === 3) {
          //这里是对图片的操作
           imageList.push(this.addOperateImages[key])
        }
      })
      this.cardList.forEach(card=>{
          //这里是对chedked的操作
          Object.keys(card.checked).forEach(os=>{
            if(card.checked[os.toString()]){//勾选上就进行添加
              imageList.push({
                x:card.x,
                y:card.y,
                name:'check',
                img:'check',
                os:os,
                op:1
              })
            }
          })
        })
      this.formItem.operator = 1
      this.formItem.images = imageList
      console.log('this.formItem:',this.formItem)
      rectPostCard(this.formItem).then(res=>{
        console.log('添加卡片返回：', res)
        if (res.code === 200) {
          this.$message({
            message: '保存添加成功',
            type: 'success'
          })
          this.formVisible = false
          this.getRectCard()
        }else{
          this.$message.error('卡片添加失败')
        }
      })
    },
    // 保存卡片
    save(item, index){
      console.log(item, index)

      const params = {
        "operator":2,//1 新增， 2 修改，3 删除
        "rect_id": item.rect_id,
        "rect_name": item.rect_name,
        "images":[]
      }
      //组装images参数返回给后台
      const imageList = []
      const that = this
      console.log('item.operateImages:',item.operateImages)
      console.log('item.opreateCheck:',item.opreateCheck)


      Object.keys(item.operateImages).forEach(key=>{
        const x = item.operateImages[key].x
        const y = item.operateImages[key].y
        const os =  item.operateImages[key].os
        imageList.push(item.operateImages[key])
        //如果对应的图片是在被选中的列表里面
        // if (item.checked[x+','+y][os.toString()].checked) {
        //   imageList.push(item.operateImages[key])
        // }
      })
      //循环checked
      Object.keys(item.checked).forEach(key=>{
        Object.keys(item.checked[key]).forEach(index=>{
          if (item.checked[key][index].checked) {//选中状态
            imageList.push(item.checked[key][index].postObj)
          }else{//非选中状态，查找是否存在返回的数据中，若存在，需要提交到后台进行删除
            const imgid = item.checked[key][index].postObj.imgid
            if (item.opreateCheck[imgid]) {//如果存在需要进行删除操作
              item.opreateCheck[imgid].op = 3 //修改为删除操作
              imageList.push(item.opreateCheck[imgid])
            }
          }
        })
      })


      // console.log('imageList:',imageList);
      params.images = imageList
      console.log('请求的params：',params)
      rectPostCard(params).then(res=>{
        console.log('修改卡片返回：', res)
        if (res.code === 200) {
          this.$message({
            message: '保存修改成功',
            type: 'success'
          })
          this.getRectCard()
        }else{
          this.$message.error('保存修改失败')
        }
      })
      // this.cardList.forEach(item => {
      //   if (item.checked) {
      //     console.log('checked');
      //     Object.keys(item.operateImages).forEach(key => {
      //        console.log('checked in');
      //       if(
      //         parseInt(item.x) === parseInt(that.operateImages[key].x) 
      //         && parseInt(item.y) === parseInt(that.operateImages[key].y) 
      //         && (parseInt(that.operateImages[key].op) === 1 || parseInt(that.operateImages[key].op) === 3)  
      //       ){
      //          console.log('checked in 有匹配的');
      //        imageList.push(that.operateImages[key])
      //       }
      //       //imageList.push(item.images[key])
      //     })
      //   }
      // })
      //params.images = imageList

       
    },
    // 删除卡片
    del(item,index){
      console.log(item, index)
      const params = {
        rect_id: item.rect_id,
        rect_name: item.rect_name,
        operator: 3
      }
      this.$confirm('确认取消？')
        .then(() => {
          rectPostCard(params).then(res=>{
            if (res.code === 200) {
              this.$message({
                message: '删除成功',
                type: 'success'
              })
              this.getRectCard()
            }else{
              this.$message.error('删除失败')
            }
          })
        })
    },
    checkChange(val){
      console.log(val)
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
    },
    uploadSuccess(item,cardType,type){
      // console.log('====================================');
      // console.log('item:',item);
      // console.log('====================================');
      return function(res) {
        console.log('列表上传图片返回数据：', res)
        const params = {
          "x": cardType.x,
          "y": cardType.y,
          "os": type,
          "name": res.result.filename,
          "img": res.result.object,
          "op": 1//op:1 新增， 2 修改，3 删除
        }
        item.operateImages[res.result.md5] = params
        console.log('item.operateImages:', item.operateImages)
      }
    },
    removeSuccess(item) {
      return function(file, fileList) {
        console.log('====================================')
        console.log('file',file)
        console.log('====================================')
        if (file.response) {//这种是传到服务器的，还没存入接口
          const result = file.response.result
          const md5 = result.md5
          delete item.operateImages[md5]
          console.log('operateImages:', item.operateImages)
        } else {//这里是编辑时候从接口取回来的图片列表数据（删除需要回传，修改op为3）
          const imgid = file.imgid
          console.log('====================================')
          console.log('imgid:',imgid)
          console.log('operateImagess:',item.operateImages)
          console.log('operateImages[imgid]:',item.operateImages[imgid])
          console.log('====================================')
          item.operateImages[imgid].op = 3
          console.log('item.operateImages[imgid]:',item.operateImages[imgid])
          console.log('item.operateImages:',item.operateImages)
        }

      }
    },
    handleUpload(item,type){

      const that = this
      return function(res) {
        console.log('添加上传图片返回数据：', res)
        const params = {
          "x": item.x,
          "y": item.y,
          "os": type,
          "name": res.result.filename,
          "img": res.result.object,
          "op": 1//op:1 新增， 2 修改，3 删除
        }
        that.addOperateImages[res.result.md5] = params
        console.log(' this.addOperateImages:', that.addOperateImages)
      }
    },
    handleremove(file, fileList){
      console.log('file:',file)
      const result = file.response.result
      const md5 = result.md5
      delete this.addOperateImages[md5]
      console.log('addOperateImages:',this.addOperateImages)
    },
    imageChange(file, fileList) {
      this.imgList = fileList.slice(-3)
    },
    imageSuccess(res){
      console.log('图片列表上传返回：',res)
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
.text{
    // line-height: 20px;
    // height: 80px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    margin-top: 10px;
  }
  .imgAddBtn{
    margin-top: 10px;
  }
  .checkContent {
    margin-top: 10px;
  }
  .col{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      display: block;
      width: 50px;
    }
  }
   .tx-r{
    text-align: right;
  }
   /deep/ .el-upload-list{
    // float: left;
  }
  // .imgContent{
  //   /deep/ .el-upload--picture{
  //     width: 80px;
  //     height: 76px;
  //     line-height: 80px;
  //     border: 1px dashed #d9d9d9;
  //     border-radius: 6px;
  //     cursor: pointer;
  //     position: relative;
  //     overflow: hidden;
  //   }
  // }
  // /deep/ .el-upload-list__item{
  //   display: flex;
  //   flex-direction: column;
  //   height: 138px;
  //   align-items: center;
  //   width: 10%;
  //   margin-right: 10px;
  // }
  // /deep/ .el-upload-list__item-name{
  //   margin-left: -80px;
  //   margin-right: 0px;
  // }
  // /deep/ .el-upload-list--picture{
  //   display: flex;
  //   margin-bottom: 20px;
  //   flex-flow: wrap;
  // }
</style>