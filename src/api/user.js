import Axios from 'axios'

export function logins(data) {
  return Axios.post('/user/login', { user_name: data.user_name, user_pwd: data.user_pwd })
}
