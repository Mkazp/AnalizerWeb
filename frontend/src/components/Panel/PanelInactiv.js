import React from 'react';
import styles from './PanelInactiv.module.scss';
import { Link } from 'react-router-dom'; 

const Panelinactiv = () => {
  return (
    <div className={styles.panel}>
      <h1>
        Вам необходимо пройти регистрацию.
      </h1>
      <Link to="/authorization" className={styles.blueButton}>
        Регистрация
        </Link>
    </div>
  );
};

export default Panelinactiv;
