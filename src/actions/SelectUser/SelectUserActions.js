import {SET_USER} from '../../constants/SelectUser/SelectUser'

export function setUser(userName) {
  return {
    type: SET_USER,
    payload: userName
  }
}
