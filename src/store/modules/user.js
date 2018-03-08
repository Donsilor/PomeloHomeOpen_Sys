import {login, logout,getAuditMenus,getDocumentMenus,getAuthorityMenus} from '@/api/login'
import {getToken, setToken, removeToken,getUserName,setUserName,removeUserName} from '@/utils/auth'

const user = {
    state: {
        token: getToken(),
        name: getUserName(),
        avatar: '',
        roles: [],
        auditMenus:{},
        documentMenus:{},
        authorityMenus:[],
    },

    mutations: {
        SET_TOKEN: (state, token) => {
            state.token = token
        },
        SET_NAME: (state, name) => {
            state.name = name
        },
        SET_AVATAR: (state, avatar) => {
            state.avatar = avatar
        },
        SET_ROLES: (state, roles) => {
            state.roles = roles
        },
        SET_AUDIT_MENUS: (state, menus)=>{
            state.auditMenus = menus;
        },
        SET_DOCUMENT_MENUS: (state, menus)=>{
            state.documentMenus = menus;
        },
        SET_AUTHORITY_MENUS: (state, menus)=>{
            state.authorityMenus = menus;
        }
    },

    actions: {
        // 登录
        Login({commit}, userInfo) {
            const mail = userInfo.mail.trim();
            return new Promise((resolve, reject) => {
                login(mail, userInfo.password).then(response => {
                    const data = response;
                    setToken(data.token)
                    setUserName(mail)
                    commit('SET_NAME', mail)
                    commit('SET_TOKEN', data.token)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 获取用户信息
        GetInfo({commit, state}) {
            return new Promise((resolve, reject) => {
                getInfo(state.token).then(response => {
                    const data = response.data
                    commit('SET_ROLES', data.role)
                    commit('SET_NAME', data.name)
                    commit('SET_AVATAR', data.avatar)
                    resolve(response)
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 登出
        LogOut({commit, state}) {
            return new Promise((resolve, reject) => {
                logout(state.token).then(() => {
                    commit('SET_NAME','')
                    commit('SET_TOKEN', '')
                    commit('SET_ROLES', [])
                    removeToken()
                    removeUserName()
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },

        // 前端 登出
        FedLogOut({commit}) {
            return new Promise(resolve => {
                commit('SET_TOKEN', '')
                removeToken()
                resolve()
            })
        },

        //获取审核管理菜单
        GetAuditMenus({commit}, state) {
            return new Promise((resolve, reject) => {
                getAuditMenus().then(response => {
                    const data = response;
                    commit('SET_AUDIT_MENUS', data.list)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //获取资料管理菜单
        GetDocumentMenus({commit}, state) {
            return new Promise((resolve, reject) => {
                getDocumentMenus().then(response => {
                    const data = response;
                    commit('SET_DOCUMENT_MENUS', data.list)
                    resolve()
                }).catch(error => {
                    reject(error)
                })
            })
        },
        //获取权限管理菜单
        GetAuthorityMenus({commit},state){
            return new Promise((resolve,reject)=>{
                getAuthorityMenus().then(response=>{
                    commit('SET_AUTHORITY_MENUS', response);
                    resolve();
                }).catch(error=>{
                    reject(error);
                })
            })
        }
    }
}

export default user
