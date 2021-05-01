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

    static getQueryHistory(cookies) {
        // keep it in local storage for now
        return Promise.resolve([{'name': "Test query #1"}, {'name': "Test query #2"}])
    }

    static getAlerts(cookies) {
        return Promise.resolve([{'name': "Test alert #1"}, {'name': "Test alert #2"}])
    }
}