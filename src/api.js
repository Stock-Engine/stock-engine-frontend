export class API {
  static async login(user, pass) {
      console.log(process.env)
    return fetch(process.env.REACT_APP_API_URL + '/api/login', {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json'
       },
       body: JSON.stringify({'username': user, 'password': pass})
     })
  }
}