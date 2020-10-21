<template>
  <div>
    <el-row
          class="imgContent">
          <el-col 
            :span="2" 
            class="checkContent">
             <el-checkbox :disabled="!edit" v-model="check">{{ `${card.x}*${card.y}` }}</el-checkbox>
          </el-col>
          <el-col :span="22">
            <uploadView :os="0"
              :edit="edit"
              @change-image="changeIamge" 
              @del-image="delImage" 
              :imageList="getList(0)" 
              :imageData="imageData" 
              :card="card" />
            <uploadView :os="1"
            :edit="edit"
             @change-image="changeIamge" 
              @del-image="delImage" 
              :imageList="getList(1)" 
              :imageData="imageData" 
              :card="card" />
            <uploadView 
            :edit="edit"
             @change-image="changeIamge" 
              @del-image="delImage" 
            :os="2" 
            :imageList="getList(2)" 
            :imageData="imageData" :card="card"/>
          </el-col>
        </el-row>
  </div>
</template>
<script>
import { getToken } from '@/utils/auth'
import uploadView from '@/components/typeManagement/uploadView'
export default {
  components: {
    uploadView
  },
  props:{
    imageData:{
      type:Object || null
    },
    card:{
      type:Object
    },
    edit:{
      type:Boolean
    }
  },
  data () {
    return {
      
    }
  },
   created() {
    console.log('imageData:',this.imageData)
  },
  computed: {
    check:{
      get:function () {
        return this.imageData.check === 1
      },
      set:function (newValue) {
        if (newValue) {
          this.imageData.check = 1
        }else{
          this.imageData.check = 0
        }
      }
    }
  },
  methods: {
    getList(type){
      if (this.imageData) {
        if (type === 0) {
          return this.imageData.android
        }else if (type === 1) {
          return this.imageData.ios
        }else {
          return this.imageData.panel
        }
      }else{
        return []
      }
    },
    changeIamge(fileParams){
      this.$emit('change-image',fileParams)
    },
    delImage(fileParams){
      this.$emit('del-image',fileParams)
    }
  },
}
</script>