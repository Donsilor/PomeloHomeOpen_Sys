const category = {
  state: {
    token: localStorage.getItem('authorization') || '',
    isOpen: false,
    userInfos: JSON.parse(localStorage.getItem('userInfos')) || {},
    productStatus: JSON.parse(sessionStorage.getItem('productStatus')) || false,
    listOwnerMenu: '',
    deviceDetail: '',
    subDeviceDetail: '',
    fileServiceId: sessionStorage.getItem('fileServiceId') || '',
  },
  getters: {
    opened: state => {
      if (state.isOpen === 'false') {
        return false
      } else if (state.isOpen === 'true') {
        return true
      }
    },
    getSelList: state => {
      if (sessionStorage.getItem('selList')) {
        return JSON.parse(sessionStorage.getItem('selList'))
      } else {
        return null
      }
    },
    regName: state => {
      if (localStorage.getItem('userInfos')) {
        const userInfos = JSON.parse(localStorage.getItem('userInfos'))
        return userInfos.regName
      } else {
        return state.userInfos.regName
      }
    },
    proStatus: state => {
      if (state.productStatus) {
        return true
      } else {
        return false
      }
    },
    getCacheListOwnerMenu: state => {
      if (state.listOwnerMenu) {
        return state.listOwnerMenu
      } else {
        return false
      }
    },
    getDeviceDetail: state => {
      if (state.deviceDetail) {
        return state.deviceDetail
      } else {
        return false
      }
    },
    // 子设备
    getsubDeviceDetail: state => {
      if (state.subDeviceDetail) {
        return state.subDeviceDetail
      } else {
        return false
      }
    },
    getFileServiceId: state => {
      if (state.fileServiceId) {
        return state.fileServiceId
      } else {
        return ''
      }
    }
  },
  mutations: {
    SET_OPENED(state, payload) {
      state.isOpen = String(payload)
      sessionStorage.setItem('open', payload)
    },
    SET_TOKEN(state, payload) {
      // console.log('我进来了vuex')
      state.token = payload
      localStorage.setItem('authorization', payload)
      // console.log('我执行vuex的最后一步了', localStorage.getItem('authorization', payload))
    },
    REMOVE_TOKEN(state, payload) {
      state.token = payload
      localStorage.removeItem('authorization')
    },
    SET_USERINFOS(state, payload) {
      state.userInfos = payload
      const userInfos = JSON.stringify(payload)
      localStorage.setItem('userInfos', userInfos)
    },
    SET_PRODUCT_STATUS(state, payload) {
      state.productStatus = payload
      console.log(state.productStatus)
      const productStatus = JSON.stringify(payload)
      sessionStorage.setItem('productStatus', productStatus)
    },
    SET_LIST_OWNER_MENU(state, payload) {
      console.log('SET_LIST_OWNER_MENU更新了:')
      state.listOwnerMenu = payload
    },
    SET_DEVICE_DETAIL(state, payload) {
      console.log('deviceDetail更新了:')
      state.deviceDetail = payload
    },
    SET_SUB_DEVICE_DETAIL(state, payload) {
      console.log('deviceDetail更新了:')
      state.subDeviceDetail = payload
    },
    SET_FILE_SERVICE_ID(state, payload) {
      console.log('fileServiceId更新了:', payload)
      state.fileServiceId = payload
      sessionStorage.setItem('fileServiceId', payload)
    }
  },
  actions: {
  },
}
export default category
