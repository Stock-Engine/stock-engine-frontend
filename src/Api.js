import {setToken} from "./utils";

export class API {
  static async login(user, pass, cookies) {
    return fetch(process.env.REACT_APP_API_URL + '/api/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({'username': user, 'password': pass})
     }).then((res) => {
         if (res.ok) {
            setToken(res, cookies)
         }

         return res
     })
  }
}