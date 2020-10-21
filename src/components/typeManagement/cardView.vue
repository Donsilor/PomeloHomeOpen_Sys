<template>
  <div>
    <el-card
        class="box-card"
      >
        <el-row style="margin-bottom:20px">
          <el-col 
            :span="5"
            class="col" 
          >
            <span>名称:</span>
            <el-input 
              v-model="cardData.rect_name" 
              placeholder="请输入名称"/>
          </el-col>
          <el-col 
            :span="5"
            class="col"
            style="margin-left:10px"
          >
            <span>排序号:</span>
            <el-input 
              v-model="cardData.sort" 
              placeholder="请输入排序号"/>
          </el-col>
          <el-col 
            :span="5"
            class="col"
            style="margin-left:10px">
            <span>
              ID:
            </span>
            <el-input 
              v-model="cardData.rect_id"
              disabled 
              placeholder="请输入ID" />
          </el-col>
          <el-col 
            :span="1" 
            :offset="5">
            <el-button 
              type="primary" 
              @click="save()"
            >
              保存
            </el-button>
          </el-col>
          <el-col 
            :span="1" 
            style="margin-left:20px">
            <el-button 
              type="danger" 
              @click="del()" 
            >
              删除
            </el-button>
          </el-col>
        </el-row>
        <uploadComponent
        :operateImages="operateImages"
        :cardData="cardData"/>
      </el-card>
  </div>
</template>
<script>
import uploadComponent from '@/components/typeManagement/uploadComponent';
import {rectPostCard} from '@/api/devCard'
export default {
  components:{
    uploadComponent
  },
  props:{
    cardData:{
      type:Object
    }
  },
  data() {
    return {
      operateImages:{},//组装一份用于操作的对象
      platform:['android','ios','panel']
    }
  },
  created() {
  
  },
  computed: {
  },
  watch: {
    cardData(){
      //console.log('每个cardData变化了');
    }
  },
  methods: {
    save(){//修改保存
      // this.assignData()
      console.log('修改后的this.operateImages',this.operateImages);
      // console.log('修改后的this.images',this.images);
      console.log('this.cardData:',this.cardData);
      const params = Object.assign({
        "operator":2,//1 新增， 2 修改，3 删除
      },this.cardData,{images:this.operateImages})
      
      console.log('组装后的params：',params);
      rectPostCard(params).then(res=>{
        console.log('修改卡片返回：', res)
        if (res.code === 200) {
          this.$message({
            message: '保存修改成功',
            type: 'success'
          })
          this.$emit('getRectCard')
          //this.getRectCard()
        }else{
          this.$message.error('保存修改失败')
        }
      })
    },
    // 删除卡片
    del(){
      const params = {
        rect_id: this.cardData.rect_id,
        rect_name: this.cardData.rect_name,
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
              //this.getRectCard()
              this.$emit('getRectCard')
            }else{
              this.$message.error('删除失败')
            }
          })
        })
    },
  },
}
</script>
