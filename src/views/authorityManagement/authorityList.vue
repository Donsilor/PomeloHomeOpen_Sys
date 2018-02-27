<template>
    <div class="app-container calendar-list-container">
        <div class="filter-container">
            <el-row style="margin-bottom: 20px;">
                <el-button type="primary" @click="openDialog('')">新增权限</el-button>
            </el-row>
            <el-dialog :before-close="handleClose" center width="720px" class="doc-dialog"
                       :title="isToModify ? '修改用户权限' : '添加权限用户' "
                       :visible.sync="dialogVisible">
                <el-form :rules="rules" ref="permissionForm" :model="form" label-width="90px">
                    <el-form-item label="姓名" prop="name">
                        <el-input v-model="form.name" placeholder="请输入姓名"></el-input>
                    </el-form-item>
                    <el-form-item label="邮箱" prop="mail">
                        <el-input v-model="form.mail" placeholder="请输入公司邮箱"></el-input>
                    </el-form-item>
                    <el-form-item label="电话" prop="mobile">
                        <el-input v-model="form.mobile" placeholder="请输入手机号码"></el-input>
                    </el-form-item>
                    <el-form-item label="部门" prop="depart">
                        <el-input v-model="form.depart" placeholder="请输入所在部门"></el-input>
                    </el-form-item>
                    <el-form-item label="职务" prop="duty">
                        <el-input v-model="form.duty" placeholder="请输入职务"></el-input>
                    </el-form-item>
                    <el-form-item label="操作权限" prop="permission_ids">
                        <el-checkbox-group v-model="form.permission_ids">
                            <el-checkbox v-for="item in permissionList"
                                         :label="item.menu_name"
                                         :key="item.id"
                                         :value="item.id"
                            >
                            </el-checkbox>
                        </el-checkbox-group>
                    </el-form-item>
                </el-form>
                <div slot="footer" class="dialog-footer">
                    <el-button v-if="isToModify" @click="del" type="danger" plain>删除该用户</el-button>
                    <el-button @click="closeDialog">取 消</el-button>
                    <el-button type="primary" @click="addOrEdit">{{isToModify?'保存修改':'确 定'}}</el-button>
                </div>
            </el-dialog>
        </div>

        <el-table :data="list" v-loading="listLoading" element-loading-text="给我一点时间" stripe fit highlight-current-row
                  style="width: 100%">
            <el-table-column align="center" label="姓名" prop="name">
            </el-table-column>

            <el-table-column align="center" label="电话" prop="mobile">
            </el-table-column>

            <el-table-column align="center" label="部门" prop="depart">
            </el-table-column>

            <el-table-column align="center" label="职务" prop="duty">
            </el-table-column>

            <el-table-column align="center" label="最新操作记录">
                <template slot-scope="scope">
                    <span>{{scope.row.last_action+' '+scope.row.last_action_at}}</span>
                </template>
            </el-table-column>
            <el-table-column align="center" label="操作" width="150">
                <template slot-scope="scope">
                    <el-button @click="openDialog(scope.row)" size="small" type="primary">
                        修改
                    </el-button>
                </template>
            </el-table-column>
        </el-table>

        <div v-show="!listLoading" class="pagination-container">
            <el-pagination @size-change="handleSizeChange" @current-change="handleCurrentChange"
                           :current-page.sync="listQuery.page"
                           :page-sizes="[10,20,30, 50]" :page-size="listQuery.limit"
                           layout="total, sizes, prev, pager, next, jumper" :total="total">
            </el-pagination>
        </div>

    </div>
</template>

<script>
    import {getToken} from '@/utils/auth';
    import fetch from '@/utils/fetch';

    export default {
        name: 'wifi',
        data() {
            return {
                // ====table===
                list: null,
                total: null,
                listLoading: false,
                isToModify: false,
                listQuery: {
                    page: 1,
                    limit: 10,
                },
                type_id: 0,
                form: {
                    admin_id:'',
                    name: '',
                    mail: '',
                    mobile: '',
                    token: getToken(),
                    depart: '',
                    duty: '',
                    permission_ids:[]
                },
                dialogVisible: false,
                permissionList: [],
                permissionMap:null,
                permissionTextMap:null,
                rules: {
                    name: [
                        {required: true, message: '用户姓名不能为空'},
                    ],
                    mail: [
                        {required: true, message: '公司邮箱不能为空'},
                        {validator:(rule, value, callback)=>{
                            var reg = /^(\w-*\.*)+@(\w-?)+(\.\w{2,})+$/g;
                            if(reg.test(value)){
                                callback()
                            }
                            else{
                                callback(new Error('请输入合法的邮箱地址！'))
                            }
                        }}
                    ],
                    mobile: [
                        {required: true, message: '电话不能为空'},
                        {validator:(rule, value, callback)=>{
                            var reg =  /^1\d{10}$/;
                            if(reg.test(value)){
                                callback()
                            }
                            else{
                                callback(new Error('请输入合法的手机号码！'))
                            }
                        }}
                    ],
                    depart: [
                        {required: true, message: '部门不能为空'}
                    ],
                    duty: [
                        {required: true, message: '职务不能为空'}
                    ],
                    permission_ids:[
                        {required: true, message: '操作权限不能为空'}
                    ]
                },
            }
        },
        computed: {},
        created() {
        },
        watch:{
            $route(curVal,oldVal){
                this.type_id = curVal.query.id;
                this.refresh();
            }
        },
        mounted() {
            this.refresh();
            this.getPermissonList();
        },
        methods: {
            refresh(){
                this.$store.dispatch('GetAuthorityMenus');
                this.getList();
            },
            getPermissonList(){
                fetch({
                    url:'/admin/permissionList',
                    method:'post',
                    data:{}
                }).then(res=>{
                    this.permissionList = res;
                    let map = {};
                    let _map = {};
                    res.forEach(function (v,i) {
                        map[v.id] = v.menu_name;
                        _map[v.menu_name] = v.id;
                    });
                    this.permissionMap = map;
                    this.permissionTextMap = _map;
                })
            },
            getList() {
                this.listLoading = true;
                let params = {
                    id: this.type_id,
                    limit: this.listQuery.limit,
                    page: this.listQuery.page
                };
                fetch({
                    url: '/admin/list',
                    method: 'post',
                    data: params
                }).then(response => {
                    this.list = response.data;
                    this.total = response.total;
                    this.listLoading = false
                });
            },

            handleSizeChange(val) {
                this.listQuery.limit = val;
                this.getList()
            },
            handleCurrentChange(val) {
                this.listQuery.page = val;
                this.getList()
            },
            // 叉叉按钮
            handleClose(done) {
                this.$refs['permissionForm'].resetFields();
                this.isToModify = false;
                done();
            },
            // 关闭弹框
            closeDialog() {
                this.$refs['permissionForm'].resetFields();
                this.isToModify = false;
                this.dialogVisible = false;
            },
            openDialog(row){
                if (row) {
                    this.isToModify = true;
                    fetch({
                        url:'/admin/info',
                        method:'post',
                        data:{admin_id:row.admin_id}
                    }).then(res=>{
                        this.form.admin_id = res.admin_id;
                        this.form.name = res.name;
                        this.form.mail = res.mail;
                        this.form.mobile = res.mobile;
                        this.form.depart = res.depart;
                        this.form.duty = res.duty;
                        this.form.permission_ids = res.permission_ids.map(v=>this.permissionMap[v]);
                    })
                }
                this.dialogVisible = true;
            },
            addOrEdit(){
                this.$refs['permissionForm'].validate(valid=>{
                    if(valid){
                        let data = Object.assign({},this.form);
                        data.permission_ids = data.permission_ids.map(x=>this.permissionTextMap[x]);
                        fetch({
                            url:this.isToModify ? '/admin/edit' : '/admin/add',
                            method:'post',
                            data:data
                        }).then(res=>{
                            this.closeDialog();
                            refresh();
                        })
                    }
                })
            },
            del(){
                this.$confirm('是否确定删除该用户？', '提示', {
                    confirmButtonText: '确定',
                    cancelButtonText: '取消',
                    type: 'warning'
                }).then(() => {
                    fetch({
                        url:'/admin/del',
                        method:'post',
                        data:{admin_id:this.form.admin_id}
                    }).then(res=>{
                        this.closeDialog();
                        refresh();
                    })
                }).catch(() => {
                });
            }
        }
    }
</script>
