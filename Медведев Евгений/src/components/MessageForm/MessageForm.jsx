import './MessageForm.css';

import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';

export default class MessageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      author: '',
      text: ''
    };
  }

  handleChange = (e) => {

    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSend = (e) => {
    const {send} = this.props;

    send(this.state);

    this.setState({'text': ''});
  };

  render() {
    const {author, text} = this.props;

    return (
      <div className="MessageForm">
        <input onChange={this.handleChange} type="text" name="author" value={author}/>
        <textarea onChange={this.handleChange} name="text" value={text} id="" cols="30" rows="10"></textarea>
        <button onClick={this.handleSend}>Send</button>
      </div>
    )
  }
}