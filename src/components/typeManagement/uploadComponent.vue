<template>
  <div>
    <template v-if="Object.keys(operateImages).length > 0">
          <template v-for="item in cardList">
            <cardImageView
              :edit="edit"
              @change-image="changeIamge"
              @del-image="delImage"
              :card="item" 
              :imageData="operateImages[`${item.x},${item.y}`]" />
          </template>
        </template>
  </div>
</template>
<script>
import { cardSizeList } from '@/api/screenManage'
import cardImageView from '@/components/typeManagement/cardImageView';
export default {
  components:{
    cardImageView
  },
  props:{
    operateImages:{
      type:Object
    },
    cardData:{
      type:Object ||null
    },
    edit:{
      type:Boolean || null,
      default:true
    }
  },
  data () {
    return {
       cardList:[],
       platform:['android','ios','panel']
    }
  },
   watch: {
    cardData(){
     // console.log('每个cardData变化了');
     //重新初始化数据
     this.initOperateImages()
    },
    operateImages(){
      //重新初始化数据
     this.initOperateImages()
    }
  },
  created() {
    console.log('====================================');
    console.log('cardData:',this.cardData);
    console.log('====================================');
    this.getCardSizeList()
  },
  methods: {
    // 获取卡片大小size请求
    getCardSizeList(){
      cardSizeList({}).then(res=>{
        this.cardList = res.data
        console.log('====================================')
        console.log('8888888this.cardList:',this.cardList)
        console.log('====================================')
        this.initOperateImages()
      })
    },
    //初始化用于操作图片的对象数据
    initOperateImages(){
        // const operateImages = {}
        this.cardList.forEach(item=>{
          const child = {
            check:0,
            android:[],
            ios:[],
            panel:[]
          }
          if (this.cardData && this.cardData.images && this.cardData.images[`${item.x},${item.y}`]) {
              this.cardData.images[`${item.x},${item.y}`].check === 1 ?child.check = 1:0
              this.cardData.images[`${item.x},${item.y}`].android ? Object.assign(child.android,this.cardData.images[`${item.x},${item.y}`].android):''
              this.cardData.images[`${item.x},${item.y}`].ios ? Object.assign(child.ios,this.cardData.images[`${item.x},${item.y}`].ios):''
              this.cardData.images[`${item.x},${item.y}`].panel ? Object.assign(child.panel,this.cardData.images[`${item.x},${item.y}`].panel):''
          }
          this.$set(this.operateImages,`${item.x},${item.y}`,child)
          //this.operateImages[`${item.x},${item.y}`] = child
        })
        console.log('this.operateImages:',this.operateImages);
        // Object.assign(this.operateImages,operateImages)
    },
    changeIamge(fileParams){
      console.log('获取到的file：',fileParams);
      //直接操作数组
       const x = fileParams.card.x
       const y = fileParams.card.y
       const key  = `${fileParams.card.x},${fileParams.card.y}`
       const platform = this.platform[fileParams.os]
         //确认添加，push
         this.operateImages[key][platform].push(fileParams.file)
    },
    delImage(fileParams){
      //直接操作数组
       const x = fileParams.card.x
       const y = fileParams.card.y
       const key  = `${fileParams.card.x},${fileParams.card.y}`
       const platform = this.platform[fileParams.os]
       //删除对应的数组
       if (fileParams.file.imgid) {
         //表示是从接口返回的图片，进行合并操作
        this.operateImages[key][platform].map(function (item) {
            if (item.img ===fileParams.file.img ) {
              Object.assign(item,fileParams.file)
            }
        });
       }else{
         const imgList = this.operateImages[key][platform].filter(function (item) {
              if (item.img !==fileParams.file.img ) {
                return true
              }
          });
          this.operateImages[key][platform] = imgList
       }
       
      // console.log('this.images[id]:',this.images[id]);
      // //删除这个对象
      // if(this.images[id]){
      //   delete this.images[id]
      // }
    }
  },
}
</script>
