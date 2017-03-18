import { combineReducers } from 'redux'
import selectUser from './SelectUser/selectUser'
import desk from './Desk/desk'

export default combineReducers({
    selectUser,
    desk
})
