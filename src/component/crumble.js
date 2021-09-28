import React, { Component } from 'react';
import './base.scss';

export default class Generic extends Component {
  render() {
    return (
        <div className="wrapper">
            <button className="error">Error Button</button>
        </div>
    )
  }
}