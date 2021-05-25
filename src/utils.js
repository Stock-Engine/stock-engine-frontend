export function setToken (token, cookies) {
  cookies.set('access_token', token)
}

export function getToken (cookies) {
  return cookies.get('access_token')
}

export function isAuthenticated (cookies) {
  const token = getToken(cookies)
  return Boolean(token) && token !== 'null' && token !== 'undefined'
}

export default isAuthenticated
