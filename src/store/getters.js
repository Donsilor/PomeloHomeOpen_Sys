const getters = {
    sidebar: state => state.app.sidebar,
    token: state => state.user.token,
    avatar: state => state.user.avatar,
    name: state => state.user.name,
    roles: state => state.user.roles,
    auditMenus: state => state.user.auditMenus,
    documentMenus: state => state.user.documentMenus,
    authorityMenus: state => state.user.authorityMenus
}
export default getters
