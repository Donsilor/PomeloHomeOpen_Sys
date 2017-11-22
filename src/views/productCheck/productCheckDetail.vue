<template>
<div class="app-container">
  <!--====================-->
  <h3>产品基本信息</h3>
  <el-card class="box-card">
    <el-row class="card-row">
        <el-col :span="2" class="card-span-left">产品品类</el-col>
        <el-col :span="20" :offset="2" class="card-span-right">空调</el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">产品品牌</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">美的</el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">产品名称</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">立式变频空调87</el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">外观图片（六视图）</el-col>
      <!--<el-col :span="20" :offset="2" class="card-span-right">-->
        <el-col :span="3" :offset="2" class="card-hex-vision">
          <img style="width: 100%;height: 100%" src="" class="image">
        </el-col>
        <el-col :span="3" :offset="1" class="card-hex-vision">
          <img style="width: 100%;height: 100%" src="" class="image">
        </el-col>
        <el-col :span="3" :offset="1" class="card-hex-vision">
          <img style="width: 100%;height: 100%" src="" class="image">
        </el-col>
        <el-col :span="3" :offset="1" class="card-hex-vision">
          <img style="width: 100%;height: 100%" src="" class="image">
        </el-col>
        <el-col :span="3" :offset="1" class="card-hex-vision">
          <img style="width: 100%;height: 100%" src="" class="image">
        </el-col>
        <el-col :span="3" :offset="1" class="card-hex-vision">
          <img style="width: 100%;height: 100%" src="" class="image">
        </el-col>
      <!--</el-col>-->
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">产品规格书</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">美的立式变频空调EW32435-23 产品规格书.doc</el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">产品使用说明书</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">美的立式变频空调EW32435-23 产品规格书.doc</el-col>
    </el-row>

  </el-card>

  <!--=========================-->
  <h3>接入方式选择</h3>
  <el-card class="box-card">
    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">选择技术方案</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        <div class="card-img-tec">
          <img style="width: 100%;height: 100%" src="" class="image">
        </div>
      </el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">公司地址
      </el-col>
      <el-col :span="20" :offset="2" class="card-span-right">深圳市南山区高新园科技南一道2001号
      </el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">模组/芯片信息</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        xxxx
      </el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">型号
      </el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        xxxx
      </el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">
        配网方式
      </el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        xxxx
      </el-col>
    </el-row>

    <div>
      <el-form :inline="true" class="demo-form-inline">
        <el-col :span="4">
          <el-button type="primary">审核通过</el-button>
        </el-col>

        <el-col :span="4">
          <el-button type="primary">审核不通过</el-button>
        </el-col>

        <el-col :span="16">
          <el-form-item style="width: 100%" label="审核结果：">
            <div >
              <el-input></el-input>
            </div>
          </el-form-item>
        </el-col>

      </el-form>
    </div>
  </el-card>

  <!--===========必选功能点==============-->
  <h3>必选功能点</h3>
  <el-card class="box-card">
    <el-table
            stripe
            style="width: 100%">
      <el-table-column
              prop="date"
              label="Stream_ID"
              width="180">
      </el-table-column>
      <el-table-column
              prop="name"
              label="参数名称"
              width="180">
      </el-table-column>
      <el-table-column
              prop="address"
              label="value">
      </el-table-column>
    </el-table>
  </el-card>

  <!--===========审核==============-->
  <el-card class="box-card" style="margin: 30px 0">
      <p>审核不通过：</p>
      <p>1. 产品基本信息-产品名称审核不通过，请清晰描述产品；</p>
      <p>2. 接入方式选择模组芯片审核不通过，自定义信息填写错误；</p>
      <p>3. 功能点设置审核不通过，功能点太少；</p>
    <div style="padding: 30px 0">
      <el-col :span="4">
        <el-button  type="primary">提交</el-button>
      </el-col>
      <el-col :span="4">
        <el-button  >取消</el-button>
      </el-col>
    </div>
  </el-card>

</div>
</template>

<script>

</script>

<style scoped>
  .el-form-item__content {
    width: 80%;
  }
  .card-img-tec {
    width: 300px;
    height: 200px
  }
</style>
