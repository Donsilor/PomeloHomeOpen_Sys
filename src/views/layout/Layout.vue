<template>
  <div class="app-wrapper">
    <el-container>
      <el-header height="50px">
        <el-row>
          <el-col 
            :span="16" 
            class="header-title">开放平台管理后台</el-col>
          <el-col :span="8">
            <div class="user-info">
              <el-dropdown 
                trigger="click" 
                @command="handleCommand">
                <span class="el-dropdown-link">
                  {{ name }}
                  <i class="el-icon-caret-bottom"/>
                </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item command="modify">修改密码</el-dropdown-item>
                  <el-dropdown-item command="logout">退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside 
          width="150px" 
          style="height:100vh;">
          <sidebar class="sidebar"/>
          <!--<navbar></navbar>-->
        </el-aside>
        <el-main>
          <app-main/>
        </el-main>
      </el-container>
    </el-container>
    <el-dialog 
      :before-close="handleClose" 
      :visible.sync="dialogVisible" 
      center 
      width="500px" 
      title="修改密码">
      <el-form 
        ref="pswForm" 
        :rules="rules" 
        :model="form" >
        <el-form-item 
          label="" 
          prop="old_password">
          <el-input 
            :type="flags[0].show?'text':'password'" 
            v-model="form.old_password" 
            placeholder="旧密码">
            <i 
              slot="suffix" 
              :class="{active:flags[0].show}" 
              class="el-input__icon el-icon-view" 
              @click="switchInput(flags[0])"/>
          </el-input>
        </el-form-item>
        <el-form-item 
          label="" 
          prop="password">
          <el-input 
            :type="flags[1].show?'text':'password'" 
            v-model="form.password" 
            placeholder="新密码">
            <i 
              slot="suffix" 
              :class="{active:flags[1].show}" 
              class="el-input__icon el-icon-view" 
              @click="switchInput(flags[1])"/>
          </el-input>
        </el-form-item>
        <el-form-item 
          label="" 
          prop="confirm_password">
          <el-input 
            :type="flags[2].show?'text':'password'" 
            v-model="form.confirm_password" 
            placeholder="重复输入新密码">
            <i 
              slot="suffix" 
              :class="{active:flags[2].show}" 
              class="el-input__icon el-icon-view" 
              @click="switchInput(flags[2])"/>
          </el-input>
        </el-form-item>
      </el-form>
      <div 
        slot="footer" 
        class="dialog-footer">
        <el-button @click="closeDialog">取 消</el-button>
        <el-button 
          type="primary" 
          @click="modify">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>


<script>
import { mapGetters } from 'vuex'
import { Navbar, Sidebar, AppMain } from '@/views/layout'
import fetch from '@/utils/fetch'
const md5 = require('js-md5')
export default {
  name: 'Layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  data(){
    return{
      dialogVisible:false,
      form:{
        type:2,
        old_password:'',
        password:'',
        confirm_password:''
      },
      rules:{
        old_password:[{required:true,message:'旧密码不能为空'}],
        password:[{required:true,message:'新密码不能为空'}],
        confirm_password:[
          {required:true,validator:(rule, value, callback)=>{
            if(value!=this.form.password){
              callback('确认密码与新密码不一致！')
            }
            callback()
          }},
        ]
      },
      flags:[
        {show:false},
        {show:false},
        {show:false}
      ]
    }
  },

  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
    },
    ...mapGetters([
      'name'
    ])
  },
  methods:{
    logout(){
      this.$store.dispatch('LogOut').then(()=>{
        this.$router.push({ path: '/login' })
      })
    },
    openDialog(){
      this.dialogVisible = true
    },
    handleCommand(command) {
      if(command=='logout'){
        this.logout()
      }
      else if(command=='modify'){
        this.openDialog()
      }
    },
    modify(){
      this.$refs.pswForm.validate(valid=>{
        if(valid){
          this.form.old_password = md5(this.form.old_password)
          this.form.password = md5(this.form.password)
          this.form.confirm_password = md5(this.form.confirm_password)
          fetch({
            url:'/admin/setpwd',
            method:'post',
            data:this.form,
          }).then(res=>{
            if(res){
              this.$message.info('修改成功')
              this.closeDialog()
              this.$router.push({path:'/login'})
            }
          }).catch(e)
        }
      })
    },
    handleClose(done){
      this.$refs.pswForm.resetFields()
      done()
    },
    closeDialog(){
      this.$refs.pswForm.resetFields()
      this.dialogVisible = false
    },
    switchInput(item){
      item.show = !item.show
    }
  }
}
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    @import "src/styles/mixin.scss";
    .app-wrapper {
        @include clearfix;
        position: relative;
        .el-header{
          background: rgb(48, 65, 86);
          color: #ffffff;
          line-height: 50px;
          z-index: 100;
          .header-title{
            font-size: 18px;
          }
          .user-info{
            text-align: right;
            position: relative;
            .el-dropdown{
              cursor: pointer;
              color: #ffffff;
            }
          }
        }
        .el-main{
          height: 100vh;
          padding: 0;
          margin-left: -1px;
        }
    }
    .el-input__icon{font-size: 18px;}
  .el-input__icon.active{
    color: #67c23a;
  }
</style>
