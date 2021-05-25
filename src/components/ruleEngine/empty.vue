<template>
  <div class="emptyContent">
    <div>
      <img 
        :src="emptyImg" 
        class="emptyImg" 
        alt="" 
        srcset="">
      <span 
        v-if="funDefinitionFlag" 
        @click="emitToEdit">尚未添加任何功能,您可以点击 <i>编辑草稿</i> 进行添加</span>
      <span v-else>暂无数据</span>
    </div>
  </div>
</template>
<script>
import emptyImg from '@/assets/empty.png'
export default {
  props: {
    funDefinitionFlag: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      emptyImg
    }
  },
  methods: {
    emitToEdit() {
      this.$emit('emitToEdit')
    }
  }
}
</script>
<style lang='scss' scoped>
   .emptyContent{
     z-index: 9999;
     width: 100%;
     display: flex;
      justify-content: center;
      align-items: center;
      color: #888888;
      font-size: 16px;
      margin-top: 10px;
      margin-bottom: 10px;
      .emptyImg{
        width: 70px;
      }
      i{
        color: skyblue;
        font-style: normal;
        cursor: pointer;
      }
    }
</style>
