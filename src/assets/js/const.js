// 用于配置一些静态变量
// responseCode为请求返回的状态码
export const responseCode = {
  SUCCESS: 200,
  CREATING: '102999',
  CREATED: '102998'
}

// PASS(0, "PASS"),
//     HOSPITAL(1, "医院"),
//     VENDOR(2, "厂商");

// 用于本地接口代理转发的服务标识而已（根据标识转发到不同的服务ip地址）
export const PROXY_FLAG = {
  LOCAL: {
    PRODUCT_SERVICE: '/product-manage-service',
    SHADOW_SERVICE: '/shadow-service',
    LOG_SERVICE: '/log-service',
    DATA_ANALYSIS_SERVICE: '/data-analysis-service',
    OTA_SERVICE: '/ota-service',
    SAFETY_SERVICE: '/safety-service',
    AUTH_SERVICE: '/pass-central-authentication', // 鉴权
    RULES_SERVICE: '/rules-service'
  },
  DEFAULT: {
    PRODUCT_SERVICE: '',
    SHADOW_SERVICE: '',
    LOG_SERVICE: '',
    DATA_ANALYSIS_SERVICE: '',
    OTA_SERVICE: '',
    SAFETY_SERVICE: '',
    AUTH_SERVICE: '', // 鉴权
    RULES_SERVICE: ''
  }
}
