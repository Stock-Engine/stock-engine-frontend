export function setToken(userToken) {
  sessionStorage.setItem('token', JSON.stringify(userToken));
}

export default function getToken() {
  const tokenString = sessionStorage.getItem('token');
  const userToken = JSON.parse(tokenString);
  return userToken?.token
}