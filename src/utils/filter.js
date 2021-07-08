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
  case 4:
    return '豪恩'
  case 0:
    return '星络'
  case 2:
    return '海尔'
  case 31:
    return '万和'
  case 38:
    return '凯迪士'
  case 28:
    return '晾霸'
  case 20:
    return '三雄'
  case 103:
    return '鸿雁'
  case 26:
    return '雷士'
  case 33:
    return 'TCL'
  case 44:
    return '杜亚'
  case 24:
    return '万家乐'
  default:
    return ''
  }
}