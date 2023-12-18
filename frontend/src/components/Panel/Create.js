import React from 'react';
import styles from './Create.module.scss';
import { Link } from 'react-router-dom'; 
import { useState } from 'react';



const Create = () => {
    const [inputValue, setInputValue] = useState('');
    const [email, setEmail] = useState(localStorage.getItem('email'));


  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  }

  const handleApp = async () => {
    try {
      const response = await fetch('http://213.171.8.164:5001/ZakupkiWebApi/app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(AppData),
      });

      // console.log(loginData);


      if (response.ok) {
        // Authentication successful, handle the response accordingly
        console.log('App creat');
      } else {
        // Authentication failed, handle the error
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  }

  const [AppData, setAppData] = useState({
    email: '',
    inputValue: '',
  });

  return (
    <div className={styles.panel}>
        <h1 className={styles.panelTitle}>
        Новое приложение
        </h1>
        <h3 className={styles.panelTas}>
        Наименование
        </h3>
        <div className={styles.fullWidthInputContainer}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
                className={styles.fullWidthInput}
                placeholder="Введите текст"
            />
        </div>
        
        <Link to="/create" className={styles.blueButton} onClick={handleApp}>
          Добавить приложение
        </Link>

        <Link to="/Panel" className={styles.backLink}>
        Отмена
        </Link>
    </div>
  );
};

export default Create;