<template>
  <div 
    id="content" 
    style=""
    class="content">
    <p style="text-align:center;color:white">内容加载中....</p>
  </div>
</template>
<script>
import { queryCopyDetail } from "@/api/config"
export default {
  data(){
    return {
      show: true,
      content:''
    }
  },
  created(){
   
  },
  mounted(){
    const querParams = this.paramQuery()
    console.log('querParams:',querParams)
    const params = {
      copywritingKey:querParams.copywritingKey
    }
    queryCopyDetail(params).then(res=>{
      console.log('详情结果：',res)
      this.content = res.data.content
      // document.getElementById('content').setAttribute('style','height:'+window.screen.availHeight+'px')
      document.getElementById('content').innerHTML = this.content
    })
    
  },
  methods:{
    paramQuery() {
      var params = {}
      var loc = document.location + ''
      if (loc.indexOf("?") > 0) {
        loc = loc.substr(loc.indexOf('?') + 1)
      } else {
        return {}
      }

      var pieces = loc.split('&')
      params.keys = []
      for (var i = 0; i < pieces.length; i += 1) {
        var keyVal = pieces[i].split('=')
        params[keyVal[0]] = decodeURIComponent(keyVal[1])
        params.keys.push(keyVal[0])
      }
      return params
    }
  },
}
</script>

<style  scoped>
html{
  background-color: #1f1e1d;
}
  .content{
    padding: 20px;
    word-break: break-all;
    background-color: #1f1e1d;
  }
  .wrapper {
    display: flex;
    /* align-items: center; */
    /* justify-content: center; */
    height: 100%;
    background-color: rgba(0, 0, 0, 0.7);
    
  }
  .van-overlay{
    height: 100%;
  }
  .block {
    width: 120px;
    height: 120px;
    background-color: #fff;
  }
</style>