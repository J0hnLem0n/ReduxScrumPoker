import React, {Component} from 'react'
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

import SelectUser from '../components/SelectUser/SelectUser'
import Desk from '../components/Desk/Desk'

import * as selectUserActions from '../actions/SelectUser/SelectUserActions'

class App extends Component {
    render() {
        const {selectUser, desk} = this.props;
        const {setUser} = this.props.selectUserActions;

        if (!selectUser.userName) {
            return <div>
                <SelectUser name={selectUser.userName} setUser={setUser}/>
            </div>
        }
        else {
          return <div>
              <Desk userName={selectUser.userName} desk={desk}/>
            </div>
        }
    }
}
function mapStateToProps(state) {
    return {
      selectUser: state.selectUser,
      desk: state.desk
    }
}
function mapDispatchToProps(dispatch) {
  return {
    selectUserActions: bindActionCreators(selectUserActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
