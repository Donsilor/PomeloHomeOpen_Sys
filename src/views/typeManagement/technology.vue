<template>
    <div class="app-container calendar-list-container">
        <el-row :gutter="30">
            <el-col :span="20">
                <addTechnical v-on:get-data="getTech"></addTechnical>
                <el-button type="primary" @click="isEdit=!isEdit">{{isEdit?'退出编辑':'管理技术方案'}}</el-button>
            </el-col>
        </el-row>
        <div class="table-container">
            <el-table
                    class="technicalTabel"
                    :data="technical_wifi"
                    border
                    stripe
                    style="width: 100%;margin-top: 15px;"
                    v-if="technical_wifi"
                    :span-method="SpanMethod('technical_wifi')">
                <el-table-column prop='name' label="技术方案" width="150"></el-table-column>
                <el-table-column prop="vendor" label="模组厂商" width="250"
                                 align="center"></el-table-column>
                <el-table-column prop="model_list" label="模组芯片" class-name="cell-column-no-padding"
                                 align="center">
                    <template slot-scope="scope">
                        <div v-for="item in scope.row.model_list" class="cell-td paddl20">
                            {{item.name}}
                        </div>
                    </template>
                </el-table-column>
                <el-table-column label="操作" width="130" align="center" v-if="isEdit"
                                 class-name="cell-column-no-padding">
                    <template slot-scope="scope">
                        <div v-for="item in scope.row.model_list" class="cell-td option">
                            <i class="el-icon-delete" title="删除技术方案" @click="delTechnical(item.id,1)"></i>
                        </div>
                    </template>
                </el-table-column>
            </el-table>
            <el-table
                    :data="technical_zigbee"
                    border
                    stripe
                    style="width: 100%;margin-top: 15px;"
                    v-if="technical_zigbee"
                    :span-method="SpanMethod('technical_zigbee')">
                <el-table-column prop='name' label="技术方案" width="150"></el-table-column>
                <el-table-column prop="agreement" label="标准协议"></el-table-column>
                <el-table-column label="操作" width="130" align="center" v-if="isEdit">
                    <template slot-scope="scope">
                        <i class="el-icon-delete" title="删除技术方案" @click="delTechnical(scope.row.id,2)"></i>
                    </template>
                </el-table-column>
            </el-table>

            <el-table
                    :data="technical_bluetooth"
                    border
                    stripe
                    style="width: 100%;margin-top: 15px;"
                    v-if="technical_bluetooth"
                    :span-method="SpanMethod('technical_bluetooth')">
                <el-table-column prop='name' label="技术方案" width="150"></el-table-column>
                <el-table-column prop="agreement" label="标准协议"></el-table-column>
                <el-table-column label="操作" width="130" align="center" v-if="isEdit">
                    <template slot-scope="scope">
                        <i class="el-icon-delete" title="删除技术方案" @click="delTechnical(scope.row.id,3)"></i>
                    </template>
                </el-table-column>
            </el-table>
        </div>
    </div>
</template>
<style>
    .cell span:last-child .hasNoMoreList {
        border-bottom: none;
    }

    .cell-td {
        vertical-align: middle;
        padding: 15px 20px;
        margin: 0px;
        border-bottom: 1px #ddd solid;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        word-break: break-word;
        white-space: nowrap;
        -o-text-overflow: ellipsis;
    }
    .technicalTabel .cell .cell-td:last-child{
        border-bottom: none;
    }
    .cell-td.paddl20 {
        padding-left: 20px;
    }

    .option {
        text-indent: 0px !important;
    }
    .el-table .cell {
        position: relative;
        word-wrap: normal;
        text-overflow: ellipsis;
        vertical-align: middle;
        width: 100%;
        box-sizing: border-box;
        padding: 0;
    }
    .cell-column-no-padding {
        padding: 0px !important;
    }

    .cell-column-no-padding .cell {
        padding: 0px !important;
    }
</style>
<script>
    import fetch from '@/utils/fetch';
    import addTechnical from './addTechnical.vue';
    export default {
        name:'technology',
        data(){
            return {
                isEdit:false,
                technical_wifi: [],
                technical_bluetooth: [],
                technical_zigbee: [],
            }
        },
        mounted(){
            this.getTechList();
            //this.getTechList(2);
            //this.getTechList(3);
        },
        methods:{
            getTechList(technology_type){
                fetch({
                    url: 'producttype/technologylists',
                    method: 'post',
                    data: {
                        //'technology_type': technology_type
                    },
                }).then(res => {
                    if(!res){return;}
                    /*switch (technology_type) {
                        case 1 :
                            this.technical_wifi = res.list;
                            break;
                        case 2 :
                            this.technical_zigbee = res.list;
                            break;
                        case 3 :
                            this.technical_bluetooth = res.list;
                            break;
                    }*/
                    this.technical_wifi = res.wifi_list;
                    this.technical_zigbee = res.zigbee_list;
                    this.technical_bluetooth = res.bluetooth_list;
                }).catch(res => {
                    this.$message({
                        type: 'error',
                        message: res.msg
                    });
                })
            },
            //获取子组件传回来的技术方案数据
            getTech(val){
                fetch({
                    url: 'producttype/technologyadd',
                    method: 'post',
                    data: val,
                }).then(res => {
                    this.$message({
                        type: 'success',
                        message: '添加方案成功！'
                    });
                    this.getTechList(1);
                    this.getTechList(2);
                    this.getTechList(3);
                }).catch(res => {
                    this.$message({
                        type: 'error',
                        message: res.msg
                    });
                })
            },
            //删除技术方案
            delTechnical(id, technology_type){
                fetch({
                    url: '/producttype/technologydel',
                    method: 'post',
                    data: {
                        'technology_type': technology_type,
                        'id': id
                    }
                }).then(res => {
                    this.$message({
                        type: 'success',
                        message: '操作成功！'
                    });
                    this.getTechList(technology_type);
                })
            },
            SpanMethod(type){
                let _this = this;
                return function (obj,technology_type=type) {
                    if (obj.columnIndex === 0) {
                        if (obj.rowIndex === 0) {
                            return {
                                rowspan: _this[technology_type].length,
                                colspan: 1
                            };
                        } else {
                            return {
                                rowspan: 0,
                                colspan: 0
                            };
                        }
                    }
                }
            },
        },
        components:{
            addTechnical
        }

    }
</script>