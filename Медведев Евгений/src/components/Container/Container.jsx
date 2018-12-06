import React, {Component} from 'react';
import './Container.css';

export default class Container extends Component {
  render() {
    const {children} = this.props;
    return (
        <div className="container">
          {children}
        </div>
    )
  }
}