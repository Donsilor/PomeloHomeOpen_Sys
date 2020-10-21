<template>
  <div>
    <el-col :span="8">
        <el-col :span="5" class="text">
            {{type}}
        </el-col>
        <el-col :span="19">
          <el-upload
          :disabled="!edit"
            :on-success="uploadSuccess()"  
            :data="and_base_img"
            :file-list="returnList()"
            :on-remove="removeSuccess(imageData)"
            action="/api/index.php/files/save">
            <el-button  icon="el-icon-plus" class="imgAddBtn" size="mini">添加图片</el-button>
          </el-upload>
        </el-col>
      </el-col>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
export default {
  props:{
    imageData:{
      type:Object || null
    },
    os:{
      type:Number
    },
    card:{
      type:Object
    },
    imageList:{
      type:Array || null
    },
    edit:{
      type:Boolean
    }
  },
  data () {
    return {
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
      }
    }
  },
  created() {
    //console.log('this.os:',this.os);
  },
  computed: {
    type(){
      // console.log('this.os:',this.os);
      // return '安卓'
      if (this.os === 0) {
        return '安卓：'
      }else if (this.os === 1) {
        return 'IOS：'
      }else{
         return '面板：'
      }
    }
  },
  methods: {
    handleChange(file, fileList) {
      //this.fileList = fileList.slice(-3)
    },
    uploadSuccess(item,cardType,type){
      const that = this
      // console.log('====================================');
      // console.log('item:',item);
      // console.log('====================================');
      return function(res) {
        console.log('列表上传图片返回数据：', res)
        const params = {
          "x": that.card.x,
          "y": that.card.y,
          "os": that.os,
          "name": res.result.filename,
          "img": res.result.object,
          "op": 1//op:1 新增， 2 修改，3 删除
        }
        console.log('params:',params);
        that.$emit('change-image',{file:params,card:that.card,os:that.os})
        // item.operateImages[res.result.md5] = params
        // console.log('item.operateImages:', item.operateImages)
      }
    },
    removeSuccess(item) {
      const that = this
      return function(file, fileList) {
        console.log('====================================')
        console.log('file',file)
        console.log('====================================')
        if (file.response) {//这种是传到服务器的，还没存入接口
          const result = file.response.result
          const id = result.object
           that.$emit('del-image',{file:file.response,card:that.card,os:that.os})
        } else {//这里是编辑时候从接口取回来的图片列表数据（删除需要回传，修改op为3）
          const imgid = file.imgid
          file.op = 3//表示删除
          console.log('====================================')
          console.log('imgid:',imgid)
          that.$emit('del-image',{file:file,card:that.card,os:that.os})
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
      //this.imgList = fileList.slice(-3)
    },
    imageSuccess(res){
      console.log('图片列表上传返回：',res)
    },
    handlePictureCardPreview(file) {
      console.log(file)
      this.dialogImageUrl = file.url
      this.dialogVisible = true
    },
    returnList(){
      if (this.imageList) {
        // return []
        // this.imageList.map(item=>{
        //   item.url = item.img
        //   item.op = 2//重置为修改
        //   item.os = this.os
        //   item.x = this.card.x
        //   item.y = this.card.y
        // })

        const list = this.imageList.filter(item=>{
          if (item.op !== 3) {//过滤掉要删除的图片
            if (item.imgid) {//接口返回的图片才要重置
              item.url = item.img
              item.op = 2//重置为修改
              item.os = this.os
              item.x = this.card.x
              item.y = this.card.y
            }
            return item
          }
        })
        return list
      } else {
        return []
      }
      
    }
  },
}
</script>
<style lang="scss" scope>
.el-upload-list__item:first-child {
  margin-top: 0px;
}
.el-upload-list__item{
  margin-top: 0px;
}
</style>