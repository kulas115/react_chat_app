import React, { Component } from 'react';

class MessageList extends Component {
  render() {
    const { messageData, removeMessage } = this.props;
    return (
      <ul className="message-list">
        {messageData.map((message, index) => {
          return (
            <li key={index} className="message">
              <div>{message.user}</div>
              <div>{message.text}</div>
              <div><button onClick={() => removeMessage(index)}>Delete</button></div>
            </li>
          )
        })}
      </ul>
    )
  }
}

export default MessageList
