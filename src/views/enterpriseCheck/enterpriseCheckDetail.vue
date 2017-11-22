<template>
<div class="app-container">
  <!--====================-->
  <h3>联系人信息</h3>
  <el-card class="box-card">
    <el-row slot="header" class="card-row">
        <el-col :span="4" class="card-span-left">联系人姓名</el-col>
        <el-col :span="15" :offset="2" class="card-span-right">李大锤</el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="4" class="card-span-left">联系人手机</el-col>
      <el-col :span="15" :offset="2" class="card-span-right">1576666666</el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="4" class="card-span-left">职位</el-col>
      <el-col :span="15" :offset="2" class="card-span-right">研发经理</el-col>
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

  <!--=========================-->
  <h3>公司/团队信息</h3>
  <el-card class="box-card">
    <el-row slot="header" class="card-row">
      <el-col :span="4" class="card-span-left">公司名称</el-col>
      <el-col :span="15" :offset="2" class="card-span-right">TCL多媒体科技控股有限公司
      </el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="4" class="card-span-left">公司地址
      </el-col>
      <el-col :span="15" :offset="2" class="card-span-right">深圳市南山区高新园科技南一道2001号
      </el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="4" class="card-span-left">公司营业执照注册号/统一社会信用代码</el-col>
      <el-col :span="15" :offset="2" class="card-span-right">32DFGE467Y68RFH33233
      </el-col>
    </el-row>

    <el-row slot="header" class="card-row">
      <el-col :span="4" class="card-span-left">合作产品
      </el-col>
      <el-col :span="15" :offset="2" class="card-span-right">
        <el-button >空调</el-button>
        <el-button>电饭煲</el-button>
        <el-button>电视</el-button>
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

  <!--===========上传公司资质说明==============-->
  <h3>上传公司资质说明</h3>
  <el-card class="box-card">
    <div>
     <p style="color: darkgray">营业执照复印件，加盖公章</p>
      <div class="card-img-size">
        <img style="width: 100%;height: 100%" src="" class="image">
      </div>
      <div style="padding: 30px 0">
        <el-col :span="4">
          <el-button  type="primary">审核通过</el-button>
        </el-col>
        <el-col :span="4">
          <el-button  type="primary">审核不通过</el-button>
        </el-col>
      </div>
    </div>
  </el-card>

  <!--===========复核原件==============-->
  <h3>复核原件</h3>
  <el-card class="box-card">
    <div>
      <p>1、营业执照/组织结构代码证/税务登记证复印件，加盖公章</p>
      <div style="padding: 30px 0">
        <el-col :span="4">
          <el-button  type="primary">审核通过</el-button>
        </el-col>
        <el-col :span="4">
          <el-button  type="primary">审核不通过</el-button>
        </el-col>
      </div>
    </div>

  </el-card>

  <!--===========审核==============-->
  <el-card class="box-card" style="margin: 30px 0">
      <p>审核不通过：</p>
      <p>1. 联系人信息未审核通过-电话未拨通；</p>
      <p>2. 上传公司资质说明，营业执照复印件，加盖公章未审核通过-上传图片不清晰；</p>
      <p>3. 复核原件，营业执照复印件，加盖公章未审核通过-原件公章模糊；</p>
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
</style>
