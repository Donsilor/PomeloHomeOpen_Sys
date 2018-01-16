<template>
  <div class="app-wrapper">
    <el-container>
      <el-header height="50px">
        <el-row>
          <el-col :span="16" class="header-title">开放平台管理后台</el-col>
          <el-col :span="8">
            <div class="user-info">
              <el-dropdown trigger="click">
              <span class="el-dropdown-link">
                gongyuanrong@evergrande.cn
                <i class="el-icon-caret-bottom"></i>
              </span>
                <el-dropdown-menu slot="dropdown">
                  <el-dropdown-item>退出登录</el-dropdown-item>
                </el-dropdown-menu>
              </el-dropdown>
            </div>
          </el-col>
        </el-row>
      </el-header>
      <el-container>
        <el-aside width="150px" style="height:100vh;">
          <sidebar class="sidebar"></sidebar>
          <!--<navbar></navbar>-->
        </el-aside>
        <el-main>
          <app-main></app-main>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>


<script>
import { Navbar, Sidebar, AppMain } from '@/views/layout'

export default {
  name: 'layout',
  components: {
    Navbar,
    Sidebar,
    AppMain
  },
  computed: {
    sidebar() {
      return this.$store.state.app.sidebar
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
          /*margin-top: -50px;*/
        }
    }
</style>
