import fetch from '@/utils/fetch';

export function login(mail, password) {
  // console.log('登录信息', mail, password);
  return fetch({
    url: '/admin/login',
    method: 'post',
    data: {
      mail,
      password
    }
  })
}

export function logout() {
  return fetch({
    url: '/admin/logout',
    method: 'post',
    data: {}
  })
}

export function getAuditMenus() {
    return fetch({
        url: '/admin/apprmenu',
        method: 'post',
        data: {}
    })
}

export function getDocumentMenus() {
    return fetch({
        url: '/admin/documentMenu',
        method: 'post',
        data: {}
    })
}

export function getAuthorityMenus() {
    return fetch({
        url: '/admin/menu',
        method: 'post',
        data: {}
    })
}
