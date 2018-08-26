import React, { Component } from 'react';
import './App.css';
import MessageList from './MessageList.js';
import MessageForm from './MessageForm.js';
import Title from './Title.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      firstUser: true
    }
  }

  handlesendMessage = (message, user) => {
    this.setState(
      {
      messages: [...this.state.messages, {
          text: message,
          user: user
      }],
      firstUser: !this.state.firstUser
      }
    );
  }

  removeMessage = index => {
    const { messages } = this.state;

    this.setState({
      messages: messages.filter((message, i) => {
        return i !== index;
      })
    });
  }

  render() {
    const { messages, firstUser } = this.state;
    return (
      <div className="app">
        <Title />
        <MessageList
          messageData={messages}
          removeMessage={this.removeMessage}
        />
        <MessageForm
          handlesendMessage={this.handlesendMessage}
          firstUser={firstUser}
        />
      </div>
    );
  }
}

export default App;
