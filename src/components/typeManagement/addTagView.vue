<template>
  <el-dialog 
      :before-close="closeView"
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

        <uploadComponent :operateImages="operateImages" :cardData="row"  />

      </el-form>
      <span 
        slot="footer"
        class="dialog-footer">

        <el-button 
          type="primary"
          @click="onSubmit">提交</el-button>
        <el-button @click="closeView">取消</el-button>
      </span>
    </el-dialog>
</template>
<script>
import { getToken } from '@/utils/auth'
import uploadComponent from '@/components/typeManagement/uploadComponent';
import { IMAGE_PATH } from '@/assets/const'
import {  addGlobalTags } from '@/api/check'
export default {
  components:{
    uploadComponent
  },
  props:{
    formVisible:{
      type:Boolean
    },
    isEdit:{
      type:Boolean
    },
    row:{
      type:Object || null
    }
  },
  data () {
    return {
      formItem: {
        gtag_name: '',
        gtag_id: '',
        enable: 1,    // 暂时不能进行删除，默认传1
        dev_limit: '',
        panel_can: '',
        gtag_img: ''//tag图片path
      },
      operateImages:{},
      tagImageList: [],
      base_img: {
        type: 12,
        token: getToken()
      }
    }
  },
  created() {
    
  },
  watch: {
    row(){
      if (this.row) {
        Object.assign(this.formItem,this.row)
        this.tagImageList = this.row.gtag_img
        ?[
          {
            name: this.row.gtag_name,
            url: this.row.gtag_img.indexOf('http') > -1 ? this.row.gtag_img : IMAGE_PATH + this.row.gtag_img
          }
        ]
        :[]
      }else{
        this.formItem={
          gtag_name: '',
          gtag_id: '',
          enable: 1,    // 暂时不能进行删除，默认传1
          dev_limit: '',
          panel_can: '',
          gtag_img: ''//tag图片path
        }
        this.tagImageList = []
      }
    }
  },
  computed: {
     dialogTitle() {
      return this.isEdit ? '编辑' : '新增'
    }
  },
  methods: {
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
    closeView(){
      this.$emit('closeView')
    },
    onSubmit(){
      console.log('this.formItem:',this.formItem)
      const params = Object.assign({},this.formItem,{images:this.operateImages})
      console.log('组装后的params：',params);
      addGlobalTags(params).then(res => {
        this.$message.success('操作成功！')
        this.closeView()
        this.$emit('getTagList')
      }).catch(e=>{
        console.log('出错了：',e);
      })
    }
  },
}
</script>