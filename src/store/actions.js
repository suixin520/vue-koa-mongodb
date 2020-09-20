import * as types from './mutation-types'
import { logins } from '../api/user'

export const login = function ({ commit }, userInfo) {
  const { userName = '', password = '' } = userInfo
  return new Promise((resolve, reject) => {
    logins({ user_name: userName, user_pwd: password }).then(res => {
      const { data } = res
      commit(types.SET_TOKEN, data.token)
      resolve()
    }).catch(e => {
      reject(e)
    })
  })
}
