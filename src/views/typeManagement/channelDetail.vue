<template>
    <div class="app-container calendar-list-container addCategoryPage">
        <el-row :gutter="30">
            <el-col :span="24">
                <el-button type="ghost" @click="handleBackEvent">返回</el-button>
                <el-button v-if="!isEdit" type="primary" @click="addChannel">确定并添加该渠道商</el-button>
                <el-button v-if="isEdit" type="primary" @click="editChannel">{{editText}}</el-button>
                <el-button type="danger" @click="handleDelEvent" v-if="isEdit&&!hasProduct">删除该渠道商</el-button>
            </el-col>
            <el-col :span="24" style="margin: 20px 0px 0px;">
                <div class="desTitleTop">基本信息</div>
                <el-col :span="24">
                    <el-form :rules="rules" ref="ruleForm" :model="form" label-width="80px" style="margin-top: 20px;" size="large">
                        <el-form-item label="渠道商名称" label-width="120px" prop="name">
                            <el-col :span="12">
                                <el-input v-model="form.name" :span="6" :disabled="disabled||hasProduct" placeholder=" 中文名限中文、字母、32个字符、区分大小写"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="渠道商英文" label-width="120px" prop="name_e">
                            <el-col :span="12">
                                <el-input v-model="form.name_e" :disabled="disabled||hasProduct" :span="6" placeholder=" 字母、下划线, 最多32个字符，区分大小写"></el-input>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="渠道商logo" label-width="120px" style="padding-bottom: 30px;">
                            <el-col :span="12">
                                <p class="ttips">图标要求格式png，logo以外区域透明，大小5M以内</p>
                                <div class="fileuploadItem channel">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/files/save"
                                            :show-file-list="false"
                                            :on-success="handleLogoSuccess"
                                            :before-upload="beforeLogoUpload"
                                            accept="image/png"
                                            :disabled="disabled"
                                            :data="logo">
                                        <img v-if="form.logo.url!=''" :src="form.logo.url" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </el-col>
                        </el-form-item>
                        <el-form-item label="二维码" label-width="120px" style="padding-bottom: 30px;">
                            <el-col :span="12">
                                <p class="ttips">图标要求格式png、jpg、jpeg、gif、bmp，大小5M以内</p>
                                <div class="fileuploadItem channel">
                                    <el-upload
                                            class="avatar-uploader"
                                            :class="disabled ? 'disabled' : ''"
                                            action="/api/index.php/files/save"
                                            :show-file-list="false"
                                            :on-success="handleQrSuccess"
                                            :before-upload="beforeQrUpload"
                                            accept="image/*"
                                            :disabled="disabled"
                                            :data="qrcode">
                                        <img v-if="form.qrcode.url!=''" :src="form.qrcode.url" class="avatar">
                                        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                                    </el-upload>
                                </div>
                            </el-col>
                        </el-form-item>
                    </el-form>
                </el-col>

            </el-col>
            <el-col :span="24" style="margin: 0px 0px;padding-bottom: 40px;">
                <div class="desTitleTop">配置文件</div>
                  <el-col>
                    <div class="configure">
                      相关品类
                      <input style="margin-left: 20px" type="text">
                    </div>
                    <el-button>查询</el-button>
                    <el-button @click="handleClick('add')" type="primary" style="float: right;margin-top: 10px">添加文件</el-button>
                  </el-col>
                  <el-col>
                    <el-table
                      :data="tableData"
                      stripe
                      style="width: 100%">
                      <el-table-column
                        prop="name"
                        label="文件名称"
                        width="280"
                        align="center">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="相关品类"
                        width="280"
                        align="center">
                      </el-table-column>
                      <el-table-column
                        prop="address"
                        label="文件说明"
                        width="280"
                        align="center">
                      </el-table-column>
                      <el-table-column
                        prop="date"
                        label="上传时间"
                        width="280"
                        align="center">
                      </el-table-column>
                      <el-table-column
                        label="操作"
                        align="center">
                        <template slot-scope="scope">
                          <el-button @click="handleClick('look', scope.row)" type="text" size="small">查看</el-button>
                          <el-button @click="handleClick('modify',scope.row)" type="text" size="small">编辑</el-button>
                          <el-button @click="removeClick(scope.row)" type="text" size="small">删除</el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </el-col>
            </el-col>
        </el-row>
        <!-- 配置文件弹框 -->
        <el-dialog
          title="添加配置文件"
          :visible.sync="dialogFormVisible"
          width="600">
          <el-form
            ref="dialogForm"
            :rules="dialogRules"
            :model="dialogData"
            :disabled="dialogType === 'look'">
            <el-form-item label="文件名称" label-width="120px" prop="name">
              <el-col :span="12">
                  <el-input v-model="dialogData.name" :span="6"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="相关品类" label-width="120px" prop="date">
              <el-col :span="12">
                  <el-input v-model="dialogData.date" :span="6"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="文件说明" label-width="120px" prop="address">
              <el-col :span="12">
                  <el-input type="textarea" v-model="dialogData.address" :span="6"></el-input>
              </el-col>
            </el-form-item>
            <el-form-item label="配置文件" label-width="120px" prop="uploadName">
              <el-col :span="12">
                  <el-input style="width: 325px" v-model="uploadName" :span="6"></el-input>
                  <el-upload
                    style="display: inline-block"
                    class="upload-demo"
                    action="/api/index.php/files/save"
                    :on-success="handleUploadSuccess"
                    :show-file-list='false'
                    accept=".lua"
                    :data="{type:33,token:token}">
                    <el-button>预览</el-button>
                  </el-upload>
              </el-col>
            </el-form-item>
          </el-form>
          <div slot="footer" class="dialog-footer">
            <el-button @click="dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="uoloadFiles">确 定</el-button>
          </div>
        </el-dialog>
    </div>
</template>
<style lang="scss">
    .addCategoryPage{
    .desTitleTop{
        border-bottom: 1px #ddd solid;
        line-height: 30px;
        height: 30px;
        width: 100%;
    }
    .configure {
      width: 300px;
      display: inline-block;
      margin: 20px 0 20px 200px;
    }

    .channel .el-upload{
        border: 1px dashed #d9d9d9;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
        width: 110px;
        height: 110px;
    }
    .channel .el-upload:hover {
        border-color: #409EFF;
    }
    .avatar-uploader-icon {
        font-size: 22px;
        color: #8c939d;
        width: 110px;
        height: 110px;
        line-height: 110px;
        text-align: center;
    }
    .avatar-uploader{
        display: inline-block;
        margin-right: 15px;
    }
    .avatar-uploader:last-child{
        margin-right: 0px;
    }
    .avatar {
        width: 110px;
        height: 110px;
        display: block;
    }
    .line25 .el-form-item__label{
        line-height: 25px;
    }
    .el-icon-delete{
        cursor: pointer;
    }
    .el-form-item__error{
        padding: 5px 15px !important;
    }
    .fileuploadItem{
        display: table-cell;
        position: relative;
    }
    .fileuploadItem .disabled .el-upload{
        background-color: #f5f7fa;
        cursor: not-allowed;
    }
    .fileuploadItem:last-child .avatar-uploader{
        margin-right: 0px!important;
    }
    .fileuploadItem .file_upload_img_des{
        position: absolute;
        top: 109px;
        text-align: center;
        color: #999;
        font-size: 12px;
        left: 57px;
        transform: translateX(-50%);
        width: 110px;
    }
    .el-tooltip__popper{
        max-width: 300px;
    }
    }
    .ttips{
        color: #999;
        font-size: 12px;
        margin: 0;
        padding: 0;
    }

</style>

<script>
    import { Loading } from 'element-ui';
    import fetch from '@/utils/fetch';
    import helper from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    import {letterAndUnderscode,letterAndCN} from '@/utils/validate';
    export default {
        name: 'channelDetail',
        computed: {
        },
        created() {
            if(this.isEdit){
                this.getChannelInfo();
            }
        },
        mounted() {
        },
        data() {
            return {
                isEdit: this.$route.query.id ? true : false,
                token : getToken(),
                isLoadData : false,
                hasProduct:false,
                editText : '编辑渠道商信息',
                disabled:this.$route.query.id ? true : false,
                id:this.$route.query.id ? this.$route.query.id : '',
                form:{
                    "id":this.$route.query.id,
                    "name":"",
                    "name_e":"",
                    "logo":{
                        id:'',
                        type:27,
                        object:'',
                        filename:'',
                        url:'',
                        md5:''
                    },
                    "qrcode":{
                        id:'',
                        type:28,
                        object:'',
                        filename:'',
                        url:'',
                        md5:''
                    }

                },
                rules: {
                    name: [
                        { required: true, message: '请输入渠道商名称', trigger: 'blur' },
                        { max: 32, message: '渠道商名称不能超过32个字符', trigger: 'blur' },
                        { validator:letterAndCN}
                    ],
                    name_e : [
                        { required: true, message: '请输入渠道商英文', trigger: 'blur' },
                        { max: 32, message: '渠道商英文不能超过32个字符', trigger: 'blur' },
                        { validator:letterAndUnderscode}
                    ]

                },
                logo : {
                    'token' : getToken(),
                    'type' : 27,
                },
                qrcode : {
                    'token' : getToken(),
                    'type' : 28,
                },
                tableData: [{
                  date: '2016-05-02',
                  name: '王小虎',
                  address: '上海市'
                }, {
                  date: '2016-05-04',
                  name: '王小虎1',
                  address: '深圳市'
                }, {
                  date: '2016-05-01',
                  name: '王小虎2',
                  address: '广州市'
                }, {
                  date: '2016-05-03',
                  name: '王小虎3',
                  address: '北京市'
                }],
                dialogRules: {
                  name: [
                    { required: true, message: '请输入文件名称', trigger: 'blur' },
                  ],
                  date: [
                    { required: true, message: '请输入相关品类', trigger: 'blur' },
                  ],
                  address: [
                    { required: true, message: '请输入文件说明', trigger: 'blur' },
                  ],
                  // uploadName: [
                  //   { required: true, message: '请选择配置文件', trigger: 'blur' },
                  // ]
                },
                dialogFormVisible: false,
                uploadName: '',
                dialogType: '',
                dialogData: {},
            }
        },
        watch: {
          'dialogFormVisible'(val) {
            this.$nextTick(() => {
              this.$refs['dialogForm'].clearValidate()
            })
          }
        },
        methods: {
          // 配置文件 添加、查看、编辑
          handleClick(type, item) {
            this.dialogFormVisible = true
            this.dialogType = type
            if(item) {
              this.dialogData = item
            } else {
              this.dialogData = {}
              this.uploadName = ''
            }
          },
          // 配置文件 删除
          removeClick() {
            const h = this.$createElement;
            this.$msgbox({
              title: '删除配置文件',
              message: h('p', null, [
                h('p', null, '您确定删除配置此文件吗？ '),
                h('p', null, '删除后可能会导致部分设备配置出错')
              ]),
              showCancelButton: true,
              confirmButtonText: '确定',
              cancelButtonText: '取消',
              type: 'warning',
              beforeClose: (action, instance, done) => {
                // if (action === 'confirm') {
                  // instance.confirmButtonLoading = true;
                  // instance.confirmButtonText = '执行中...';
                  // done();
                  // instance.confirmButtonLoading = false;
                // } else {
                  done();
                // }
              }
            }).then(action => {
              this.$message({
                type: 'success',
                message: 'action: ' + action
              });
            });
          },
          // 配置文件 upload上传
          handleUploadSuccess(file, fileList) {
            console.log(file, fileList);
            if(file.code!==200){
              this.$message.error(file.msg);
                return;
            }
            this.uploadName = file.result.filename
            let tmp = Object.assign({},file.result);
            console.log(tmp)
            tmp.url = tmp.file_url;
            this.dialogData = tmp;
          },
          // 上传配置文件
          uoloadFiles() {

            this.$refs['dialogForm'].validate((valid) => {
              if(valid) {
                fetch({
                  url: '/admin/product_edit',
                  method: 'post',
                  data: {
                    'id': this.$route.query.id,
                    'agreement_file': this.dialogData
                  }
                }).then(res=>{
                  console.log(res)
                })
                this.dialogFormVisible = false
              } else {
                return false
              }
            })
          },
            getChannelInfo(){
                fetch({
                    url: '/distributor/info',
                    method: 'post',
                    data: {
                        'id': this.$route.query.id
                    }
                }).then(res=>{
                    this.form.name = res.name;
                    this.form.name_e = res.name_e;
                    this.form.logo = res.logo;
                    this.form.qrcode = res.qrcode;
                    if(res.has_product){
                        this.hasProduct = true;
                    }

                });
            },
            handleLogoSuccess(res, file) {
                if(res.code!==200){
                    this.$message.error(res.msg);
                    return;
                }
                let tmp = Object.assign({},res.result);
                tmp.url = tmp.file_url;
                this.form.logo = tmp;
            },
            handleQrSuccess(res, file) {
                if(res.code!==200){
                    this.$message.error(res.msg);
                    return;
                }
                let tmp = Object.assign({},res.result);
                tmp.url = tmp.file_url;
                this.form.qrcode = tmp;
            },
            beforeLogoUpload(file) {
                const filter = file.type === 'image/png';
                const isLt5M = file.size / 1024 / 1024 < 5;

                if (!filter) {
                    this.$message.error('请上传5M大小内PNG格式的logo');
                }
                if (!isLt5M) {
                    this.$message.error('请上传5M大小内PNG格式的logo');
                }
                return filter && isLt5M;
            },
            beforeQrUpload(file) {
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('请上传5M大小内的二维码图标');
                }
                return isLt5M;
            },
            //编辑渠道商信息
            editChannel(){
                if(this.disabled){
                    this.editText = '确认并提交修改';
                    this.disabled = false;
                    return false;
                }
                this.$refs['ruleForm'].validate((valid) => {
                    if (valid) {
                        if(this.form.logo.url==''||this.form.qrcode.url==''){
                            this.$message.error('请上传渠道商logo和二维码！');
                            return;
                        }
                        this.$confirm('是否确认保存修改后渠道商信息？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/distributor/edit',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.disabled = true;
                                this.editText = '编辑渠道商信息';
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                            }).catch(res => {
                                this.$message({
                                    type: 'error',
                                    message: res.msg
                                });
                            });
                        });
                    }
                });

            },
            //添加渠道商信息
            addChannel(){
                this.$refs['ruleForm'].validate((valid) => {
                    if(valid){
                        if(this.form.logo.url==''||this.form.qrcode.url==''){
                            this.$message.error('请上传渠道商logo和二维码！');
                            return;
                        }
                        this.$confirm('是否确定添加该渠道商？', '提示', {
                            confirmButtonText: '确定',
                            cancelButtonText: '取消',
                            type: 'warning'
                        }).then(()=>{
                            fetch({
                                url: '/distributor/add',
                                method: 'post',
                                data: this.form,
                            }).then(res => {
                                this.$message({
                                    type: 'success',
                                    message: '保存成功!'
                                });
                                setTimeout(() => {
                                    this.$router.push({path: '/typeManagement/channelManager'});
                                }, 2000);
                            }).catch(res => {
                                this.$message({
                                    type: 'error',
                                    message: res.msg
                                });
                            });
                        });
                    }
                })

            },
            //处理删除事件
            handleDelEvent(){
                this.$confirm('是否确认删除此渠道商，删除不能恢复。', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    this.deleteChannel();
                }).catch(() => {
                });
            },
            deleteChannel(){
                fetch({
                    url:'/distributor/delete',
                    method:'post',
                    data:{id:this.form.id}
                }).then(res=>{
                    if(res){
                        this.$message.info('删除成功！');
                        this.$router.push({path: '/typeManagement/channelManager'});
                    }
                }).catch(e=>{
                });
            },
            //处理返回事件
            handleBackEvent(){
                this.$router.push({path: '/typeManagement/channelManager'});
            }
        },

        components:{

        }
    }
</script>
