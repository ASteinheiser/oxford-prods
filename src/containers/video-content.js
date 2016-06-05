import React, { PropTypes } from 'react';

import styles from './video-content.css';

const propTypes = {
  children: PropTypes.element,
};

export default class VideoContent extends React.Component {
  render() {
    return (
      <div className={styles.container}>
        {this.props.children}
      </div>
    );
  }
}

VideoContent.propTypes = propTypes;
