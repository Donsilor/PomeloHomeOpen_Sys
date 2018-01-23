/**
 * Created by huziyang on 2017/11/16.
 */
// 产品技术方案
export const productTechnologyType = [
    {id: 1, name: 'wifi'},
    {id: 2, name: 'zigbee'},
    {id: 3, name: 'bluetooth'}
];

// 复核原件类型
export const originalCheckType = [
    {
        id: 1,type:2, action_type: 0, unapproved_reason: '',
        description: '营业执照复印件，加盖公章'
    },
    {
        id: 2,type:9, action_type: 0, unapproved_reason: '',
        description: '品牌中英文&商标资格证，回执加盖公章'
    },
    {
        id: 3,type:4, action_type: 0, unapproved_reason: '',
        description: '法定代表人身份证复印件，加盖公章'
    },
    {
        id: 4,type:5, action_type: 0, unapproved_reason: '',
        description: '公司出具的法人代表身份证明书，加盖公章'
    },
    {
        id: 5, action_type: 0, unapproved_reason: '',
        description: '商标未注册完成的上传商标注册记录'
    },
    {
        id: 6,type:6, action_type: 0, unapproved_reason: '',
        description: 'ISO9001复印件'
    },
    {
        id: 7,type:7, action_type: 0, unapproved_reason: '',
        description: '国家高新技术企业复印件'
    },
    {
        id: 8,type:8,action_type: 0, unapproved_reason: '',
        description: '其他资质证书'
    },
];

// 数据字典
export const dict = {
    'checkType': [
        {'DICT_VALUE': 1, 'DICT_DESC': '企业审核',},
        {'DICT_VALUE': 3, 'DICT_DESC': '产品创建审核',},
        {'DICT_VALUE': 4, 'DICT_DESC': '产品上线审核',}
    ],
    'checkStatus': [
        {'DICT_VALUE': 1, 'DICT_DESC': '审批中',},
        {'DICT_VALUE': 2, 'DICT_DESC': '审批通过',},
        {'DICT_VALUE': 3, 'DICT_DESC': '审批不通过',},
        {'DICT_VALUE': 4, 'DICT_DESC': '已审批',},
    ]
}
