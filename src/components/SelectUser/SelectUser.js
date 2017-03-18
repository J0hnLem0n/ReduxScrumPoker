import React, {PropTypes, Component} from 'react'
import	'../../styles/SelectUser/SelectUser.css'

export default class SelectUser extends Component {
    setUser()	{
				this.props.setUser(this.refs.userName.value);
		}
    render() {
        return <div>
            <select ref='userName'>
                <option>John</option>
                <option>Lemon</option>
            </select>
            <button onClick={::this.setUser}>Ok</button>
        </div>
    }
}

SelectUser.propTypes = {
    name: PropTypes.string.isRequired
}
