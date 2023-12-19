import React, { useState, useEffect } from 'react';
import styles from './Arg.module.scss';
import { useQuery } from '../../Hooks/useQuery';
import { Link } from 'react-router-dom';

const Arg = () => {
  const [app, setApp] = useState(null);
  const query = useQuery();

  useEffect(() => {
    handleGetApp();
  }, []);

  const handleGetApp = async () => {
    try {
      const response = await fetch(`http://213.171.8.164:5001/ZakupkiWebApi/app/${query.get("App_id")}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const appData = await response.json();
        console.log('App Data:', appData);
        setApp(appData);
      } else {
        console.error('Failed to fetch app');
      }
    } catch (error) {
      console.error('Error during fetching app:', error);
    }
  };

  return (
    <div className={styles.panel}>
      {app ? (
        <div className={styles.art}>
          <h2 className={styles.inter}>Детали для ID приложения: {app.name}</h2>
          <p className={styles.tap}>ClientId: {app.clientId}</p>
          <p className={styles.tap}>ClientSecret: {app.clientSecret}</p>
          <p className={styles.Req}>Количество запросов: {app.queries}</p>

          <Link to="/panek" className={styles.blueButton}>
            Назад
          </Link>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Arg;
