<template>
    <div class="app-container">
        <!--====================-->
        <el-button  @click="$router.go(-1)" size="medium">返回</el-button>
        <el-button type="primary" @click="productUnshelve" size="medium">下架该产品</el-button>
        <el-button type="primary" @click="toEdit" size="medium">{{edit?'保存':'编辑'}}产品信息</el-button>
        <h3>{{productDetail.brand_name+productDetail.type_name+productDetail.model}}</h3>
        <el-tabs v-model="activeName" type="card" style="padding-bottom: 30px;">
            <el-tab-pane label="基本信息" name="basic">
                <el-row class="">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品品类</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.type_name}}</el-col>
                    </el-row>
                    <el-row class="card-row gg">
                        <el-col :span="3" class="card-span-left">合作品牌
                        </el-col>
                        <el-col :span="20" :offset="1" class="card-span-right">
                            <div class="brand-box">
                                <el-row>
                                    <span>品牌中文：{{productDetail.brand_name}}</span>
                                </el-row>
                                <el-row style="margin: 10px auto">
                                    <span>品牌英文：{{productDetail.manufacturer_name}}</span>
                                </el-row>
                                <el-row>
                                    <img :src="productDetail.brand_logo" v-img:name v-if="productDetail.brand_logo" alt="品牌logo">
                                    <img :src="productDetail.brand_certs" v-img:name v-if="productDetail.brand_certs" alt="资格证书">
                                </el-row>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left edit-label">产品名称</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <el-input :readonly="!edit" :class="{'no-border':!edit}" v-model="productDetail.name"></el-input>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品型号</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.model}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left edit-label">兼容机型</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <el-input :readonly="!edit" :class="{'no-border':!edit}" v-model="productDetail.compat"></el-input>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">渠道商</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.distributor}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">渠道商ID</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.distributor_pid}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left" :class="{'edit-label':edit}">配网方式</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <span v-if="!edit">{{productDetail.network_name}}</span>
                            <el-select v-if="edit" v-model="productDetail.network_id" placeholder="请选择" style="width: 100%">
                                <el-option
                                        v-for="item in networkList"
                                        :key="item.id"
                                        :label="item.network_name"
                                        :value="item.id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row class="card-row" v-if="!edit">
                        <el-col :span="3" class="card-span-left">配网方式描述</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{productDetail.network_des}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品小图</el-col>
                        <el-col v-if="productDetail.icon" :span="20" :offset="1" class="card-span-right">
                            <p style="margin-top: 5px;font-size: 13px;color: darkgrey;">用户添加设备时看到的列表图片，支持JPEG、JPG、PNG、BMP、GIF格式，大小5M以内</p>
                            <img style="max-height: 120px" :src="productDetail.icon" v-img:name alt="图片加载失败">
                            <el-upload v-if="edit"
                                       action="/api/index.php/files/save"
                                       accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                                       :show-file-list="false"
                                       :on-success="handleImgSuccess"
                                       :before-upload="beforeImgUpload"
                                       :data="{type:26,token:token}"
                            >
                                <el-button size="small" type="primary">上传图片</el-button>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">产品图片（六观图）</el-col>
                        <el-col :span="20" :offset="1" class="card-span-right">
                            <p style="margin-top: 5px;font-size: 13px;color: darkgrey;">支持JPEG、JPG、PNG、BMP、GIF格式，大小5M以内</p>
                            <div class="six-img" v-for="(item,index) in productDetail.images" :key="index">
                                <img :src="item.file_url" v-img:name alt="图片加载失败">
                                <el-upload v-if="edit"
                                           action="/api/index.php/files/save"
                                           accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                                           :show-file-list="false"
                                           :on-success="handleImgElseSuccess(item.id,index)"
                                           :before-upload="beforeImgUpload"
                                           :data="{type:12,token:token}"
                                >
                                    <el-button size="small" type="primary">上传图片</el-button>
                                </el-upload>
                            </div>
                            <el-upload v-if="edit&&productDetail.images.length<6"
                                       action="/api/index.php/files/save"
                                       style="display: inline-block;border: 1px solid #d8dce5;padding: 20px;"
                                       accept="image/png,image/gif,image/jpeg,image/jpg,image/bmp"
                                       :show-file-list="false"
                                       :on-success="addSixImg"
                                       :before-upload="beforeImgUpload"
                                       :data="{type:12,token:token}"
                            >
                                <i class="el-icon-plus" style="font-size: 60px;color: #d8dce5;"></i>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left" style="line-height: 32px;">产品规格书</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <a class="is-link" :href="productDetail.spec_url" download>{{productDetail.spec_name}}</a>
                            <a style="margin-left: 30px"  target="_blank" v-if="!edit" :href="productDetail.spec_url" download>
                                <el-button type="primary" size="small">下载</el-button>
                            </a>
                            <el-upload v-if="edit" class="p30"
                                       action="/api/index.php/files/save"
                                       accept=".doc,.docx,.pdf,.rar"
                                       :show-file-list="false"
                                       :on-success="handleImgSuccess"
                                       :before-upload="beforeDocUpload"
                                       :data="{type:10,token:token}"
                            >
                                <el-button size="small" type="primary">更换文档</el-button>
                            </el-upload>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left" style="line-height: 32px;">产品使用说明书</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <a class="is-link" :href="productDetail.instruct_url">{{productDetail.instruct_name}}</a>
                            <a style="margin-left: 30px" v-if="!edit" target="_blank" :href="productDetail.instruct_url" download>
                                <el-button type="primary" size="small">下载</el-button>
                            </a>
                            <el-upload v-if="edit" class="p30"
                                       action="/api/index.php/files/save"
                                       accept=".doc,.docx,.pdf,.rar"
                                       :show-file-list="false"
                                       :on-success="handleImgSuccess"
                                       :before-upload="beforeDocUpload"
                                       :data="{type:11,token:token}"
                            >
                                <el-button size="small" type="primary">更换文档</el-button>
                            </el-upload>
                        </el-col>
                    </el-row>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="技术方案" name="tech">
                <el-row class="">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">选择技术方案</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <div class="accessProgram" :class="{'active':productDetail.type==1,'dis':!edit}" @click="chooseAccess(1)">
                                <i class="el-icon-circle-check"></i>
                                <div class="c-icon wifi"></div>
                                <p class="cname">Wi-Fi方案</p>
                                <p class="cdes">适合空调、空气净化器、洗衣机等</p>
                            </div>
                            <div class="accessProgram" :class="{'active':productDetail.type==2,'dis':!edit}" @click="chooseAccess(2)">
                                <div class="c-icon bluetooth"></div>
                                <i class="el-icon-circle-check"></i>
                                <p class="cname">蓝牙方案</p>
                                <p class="cdes">适合音箱、健康监护设备等…</p>
                            </div>
                            <div class="accessProgram" :class="{'active':productDetail.type==3,'dis':!edit}" @click="chooseAccess(3)">
                                <div class="c-icon zigbee"></div>
                                <i class="el-icon-circle-check"></i>
                                <p class="cname">ZigBee方案</p>
                                <p class="cdes">适合门锁、报警器等…</p>
                            </div>
                        </el-col>
                    </el-row>
                    <el-row class="card-row" v-show="productDetail.type==1">
                        <el-col :span="3" class="card-span-left" :class="{'edit-label':edit}">模组/芯片信息</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <span v-if="!edit">{{productDetail.type_vendor}}</span>
                            <el-select v-if="edit" v-model="productDetail.type_vendor" @change="changeModel"
                                       placeholder="请选择" style="width: 100%">
                                <el-option
                                        v-for="item in module_list"
                                        :key="item.vendor"
                                        :label="item.vendor"
                                        :value="item.vendor">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row class="card-row" v-show="productDetail.type==1">
                        <el-col :span="3" class="card-span-left" :class="{'edit-label':edit}">型号</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <span v-if="!edit">{{productDetail.type_model}}</span>
                            <el-select v-if="edit" v-model="productDetail.type_key"
                                       placeholder="请选择" style="width: 100%">
                                <el-option
                                        v-for="item in model_list"
                                        :key="item.module_id"
                                        :label="item.model"
                                        :value="item.module_id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                    <el-row class="card-row" v-show="productDetail.type==2 || productDetail.type==3">
                        <el-col :span="3" class="card-span-left" :class="{'edit-label':edit}">协议</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">
                            <span v-if="!edit">{{productDetail.agreement}}</span>
                            <el-select v-if="edit" v-model="productDetail.type_key"
                                       placeholder="请选择" style="width: 100%">
                                <el-option
                                        v-for="item in agreement_list"
                                        :key="item.agreement_id"
                                        :label="item.agreement"
                                        :value="item.agreement_id">
                                </el-option>
                            </el-select>
                        </el-col>
                    </el-row>
                </el-row>
            </el-tab-pane>
            <el-tab-pane label="功能点设置" name="fps">
                <h5>必选功能点</h5>
                <el-table :data="must_fps" :span-method="spanMethod"
                          highlight-current-row border stripe fit style="width:100%;">
                    <el-table-column align="center" label="node_ID" prop="nodeid">
                    </el-table-column>
                    <el-table-column align="center" label="参数名称" prop="remark">
                    </el-table-column>
                    <el-table-column align="center" :formatter="arrayToString" label="value" prop="value_list">
                    </el-table-column>
                    <el-table-column align="center" label="是否开启">
                        <template slot-scope="scope">
                            <el-switch :active-value="1" :inactive-value="0"
                                       v-model="scope.row.is_enable" disabled>
                            </el-switch>
                        </template>
                    </el-table-column>
                </el-table>
                <h5>可选功能点</h5>
                <el-table :data="opt_fps" :span-method="spanMethod"
                          highlight-current-row border stripe fit style="width:100%;">
                    <el-table-column align="center" label="node_ID" prop="nodeid">
                    </el-table-column>
                    <el-table-column align="center" label="参数名称" prop="remark">
                    </el-table-column>
                    <el-table-column align="center" :formatter="arrayToString" label="value" prop="value_list">
                    </el-table-column>
                    <el-table-column align="center" label="是否开启" prop="is_enable">
                        <template slot-scope="scope">
                            <el-switch :active-value="1" :inactive-value="0" @change="setEnable(scope.row)"
                                       v-model="scope.row.is_enable" :disabled="!edit"></el-switch>
                        </template>
                    </el-table-column>
                </el-table>
            </el-tab-pane>
            <el-tab-pane label="版本信息" name="version">
                <el-table :data="productDetail.version_list" highlight-current-row border stripe fit style="width:100%;">
                    <el-table-column label="版本号" prop="version_no"></el-table-column>
                    <el-table-column label="版本描述" prop="des"></el-table-column>
                    <el-table-column label="状态" :formatter="statusMap" prop="status"></el-table-column>
                    <el-table-column label="创建时间" prop="created_at_txt"></el-table-column>
                </el-table>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
    import {getProductInfo, productUnshelve} from '@/api/check';
    import utils from '@/utils/helper';
    import {getToken} from '@/utils/auth';
    import fetch from '@/utils/fetch';
    import {Message} from 'element-ui';

    export default {
        name: 'onlineProductDetail',

        data() {
            return {
                token:getToken(),
                product_id: '', // 产品id
                productDetail: {},
                copyProductDetail:{},
                must_fps:[//必选功能点
                ],
                opt_fps:[//可选功能点
                ],
                spanMap:{},//合并map
                activeName:'basic',
                edit:false,
                networkList:[],
                agreement_list:[],
                module_list:[],
                model_list:[],
                modifyData:{images:[]},
                attr_map:{}
            }
        },
        created() {
            this.product_id = this.$route.query.product_id;
        },
        mounted() {
            this.getReviewInfo();
        },
        methods: {
            // 获取详情
            getReviewInfo() {
                let _this = this;
                let params = {
                    product_id: this.product_id
                };
                getProductInfo(params).then(response => {
                    this.productDetail = response;
                    let arry = [];
                    for(let k in response.images_new){
                        arry.push({id:k,file_url:response.images_new[k]})
                    }
                    this.productDetail.images= arry;
                    this.modifyData.images = arry.map(function (v) {
                        return {id:v.id};
                    });
                    this.copyProductDetail = JSON.parse(JSON.stringify(response));
                    response.attr_list.forEach(function (item) {
                        let key = item.is_default ? 'must_fps' : 'opt_fps';
                        if(item.list){
                            utils.spanAnalyseData(item,_this[key],_this.spanMap);
                        }
                        else{
                            _this[key].push(item);
                        }
                    })
                })
            },

            // 图片预览
            imgPreview (e) {
                fancyBox(e.target, this.productDetail.images);
            },

            // 下架产品
            productUnshelve() {
                let params = {
                    product_id: this.product_id,
                };
                this.$confirm('下架后，该产品将无法继续使用，同时相应产品开发资料将全部作废，确认请继续','下架该产品').then(() => {
                    productUnshelve(params).then(response => {
                        if (response) {
                            Message({
                                message: '下架成功',
                                type: 'success',
                                duration: 2 * 1000
                            });
                            this.$router.go(-1);
                        }
                    })
                })
                ;
            },
            statusMap (row) {
                const map = {1:'开发中',2:'已发布'};
                return map[row.status];
            },
            arrayToString (row) {
                return row.value_list.join('/');
            },
            //合并行
            spanMethod({row, column, rowIndex, columnIndex}){
                let pt = this.spanMap[row.nodeid];
                return utils.spanMethod(pt,columnIndex,rowIndex);
            },
            toEdit(){
                if(this.edit){
                    this.modify();
                    return;
                }
                this.edit = true;
                if(this.productDetail.distributor_id+''){
                    this.getNetworkList(this.productDetail.distributor_id);
                }
                if(this.productDetail.type){
                    this.getAgreementList(this.productDetail.type);
                }
            },
            beforeImgUpload(file){
                const isLt5M = file.size / 1024 / 1024 < 5;
                if (!isLt5M) {
                    this.$message.error('请上传5M大小内图片文件');
                }
                return isLt5M;
            },
            beforeDocUpload(file){
                const isLt50M = file.size / 1024 / 1024 < 50;
                if (!isLt50M) {
                    this.$message.error('请上传50M大小内文件');
                }
                return isLt50M;
            },
            handleImgSuccess(res, file){
                if(res.code!==200){
                    this.$message.error('上传出错，请重新上传');
                    return;
                }
                let obj;
                if(res.result.type==26){//产品小图
                    this.productDetail.icon = res.result.file_url;
                    obj = Object.assign({id:this.productDetail.icon_id},res.result);
                    this.modifyData.icon = obj;
                }
                else if(res.result.type==10){//产品规格书
                    this.productDetail.spec_url = res.result.file_url;
                    this.productDetail.spec_name = res.result.filename;
                    obj = Object.assign({id:this.productDetail.spec_id},res.result);
                    this.modifyData.spec = obj;
                }
                else if(res.result.type==11){//产品使用说明书
                    this.productDetail.instruct_url = res.result.file_url;
                    this.productDetail.instruct_name = res.result.filename;
                    obj = Object.assign({id:this.productDetail.instruct_id},res.result);
                    this.modifyData.instruct = obj;
                }

            },
            addSixImg(res, file){
                if(res.code!==200){
                    this.$message.error('上传出错，请重新上传');
                    return;
                }
                this.productDetail.images.push({id:'add',file_url:res.result.file_url});
                this.modifyData.images.push(res.result);
            },
            handleImgElseSuccess(id,index){
                let _this = this;
                return function g(res, file,fileList,key=id,ind=index){
                    if(res.code!==200){
                        _this.$message.error('上传出错，请重新上传');
                        return;
                    }
                    _this.productDetail.images[ind]['file_url'] = res.result.file_url;
                    if(key=='add'){
                        _this.modifyData.images.splice(ind,1,res.result);
                    }
                    else{
                        _this.modifyData.images.splice(ind,1,Object.assign({id:key},res.result));
                    }
                }
            },
            //获得配网方式列表
            getNetworkList(distributors_id){
                fetch({
                    url: '/distribution/get',
                    method: 'post',
                    data: {distributors_id,}
                }).then(res => {
                    this.networkList = res;
            });
            },
            //处理技术方案切换
            chooseAccess(str){
                if(!this.edit){
                    return false;
                }
                this.productDetail.type = str;
                this.productDetail.type_key = '';
                this.getAgreementList(str);
            },
            getAgreementList(str){
                if(str==3){
                    this.getAgreementData(2);   //因为zigbee的请求type为2
                }else if(str==2){
                    this.getAgreementData(3);
                }
                else{
                    if(this.module_list.length === 0){
                        this.getWiFiList();
                    }
                }
            },
            //获得wifi方案列表
            getWiFiList(){
                fetch({
                    url:'/wifimodule/lists',
                    method:'post',
                    data:{'type_id' : this.productDetail.type_id}
                }).then(data => {
                    this.module_list = data.list;
                    if(this.productDetail.type_vendor){
                        this.module_list.forEach(v=>{
                            if(v.vendor==this.productDetail.type_vendor){
                                this.model_list = v.modellist;
                            }
                        })
                    }
                }).catch(e => {
                    this.module_list = [];
                    this.$message.error(e.msg);
                });
            },
            getAgreementData(str){
                fetch({
                    url:'/agreement/lists',
                    method:'post',
                    data:{'type_id':this.productDetail.type_id,'agreement_type':str}
                }).then(data => {
                    this.agreement_list= data.list;
                }).catch(e => {
                    this.agreement_list = [];
                    this.$message.error(e.msg);
                });
            },
            changeModel(val){
                this.productDetail.type_key = '';
                this.module_list.forEach(v=>{
                    if(v.vendor==val){
                        this.model_list = v.modellist;
                }
                })
            },
            modify(){
                if(!this.productDetail.name){
                    this.$message.error('产品名称不能为空！');
                }
                if(this.productDetail.name!=this.copyProductDetail.name){
                    this.modifyData.name = this.productDetail.name;
                }
                if(this.productDetail.compat!=this.copyProductDetail.compat){
                    this.modifyData.compat = this.productDetail.compat;
                }
                if(this.productDetail.network_id!=this.copyProductDetail.network_id){
                    this.modifyData.network_id = this.productDetail.network_id;
                }
                if(this.productDetail.type!=this.copyProductDetail.type){
                    this.modifyData.type = this.productDetail.type;
                }
                if(this.productDetail.type_key!=this.copyProductDetail.type_key){
                    if(this.productDetail.type==1){
                        this.modifyData.module_id = this.productDetail.type_key;
                    }
                    else{
                        this.modifyData.agreement_id = this.productDetail.type_key;
                    }
                }
                let _map = this.attr_map;
                this.modifyData.attr_list = Object.keys(_map).map(function(el){
                    return _map[el];
                });
                this.modifyData.id = this.productDetail.id;
                console.log(this.modifyData);
                let formData = JSON.parse(JSON.stringify(this.modifyData));
                if(formData.icon){
                    formData.icon = JSON.stringify(formData.icon);
                }
                if(formData.images){
                    formData.images = JSON.stringify(formData.images);
                }
                if(formData.spec){
                    formData.spec = JSON.stringify(formData.spec);
                }
                if(formData.instruct){
                    formData.instruct = JSON.stringify(formData.instruct);
                }
                if(formData.attr_list){
                    formData.attr_list = JSON.stringify(formData.attr_list);
                }
                fetch({
                    url:'/admin/product_edit',
                    method:'post',
                    data:formData
                }).then(res=>{
                    this.$message.info('保存成功');
                    this.$router.go(-1);
                }).catch(e=>{
                    this.$message.error(e.msg);
                })
            },
            setEnable(row){
                if(this.attr_map[row.attr_id]){
                    delete this.attr_map[row.attr_id];
                    return;
                }
                this.attr_map[row.attr_id] = {attr_id:row.attr_id};
            }
        },
        deactivated() {
            this.$destroy();
        }
    }
</script>

<style lang="scss">
    .six-img{
        margin-right: 15px;
        float: left;
        img{
            height: 100px;
        }
    }
    .edit-label{
        height: 40px;
        line-height: 40px;
    }
    .no-border{
        .el-input__inner{
            border: none;
            padding-left: 0;
            font-size: 15px;
            color: #000000;
        }

    }
    .p30{
        display: inline-block;
        margin-left: 15px;
    }
    .accessProgram{
        width: 224px;
        height: 224px;
        border: 1px #ddd solid;
        margin: 0 48px 20px 0px;
        float: left;
        text-align: center;
        cursor: pointer;
        position:relative;
    &.active{
         border:1px solid #15a05d;
         background:#F8F9FC ;
         .el-icon-circle-check{color:#15a05d }
     }
    &.dis{cursor: not-allowed;}
    &:last-child{
         margin-right: 0px;
     }
    .el-icon-circle-check{
        position: absolute;
        right: 10px;
        top: 10px;
        font-size: 20px;
        color: #f1f1f1;
    }
    .c-icon{
        width: 224px;
        height: 42px;
        margin:75px 0px 45px;
    &.wifi{
         background: url("../../assets/wifi.png");
         height: 38px;
         margin:75px 0px 45px;
     }
    &.bluetooth{
         background: url("../../assets/bluetooth.png");
     }
    &.zigbee{
         background: url("../../assets/zibee.png") 0px -1px;
     }
    }
    p{
    &.cdes{
         font-size: 12px;
         color:#999;
     }
    &.cname{
         font-size: 14px;
         color:#333;
         margin-bottom: 8px;
         font-weight: bold;
     }
    }
    }
    .gg{
    .brand-box{
        padding: 0;
    img{
        max-height: 120px;
        margin-right: 15px;
    }
    }
    }
</style>
