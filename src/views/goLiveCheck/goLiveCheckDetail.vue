<template>
<div class="app-container">
  <!--====================-->
  <el-card class="box-card">
    <el-row class="card-row">
        <el-col :span="2" class="card-span-left">版本号</el-col>
        <el-col :span="20" :offset="2" class="card-span-right">xxxxx</el-col>
    </el-row>

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">版本说明</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        xxxxx
        <el-form :inline="true" class="demo-form-inline" style="padding-top: 20px">
          <el-row>
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
          </el-row>
        </el-form>
      </el-col>
    </el-row>

    <!--<el-row>-->
      <!--<el-col :span="20" :offset="4">-->
        <!---->
      <!--</el-col>-->
    <!--</el-row>-->

    <el-row class="card-row">
      <el-col :span="2" class="card-span-left">手机端控制页</el-col>
      <el-col :span="20" :offset="2" class="card-span-right">
        <div>zip附件</div>
        <div>33333</div>
        <el-form :inline="true" class="demo-form-inline" style="padding-top: 20px">
          <el-row>
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
          </el-row>
        </el-form>
      </el-col>
    </el-row>

  </el-card>

  <!--===========审核==============-->
  <el-card class="box-card" style="margin: 30px 0">
      <p>审核不通过：</p>
      <p>1. 版本信息审核不通过；</p>
      <p>2. Pad端控制页审核不通过-文件缺失；</p>
      <p>3. 已知问题清单审核不通过-没按规范要求提交；</p>
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
  /*.el-form-item__content {*/
    /*width: 80%;*/
  /*}*/
  .card-img-tec {
    width: 300px;
    height: 200px
  }
</style>
