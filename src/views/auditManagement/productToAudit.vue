<template>
  <div class="app-container">
    <!--====================-->
    <el-button type="primary" size="small" @click="$router.go(-1)">
      <i class="el-icon-arrow-left"></i> 返回
    </el-button>
    <h3>{{business_name}}</h3>
    <el-card class="box-card" v-if="type=='detail' ">
      <div v-if="status==1 " style="color: #67C23A;font-size: 24px;">
        审核通过 <i class="el-icon-circle-check"></i>
      </div>
      <div v-if="status==2 ">
        <p style="color: #F56C6C;font-weight: bold" >审核不通过</p>
        <p v-for="(item,index) in checkDetail.approved_reason">{{index+1}}、{{item}}</p>
      </div>
    </el-card>
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>产品基本信息
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品品类</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.type_name}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品品牌</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.brand_name}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品名称</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.name}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品型号</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.model}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">兼容机型</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.compat}}</el-col>
        </el-row>
          <el-row class="card-row">
              <el-col :span="3" class="card-span-left">渠道商</el-col>
              <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.distributor}}</el-col>
          </el-row>
          <el-row class="card-row">
              <el-col :span="3" class="card-span-left">渠道商ID</el-col>
              <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.distributor_pid}}</el-col>
          </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品小图</el-col>
          <el-col :span="20" :offset="1" class="card-span-right">
            <img class="six-img" :src="checkDetail.icon" v-img:name alt="图片加载失败">
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品图片（六观图）</el-col>
          <el-col :span="20" :offset="1" class="card-span-right">
            <img v-for="item in checkDetail.images" class="six-img" :src="item" v-img:name alt="图片加载失败">
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品规格书</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <a :href="checkDetail.spec_url" download>{{checkDetail.spec_name}}</a>
          </el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">产品使用说明书</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">
            <a :href="checkDetail.instruct_url">{{checkDetail.instruct_name}}</a>
          </el-col>
        </el-row>
      </el-row>
      <el-row v-if="type=='audit' " class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="audit_info.basic.action_type=1" type="primary" size="small">
            <i v-show="audit_info.basic.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="audit_info.basic.action_type=2" type="primary" size="small">
            <i v-show="audit_info.basic.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="audit_info.basic.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="audit_info.basic.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="audit_info.basic.unapproved_reason">

              </el-input>
              <div v-show="audit_info.basic.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>技术方案选择
      </el-row>
      <el-row class="card-body">
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">选择技术方案</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.type_txt}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">模组/芯片信息</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.type_vendor}}</el-col>
        </el-row>
        <el-row class="card-row">
          <el-col :span="3" class="card-span-left">型号</el-col>
          <el-col :span="16" :offset="1" class="card-span-right">{{checkDetail.type_model}}</el-col>
        </el-row>
      </el-row>
      <el-row v-if="type=='audit' " class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="audit_info.tech.action_type=1" type="primary" size="small">
            <i v-show="audit_info.tech.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="audit_info.tech.action_type=2" type="primary" size="small">
            <i v-show="audit_info.tech.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="audit_info.tech.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="audit_info.tech.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="audit_info.tech.unapproved_reason">

              </el-input>
              <div v-show="audit_info.tech.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>
    <!--=========================-->
    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>必选功能点
      </el-row>
      <el-row>
        <el-table :data="must_fps" :span-method="spanMethod"
                  highlight-current-row border stripe fit style="width:100%;">
          <el-table-column align="center" label="Stream_ID" prop="nodeid">
          </el-table-column>
          <el-table-column align="center" label="参数名称" prop="remark">
          </el-table-column>
          <el-table-column align="center" label="value" prop="value_list">
            <template slot-scope="scope">
              {{scope.row.value_list|arrayToString}}
            </template>
          </el-table-column>
          <el-table-column align="center" label="是否开启" prop="is_enable">
            <template slot-scope="scope">
              <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.is_enable" disabled></el-switch>
            </template>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row v-if="type=='audit'&&must_fps.length>0 " class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="audit_info.must_fps.action_type=1" type="primary" size="small">
            <i v-show="audit_info.must_fps.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="audit_info.must_fps.action_type=2" type="primary" size="small">
            <i v-show="audit_info.must_fps.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="audit_info.must_fps.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="audit_info.must_fps.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="audit_info.must_fps.unapproved_reason">

              </el-input>
              <div v-show="audit_info.must_fps.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

    <el-card class="box-card">
      <el-row class="card-header" slot="header">
        <i></i>可选功能点
      </el-row>
      <el-table :data="opt_fps" :span-method="spanMethod"
                highlight-current-row border stripe fit style="width:100%;">
        <el-table-column align="center" label="Stream_ID" prop="nodeid">
        </el-table-column>
        <el-table-column align="center" label="参数名称" prop="remark">
        </el-table-column>
        <el-table-column align="center" label="value" prop="value_list">
          <template slot-scope="scope">
            {{scope.row.value_list|arrayToString}}
          </template>
        </el-table-column>
        <el-table-column align="center" label="是否开启" prop="is_enable">
          <template slot-scope="scope">
            <el-switch :active-value="1" :inactive-value="0" v-model="scope.row.is_enable" disabled></el-switch>
          </template>
        </el-table-column>
      </el-table>
      <el-row v-if="type=='audit'&&opt_fps.length>0 " class="card-handle">
        <el-col :span="6" :offset="4">
          <el-button @click="audit_info.opt_fps.action_type=1" type="primary" size="small">
            <i v-show="audit_info.opt_fps.action_type==1" class="el-icon-check"></i>
            审核通过
          </el-button>
          <el-button @click="audit_info.opt_fps.action_type=2" type="primary" size="small">
            <i v-show="audit_info.opt_fps.action_type==2" class="el-icon-check"></i>
            审核不通过
          </el-button>
        </el-col>
        <el-col :span="14" class="check-reason" v-show="audit_info.opt_fps.action_type !== 0">
          <el-row>
            <el-col :span="4">
              <div class="audit-result-label">审核结果：</div>
            </el-col>
            <el-col :span="20">
              <el-input v-show="audit_info.opt_fps.action_type == 2"
                        type="textarea" autosize :maxlength="500"
                        placeholder="审核未通过理由"
                        v-model="audit_info.opt_fps.unapproved_reason">

              </el-input>
              <div v-show="audit_info.opt_fps.action_type == 1"
                   class="audit-result-pass"><i class="el-icon-circle-check"></i> 审核通过
              </div>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
    </el-card>

    <el-card v-if="type=='audit' " class="box-card audit-box" style="margin-top: 30px">
      <el-row>
        <el-col :offset="4">
          <p style="color: #E6A23C;" v-if="unapproved_list.length">未审核：</p>
        </el-col>
      </el-row>
      <el-row v-for="(item, index) in unapproved_list">
        <el-col :offset="4">
          <p>{{index + 1}}、{{item.prefix}}{{item.description}}还未审核；</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :offset="4">
          <p style="color: #F56C6C;" v-if="reject_reason_list.length">审核不通过：</p>
        </el-col>
      </el-row>
      <el-row v-for="(item, index) in reject_reason_list">
        <el-col :offset="4">
          <p>{{index + 1}}、{{item.prefix}}{{item.description}}未审核通过——{{item.unapproved_reason}}；</p>
        </el-col>
      </el-row>
      <el-row style="padding-top: 15px;">
        <el-col :span="3" :offset="4">
          <el-button :disabled="unapproved_list.length>0||reject_reason_list>0"
                     type="primary" @click="commitCheck">提交
          </el-button>
        </el-col>
        <el-col :span="3">
          <el-button @click="cancelCheck">取消</el-button>
        </el-col>
      </el-row>
    </el-card>
  </div>
</template>

<script>
    import {getReviewInfo, commitCheck} from '@/api/check';
    import utils from '@/utils/helper';
    import {Message} from 'element-ui';

    export default {
        name: 'productToAudit',

        data() {
            return {
                audit_info:{
                    basic: {
                        action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                        description:'产品基本信息',
                        unapproved_reason: ''
                    },
                    tech: {
                        action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                        description:'技术方案选择',
                        unapproved_reason: ''
                    },
                    must_fps: {
                        action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                        description:'必选功能点',
                        unapproved_reason: ''
                    },
                    opt_fps: {
                        action_type: 0, // 0=未审核,1=审核通过,2=审核未通过
                        description:'可选功能点',
                        unapproved_reason: ''
                    }
                },
                must_fps:[//必选功能点
                ],
                opt_fps:[//可选功能点
                ],
                spanMap:{},//合并map
                record_id: '', // 审核id
                checkDetail: {},
                business_name: '',
                action_type: 1, // 提交审核操作类型 ，1 = 通过，2 = 驳回
                approved_reason: '审核通过', // 审核原因
            }
        },
        computed: {
            unapproved_list:function () {
                let arry = [];
                for(let k in this.audit_info){
                    if(k=='must_fps'||k=='opt_fps'){
                        if(this[k].length==0){
                            continue;
                        }
                    }
                    if(this.audit_info[k].action_type==0){
                        arry.push(Object.assign({},this.audit_info[k]));
                    }
                }
                return arry;
            },
            reject_reason_list:function () {
                let arry = [];
                for(let k in this.audit_info){
                    if(k=='must_fps'||k=='opt_fps'){
                        if(this[k].length==0){
                            continue;
                        }
                    }
                    if(this.audit_info[k].action_type==2){
                        arry.push(Object.assign({},this.audit_info[k]));
                    }
                }
                return arry;
            }
        },
        created() {
            this.record_id = this.$route.query.record_id;
            this.business_name = this.$route.query.business_name;
            this.type = this.$route.query.type||'detail';
            this.status = this.$route.query.status||'0';
        },
        mounted() {
            this.$store.dispatch('GetAuditMenus');
            this.getReviewInfo();
        },
        filters:{
            arrayToString:function (value) {
                if(value instanceof Array){
                    return value.join('/');
                }
                return value;
            }
        },
        methods: {
            // 获取审核详情
            getReviewInfo() {
                let _this = this;
                let params = {
                    record_id: _this.record_id
                };
                getReviewInfo(params).then(response => {
                    this.checkDetail = response;
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
                fancyBox(e.target, this.checkDetail.licenses);
            },

            // 提交审核
            commitCheck() {
                this.action_type = 1;
                this.approved_reason = '审核通过';
                if (this.unapproved_list.length>0) {
                    return false;
                }
                if(this.reject_reason_list.length>0){
                    this.action_type = 2;
                }
                if (this.reject_reason_list.length > 0) {
                    this.action_type = 2;
                    this.approved_reason = this.reject_reason_list.map(item => {
                        let str = item.description + '未审核通过';
                        str += item.unapproved_reason ? '——' + item.unapproved_reason : '';
                        return str;
                    }).join('|');
                }
                let params = {
                    record_id: this.record_id,
                    action_type: this.action_type,
                    approved_reason: this.approved_reason
                };
                this.$confirm('确认提交？').then(()=>{
                    commitCheck(params).then(response => {
                        if (response.res) {
                            Message({
                                message: '审核成功',
                                type: 'success',
                                duration: 2 * 1000
                            });
                            this.$router.go(-1);
                        }
                    })
                });
            },

            // 取消审核
            cancelCheck() {
                this.$confirm('确认取消？')
                    .then(()=> {
                        this.$router.go(-1);
                    });
            },
            //合并行
            spanMethod({row, column, rowIndex, columnIndex}){
                let pt = this.spanMap[row.nodeid];
                return utils.spanMethod(pt,columnIndex,rowIndex);
            }
        },
        deactivated() {
            this.$destroy();
        }
    }
</script>

<style lang="scss">
  .six-img{
    max-height: 120px;
    margin-right: 15px;
  }
  .el-switch{
    z-index: 100;
  }
</style>
