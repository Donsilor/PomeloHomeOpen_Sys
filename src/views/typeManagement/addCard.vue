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
        <cardView @getRectCard="getRectCard" :cardData="item"/>
      </template>
    </div>
    <!-- 添加卡片弹窗 -->
    <addCardView 
      @getRectCard="getRectCard" 
      :formVisible="formVisible" 
      @closeView="formVisible = false" />
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import {rectCard,rectPostCard} from '@/api/devCard'
import { cardSizeList } from '@/api/screenManage'
import cardView from '@/components/typeManagement/cardView';
import addCardView from '@/components/typeManagement/addCardView';
export default {
  components:{
    cardView,
    addCardView
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
  },
  mounted(){
  },
  methods: {
    // get 请求 获取卡片列表
    getRectCard(){
      console.log('请求卡片列表');
      rectCard().then(res=>{
        console.log('this.cardView.cardList:',res.data);
        this.cardView.cardList = res.data
      })
    },
    // 新增卡片
    addCard(){
      this.formVisible = true
    }
  }
}
</script>

<style lang="scss" scoped>
</style>