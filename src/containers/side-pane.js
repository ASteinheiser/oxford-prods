import React, { PropTypes } from 'react';

import styles from './side-pane.css'

const propTypes = {
  children: PropTypes.element.isRequired,
};

export default class SidePane extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        <h1>Side pane</h1>
        {this.props.children}
      </div>
    );
  }
}

SidePane.propTypes = propTypes;
