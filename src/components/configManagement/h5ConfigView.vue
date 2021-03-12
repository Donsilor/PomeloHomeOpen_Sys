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
        label="文案内容"/>
    </el-form>
    <wangEnduit 
      v-model="detail" 
      :is-clear="isClear" 
      :content="content" 
      value=""
      @change="change" />
    <span
      slot="footer"
      class="dialog-footer">
      <el-button @click="closeView">取 消</el-button>
      <el-button
        type="primary"
        @click="addFuc">{{ op==='add'?'添加':'修改' }}</el-button>
    </span>
  </el-dialog>  
</template>
<script>
import wangEnduit from "@/components/wangEnduit/wangEnduit"
import { updateCopy,addCopy  } from "@/api/config"
export default {
  components:{
    wangEnduit
  },
  props:{
    addView:{
      type:Boolean,
      default:false
    },
    op:{
      type:String,
      default:''
    },
    configDetail:{
      type:Object || null,
      default:''
    }
  },
  data() {
    return {
      isClear: false,
      detail:"",
      title:'',
      content:this.configDetail.content?this.configDetail.content:''
    }
  },
  created(){
    console.log('configDetail:',this.configDetail)
    if (this.op==='edit') {
      this.title = this.configDetail.title
      this.content = this.configDetail.content
    }
   
  },
  methods: {
    refresh(){
      this.$emit('refresh')
    },
    addFuc(){
      if (this.op === 'edit') {
        const params = Object.assign({},{
          id:this.configDetail.id,
          title:this.title,
          content:this.content
        })
        updateCopy(params).then(res=>{
          console.log('更新返回：',res)
          console.log('添加参数返回：',res)
          if (res.code===0) {
            this.$message.success('更新成功！')
            this.refresh()
            this.closeView()
          }else{
            this.$message.error(res.msg)
          }
        })
      }else{
        const params = Object.assign({},{
          title:this.title,
          content:this.content
        })
        addCopy(params).then(res=>{
          console.log('添加返回：',res)
          if (res.code===0) {
            this.$message.success('添加成功！')
            this.refresh()
            this.closeView()
          }else{
            this.$message.error(res.msg)
          }
        })
      }
    },
    change(val) {
      console.log(val)
      this.content = val
    },
    closeView(){
      this.$emit('closeView')
    }
  }
}
</script>