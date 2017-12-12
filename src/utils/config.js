/**
 * Created by huziyang on 2017/11/16.
 */
// 产品技术方案
export const productTechnologyType = [
  { id: 1, name: 'wifi' },
  { id: 2, name: 'zigbee' },
  { id: 3, name: 'bluetooth' }
];

// 复核原件类型
export const originalCheckType  = [
  { id: 1, action_type: 1, unapproved_reason: '营业执照/组织结构代码证/税务登记证复印件，加盖公章未审核通过',
    description: '营业执照/组织结构代码证/税务登记证复印件，加盖公章'
  },
  { id: 2, action_type: 1, unapproved_reason: '法定代表人身份证复印件，加盖公章未审核通过',
    description: '法定代表人身份证复印件，加盖公章'
  },
  { id: 3, action_type: 1, unapproved_reason: '公司出具的法人代表身份证明书，加盖公章未审核通过',
    description: '公司出具的法人代表身份证明书，加盖公章'
  },
  { id: 4, action_type: 1, unapproved_reason: '品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录未审核通过',
    description: '品牌中英文&商标资格证，回执加盖公章，商标未注册完成的上传商标注册记录'
  },
  { id: 5, action_type: 1, unapproved_reason: 'ISO9001复印件未审核通过',
    description: 'ISO9001复印件'
  },
  { id: 6, action_type: 1, unapproved_reason: '国家高新技术企业复印件未审核通过',
    description: '国家高新技术企业复印件'
  },
  // { id: 7, action_type: 1, unapproved_reason: '其他资质证书未审核通过',
  //   description: '其他资质证书'
  // },
];

// 数据字典
export const dict = {
  'checkType': [
    {'DICT_VALUE': 1,'DICT_DESC': '企业审核', },
    {'DICT_VALUE': 3,'DICT_DESC': '产品创建审核', },
    {'DICT_VALUE': 4,'DICT_DESC': '产品上线审核', }
  ],
  'checkStatus': [
    {'DICT_VALUE': 1,'DICT_DESC': '审批中', },
    {'DICT_VALUE': 2,'DICT_DESC': '审批通过', },
    {'DICT_VALUE': 3,'DICT_DESC': '审批不通过', },
    {'DICT_VALUE': 4,'DICT_DESC': '已审批', },
  ]
}

