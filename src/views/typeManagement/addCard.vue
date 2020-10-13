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
              disabled 
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
          v-for="(ele,itemIndex) in cardList" 
          :key="itemIndex" 
          class="imgContent">
          <el-col 
            :span="1" 
            class="checkContent">
            <el-checkbox 
              v-model="item.checked[ele.x+','+ele.y]"
            >{{ ele.x + '*' +ele.y }}</el-checkbox>
          </el-col>
          <el-col :span="23">
            <el-col :span="2">安卓图片：</el-col>
            <el-col :span="22">
              <el-upload
                :on-success="uploadSuccess(item,ele,0)"  
                :data="and_base_img"
                :file-list="item.images && item.images[ele.x+','+ele.y] && item.images[ele.x+','+ele.y]['0']?item.images[ele.x+','+ele.y]['0']:[]"
                :on-remove="removeSuccess(item)"
                action="/api/index.php/files/save"
                list-type="picture">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="2">IOS图片：</el-col>
            <el-col :span="22">
              <el-upload
                :on-success="uploadSuccess(item,ele,1)"
                :data="ios_base_img"
                :file-list="item.images && item.images[ele.x+','+ele.y] && item.images[ele.x+','+ele.y]['1']?item.images[ele.x+','+ele.y]['1']:[]"
                :on-remove="removeSuccess(item)"
                action="/api/index.php/files/save"
                list-type="picture">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="2">面板图片：</el-col>
            <el-col :span="22">
              <el-upload
                :on-success="uploadSuccess(item,ele,2)"
                :data="ipad_base_img"
                :file-list="item.images && item.images[ele.x+','+ele.y] && item.images[ele.x+','+ele.y]['2']?item.images[ele.x+','+ele.y]['2']:[]"
                :on-remove="removeSuccess(item)"
                action="/api/index.php/files/save"
                list-type="picture">
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
                :on-success="handleUpload(item,0)"
                :on-remove="handleremove"
                action="/api/index.php/files/save"
                list-type="picture">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="4">IOS图片：</el-col>
            <el-col :span="17">
              <el-upload 
                :on-preview="handlePictureCardPreview"
                :data="ios_base_img"
                :file-list="item.iosImgList"
                :on-success="handleUpload(item,1)"
                :on-remove="handleremove"
                action="/api/index.php/files/save"
                list-type="picture">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
            <el-col :span="4">面板图片：</el-col>
            <el-col :span="17">
              <el-upload 
                :on-preview="handlePictureCardPreview"
                :data="ipad_base_img"
                :file-list="item.ipadImgList"
                :on-success="handleUpload(item,2)"
                :on-remove="handleremove"
                action="/api/index.php/files/save"
                list-type="picture">
                <i class="el-icon-plus"/>
              </el-upload>
            </el-col>
          </el-col>
        </el-row>
      </el-form>
      <el-row class="tx-r">
        <el-button 
          size="medium" 
          type="primary" 
          @click="addNewCard">
          确认添加
        </el-button>
      </el-row>
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
      addOperateImages:{}//用来保存用于操作添加卡片时候的图片
    }
  },
  async created() {
    await this.getCardSizeList()
    this.getRectCard()
  },
  mounted(){
  },
  methods: {
    // get 请求 获取卡片列表
    getRectCard(){
      rectCard().then(res=>{
      
        // 将卡片列表装进datalist
        res.data.forEach(item=>{
          console.log('item',item)

          item.checked = {}
          //为每个item下的每个卡片种类赋值一个checked
          this.cardList.forEach(card=>{
            item.checked[card.x+','+card.y] = false
          })
          const operateImages  = {}
          Object.keys(item.images).forEach(ele=>{

            const showImages = item.images
          
            // 获取到每一个数组中的图片列表
            // 0 安卓图片  1  ios图片  2 ipad图片
            if(item.images[ele]['0']){
              item.images[ele]['0'].forEach(img=>{
                img.url =  img.img // 给图片列表中添加url字段从而在页面上进行展示
                img.op = 2//重置为修改
                img.x = ele.split(',')[0]
                img.y = ele.split(',')[1]
                img.os = 0
                operateImages[img.imgid] = img
              })
            } 
            if(item.images[ele]['1']){
              item.images[ele]['1'].forEach(img=>{
                img.url =  img.img // 给图片列表中添加url字段从而在页面上进行展示
                img.op = 2//重置为修改
                img.x = ele.split(',')[0]
                img.y = ele.split(',')[1]
                img.os = 1
                operateImages[img.imgid] = img
              })
            }
            if(item.images[ele]['2']){
              item.images[ele]['2'].forEach(img=>{
                img.url =  img.img // 给图片列表中添加url字段从而在页面上进行展示
                img.op = 2//重置为修改
                img.x = ele.split(',')[0]
                img.y = ele.split(',')[1]
                img.os = 2
                operateImages[img.imgid] = img
              })
            }
           
            // const arr = Object.assign([],this.cardList)
            // arr.forEach((carItem,index)=>{
            //   if((carItem.x+','+carItem.y) === ele){
            //     if(item.images[ele]['0']) carItem.andImgList = item.images[ele]['0']
            //     if(item.images[ele]['1']) carItem.iosImgList = item.images[ele]['1']
            //     if(item.images[ele]['2']) carItem.ipadImgList = item.images[ele]['2']
            //   }
            //   item.cardList = arr
            // })


          })
          
          item.operateImages = operateImages
          console.log('====================================')
          console.log('item.operateImages',item.operateImages)
          console.log('====================================')
           
        })
        //绑定的会引起界面变化的数据，先把数据处理好，再给他赋值
        this.dataList  = res.data
        console.log('this.dataList :', this.dataList )
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
        console.log('====================================')
        console.log('this.cardList:',this.cardList)
        console.log('====================================')
      })
    },
    resetCardCheck() {
      //for循环重置卡片的每个checked为false
      this.cardList.forEach(item=>{
        item.checked = false
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
      Object.keys(this.addOperateImages).forEach(key=>{
        const x = this.addOperateImages[key].x
        const y = this.addOperateImages[key].y
        //如果对应的图片是再被选中的列表里面
        // if (this.checked[x+','+y]) {
        //   imageList.push(item.operateImages[key])
        // }
        this.cardList.forEach(card=>{
          if (
            card.checked 
              && parseInt(card.x) ===parseInt(x) 
              && parseInt(card.y) === parseInt(y)
              && (this.addOperateImages[key].op === 1 || this.addOperateImages[key].op === 3)
          ) {
            imageList.push(this.addOperateImages[key])
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


      Object.keys(item.operateImages).forEach(key=>{
        const x = item.operateImages[key].x
        const y = item.operateImages[key].y
        //如果对应的图片是再被选中的列表里面
        if (item.checked[x+','+y]) {
          imageList.push(item.operateImages[key])
        }
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
    /deep/ .el-upload--picture{
      width: 80px;
      height: 76px;
      line-height: 80px;
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
  }
  .tx-r{
    text-align: right;
  }
  /deep/ .el-upload-list__item{
    display: flex;
    flex-direction: column;
    height: 138px;
    align-items: center;
    width: 10%;
    margin-right: 10px;
  }
  /deep/ .el-upload-list__item-name{
    margin-left: -80px;
    margin-right: 0px;
  }
  /deep/ .el-upload-list--picture{
    display: flex;
    margin-bottom: 20px;
    flex-flow: wrap;
  }
</style>