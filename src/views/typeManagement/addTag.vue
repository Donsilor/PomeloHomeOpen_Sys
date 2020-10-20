<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button 
        :disabled="cardList.length ===0 "
        size="medium"
        type="primary"
        @click="addTag">
        新增编组tag
      </el-button>
    </el-row>

    <el-table 
      v-loading="listLoading"
      :data="tagList"
      element-loading-text="给我一点时间"
      stripe
      fit
      highlight-current-row
      style="width: 100%">
      <el-table-column 
        align="center"
        label="标签编号"
        prop="gtag_id" />
      <el-table-column 
        align="center"
        label="标签名称"
        prop="gtag_name" />
      <el-table-column 
        align="center"
        label="面板是否可调"
        prop="panel_can">
        <template slot-scope="scope">
          <div>
            {{scope.row.panel_can.toString() === '1'?'是':'否' }}
          </div>
        </template>
      </el-table-column>>
      <el-table-column 
        align="center"
        label="创建时间"
        prop="create_time" />
      <el-table-column 
        align="center"
        label="更新时间"
        prop="update_time" />

      <el-table-column 
        align="center"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button 
            size="small"
            type="danger"
            @click="delTag(scope.row)">
            删除
          </el-button>
          <el-button 
            :disabled="cardList.length ===0 "
            size="small"
            type="primary"
            @click="editTag(scope.row, true)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div 
      v-show="!listLoading"
      class="pagination-container">
      <!-- 页码按钮的数量： currenCurrent
           会sizeChange 
       -->
      <el-pagination 
        :current-page.sync="listQuery.page"
        :page-sizes="[15,20,30, 50]"
        :page-size="listQuery.limit"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>

    <el-dialog 
      :visible.sync="formVisible"
      :title="dialogTitle">
      <el-form 
        label-width="300px"
        class="form">
        <el-form-item 
          v-show="isEdit == false"
          label="标签编号">
          <el-input 
            v-model="formItem.gtag_id"
            type="input" />
        </el-form-item>
        <el-form-item label="标签名称">
          <el-input 
            v-model="formItem.gtag_name"
            type="input" />
        </el-form-item>
        <el-form-item label="上传图片">
          <!-- <el-upload
            class="upload-demo"
            action="/api/index.php/files/save"
            accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
            :on-success="handleSuccess"
            :on-change="handleChange"
            :data="base_img"
            :file-list="fileList">
            <el-button size="small" type="primary">点击上传</el-button>
          </el-upload> -->
          <el-upload 
            :data="base_img"
            :on-success="handleSuccess"
            :on-remove="removeTagImage"
            :file-list="tagImageList"
            :limit="1"
            action="/api/index.php/files/save"
            accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp">
            <i class="el-icon-plus"/>
          </el-upload>
        </el-form-item>

        <el-form-item label="">
          <template slot="label">
            <div class="bottom_text">
              编组数量限制（非必填）<br>
              <span class="">用于面板屏幕配置多设备选择设备</span>
            </div>
          </template>
          <el-input 
            v-model="formItem.dev_limit"
            placeholder="请输入正整数，0表示无穷大"/>
        </el-form-item>

        <el-form-item label="面板是否可用">
          <el-radio 
            v-model="formItem.panel_can"
            :label="1">是</el-radio>
          <el-radio 
            v-model="formItem.panel_can"
            :label="0">否</el-radio>
        </el-form-item>

        <el-row 
          v-for="(item,index) in cardList"
          :span="24"
          :key="index"
          class="imgContent">
          <el-col 
            :span="1"
            class="checkContent">
            <div>
              {{ item.x }}*{{ item.y }}
            </div>
          </el-col>
          <el-col :span="21">
            <el-col :span="7">
              <el-col :span="12" class="text">
                <el-checkbox v-model="checkBox[item.x+','+item.y]['0'].checked">
                  安卓图片：
                </el-checkbox>
              </el-col>
              <el-col :span="12">
                <el-upload 
                  :data="base_img"
                  :file-list="returnList(item,'0')"
                  :on-success="uploadSuccess(item,0)"
                  :on-remove="handleRemove"
                  action="/api/index.php/files/save">
                  <el-button  icon="el-icon-plus" class="imgAddBtn" size="mini">添加图片</el-button>
                  <!-- <i class="el-icon-plus"/> -->
                </el-upload>
              </el-col>
            </el-col>
            <el-col :span="7">
              <el-col :span="12"  class="text">
                <el-checkbox v-model="checkBox[item.x+','+item.y]['1'].checked">
                  IOS图片：
                </el-checkbox>
              </el-col>
              <el-col :span="12">
                <el-upload 
                  :data="base_img"
                  :file-list="returnList(item,'1')"
                  :on-success="uploadSuccess(item,1)"
                  :on-remove="handleRemove"
                  action="/api/index.php/files/save">
                  <el-button  icon="el-icon-plus" class="imgAddBtn" size="mini">添加图片</el-button>
                  <!-- <i class="el-icon-plus"/> -->
                </el-upload>
              </el-col>
            </el-col>
            <el-col :span="7">
              <el-col :span="12"  class="text">
                <el-checkbox v-model="checkBox[item.x+','+item.y]['2'].checked">
                  面板图片：
                </el-checkbox>
              </el-col>
              <el-col :span="12">
                <el-upload 
                  :data="base_img"
                  :file-list="returnList(item,'2')"
                  :on-success="uploadSuccess(item,2)"
                  :on-remove="handleRemove"
                  action="/api/index.php/files/save">
                  <el-button  icon="el-icon-plus" class="imgAddBtn" size="mini">添加图片</el-button>
                  <!-- <i class="el-icon-plus"/> -->
                </el-upload>
              </el-col>
            </el-col>
          </el-col>
        </el-row>

        

      </el-form>
      <span 
        slot="footer"
        class="dialog-footer">

        <el-button 
          type="primary"
          @click="onSubmit">提交</el-button>
        <el-button @click="formVisible=false">取消</el-button>
      </span>
    </el-dialog>
    <!-- 点击放大图片查看 -->
    <el-dialog 
      :append-to-body="true"
      :visible.sync="dialogVisible">
      <img 
        :src="dialogImageUrl"
        width="100%"
        alt="">
    </el-dialog>
  </div>
</template>

<script>
import fetch from '@/utils/fetch'
import { getGlobalTags, addGlobalTags } from '@/api/check'
import { getToken } from '@/utils/auth'
import { cardSizeList } from '@/api/screenManage'
import { IMAGE_PATH } from '@/assets/const'
export default {
  data() {
    return {
      // ====table===
      list: null,
      total: null,
      listLoading: false,
      listQuery: {
        page: 1,
        limit: 15
      },
      formVisible: false,
      isEdit: false,
      tagList: [],
      formItem: {
        gtag_name: '',
        gtag_id: '',
        enable: 1,    // 暂时不能进行删除，默认传1
        dev_limit: '',
        panel_can: '',
        gtag_img: ''//tag图片path
      },
      showImages:{},//用于编辑时候显示相应的图片
      operateImages:{},//用于编辑的时候，对相关图片进行操作
      cardList: [],
      imageList: {
        ios: [],
        android: [],
        panel: []
      },
      fileList: [],
      imgList: [],
      base_img: {
        type: 12,
        token: getToken()
      },
      dialogImageUrl: '',
      dialogVisible: false,
      tagImageList: [],
      editRow:null,
      checkBox:null
    }
  },
  computed: {
    dialogTitle() {
      return this.isEdit ? '编辑' : '新增'
    }
  },
  watch: {
    cardList(){
      console.log('cardList变化了')
    }
  },
  created() { },
  mounted() {
    this.refresh()
    this.getCardSizeList()
  },
  methods: {
    returnList(ele,os){
      //showImages && showImages[item.x+','+item.y] && showImages[item.x+','+item.y]['0']?showImages[item.x+','+item.y]['0']:[]
        //this.showImages && this.showImages[ele.x+','+ele.y] && this.showImages[ele.x+','+ele.y]['0']?this.showImages[ele.x+','+ele.y]['0']:[]
        const filterImages =  
          this.showImages && 
          this.showImages[ele.x+','+ele.y] && 
          this.showImages[ele.x+','+ele.y][os.toString()]
          // this.showImages[ele.x+','+ele.y]['0'].name !== 'check' &&
          //  this.showImages[ele.x+','+ele.y]['0'].img.indexOf('check') <= -1
            ?this.showImages[ele.x+','+ele.y][os.toString()]:[]
        const images = []
        filterImages.forEach(item=>{
          if (item.name !== 'check' && item.img.indexOf('check') <= -1) {
              images.push(item)
            }
        })
        const opreateImages = []
        Object.keys(this.operateImages).forEach(key=>{
          if (
            this.operateImages[key].name !== 'check' &&
           this.operateImages[key].img.indexOf('check') <= -1
           ) {
            if (this.operateImages[key].x.toString() === ele.x.toString() && this.operateImages[key].y.toString() === ele.y.toString() && this.operateImages[key].os.toString() === os.toString()){
              opreateImages.push(this.operateImages[key])
            }
          }
          
        })
        console.log('images:',images);
         console.log('opreateImages:',opreateImages);
        return Object.assign([],images,opreateImages)
    },
    dataFormat(originVal) { // 后台传回来的S
      const date = new Date(originVal)
      const y = date.getFullYear()
      let m = date.getMonth() + 1
      m = m < 10 ? '0' + m : m
      const d = date.getDate() < 10 ? '0' + date.getDate() : date.getDate()
      const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const f = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const s = date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()
      return y + '-' + m + '-' + d + ' ' + h + ':' + f + ':' + s
    },
    refresh() {
      this.$nextTick(() => {
        this.getTagList()
      })
    },

    getTagList() {
      this.listLoading = true
      const params = {
        size: this.listQuery.limit,
        page: this.listQuery.page
      }
      getGlobalTags(params).then(res => {
        this.tagList = res.data
        console.log('this.tagList:', this.tagList)
        this.tagList.forEach((ele,index) => {
          ele.create_time = this.dataFormat(ele.create_time * 1000)
          ele.update_time = this.dataFormat(ele.update_time * 1000)
        })
        this.total = res.page_info.total
        this.listLoading = false
      })
    },

    handleSizeChange(val) {  // 分页功能
      this.listQuery.limit = val
      this.getTagList()
    },
    handleCurrentChange(val) { // 改变页码数量
      this.listQuery.page = val
      this.getTagList()
    },
    addTag() {   // button按钮事件
      this.isEdit = false // 编辑状态开关
      this.formVisible = true // 蒙版开关
      this.formItem = {}
      this.tagImageList = []
      this.showImages={}//用于编辑时候显示相应的图片
      this.operateImages={}//用于编辑的时候，对相关图片进行操作
      this.initCheckBox()
    },
    editTag(row, isEdit) {
      this.initCheckBox()      
      const editRow = Object.assign({},row)
        // editRow.checked = {}
        // console.log('editRow.checked:',editRow.checked);
      // this.cardList.forEach(card=>{
      //       //默认安卓 IOS 和平板都赋值列表
      //       editRow.checked[card.x+','+card.y] = {}
      //       editRow.checked[card.x+','+card.y]['0'] = {
      //         checked:false,
      //         //用于提交到接口的check数据
      //         postObj:{
      //           op:1,//默认为新增
      //           x:card.x,
      //           y:card.y,
      //           name:'check',
      //           img:'check',
      //           os:0
      //         }
      //       }

      //       editRow.checked[card.x+','+card.y]['1'] = {
      //         checked:false,
      //         //用于提交到接口的check数据
      //         postObj:{
      //           op:1,//默认为新增
      //           x:card.x,
      //           y:card.y,
      //           name:'check',
      //           img:'check',
      //           os:1
      //         }
      //       }

      //       editRow.checked[card.x+','+card.y]['2'] = {
      //         checked:false,
      //         //用于提交到接口的check数据
      //         postObj:{
      //           op:1,//默认为新增
      //           x:card.x,
      //           y:card.y,
      //           name:'check',
      //           img:'check',
      //           os:2
      //         }
      //       }
      //     })
      console.log('row:',row)
      const images = row.images
      console.log('images:',JSON.stringify(images))
      const operateImages = {}
      const opreateCheck = {} //用来区分操作是否选择的check
      //为每一项目分出安卓、苹果和平板的图片列表
      console.log('images:', images)
      Object.keys(images).forEach(key=>{
        console.log('====================================')
        console.log("key",key)
        console.log('====================================')
        Object.keys(images[key]).forEach(index=>{
          console.log('index:',index)
          console.log('images[key][index]:',images[key])
          images[key][index].forEach(item=>{
            if (item.name === 'check' && item.img.indexOf('check') >-1) {
                  //用来获取过滤得到check选项
                    images[key][index].op = 2//重置为修改
                    item.x = key.split(',')[0]
                    item.y = key.split(',')[1]
                    item.os = index
                    opreateCheck[item.imgid] = item
                    console.log('进入这里key:',key);
                    if (this.checkBox[key.split(',')[0]+','+key.split(',')[1]]) {
                      this.checkBox[key.split(',')[0]+','+key.split(',')[1]][index] = {
                        checked:true,
                        postObj:item
                      }
                    }
                    
                }else{
                  item.url = item.img.indexOf('http') > -1? item.img : IMAGE_PATH + item.img
                  images[key][index].op = 2//重置为修改
                  item.x = key.split(',')[0]
                  item.y = key.split(',')[1]
                  item.os = index
                  operateImages[item.imgid] = item
                }
            
          })
        })
      })
      this.editRow = editRow
      this.isEdit = true
      this.formVisible = true
      this.formItem = {
        gtag_name: row.gtag_name,
        gtag_id: row.gtag_id,
        enable: 1,    // 暂时不能进行删除，默认传1
        dev_limit: row.dev_limit,
        panel_can: row.panel_can,
        gtag_img: row.gtag_img,//tag图片path
        images: {}
      }
      this.showImages = row.images
      this.operateImages = operateImages
      this.opreateCheck = opreateCheck
      // this.$set(this.formItem,'iosImgList',iosImgList)
      // this.$set(this.formItem,'androidImgList',androidImgList)
      // this.$set(this.formItem,'panelImgList',panelImgList)
      this.tagImageList = row.gtag_img
        ?[
          {
            name: row.gtag_name,
            url: row.gtag_img.indexOf('http') > -1 ? row.gtag_img : IMAGE_PATH + row.gtag_img
          }
        ]
        :[]
    },
    delTag(row) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.formItem = row
          this.formItem.enable = 0 //enable传0表示删除
          if (this.formItem.images) {
            this.formItem.images = []
          }
          this.onSubmit() //调用onSubmit借口发起请求
        })
        .catch(_ => { })
    },
    onSubmit() {
      const params = this.formItem
      if (this.formItem.enable === 0) {//删除

      } else {//添加或者编辑
        //组装images参数返回给后台
        const imageList = []
        const that = this
        console.log('that.operateImages:',that.operateImages)
        this.cardList.forEach(item => {
          // if (item.checked) {
            console.log('checked')
            Object.keys(that.operateImages).forEach(key => {
              console.log('checked in')
              if(
                parseInt(item.x) === parseInt(that.operateImages[key].x) 
                && parseInt(item.y) === parseInt(that.operateImages[key].y) 
                && (parseInt(that.operateImages[key].op) === 1 || parseInt(that.operateImages[key].op) === 3)  
              ){
                ///图片的添加
                console.log('checked in 有匹配的')
                 imageList.push(that.operateImages[key])
              }
            })
          // }
        })

          //循环checked
          Object.keys(this.checkBox).forEach(key=>{
            Object.keys(this.checkBox[key]).forEach(index=>{
              if (this.checkBox[key][index].checked) {//选中状态
              this.checkBox[key][index].postObj.op = 1
                imageList.push(this.checkBox[key][index].postObj)
              }else{//非选中状态，查找是否存在返回的数据中，若存在，需要提交到后台进行删除
                const imgid = this.checkBox[key][index].postObj.imgid
                if (this.opreateCheck&&this.opreateCheck[imgid]) {//如果存在需要进行删除操作
                  this.opreateCheck[imgid].op = 3 //修改为删除操作
                  imageList.push(this.opreateCheck[imgid])
                }
              }
            })
          })


        params.images = imageList
      }
      
      console.log('传的参数：', JSON.stringify(params))
    console.log('this.tagImageList:',this.tagImageList)
    console.log(' this.formItem.gtag_img:', this.formItem.gtag_img)
      addGlobalTags(

        // item.img.indexOf('http') > -1? item.img : IMAGE_PATH + item.img
        //上传提交时候，要把图片的长路径修改成短路径
        
        Object.assign({},params,{
          //gtag_img:this.tagImageList.length >0 &&this.tagImageList[0].url.indexOf('http') > -1?'oss_temp'+this.tagImageList[0].url.split('oss_temp')[1]:this.tagImageList[0].url
          gtag_img:params.gtag_img&&params.gtag_img.indexOf('http') > -1?'oss_temp'+params.gtag_img.split('oss_temp')[1]:params.gtag_img
        })
      ).then(res => {
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getTagList()
      }).catch(e=>{
        console.log('出错了：',e);
      })
    },
    getCardSizeList() {
      this.listLoading = true
      const checkBox  = {}
      cardSizeList().then(res => {
        const list = res.data
        list.forEach(item => {
          console.log('item:',item)
          
          //默认安卓 IOS 和平板都赋值列表
            checkBox[item.x+','+item.y] = {}
            checkBox[item.x+','+item.y]['0'] = {
              checked:false,
              //用于提交到接口的check数据
              postObj:{
                op:1,//默认为新增
                x:item.x,
                y:item.y,
                name:'check',
                img:'check',
                os:0
              }
            }

            checkBox[item.x+','+item.y]['1'] = {
              checked:false,
              //用于提交到接口的check数据
              postObj:{
                op:1,//默认为新增
                x:item.x,
                y:item.y,
                name:'check',
                img:'check',
                os:1
              }
            }

            checkBox[item.x+','+item.y]['2'] = {
              checked:false,
              //用于提交到接口的check数据
              postObj:{
                op:1,//默认为新增
                x:item.x,
                y:item.y,
                name:'check',
                img:'check',
                os:2
              }
            }

        })
        this.checkBox = checkBox
        this.cardList = list

        console.log('cardList卡片列表：', this.cardList)
      })
    },
    initCheckBox(){
      //将checkbox所有的checked重置为false
      Object.keys(this.checkBox).forEach(key=>{
        Object.keys(this.checkBox[key]).forEach(index=>{
          this.checkBox[key][index].checked = false
        })
      })
    },
    handleSuccess(res) {
      console.log('上传图片返回数据：', res)
      this.formItem.gtag_img = res.result.object
      console.log(this.formItem.gtag_img)
    },
    removeTagImage(file, fileList) {
      console.log('删除的图片：', file, fileList)
      //变量置空
      this.formItem.gtag_img = ''
    },
    uploadSuccess(item, type) {
      //type:0 android; 1 ios; 2 panel
      console.log('item', item)
      console.log('888888')
      const that = this
      return function(res) {
        console.log('列表上传图片返回数据：', res)
        if (res.code === 200) {
          const params = {
            "x": item.x,
            "y": item.y,
            "os": type,
            "name": res.result.filename,
            "img": res.result.object,
            "op": 1//op:1 新增， 2 修改，3 删除
          }
          that.operateImages[res.result.md5] = params
          console.log('that.operateImages:', that.operateImages)
        }else{
          that.$message.error('图片上传失败，请重新选择')
        }
      }
    },
    handleRemove(file, fileList) {
      const that = this

      console.log('====================================')
        console.log('file',file)
        console.log('====================================')
        if (file.response) {//这种是传到服务器的，还没存入接口
          if (file.response.code === 200) {
            const result = file.response.result
            const md5 = result.md5
            delete that.operateImages[md5]
            console.log('operateImages:', that.operateImages)
          }
        } else {//这里是编辑时候从接口取回来的图片列表数据（删除需要回传，修改op为3）
          const imgid = file.imgid
          // console.log('====================================');
          // console.log('imgid:',imgid);
          //  console.log('operateImagess:',that.operateImages);
          // console.log('operateImages[imgid]:',that.operateImages[imgid]);
          // console.log('====================================');
          that.operateImages[imgid].op = 3
          console.log('that.operateImages[imgid]:',that.operateImages[imgid])
          console.log('that.operateImages:',that.operateImages)
        }
      // return function(file, fileList) {
        

      // }
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    }
  }
}
</script>
<style lang="scss">
.form {
  .text{
    // line-height: 20px;
    // height: 80px;
    // display: flex;
    // justify-content: center;
    // align-items: center;
    margin-top: 10px;
  }
  .bottom_text {
    line-height: 20px;
    span {
      font-size: 10px;
      color: rgba(128, 128, 128, 0.529411764705882);
    }
    .addBtn {
    }
  }
  .imgContent {
    // line-height: 80px;
    // margin-left: 40px;
  }
  // .el-upload--picture {
  //   width: 80px;
  //   height: 76px;
  //   line-height: 80px;
  //   border: 1px dashed #d9d9d9;
  //   border-radius: 6px;
  //   cursor: pointer;
  //   position: relative;
  //   overflow: hidden;
  // }
   /deep/ .el-upload-list{
    // float: left;
  }
  // /deep/ .el-upload-list__item{
  //   display: flex;
  //   flex-direction: column;
  //   height: 138px;
  //   align-items: center;
  //   width: 25%;
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
}
</style>