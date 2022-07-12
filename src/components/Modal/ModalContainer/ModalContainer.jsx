import React from 'react';

import styles from './ModalContainer.module.scss';

const ModalContainer = (props) => {
  const { isOpen, children } = props;

  return (
    <div>
      {
        isOpen &&
        (
          <div className={styles.overlay}>
            <div className={styles.wrapper}>
              <div className={styles.container}>
                {children}
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
};

export default ModalContainer;