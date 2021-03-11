<template>
<el-dialog
      :close-on-click-modal="false"
      :visible.sync="addView"
      :before-close="closeView"
      :title="op==='add'?'添加文案':'修改文案'"
      width="90%">
      <el-form >
        <el-form-item 
          label="标题">
          <el-input 
            v-model="title" 
            type="input"/>
        </el-form-item>
        <el-form-item 
          label="文案内容">
        </el-form-item>
      </el-form>
    <wangEnduit v-model="detail" value="999999999" :isClear="isClear" @change="change" />
    <span
        slot="footer"
        class="dialog-footer">
        <el-button @click="closeView">取 消</el-button>
        <el-button
          type="primary"
          @click="addFuc">{{op==='add'?'添加':'修改'}}</el-button>
      </span>
</el-dialog>  
</template>
<script>
import wangEnduit from "@/components/wangEnduit/wangEnduit"
export default {
  props:{
    addView:{
      type:Boolean
    },
    op:{
      type:String
    },
    configDetail:{
      type:Object || null
    }
  },
   components:{
    wangEnduit
  },
  data() {
    return {
      isClear: false,
      detail:"",
      title:''
    }
  },
  methods: {
    addFuc(){

    },
     change(val) {
      console.log(val)
    },
    closeView(){
      this.$emit('closeView')
    }
  }
}
</script>