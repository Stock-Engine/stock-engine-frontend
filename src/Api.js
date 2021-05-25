import { setToken, getToken } from './utils'

function defaultHeaders (cookies) {
  const headers = {
    'Content-Type': 'application/json'
  }

  const token = getToken(cookies)

  if (token) {
    headers.Authorization = 'Bearer ' + token
  }

  return headers
}

export class API {
  static async login (user, pass, cookies, throwError) {
    return window.fetch(process.env.REACT_APP_API_URL + '/api/login', {
      method: 'POST',
      headers: defaultHeaders(cookies),
      body: JSON.stringify({ username: user, password: pass })
    }).then(async (res) => {
      const json = await res.json()
      if (res.ok) {
        setToken(json.access_token, cookies)
      } else {
        return throwError(res.status)
      }
    })
  }

  static async getList (endpoint, cookies, throwError) {
    return window.fetch(process.env.REACT_APP_API_URL + '/api/' + endpoint, {
      method: 'GET',
      headers: defaultHeaders(cookies)
    }).then((res) => {
      if (!res.ok) {
        return throwError(res.status)
      }
      return res.json()
    })
  }

  static getAlerts (cookies, throwError) {
    return this.getList('alert', cookies, throwError)
  }

  static async getQueryHistory (cookies, throwError) {
    return this.getList('query', cookies, throwError)
  }
}
