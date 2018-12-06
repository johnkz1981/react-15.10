import './Comment.css';

import React from 'react';

export default function(props) {
  return (
    <div className="Comment">
      <h2>{props.name}</h2>
      <p>{props.body}</p>
    </div>
  )
}