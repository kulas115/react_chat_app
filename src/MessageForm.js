import React, { Component } from 'react';

class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.initialState = {
      message: '',
      user: ''
    };

    this.state = this.initialState
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    this.setState({
      message: e.target.value,
      user: this.props.firstUser ? "John" : "Luke"
    })
  }

  handleSubmit(e) {
    e.preventDefault()
    this.props.handlesendMessage(this.state.message, this.state.user)
    this.setState(this.initialState);
  }

  render() {
    const { message } = this.state;

    return (
      <form
        onSubmit={this.handleSubmit}
        className="send-message-form"
      >
        <input
          type="text"
          name="message"
          placeholder="Type you message and hit ENTER"
          value={message}
          onChange={this.handleChange}/>
      </form>
    );
  }
}

export default MessageForm;
