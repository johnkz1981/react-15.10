import './CommentsList.css';
import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

export default class CommentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {comments} = this.props;
    return (
        <ul className="CommentsList">
          {comments.map(({name, body, id}, idx) => <li key={idx}><Link to={'/comments/' + id}><h3>{name}</h3></Link><p>{body}</p></li>)}
        </ul>
    )
  }
}