<template>
  <div>
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

export default {
  data() {
    return {
    }
  },
  created() {
  },
  methods: {
  }
}
</script>

<style lang='sass' scoped>

</style>