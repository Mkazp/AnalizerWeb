import React from 'react';
import styles from './Panel.module.scss';
import { Link } from 'react-router-dom'; 

const Panel = () => {
  return (
    <div className={styles.panel}>
      <div>
      <h1 className={styles.panelTitle}>Панель Управления</h1>
      <div className={styles.panelTariff}>
        <div className={styles.Ttitle}>
          <p>Тариф</p>
        </div>
        <div>
          <div className={styles.Tariff}>
            <h3>Free</h3>
          </div>
          <p className={styles.time}>срок действия не ограничен</p>
          <div className={styles.data}>
            <div className={styles.dataItem}>
              <p>Окончание отчетного периода</p>
              <b>17 января 2024</b>
            </div>
            <div className={styles.line1}></div>
            <div className={styles.dataItem}>
              <p>Запросы (в месяц)</p>
              <b>0 / 1000</b>
            </div>
            <div className={styles.line2}></div>
            <div className={styles.dataItem}>
              <p>Приложения</p>
              <b>0 / 1</b>
            </div>
          </div>
        </div>
      </div>
      </div>
      <div className={styles.Apps}>
        <h1 className={styles.AppTitle}>
            Приложения
        </h1>
        <h3 className={styles.AppDesk}>
            У Вас пока нет ни одного приложения...
        </h3>
      </div>
      <Link to="/create" className={styles.blueButton}>
        Добавить приложение
      </Link>
    </div>
  );
};

export default Panel;
