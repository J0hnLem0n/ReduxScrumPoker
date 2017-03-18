import {SET_USER} from '../../constants/SelectUser/SelectUser'

const initialState = {
    userName: ''
}

export default function selectUser(state = initialState, action) {
  switch (action.type) {
    case SET_USER:
      return { ...state, userName: action.payload }

    default:
      return state;
  }
}
