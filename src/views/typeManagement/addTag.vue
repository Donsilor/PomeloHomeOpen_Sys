<template>
  <div class="app-container calendar-list-container">
    <el-row style="margin-bottom: 10px;">
      <el-button size="medium"
        type="primary"
        :disabled="cardList.length ===0 "
        @click="addTag">
        新增编组tag
      </el-button>
    </el-row>

    <el-table v-loading="listLoading"
      :data="tagList"
      element-loading-text="给我一点时间"
      stripe
      fit
      highlight-current-row
      style="width: 100%">
      <el-table-column align="center"
        label="标签编号"
        prop="gtag_id" />
      <el-table-column align="center"
        label="标签名称"
        prop="gtag_name" />
      <el-table-column align="center"
        label="enable"
        prop="enable" />
      <el-table-column align="center"
        label="创建时间"
        prop="create_time" />
      <el-table-column align="center"
        label="更新时间"
        prop="update_time" />

      <el-table-column align="center"
        label="操作"
        width="150">
        <template slot-scope="scope">
          <el-button size="small"
            type="danger"
            @click="delTag(scope.row)">
            删除
          </el-button>
          <el-button size="small"
            type="primary"
            :disabled="cardList.length ===0 "
            @click="editTag(scope.row, true)">
            编辑
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div v-show="!listLoading"
      class="pagination-container">
      <!-- 页码按钮的数量： currenCurrent
           会sizeChange 
       -->
      <el-pagination :current-page.sync="listQuery.page"
        :page-sizes="[15,20,30, 50]"
        :page-size="listQuery.limit"
        :total="total"
        layout="total, sizes, prev, pager, next, jumper"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange" />
    </div>

    <el-dialog :visible.sync="formVisible"
      :title="dialogTitle">
      <el-form label-width="200px"
        class="form">
        <el-form-item v-show="isEdit == false"
          label="标签编号">
          <el-input v-model="formItem.gtag_id"
            type="input" />
        </el-form-item>
        <el-form-item label="标签名称">
          <el-input v-model="formItem.gtag_name"
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
          <el-upload action="/api/index.php/files/save"
            list-type="picture-card"
            :on-preview="handlePictureCardPreview"
            :data="base_img"
            accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
            :on-success="handleSuccess"
            :on-remove="removeTagImage"
            :file-list="imageList"
            :limit="1">
            <i class="el-icon-plus"></i>
          </el-upload>
        </el-form-item>

        <el-form-item label="">
          <template slot="label">
            <div class="bottom_text">
              编组数量限制（非必填）<br>
              <span class="">用于面板屏幕配置多设备选择设备</span>
            </div>
          </template>
          <el-input v-model="formItem.dev_limit"
            placeholder="请输入正整数，0表示无穷大"></el-input>
        </el-form-item>

        <el-form-item label="面板是否可用">
          <el-radio v-model="formItem.panel_can"
            :label="1">是</el-radio>
          <el-radio v-model="formItem.panel_can"
            :label="0">否</el-radio>
        </el-form-item>

        <el-row :span="24"
          class="imgContent"
          v-for="(item,index) in cardList"
          :key="index">
          <el-col :span="3"
            class="checkContent">
            <el-checkbox v-model="item.checked">
              {{item.x}}*{{item.y}}
            </el-checkbox>
          </el-col>
          <el-col :span="21">
            <el-col :span="4">安卓图片：</el-col>
            <el-col :span="17">
              <el-upload action="/api/index.php/files/save"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :data="base_img"
                :file-list="item.androidImgList"
                :on-success="uploadSuccess(item,0)"
                :on-remove="handleRemove(item,0)">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-col>
            <el-col :span="4">IOS图片：</el-col>
            <el-col :span="17">
              <el-upload action="/api/index.php/files/save"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :data="base_img"
                :file-list="item.iosImgList"
                :on-success="uploadSuccess(item,1)"
                :on-remove="handleRemove(item,0)">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-col>
            <el-col :span="4">面板图片：</el-col>
            <el-col :span="17">
              <el-upload action="/api/index.php/files/save"
                list-type="picture-card"
                :on-preview="handlePictureCardPreview"
                :data="base_img"
                :file-list="item.panelImgList"
                :on-success="uploadSuccess(item,2)"
                :on-remove="handleRemove(item,0)">
                <i class="el-icon-plus"></i>
              </el-upload>
            </el-col>
          </el-col>
        </el-row>

      </el-form>
      <span slot="footer"
        class="dialog-footer">

        <el-button type="primary"
          @click="onSubmit">提交</el-button>
        <el-button @click="formVisible=false">取消</el-button>
      </span>
    </el-dialog>
    <!-- 点击放大图片查看 -->
    <el-dialog :visible.sync="dialogVisible">
      <img width="100%"
        :src="dialogImageUrl"
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
  data () {
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
        gtag_img: '',//tag图片path
        iosImgList:[],
        androidImgList:[],
        panelImgList:[]
      },
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
      imageList: [],
      iosImgList:[],
      androidImgList:[],
      panelImgList:[]
    }
  },
  computed: {
    dialogTitle () {
      return this.isEdit ? '编辑' : '新增'
    }
  },
  created () { },
  mounted () {
    this.refresh()
    this.getCardSizeList()
  },
  methods: {
    dataFormat (originVal) { // 后台传回来的S
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
    refresh () {
      this.$nextTick(() => {
        this.getTagList()
      })
    },

    getTagList () {
      this.listLoading = true
      const params = {
        size: this.listQuery.limit,
        page: this.listQuery.page
      }
      getGlobalTags(params).then(res => {
        this.tagList = res.data
        console.log('this.tagList:', this.tagList);
        this.tagList.forEach((ele) => {
          ele.create_time = this.dataFormat(ele.create_time * 1000)
          ele.update_time = this.dataFormat(ele.update_time * 1000)
        })
        this.total = res.page_info.total
        this.listLoading = false
      })
    },

    handleSizeChange (val) {  // 分页功能
      this.listQuery.limit = val
      this.getTagList()
    },
    handleCurrentChange (val) { // 改变页码数量
      this.listQuery.page = val
      this.getTagList()
    },
    addTag () {   // button按钮事件
      this.isEdit = false // 编辑状态开关
      this.formVisible = true // 蒙版开关
      this.formItem = {}
      this.imageList = []
    },
    editTag (row, isEdit) {
      console.log('process.env:', process.env);
      console.log('row:', row);
      const images = row.images

      //为每一项目分出安卓、苹果和平板的图片列表
      const iosImgList = []
      const androidImgList = []
      const panelImgList = []
      console.log('images:', images);
      const opreateImages = {}
      images && images.forEach(item => {
        if (item.os === 0) {
          androidImgList.push(
            {
              name: item.name,
              url: item.img.indexOf('http') > -1 ? item.img : IMAGE_PATH + item.img,
              imgid: item.imgid
            }
          )
        } else if (item.os === 1) {
          iosImgList.push(
            {
              name: item.name,
              url: item.img.indexOf('http') > -1 ? item.img : IMAGE_PATH + item.img,
              imgid: item.imgid
            }
          )
        } else {
          panelImgList.push(
            {
              name: item.name,
              url: item.img.indexOf('http') > -1 ? item.img : IMAGE_PATH + item.img,
              imgid: item.imgid
            }
          )
        }
        item.opt = 1//重置为修改
        //用imgid关联可以用来操作
        opreateImages[item.imgid] = item
      })
      row.opreateImages = opreateImages
      this.isEdit = true
      this.formVisible = true
      this.formItem = {
        gtag_name: row.gtag_name,
        gtag_id: row.gtag_id,
        enable: 1,    // 暂时不能进行删除，默认传1
        dev_limit: row.dev_limit,
        panel_can: row.panel_can,
        gtag_img: row.gtag_img,//tag图片path
        images: row.opreateImages,
        iosImgList:iosImgList,
        androidImgList:androidImgList,
        panelImgList:panelImgList
      }
      this.$set('formItem','iosImgList',iosImgList)
       this.$set('formItem','androidImgList',androidImgList)
        this.$set('formItem','panelImgList',panelImgList)
      this.imageList = [
        {
          name: row.gtag_name,
          url: row.gtag_img.indexOf('http') > -1 ? row.gtag_img : IMAGE_PATH + row.gtag_img
        }
      ]
    },
    delTag (row) {
      this.$confirm('确认删除？')
        .then(_ => {
          this.formItem = row
          this.formItem.enable = 0 //enable传0表示删除
          this.onSubmit() //调用onSubmit借口发起请求
        })
        .catch(_ => { })
    },
    onSubmit () {
      const params = this.formItem
      if (this.formItem.enable === 0) {//删除

      } else if (this.isEdit) {//编辑

      } else {//添加
        //组装images参数返回给后台
        const imageList = []
        this.cardList.forEach(item => {
          if (item.checked) {
            Object.keys(item.opreateImages).forEach(key => {
              imageList.push(item.opreateImages[key])
            })
          }
        })
        params.opreateImages = imageList
      }

      console.log('传的参数：', JSON.stringify(params));

      addGlobalTags(params).then(res => {
        this.$message.success('操作成功！')
        this.formVisible = false
        this.getTagList()
      })
    },
    getCardSizeList () {
      this.listLoading = true
      cardSizeList().then(res => {
        const list = res.data
        list.forEach(item => {
          item.checked = false
          //编辑时候，用于初始化展示相应的图片的列表
          item.iosImgList = []
          item.androidImgList = []
          item.panelImgList = []
          //用于存放上传到服务器后返回的图片信息
          //以上传到服务器后成功返回的md5或者是取回来的imageid作为唯一标识，可以对图片进行增删改的操作
          item.opreateImages = {}
        })
        this.cardList = list

        console.log('cardList卡片列表：', this.cardList)
      })
    },
    handleSuccess (res) {
      console.log('上传图片返回数据：', res);
      this.formItem.gtag_img = res.result.object
    },
    removeTagImage (file, fileList) {
      console.log('删除的图片：', file, fileList);
      //变量置空
      this.formItem.gtag_img = ''
    },
    uploadSuccess (item, type) {
      //type:0 android; 1 ios; 2 panel
      console.log('item', item);
      return function (res) {
        console.log('列表上传图片返回数据：', res);
        const params = {
          "x": item.x,
          "y": item.y,
          "os": type,
          "name": res.result.filename,
          "img": res.result.object,
          "op": 1//op:1 新增， 2 修改，3 删除
        }
        item.opreateImages[res.result.md5] = params
        console.log('item.opreateImages:', item.opreateImages);
      }
    },
    handleRemove (item, type) {
      return function (file, fileList) {
        if (file.response) {//这种是传到服务器的，还没存入接口
          const result = file.response.result;
          const md5 = result.md5
          delete item.opreateImages[md5]
          console.log('item.opreateImages:', item.opreateImages);
        } else {//这里是编辑时候从接口取回来的图片列表数据（删除需要回传，修改op为3）
          const msgid = file.msgid
          item.opreateImages[msgid].op = 3
        }

      }
    },
    handlePictureCardPreview (file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    }
  }
}
</script>
<style lang="scss">
.form {
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
    line-height: 80px;
    margin-left: 40px;
  }
  .el-upload--picture-card {
    width: 80px;
    height: 80px;
    line-height: 80px;
  }
  .el-upload-list--picture-card .el-upload-list__item {
    width: 80px;
    height: 80px;
  }
}
</style>