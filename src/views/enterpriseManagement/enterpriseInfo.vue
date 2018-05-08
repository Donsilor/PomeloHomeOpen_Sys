<template>
    <el-row style="padding-left: 160px;padding-bottom: 30px;">
        <el-menu class="sec-menu" style="width: 160px;" mode="vertical" :default-active="activeName" background-color="#f2f2f2" text-color="#666"
                 active-text-color="#409EFF">
            <template v-for="item in navs">
                <router-link :to="{path:item.url,query:{business_id:business_id}}">
                    <el-menu-item :index="item.type">
                        {{item.name}}
                        <span class="num">{{item.num}}</span>
                    </el-menu-item>
                </router-link>
            </template>
        </el-menu>
        <div class="app-container">
            <!--====================-->
            <el-row style="margin-bottom: 10px;">
                <router-link to="/enterpriseManagement/list">
                    <el-button type="primary" size="medium">返 回</el-button>
                </router-link>
                <el-button type="primary" style="margin-left: 15px;" @click="doEdit" size="medium">{{edit?'确定并提交修改':'编辑厂商信息'}}</el-button>
            </el-row>
            <h3>{{checkDetail.name}}</h3>
            <el-form ref="form" :model="checkDetail" :rules="rules" class="enterprise-form" label-width="200px">
            <el-card class="box-card">
                <el-row class="card-header" slot="header">
                    <i></i>联系人信息
                </el-row>
                <el-row class="card-body">
                    <el-form-item label="联系人姓名" prop="contacts">
                        <el-input :class="{'no-border':!edit}" v-model="checkDetail.contacts"></el-input>
                    </el-form-item>
                    <el-form-item label="联系人手机" prop="contacts_mobile">
                        <el-input :class="{'no-border':!edit}" v-model="checkDetail.contacts_mobile"></el-input>
                    </el-form-item>
                    <el-form-item label="职位" prop="contacts_duty">
                        <el-input :class="{'no-border':!edit}" v-model="checkDetail.contacts_duty"></el-input>
                    </el-form-item>
                </el-row>
            </el-card>
            <el-card class="box-card">
                <el-row class="card-header" slot="header">
                    <i></i>公司/团队信息
                </el-row>
                <el-row class="card-body">
                    <el-form-item label="公司名称" prop="name">
                        <el-input :class="{'no-border':!edit}" v-model="checkDetail.name"></el-input>
                    </el-form-item>
                    <el-form-item label="公司地址" prop="address">
                        <el-input :class="{'no-border':!edit}" v-model="checkDetail.address"></el-input>
                    </el-form-item>
                    <el-form-item label="营业执照注册号" prop="registration_No">
                        <el-input :class="{'no-border':!edit}" v-model="checkDetail.registration_No"></el-input>
                    </el-form-item>
                    <el-form-item label="合作产品" prop="type">
                        <div :style="{paddingLeft: edit?0:15+'px'}">
                            <el-tag type="success" style="margin: 0 10px 10px 0;" v-for="(item,index) in checkDetail.type"
                                    :key="item.name" :closable="edit" @close="removeType(index,item)">
                                {{item.name}}
                            </el-tag>
                            <el-button v-if="edit" type="primary" size="small" @click="checkTypeList">+添加更多</el-button>
                        </div>
                    </el-form-item>
                    <el-form-item label="合作品牌" prop="brands">
                        <div v-for="(item,index) in checkDetail.brands" :class="{'edit-brand-box':edit}" class="brand-box" :key="index">
                            <el-row>
                                <span>品牌中文：{{item.brand_name}}</span>
                            </el-row>
                            <el-row>
                                <span>品牌英文：{{item.manufacturer_name}}</span>
                            </el-row>
                            <el-row class="brand-img">
                                <div class="brand-img-box">
                                    <img :src="item.logo" v-img:name v-if="item.logo" alt="品牌logo">
                                    <el-upload v-if="edit"
                                               action="/api/index.php/files/save"
                                               accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                                               :on-success="handleImgElseSuccess(index)"
                                               :before-upload="beforeImgUpload"
                                               :show-file-list="false"
                                               :data="{type:3,token:token}"
                                    >
                                        <el-button size="small" type="primary">更新</el-button>
                                    </el-upload>
                                </div>
                                <div class="brand-img-box">
                                    <img :src="item.certs" v-img:name v-if="item.certs" alt="资格证书">
                                    <el-upload v-if="edit"
                                               action="/api/index.php/files/save"
                                               accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                                               :on-success="handleImgElseSuccess(index)"
                                               :before-upload="beforeImgUpload"
                                               :show-file-list="false"
                                               :data="{type:9,token:token}"
                                    >
                                        <el-button size="small" type="primary">更新</el-button>
                                    </el-upload>
                                </div>

                            </el-row>
                            <i v-if="edit" class="el-icon-circle-close" @click="removeBrand(index,item)"></i>
                        </div>
                        <el-row v-if="edit">
                            <el-button @click="brandDialogVisible=true">添加品牌</el-button>
                        </el-row>
                    </el-form-item>

                </el-row>
            </el-card>

            <!--===========上传公司资质说明==============-->
            <el-card class="box-card">
                <el-row class="card-header" slot="header">
                    <i></i>上传公司资质说明
                </el-row>
                <el-form-item v-for="(item,index) in checkDetail.licenses" class="license-box" :label="item.filename" :key="item.file_id">
                    <img style="max-height: 300px" v-img:name alt="图片加载失败" class="card-img-size"
                         :src="item.file_url">
                    <el-upload v-if="edit"
                               action="/api/index.php/files/save"
                               accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                               :on-success="handleImgSuccess(index)"
                               :before-upload="beforeImgUpload"
                               :show-file-list="false"
                               :data="{type:item.type,token:token}"
                    >
                        <el-button size="small" type="primary">更换资质</el-button>
                    </el-upload>
                    <el-button type="primary" class="remove-liscense" size="small"
                               v-if="edit&&(item.type==6||item.type==7||item.type==8)" @click="removeLicense(index)">删除资质</el-button>
                </el-form-item>
                <el-form-item v-if="edit">
                    <el-button  @click="otherImageVisible=true">添加其他资质证书</el-button>
                </el-form-item>
            </el-card>
            </el-form>
        </div>
        <el-dialog
            title="选择意向合作产品"
            :visible.sync="typeDialogVisible"
            width="610px"
            center>
        <div class="type-list">
            <div v-for="item in typeList" @click="setCheck(item)" :class="{active:item.status}">
                <span :title="item.name">{{item.name}}</span>
                <i class="el-icon-circle-check" v-if="item.status"></i>
            </div>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="typeDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addType">确 定</el-button>
        </span>
    </el-dialog>
        <el-dialog
                title="添加其他资质证书"
                :visible.sync="otherImageVisible"
                width="600px"
                :before-close="handleClose('uploadForm')"
                center>
            <el-form :rules="otherRules" ref="uploadForm" :model="uploadForm" label-width="90px">
                <el-form-item label="文件名称" prop="file_name">
                    <el-input v-model="uploadForm.file_name" :maxlength="10" placeholder="请输入文件名称，10个字内"></el-input>
                </el-form-item>
                <el-form-item label="文件上传" prop="url">
                    <el-input style="width: 72%;" readonly v-model="uploadForm.url" placeholder="请选择文件"></el-input>
                    <el-upload style="display: inline-block;margin-left: 12px;"
                               action="/api/index.php/files/save"
                               accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                               :on-success="handeler"
                               :before-upload="beforeImgUpload"
                               :show-file-list="false"
                               :data="{type:8,token:token}"
                    >
                        <el-button type="primary">选择文件...</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
          <el-button @click="$refs.uploadForm.resetFields();otherImageVisible = false">取 消</el-button>
          <el-button type="primary" @click="addLicense">确 定</el-button>
        </span>
        </el-dialog>
        <el-dialog
                title="添加产品品牌名称"
                :visible.sync="brandDialogVisible"
                width="650px"
                :before-close="handleClose('brandForm')"
                center>
            <el-form :rules="brandRules" ref="brandForm" :model="brandForm" label-width="150px">
                <el-form-item label="品牌名称" prop="name">
                    <el-input v-model="brandForm.name" :maxlength="10" placeholder="请输入品牌名称，10个字内"></el-input>
                </el-form-item>
                <el-form-item label="品牌英文" prop="name_e">
                    <el-input v-model="brandForm.name_e" :maxlength="32" placeholder="请输入品牌英文名称，32个字符内"></el-input>
                </el-form-item>
                <el-form-item label="品牌logo" prop="logo">
                    <el-input style="width: 72%;" readonly v-model="brandForm.logo" placeholder="400px*400px以上"></el-input>
                    <el-upload style="display: inline-block;margin-left: 12px;"
                               action="/api/index.php/files/save"
                               accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                               :on-success="handeler"
                               :before-upload="beforeImgUpload"
                               :show-file-list="false"
                               :data="{type:3,token:token}"
                    >
                        <el-button type="primary">选择文件...</el-button>
                    </el-upload>
                </el-form-item>
                <el-form-item label="品牌中英文&商标资格证，回执加盖公章" prop="cert" class="ff">
                    <el-input style="width: 72%;" readonly v-model="brandForm.cert" placeholder="商标未注册完成的上传商标注册记录"></el-input>
                    <el-upload style="display: inline-block;margin-left: 12px;"
                               action="/api/index.php/files/save"
                               accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                               :on-success="handeler"
                               :before-upload="beforeImgUpload"
                               :show-file-list="false"
                               :data="{type:9,token:token}"
                    >
                        <el-button type="primary">选择文件...</el-button>
                    </el-upload>
                </el-form-item>
            </el-form>
            <span slot="footer" class="dialog-footer">
          <el-button @click="$refs.brandForm.resetFields();brandDialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="addBrand">确 定</el-button>
        </span>
        </el-dialog>
    </el-row>

</template>

<script>
    import fetch from '@/utils/fetch';
    import {getToken} from '@/utils/auth';
    import {Message} from 'element-ui';

    export default {
        name: 'enterpriseInfo',

        data() {
            return {
                token:getToken(),
                checkDetail: {},
                business_name: '',
                activeName:'enterpriseInfo',
                edit:false,
                rules:{
                    contacts:[ { required: true, message: '联系人姓名不能为空', trigger: 'blur' }],
                    mail:[
                        { required: true, message: '邮箱不能为空'},
                        {validator(rule, value, callback) {
                            if (!/^[\w\.-]+@\w+\.\w{2,}$/.test(value)) {
                                callback('请输入正确的邮箱地址');
                                return;
                            }
                            callback();
                        }}
                    ],
                    contacts_mobile:[
                        { required: true, message: '联系人手机不能为空' },
                        {validator(rule, value, callback) {
                            if (!/^1\d{10}$/.test(value)) {
                                callback('请填写11位正确的手机号码');
                                return;
                            }
                            callback();
                        }}
                    ],
                    contacts_duty : [
                        { required: true, message: '职位不能为空', trigger: 'blur' }
                    ],
                    name: [
                        { required: true, message: '公司名称不能为空', trigger: 'blur' }
                    ],
                    address : [
                        { required: true, message: '公司地址不能为空', trigger: 'blur' }
                    ],
                    registration_No : [
                        { required: true, message: '营业执照号不能为空'},
                        {validator(rule, value, callback) {
                            if (!/(?!^\d+$)(?!^[a-zA-Z]+$)[0-9a-zA-Z]{18}/.test(value)) {
                                callback('请填写18位正确的营业执照号');
                                return;
                            }
                            callback();
                        }}
                    ],
                    type : [
                        {required: true,message:'合作产品不能为空'},
                        {validator(rule, value, callback, source, options) {
                            if (value.length <=0) {
                                callback('合作产品不能为空！');
                            }
                            callback();
                        }}
                    ],
                    brands : [
                        {required: true,message:'合作品牌不能为空'},
                        {validator(rule, value, callback, source, options) {
                            if (value.length <=0) {
                                callback('合作品牌不能为空！');
                            }
                            callback();
                        }}
                    ],

                },
                uploadForm:{
                    file_name:'',
                    url:'',
                    url_s:'',
                    fileData:null
                },
                brandForm:{
                    name:'',
                    name_e:'',
                    logo:'',
                    logo_s:'',
                    cert:'',
                    cert_s:'',
                    logoData:null,
                    certData:null
                },
                otherRules:{
                    file_name:[
                        { required: true, message: '文件名称不能为空'},
                    ],
                    url:[
                        {required: true,message:'请上传文件'},
                    ]
                },
                brandRules:{
                    name:[
                        { required: true, message: '品牌名称不能为空'},
                    ],
                    name_e:[
                        { required: true, message: '品牌英文不能为空'},
                    ],
                    logo:[
                        { required: true, message: '请上传品牌logo'},
                    ],
                    cert:[
                        { required: true, message: '请上传品牌资质'},
                    ],
                },
                typeList:[],
                typeDialogVisible:false,
                otherImageVisible:false,
                brandDialogVisible:false,
                navs:[
                    {
                        name: '厂商信息',
                        url: '/enterpriseManagement/enterpriseInfo',
                        type: 'enterpriseInfo',
                    },
                    {
                        name: '产品列表',
                        url: '/enterpriseManagement/enterpriseProducts',
                        type:'enterpriseProducts',
                    }
                ]
            }
        },
        created() {
            this.business_id = this.$route.query.business_id;
        },
        mounted() {
            this.getReviewInfo();
        },
        methods: {
            // 获取审核详情
            getReviewInfo() {
                let _this = this;
                let params = {
                    business_id: _this.business_id
                };
                fetch({
                    url:'/user/detail',
                    method:'post',
                    data:params
                }).then(response => {
                    this.checkDetail = response;
                });
            },
            doEdit(){
                if(this.edit){
                    this.modify();
                    return;
                }
                this.edit = true;
                this.getTypeList();
            },
            modify(){
                this.$refs.form.validate(valid=>{
                    if(valid){
                        let types = this.checkDetail.type.map(function (v) {
                            return v.type_id;
                        });
                        let brands = this.checkDetail.brands.map(function (v) {

                            return {
                                brand_id:v.brand_id?v.brand_id:0,
                                brand_name:v.brand_name?v.brand_name:'',
                                manufacturer_name:v.manufacturer_name?v.manufacturer_name:'',
                                logo:v.logoData?v.logoData:{
                                    file_id:v.logo_id,
                                    type:3,
                                    file_url:v.logo
                                },
                                certs:[v.certsData?v.certsData:{
                                    file_id:v.cert_ids,
                                    type:9,
                                    file_url:v.certs
                                }]
                            };
                        });
                        let licenses = this.checkDetail.licenses.map(function (v) {
                            return v.fileData ? Object.assign({},v.fileData,{filename:v.filename}) : {
                                    file_id:v.file_id,
                                    type:v.type,
                                    filename:v.filename
                                }
                        });
                        let formData = JSON.parse(JSON.stringify(this.checkDetail));
                        formData.business_id = this.business_id;
                        formData.types = types;
                        formData.brands = brands;
                        formData.licenses = licenses;
                        delete formData.type;
                        fetch({
                            url:'/user/edit_by_admin',
                            method:'post',
                            data:formData
                        }).then(res=>{
                            this.$message.info('保存成功');
                            this.$router.go(-1);
                        }).catch(e=>{
                            this.$message.error(e.msg);
                        })
                    }
                })
            },
            beforeImgUpload(file){
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('请上传5M大小内图片文件');
                }
                return isLt5M;
            },
            handleImgSuccess(index){
                let _this = this;
                return function g(res, file,fileList,ind=index){
                    if(res.code!==200){
                        _this.$message.error('上传出错，请重新上传');
                        return;
                    }
                    /*let arry = [].concat(_this.checkDetail.licenses);
                    arry[ind].file_url = res.result.file_url;
                    _this.checkDetail.licenses = arry;*/
                    _this.checkDetail.licenses[ind].file_url = res.result.file_url;
                    _this.checkDetail.licenses[ind].fileData = res.result;
                }

            },
            handeler(res, file,fileList){
                if(res.code!==200){
                    this.$message.error('上传出错，请重新上传');
                    return;
                }
                if(res.result.type==8){
                    this.uploadForm.url= res.result.filename;
                    this.uploadForm.url_s= res.result.file_url;
                    this.uploadForm.fileData= res.result;
                }
                else if(res.result.type==3){
                    this.brandForm.logo= res.result.filename;
                    this.brandForm.logo_s= res.result.file_url;
                    this.brandForm.logoData= res.result;
                }
                else if(res.result.type==9){
                    this.brandForm.cert= res.result.filename;
                    this.brandForm.cert_s= res.result.file_url;
                    this.brandForm.certData= res.result;
                }

            },
            handleImgElseSuccess(index){
                let _this = this;
                return function g(res, file,fileList,ind=index){
                    if(res.code!==200){
                        _this.$message.error('上传出错，请重新上传');
                        return;
                    }
                    if(res.result.type==3){
                        _this.checkDetail.brands[ind].logo = res.result.file_url;
                        _this.checkDetail.brands[ind].logoData = res.result;
                    }
                    else if(res.result.type==9){
                        _this.checkDetail.brands[ind].certs = res.result.file_url;
                        _this.checkDetail.brands[ind].certsData = res.result;
                    }
                }
            },
            removeType(index,item){
                fetch({
                    url:'/admin/check_has_product',
                    method:'post',
                    data:{type_id:item.type_id,business_id:this.business_id}
                }).then(res=>{
                    if(res.ret==0){
                        this.checkDetail.type.splice(index,1);
                    }else{
                        this.$message.warning('该产品下有关联设备，不可删除！');
                    }
                }).catch(e=>{
                    this.$message.error(e.msg);
                });
            },
            addType(){
                let arry = [];
                for(let item of this.typeList){
                    if(item.status){
                        arry.push({
                            type_id:item.id,
                            name:item.name
                        })
                    }
                }
                this.checkDetail.type = arry;
                this.typeDialogVisible = false;
            },
            addLicense(){
                this.$refs.uploadForm.validate(valid=>{
                    if(valid){
                        this.checkDetail.licenses.push({
                            type:8,
                            filename:this.uploadForm.file_name,
                            file_url:this.uploadForm.url_s,
                            fileData:this.uploadForm.fileData,
                        });
                        this.$refs.uploadForm.resetFields();
                        this.otherImageVisible = false;
                    }
                });
            },
            removeLicense(index){
                this.checkDetail.licenses.splice(index,1);
            },
            addBrand(){
                this.$refs.brandForm.validate(valid=>{
                    if(valid){
                        this.checkDetail.brands.push({
                            brand_name:this.brandForm.name,
                            manufacturer_name:this.brandForm.name_e,
                            logo:this.brandForm.logo_s,
                            certs:this.brandForm.cert_s,
                            logoData:this.brandForm.logoData,
                            certsData:this.brandForm.certData,
                        });
                        this.$refs.brandForm.resetFields();
                        this.brandDialogVisible = false;
                    }
                });
            },
            removeBrand(index,item){
                if(!item.brand_id){//新增的直接删除
                    this.checkDetail.brands.splice(index,1);
                    return;
                }
                fetch({
                    url:'/admin/check_has_product',
                    method:'post',
                    data:{brand_id:item.brand_id,business_id:this.business_id}
                }).then(res=>{
                    if(res.ret==0){
                        this.checkDetail.brands.splice(index,1);
                    }else{
                        this.$message.warning('该品牌下有关联设备，不可删除！');
                    }
                }).catch(e=>{
                    this.$message.error(e.msg);
                })

            },
            getTypeList(){
                fetch({
                    url:'/admin/product/type_lists',
                    method:'post',
                    data:{}
                }).then(res=>{
                    let addLabelList = res.list;
                    for(let i of addLabelList){
                        i.status = false;
                    }
                    function campare(a,b) {
                        return a.id-b.id
                    }
                    addLabelList.sort(campare);
                    this.typeList = addLabelList;
                }).catch(e=>{
                    this.$message.error(e.msg);
                })
            },
            checkTypeList(){
                this.typeDialogVisible = true;
                let checkedTypes = this.checkDetail.type.map(function(el){
                    return el.type_id;
                });
                for(let item of this.typeList){
                    if(checkedTypes.indexOf(item.id)>=0){
                        item.status = true;
                    }
                    else{
                        item.status = false;
                    }
                }
            },
            setCheck(item){
                if(!item.status){
                    item.status = true;
                }else{
                    fetch({
                        url:'/admin/check_has_product',
                        method:'post',
                        data:{type_id:item.id,business_id:this.business_id}
                    }).then(res=>{
                        if(res.ret==0){
                            item.status = false;
                        }else{
                            this.$message.warning('该产品下有关联设备，不可删除！');
                        }
                    }).catch(e=>{
                        this.$message.error(e.msg);
                    });
                }
            },
            handleClose(formName){
                return (done,form = formName )=> {
                    this.$refs[form].resetFields();
                    done();
                }
            }
        },
        deactivated() {
            this.$destroy();
        }
    }
</script>

<style lang="scss">
    .enterprise-form{
        .no-border{
            .el-input__inner{
                border: none;
                padding-left: 15px;
            }
        }
        .brand-box{
            padding: 0px 15px;
            margin-bottom: 30px;
            position:relative;
            width:700px;
            &.edit-brand-box{
                padding: 15px;
                border: 1px solid #d8dce5;
                border-radius:4px;
                .el-icon-circle-close{
                    font-size: 20px;
                    cursor: pointer;
                    position: absolute;
                    color: #409EFF;
                    top:0;
                    right: 0;
                }
             }
        }
        .brand-img{
            display: flex;
            align-items: flex-end;
            .brand-img-box{
                float: left;
                margin-right: 30px;
                max-width: 300px;
                img{
                    max-height: 150px;
                }
            }
        }
        .license-box{
            .el-form-item__label{
                line-height: 24px;
            }
        }
       .remove-liscense{
           position: absolute;
           bottom: 3px;
           left: 100px;
       }
    }
    .type-list{
        display: flex;
        flex-wrap: wrap;
        div{
            position: relative;
            margin: 0px 10px 10px 0px;
            &.active{
                 border-color: #15a05d;
                 color: #15a05d;
             }
            span{
                width: 100px;
                height: 40px;
                line-height: 40px;
                background: #f8f9fc;
                border: 1px solid #c2d1db;
                border-radius: 2px;
                text-align: center;
                cursor: pointer;
                overflow: hidden;
                text-overflow: ellipsis;
                white-space: nowrap;
                display: inline-block;
                font-size: 12px;
            }
            i{
                color: #15a05d;
                z-index: 10;
                position: absolute;
                font-size: 20px;
                top:-5px;
                right: -5px;
            }
        }
    }
    .ff{
        .el-form-item__label{line-height: 20px;}
    }
</style>
