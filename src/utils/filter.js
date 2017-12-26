/**
 * Created by huziyang on 2017/12/8.
 */
// 审批状态
export const statusFilter = function (status) {
  const statusMap = { // 0 = 审批中，1 = 审批通过，2 = 审批不通过
    0: 'info',
    1: 'success',
    2: 'danger'
  };
  return statusMap[status]
};
