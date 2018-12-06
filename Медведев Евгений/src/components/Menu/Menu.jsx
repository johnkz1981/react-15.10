import React, {Component, Fragment} from 'react';
import PropTypes from 'prop-types';
import './Menu.css';
import {Link, withRouter} from 'react-router-dom';

@withRouter
export default class Menu extends Component {
  static propTypes = {
    title: PropTypes.string,
    items: PropTypes.arrayOf(
        PropTypes.shape({
          title: PropTypes.string.isRequeired,
          href: PropTypes.string.isRequeired,
        })
    )
  };

  static defaultProps = {
    title: 'Default menu title',
    items: [],
  };

  render() {
    const {title, items, activePath, onChange, location} = this.props;
    return (
        <Fragment>
          <h3>{title}</h3>
          <ul className="menu">
            {items.map((item, idx) => <li key={idx} className={location.pathname === item.href ? 'active': ''}><Link to={item.href}>{item.title}</Link></li>)}
          </ul>
        </Fragment>
    )
  }
}