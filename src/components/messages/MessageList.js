import React, {Component} from 'react';
import Message from './Message';
import PropTypes from 'prop-types';

class MessageList extends Component{
  render(){
    return (
      <ul>{
        this.props.messages.map( message =>{
          return (
            <Message key={message.id} message={message} />
          )
        })
      }</ul>
    )
  }
}
MessageList.propTypes = {
  messages: PropTypes.array.isRequired
}
export default MessageList
