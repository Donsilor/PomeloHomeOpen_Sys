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
      <el-card 
        v-for="(item,index) in dataList" 
        :key="index" 
        class="box-card"
      >
        <el-row style="margin-bottom:20px">
          <el-col 
            :span="5"
            class="col" 
          >
            <span>名称:</span>
            <el-input 
              v-model="item.rect_name" 
              placeholder="请输入名称"/>
          </el-col>
          <el-col 
            :span="5"
            class="col"
            style="margin-left:10px">
            <span>
              ID:
            </span>
            <el-input 
              v-model="item.rect_id" 
              placeholder="请输入ID" />
          </el-col>
          <el-col 
            :span="1" 
            :offset="10">
            <el-button 
              type="primary" 
              @click="save(item,index)"
            >
              保存
            </el-button>
          </el-col>
          <el-col 
            :span="1" 
            style="margin-left:20px">
            <el-button 
              type="danger" 
              @click="del(item,index)" 
            >
              删除
            </el-button>
          </el-col>
        </el-row>
        <el-row 
          v-for="(ele,itemIndex) in item.cardList" 
          :key="itemIndex" 
          class="imgContent">
          <el-col 
            :span="1" 
            class="checkContent">
            <el-checkbox 
              v-model="ele.checked" 
              @change="checkChange">{{ ele.x + '*' +ele.y }}</el-checkbox>
          </el-col>
          <el-col :span="23">
            <el-col :span="2">安卓图片：</el-col>
            <el-col :span="22">
              <el-upload
                :on-success="handleSuccess"  
                :on-preview="handlePictureCardPreview"
                :data="and_base_img"
                :file-list="ele.andImgList"
                :on-remove="handleRemove"
                action="/api/index.php/files/save"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="2">IOS图片：</el-col>
            <el-col :span="22">
              <el-upload
                :on-success="handleSuccess"
                :on-preview="handlePictureCardPreview"
                :data="ios_base_img"
                :file-list="ele.iosImgList"
                :on-remove="handleRemove"
                action="/api/index.php/files/save"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="2">面板图片：</el-col>
            <el-col :span="22">
              <el-upload
                :on-success="handleSuccess"
                :on-preview="handlePictureCardPreview"
                :data="ipad_base_img"
                :file-list="ele.ipadImgList"
                :on-remove="handleRemove"
                action="/api/index.php/files/save"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
          </el-col>
        </el-row>
        <!--  -->
        
      </el-card>
    </div>
    <el-dialog :visible.sync="dialogVisible">
      <img 
        :src="dialogImageUrl" 
        width="100%" 
        alt="">
    </el-dialog>
    <el-dialog 
      :visible.sync="formVisible"
      title="添加卡片">
      <el-form 
        label-width="200px"
        class="form">
        <el-form-item 
          label="ID">
          <el-input 
            v-model="formItem.rect_id"
            type="input" />
        </el-form-item>
        <el-form-item label="名称">
          <el-input 
            v-model="formItem.rect_name"
            type="input" />
        </el-form-item>
        <el-row 
          v-for="(item,index) in cardList"
          :span="24"
          :key="index"
          class="imgContent">
          <el-col 
            :span="3"
            class="checkContent">
            <el-checkbox v-model="item.checked">
              {{ item.x }}*{{ item.y }}
            </el-checkbox>
          </el-col>
          <el-col :span="21">
            <el-col :span="4">安卓图片：</el-col>
            <el-col :span="17">
              <el-upload 
                :on-preview="handlePictureCardPreview"
                :data="and_base_img"
                :file-list="item.androidImgList"
                :on-success="uploadSuccess(item,0)"
                :on-remove="handleRemove(item,0)"
                action="/api/index.php/files/save"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="4">IOS图片：</el-col>
            <el-col :span="17">
              <el-upload 
                :on-preview="handlePictureCardPreview"
                :data="ios_base_img"
                :file-list="item.iosImgList"
                :on-success="uploadSuccess(item,1)"
                :on-remove="handleRemove(item,0)"
                action="/api/index.php/files/save"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="4">面板图片：</el-col>
            <el-col :span="17">
              <el-upload 
                :on-preview="handlePictureCardPreview"
                :data="ipad_base_img"
                :file-list="item.ipadImgList"
                :on-success="uploadSuccess(item,2)"
                :on-remove="handleRemove(item,0)"
                action="/api/index.php/files/save"
                list-type="picture-card">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
          </el-col>
        </el-row>

      </el-form>
    </el-dialog>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import {rectCard,rectPostCard} from '@/api/devCard'
import { cardSizeList } from '@/api/screenManage'
export default {
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
        type: 0,
        token: getToken()
      },
      ios_base_img: {
        type: 1,
        token: getToken()
      },
      ipad_base_img: {
        type: 2,
        token: getToken()
      },
      formVisible: false,
      formItem:{

      }
    }
  },
  created() {
    this.getCardSizeList()
    this.getRectCard()
  },
  mounted(){
  },
  methods: {
    // get 请求 获取卡片列表
    getRectCard(){
      rectCard().then(res=>{
        this.dataList  = res.data
        // 将卡片列表装进datalist
        this.dataList.forEach(item=>{
          console.log('item',item)
          Object.keys(item.images).forEach(ele=>{
            // 获取到每一个数组中的图片列表
            // 0 安卓图片  1  ios图片  2 ipad图片
            if(item.images[ele]['0']){
              item.images[ele]['0'].forEach(img=>{
                img.url =  img.img // 给图片列表中添加url字段从而在页面上进行展示
              })
            } 
            if(item.images[ele]['1']){
              item.images[ele]['1'].forEach(img=>{
                img.url =  img.img // 给图片列表中添加url字段从而在页面上进行展示
              })
            }
            if(item.images[ele]['2']){
              item.images[ele]['2'].forEach(img=>{
                img.url =  img.img // 给图片列表中添加url字段从而在页面上进行展示
              })
            }
            const arr = Object.assign([],this.cardList)
            arr.forEach((carItem,index)=>{
              if((carItem.x+','+carItem.y) === ele){
                if(item.images[ele]['0']) carItem.andImgList = item.images[ele]['0']
                if(item.images[ele]['1']) carItem.iosImgList = item.images[ele]['1']
                if(item.images[ele]['2']) carItem.ipadImgList = item.images[ele]['2']
              }
              item.cardList = arr
            })
          })
        })
        console.log(this.dataList)
      })
    },
    // 获取卡片大小size请求
    getCardSizeList(){
      cardSizeList({}).then(res=>{
        res.data.forEach(item=>{
          item.checked = false
          item.andImgList = []
          item.iosImgList = []
          item.ipadImgList = []
        })
        this.cardList = res.data
      })
    },
    // 新增卡片
    addCard(){
      // this.formVisible = true
      const params = {
        "operator":1,
        "rect_id": 121,
        "rect_name": "3*3",
        "images": [
          {
            "imgid": 134,
            "x": 3, "y": 3,
            "os": 0,
            "name": "5*5",
            "img": "http://zsj-smarthome.oss-cn-shenzhen.aliyuncs.com/oss_temp/1/202009280856212308.png",
            "op": 1
          }
        ]
      }
      rectPostCard(params).then(res=>{
        console.log('新增的卡片', res)
        this.getRectCard()
      })
      
    },
    // 保存卡片
    save(item, index){
      console.log(item, index)
    },
    // 删除卡片
    del(item,index){
      console.log(item, index)
      const params = {
        rect_id: item.rect_id,
        rect_name: item.rect_name,
        operator: 3
      }
      this.handlerList(params).then(res=>{
        this.getRectCard()
      })
    },
    // post请求
    handlerList(params){
      return rectPostCard(params)
    },
    checkChange(val){
      console.log(val)
    },
    handleChange(file, fileList) {
      this.fileList = fileList.slice(-3)
    },
    handleSuccess(res, file, fileList){
      console.log('上传图片返回数据：',res)
      console.log('上传图片列表', fileList)
    },
    imageChange(file, fileList) {
      this.imgList = fileList.slice(-3)
    },
    imageSuccess(res){
      console.log('图片列表上传返回：',res)
    },
    handleRemove(file, fileList) {
      // console.log(file, fileList)
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    // from
    uploadSuccess(){

    },
  }
}
</script>

<style lang="scss" scoped>
  .col{
    display: flex;
    justify-content: center;
    align-items: center;
    span{
      display: block;
      width: 50px;
    }
  }
  .imgContent{
      line-height: 80px;
    /deep/ .el-upload--picture-card{
      width: 80px;
      height: 76px;
      line-height: 80px;
    }
    /deep/ .el-upload-list--picture-card .el-upload-list__item{
      width: 80px;
      height: 76px;
    }
  }
  
</style>