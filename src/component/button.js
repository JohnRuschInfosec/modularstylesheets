import React, { Component } from 'react';
import styles from './button.module.scss'; // Import css modules stylesheet as styles

export default class Button extends Component {
  render() {
    // reference as a js object
    return (
        <div className={styles.wrapper}>
            <button className={styles.error}>Error Button</button>
        </div>
    )
  }
}