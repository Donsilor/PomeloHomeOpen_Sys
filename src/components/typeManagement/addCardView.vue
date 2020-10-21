<template>
  <el-dialog 
      class="addDialog"
      :before-close="closeView"
      :visible.sync="formVisible"
      title="添加卡片">
      <el-form 
        label-width="80px"
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
        <el-form-item label="排序号">
          <el-input 
            v-model="formItem.sort"
            type="input" />
        </el-form-item>

        <uploadComponent :operateImages="operateImages"/>

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
</template>
<script>
import uploadComponent from '@/components/typeManagement/uploadComponent';
import {rectPostCard} from '@/api/devCard'
export default {
  props:{
    formVisible:{
      type:Boolean
    }
  },
  components:{
    uploadComponent
  },
  watch: {
    formVisible(){
      this.formItem={
        rect_id:'',
        rect_name:'',
        sort:'',
        images:{}
      },
      this.operateImages ={}
    }
  },
  methods: {
    closeView(){
      this.$emit('closeView')
    },
    addNewCard(){
       const params = Object.assign({
        "operator":1,//1 新增， 2 修改，3 删除
      },this.formItem,{images:this.operateImages})
      console.log('添加卡片组装后的参数：',params);
      rectPostCard(params).then(res=>{
        console.log('添加卡片返回：', res)
        if (res.code === 200) {
          this.$message({
            message: '保存添加成功',
            type: 'success'
          })
          this.closeView()
          this.$emit('getRectCard')
        }else{
          this.$message.error('卡片添加失败')
        }
      })
    }
  },
  data() {
    return {
      formItem:{
        rect_id:'',
        rect_name:'',
        sort:'',
        images:{}
      },
      operateImages:{}
    }
  }
}
</script>
<style lang="scss" scope>
  .tx-r{
    text-align: right;
  }
</style>