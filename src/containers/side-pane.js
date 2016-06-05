import React, { PropTypes } from 'react';

import styles from './side-pane.css'

const propTypes = {
  children: PropTypes.element,
};

export default class SidePane extends React.Component {
  render() {
    return (
      <div>
        <div className={styles.container}>
        </div>
        {this.props.children}
      </div>
    );
  }
}

SidePane.propTypes = propTypes;
