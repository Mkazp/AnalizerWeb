import React, { useState } from 'react';
import styles from './Create.module.scss';
import { Link, useNavigate } from 'react-router-dom';

const Create = () => {
  const navigate = useNavigate(); // Получение функции navigate
  const [formData, setFormData] = useState({
    email: localStorage.getItem('email') || '',
    inputValue: '',
    Name: '',
    Login: localStorage.getItem('email') || '',
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      inputValue: e.target.value,
    });
  };

  const handleApp = async () => {
    try {
      const updatedFormData = { ...formData, Name: formData.inputValue };

      const response = await fetch('http://213.171.8.164:5001/ZakupkiWebApi/app', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedFormData),
      });

      if (response.ok) {
        console.log('App created');
        // Выполнение программного перенаправления с использованием useNavigate
        navigate('/Panel');
      } else {
        console.error('App creation failed');
      }
    } catch (error) {
      console.error('Error during app creation:', error);
    }
  };

  return (
    <div className={styles.panel}>
      <h1 className={styles.panelTitle}>Новое приложение</h1>
      <h3 className={styles.panelTas}>Наименование</h3>
      <div className={styles.fullWidthInputContainer}>
        <input
          type="text"
          value={formData.inputValue}
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
