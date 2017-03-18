import React, {Component} from 'react'
import	'../../styles/Desk/Desk.css'

export default class Desk extends Component {
  dragStart() {
    console.log('ds');
  }
    render() {
        return <div>
            hello {this.props.userName}
            <div className='poker-card' draggable='true' onDragStart={::this.dragStart}></div>
        </div>
    }
}
