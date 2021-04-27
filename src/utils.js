export function setToken(res, cookies) {
    cookies.set('access_token', res.json().access_token);
}

export function getToken(cookies) {
    return cookies.get('access_token');
}

export function isAuthenticated(cookies) {
    return getToken(cookies) != null;
}

export default isAuthenticated