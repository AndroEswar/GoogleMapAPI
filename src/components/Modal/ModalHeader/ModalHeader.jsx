import React from 'react';

import styles from './ModalHeader.module.scss';

const ModalHeader = (props) => {
  const { title = "Routes", includeCloseBtn = false, children } = props;

  return (
    <div className={styles.headerContainer}>
      <span>{title}</span>
      {children ? (
        children
      ) : null}
    </div>
  )
};

export default ModalHeader;