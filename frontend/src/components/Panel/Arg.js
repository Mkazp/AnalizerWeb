import React, { useState, useEffect } from 'react';
import styles from './Arg.module.scss';
import { useParams } from 'react-router-dom';

const Arg = () => {
  const [app, setApp] = useState(null);
  const { appId } = useParams();

  useEffect(() => {
    // Check if appId is truthy before making the request
    if (appId) {
      handleGetApp();
    }
  }, [appId]);

  const handleGetApp = async () => {
    try {
      const response = await fetch(`http://213.171.8.164:5001/ZakupkiWebApi/app/${appId}`, {
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
        <div>
          <h2>Детали для ID приложения: {app.name}</h2>
          <p>Имя приложения: {app.clientId}</p>
          <p>Имя приложения: {app.clientSecret}</p>
          <p>Имя приложения: {app.queries}</p>
          {/* Добавьте другие свойства приложения, которые вы хотите отобразить */}
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Arg;
