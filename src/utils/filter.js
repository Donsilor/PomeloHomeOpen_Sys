/**
 * Created by huziyang on 2017/12/8.
 */
// 审批状态
export const statusFilter = function(status) {
  const statusMap = { // 0 = 审批中，1 = 审批通过，2 = 审批不通过
    0: 'info',
    1: 'success',
    2: 'danger'
  }
  return statusMap[status]
}
export function brandName(val) {
  switch (val) {
  case 142:
    return '豪恩'
  case 55:
    return '星络'
  case 129:
    return '海尔'
  case 62:
    return '万和'
  case 208:
    return '凯迪士'
  case 190:
    return '晾霸'
  case 53:
    return '三雄'
  case 158:
    return '鸿雁'
  case 127:
    return '雷士'
  case 126:
    return 'TCL'
  case 52:
    return '杜亚'
  default:
    return ''
  }
}