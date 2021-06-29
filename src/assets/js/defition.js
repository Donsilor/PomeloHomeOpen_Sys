// 模板数据，不进行改动变更

// 功能类型列表数据
export const functionTypeList = [
  {
    id: 0,
    value: 0,
    label: '属性'
  },
  {
    id: 1,
    value: 1,
    label: '服务'
  },
  {
    id: 2,
    value: 2,
    label: '事件'
  }
]
export const actionOptions= [
  {
    id: 0,
    value: 0,
    label: '触发条件和执行任务'
  },
  {
    id: 1,
    value: 1,
    label: '触发条件'
  },
  {
    id: 2,
    value: 2,
    label: '执行任务'
  },
  {
    id: 3,
    value: 3,
    label: '非触发条件和非执行任务'
  }
]
export const DATA_TYPE = {
  INT: 'int',
  FLOAT: 'float',
  DOUBLE: 'double',
  ENUM: 'enum',
  BOOL: 'bool',
  TEXT: 'text',
  DATE: 'date',
  STRUCT: 'struct',
  ARRAY: 'array'
}

// 数据类型（功能类型为属性的时候,同级弹窗下）
export const dataTypeList = [
  {
    label: 'int',
    value: 'int'
  },
  {
    label: 'float',
    value: 'float'
  },
  {
    label: 'double',
    value: 'double'
  },
  {
    label: 'enum',
    value: 'enum'
  },
  {
    label: 'bool',
    value: 'bool'
  },
  {
    label: 'text',
    value: 'text'
  },
  {
    label: 'date',
    value: 'date'
  },
  {
    label: 'struct',
    value: 'struct'
  },
  {
    label: 'array',
    value: 'array'
  }
]

// 数据类型（功能类型为属性的时候,数据类型为struct和array struct ，添加参数时候的二级弹窗下）
export const subTypeList = [
  {
    label: 'int',
    value: 'int'
  },
  {
    label: 'float',
    value: 'float'
  },
  {
    label: 'double',
    value: 'double'
  },
  {
    label: 'enum',
    value: 'enum'
  },
  {
    label: 'bool',
    value: 'bool'
  },
  {
    label: 'text',
    value: 'text'
  },
  {
    label: 'date',
    value: 'date'
  }
]

// 选择不同数据类型对应的specs对象的，默认模板
// 这里的key值（除了number这个key）与dataTypeList的value相对应
export const specsObjectModel = {
  number: { // 'int'  'float' 'double'
    max: '',
    min: '',
    step: '',
    unit: '',
    unitName: ''
  },
  text: { // text
    length: '10240'
  },
  date: { // date
    datemsg: 'String类型的UTC时间戳（毫秒）'
  },
  bool: { // bool
    0: '',
    1: ''
  },
  enum: {
    '': ''
  },
  struct: [], // struct
  array: { // array
    size: '10',
    item: {
      type: 'int',
      specs: []
    }
  }
}

// //选择不同的元素类型item下的specs的默认值

// const specsFromArray = {
//   other:[],
//   struct:{}
// }

// 添加自定义功能时候提交的默认模板
export const defitionObjectModel = {
  functionType: 0, // 0 属性  1 服务 2 事件
  callType: 'sync', // 调用方式
  type: 'info', // 事件类型 info---信息 ，alert---告警，error---故障
  name: '',
  action: 0,
  identifier: '',
  accessMode: 'r',
  structVerify: [],
  dataType: {
    type: 'int',
    specs: {}
  },
  desc: '',
  inputData: [],
  outputData: [],
  eOutputData: []
}
