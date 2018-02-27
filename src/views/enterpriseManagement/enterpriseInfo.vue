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
            </el-row>
            <h3>{{checkDetail.name}}</h3>
            <el-card class="box-card">
                <el-row class="card-header" slot="header">
                    <i></i>联系人信息
                </el-row>
                <el-row class="card-body">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">联系人姓名</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">联系人手机</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_mobile}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">职位</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.contacts_duty}}</el-col>
                    </el-row>
                </el-row>
            </el-card>
            <el-card class="box-card">
                <el-row class="card-header" slot="header">
                    <i></i>公司/团队信息
                </el-row>
                <el-row class="card-body">
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">公司名称</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.name}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">公司地址</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.address}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">营业执照注册号</el-col>
                        <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.registration_No}}</el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">合作品牌
                        </el-col>
                        <el-col :span="20" :offset="1" class="card-span-right">
                            <el-tag style="margin: 0 10px 10px 0;" v-for="item in checkDetail.brands"
                                    :key="item.name">{{item.brand_name}}
                            </el-tag>
                        </el-col>
                    </el-row>
                    <el-row class="card-row">
                        <el-col :span="3" class="card-span-left">合作产品
                        </el-col>
                        <el-col :span="20" :offset="1" class="card-span-right">
                            <el-tag type="success" style="margin: 0 10px 10px 0;" v-for="item in checkDetail.type"
                                    :key="item.name">
                                {{item.name}}
                            </el-tag>
                        </el-col>
                    </el-row>
                </el-row>
            </el-card>
            <!--===========上传公司资质说明==============-->
            <el-card class="box-card">
                <el-row class="card-header" slot="header">
                    <i></i>上传公司资质说明
                </el-row>
                <div v-for="(item,index) in checkDetail.licenses" class="license-box" :key="item.file_id">
                    <el-row>
                        <el-col class="license-title" :offset="4">
                            {{index+1}}、{{item.filename}}
                        </el-col>
                    </el-row>
                    <el-row>
                        <el-col :offset="4">
                            <img style="max-height: 300px" v-img:name alt="图片加载失败" class="card-img-size"
                                 :src="item.file_url">
                        </el-col>
                    </el-row>
                </div>
            </el-card>

        </div>
    </el-row>
</template>

<script>
    import fetch from '@/utils/fetch';
    import {Message} from 'element-ui';

    export default {
        name: 'enterpriseInfo',

        data() {
            return {
                checkDetail: {},
                business_name: '',
                activeName:'enterpriseInfo',
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

            // 图片预览
            imgPreview (e) {
                fancyBox(e.target, this.checkDetail.licenses);
            },
        },
        deactivated() {
            this.$destroy();
        }
    }
</script>

<style lang="scss">
</style>
