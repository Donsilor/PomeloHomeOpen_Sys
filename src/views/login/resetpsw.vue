<template>
  <div class="reset-container">
    <el-form 
      v-if="showReset" 
      ref="resetForm" 
      :model="resetForm" 
      :rules="rules" 
      auto-complete="off" 
      label-position="left" 
      label-width="0px"
      class="card-box login-form">
      <h3 class="title">设置密码</h3>

      <el-form-item prop="password">
        <el-input 
          :type="flags[0].show?'text':'password'" 
          v-model="resetForm.password" 
          name="password" 
          placeholder="设置密码" >
          <i 
            slot="suffix" 
            :class="{active:flags[0].show}" 
            class="el-input__icon el-icon-view" 
            @click="switchInput(flags[0])"/>
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-button 
          :loading="loading" 
          type="primary" 
          style="width:100%;" 
          @click.native.prevent="handleLogin">
          确定
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import fetch from '@/utils/fetch'
const md5 = require('js-md5')
export default {
  name: 'Reset',
  data() {
    return {
      resetForm: {
        type:1,
        password: '',
        token:'',
        auth_mail:this.$route.query.auth_mail,
        mail:this.$route.query.mail
      },
      rules: {
        password: [{ required: true,message:'密码不能为空', trigger: 'blur' }],
      },
      flags: [
        {show:false}
      ],
      form:{
        auth_mail:this.$route.query.auth_mail,
        mail:this.$route.query.mail
      },
      loading: false,
      showReset:true
    }
  },
  created(){
    if(this.form.auth_mail){
      /*fetch({
                    url:'/admin/activate',
                    method:'post',
                    data:this.form
                }).then(res=>{
                    this.$message.info('激活成功！');
                    this.showReset = true;
                    this.resetForm.token = res;
                }).catch(e=>{
                    this.$message.error('激活失败！');
                    this.$router.push({path:'/login'});
                })*/
    }else{
      this.$router.push({path:'/login'})
    }
  },
  methods: {
    switchInput(item) {
      item.show = !item.show
    },
    handleLogin() {
      this.$refs.resetForm.validate(valid => {
        if (valid) {
          this.resetForm.password = md5(this.resetForm.password)
          fetch({
            url:'/admin/setpwd',
            method:'post',
            data:this.resetForm
          }).then(res=>{
            if(res){
              this.$router.push({path:'/login'})
            }
            else{
              this.$message.error('设置失败！')
            }
          })
        }
      })
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss">
    @import "src/styles/mixin.scss";
    $bg:#2d3a4b;
    $dark_gray:#889aa4;
    $light_gray:#eee;

    .reset-container {
        @include relative;
        height: 100vh;
        background-color: $bg;
        input:-webkit-autofill {
            -webkit-box-shadow: 0 0 0px 1000px #293444 inset !important;
            -webkit-text-fill-color: #fff !important;
        }
        input {
            background: transparent;
            border: 0px;
            -webkit-appearance: none;
            border-radius: 0px;
            padding: 12px 5px 12px 15px;
            color: $light_gray;
            height: 47px;
        }
        .tips {
            font-size: 14px;
            color: #fff;
            margin-bottom: 10px;
        }
        .svg-container {
            padding: 6px 5px 6px 15px;
            color: $dark_gray;
            vertical-align: middle;
            width: 30px;
            display: inline-block;
            &_login {
                font-size: 20px;
            }
        }
        .title {
            font-size: 26px;
            font-weight: 400;
            color: $light_gray;
            margin: 0px auto 40px auto;
            text-align: center;
            font-weight: bold;
        }
        .login-form {
            position: absolute;
            left: 0;
            right: 0;
            width: 400px;
            padding: 35px 35px 15px 35px;
            margin: 120px auto;
        }
        .el-form-item {
            border: 1px solid rgba(255, 255, 255, 0.1);
            background: rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            color: #454545;
        }
        .show-pwd {
            position: absolute;
            right: 10px;
            top: 7px;
            font-size: 16px;
            color: $dark_gray;
            cursor: pointer;
            user-select:none;
        }
        .thirdparty-button{
            position: absolute;
            right: 35px;
            bottom: 28px;
        }
        .el-input__icon{
            font-size: 18px;
            &.active{
                color: #409eff;
            }
        }
    }
</style>
