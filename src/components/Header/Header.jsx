import React from 'react';
import { Link } from "react-router-dom";
import Chalo from '../../assets/images/chalo.svg';

import styles from './Header.module.scss';

const Header = () => {

  return (
    <header className={styles.container}>
      <Link to="/">
        <img src={Chalo} alt="chalo" />
      </Link>
    </header>
  )
};

export default Header;