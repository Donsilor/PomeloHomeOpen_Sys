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
