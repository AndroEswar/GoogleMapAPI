import React from 'react';

import styles from './ModalBody.module.scss';

const ModalBody = ({ children }) => {

  return (
    <div className={styles.wrapper}>
      {children}
    </div>
  )
};

export default ModalBody;