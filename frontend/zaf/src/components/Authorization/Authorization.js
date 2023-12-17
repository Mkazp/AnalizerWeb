// Authorization.js
/*
import React, { useEffect } from 'react';
import './Authorization.module.scss';

const Authorization = () => {
  useEffect(() => {
    const signInBtn = document.querySelector('.signin-btn');
    const signUpBtn = document.querySelector('.signup-btn');
    const formBox = document.querySelector('.form-box');
    const body = document.body;

    const handleSignUpClick = () => {
      formBox.classList.add('active');
      body.classList.add('active');
    };

    const handleSignInClick = () => {
      formBox.classList.remove('active');
      body.classList.remove('active');
    };

    signUpBtn.addEventListener('click', handleSignUpClick);
    signInBtn.addEventListener('click', handleSignInClick);

    return () => {
      signUpBtn.removeEventListener('click', handleSignUpClick);
      signInBtn.removeEventListener('click', handleSignInClick);
    };
  }, []);

  return (
    <article className="container">
      <div className="block">
        <section className="block_item block-item">
          <h2 className="block-item__title">У вас уже есть аккаунт?</h2>
          <button className="block-item__btn signin-btn">Войти</button>
        </section>
        <section className="block_item block-item">
          <h2 className="block-item__title">У вас нет аккаунта?</h2>
          <button className="block-item__btn signup-btn">Зарегистрироваться</button>
        </section>
      </div>

      <div className="form-box">

        <form action="#" className="form form_signin">
          <h3 className="form__title">Вход</h3>
          <p>
            <input type="text" className="form__input" placeholder="Логин" />
          </p>
          <p>
            <input type="password" className="form__input" placeholder="Пароль" />
          </p>
          <p>
            <button type="button" className="form_btn">
              Войти
            </button>
          </p>
          <p>
            <a href="#" className="form__forgot">
              Восстановить пароль
            </a>
          </p>
        </form>


        <form action="#" className="form form_signup">
          <h3 className="form__title">Регистрация</h3>
          <p>
            <input type="text" className="form__input" placeholder="Логин" />
          </p>
          <p>
            <input type="email" className="form__input" placeholder="Email" />
          </p>
          <p>
            <input type="password" className="form__input" placeholder="Пароль" />
          </p>
          <p>
            <input type="password" className="form__input" placeholder="Подтвердите пароль" />
          </p>
          <p>
            <button type="button" className="form_btn form__btn_singup">
              Зарегистрироваться
            </button>
          </p>
        </form>
      </div>
    </article>
  );
};

export default Authorization;*/



/*
import React from 'react';
import styles from './Authorization.module.scss';

const Authorization = () => {
  return (
    <div className={styles.centeredContainer}>
      <div className={styles.block}>
        <section className={styles['block-item']}>
          <h2 className={styles['block-item__title']}>У вас уже есть аккаунт?</h2>
          <button className={styles['block-item__btn']}>Войти</button>
        </section>
        <section className={styles['block-item']}>
          <h2 className={styles['block-item__title']}>У вас нет аккаунта?</h2>
          <button className={styles['block-item__btn']}>Зарегистрироваться</button>
        </section>
      </div>
    </div>
  );
};

export default Authorization;
*/

// Authorization.js
/*
import React, { useState } from 'react';
import styles from './Authorization.module.scss';

const Authorization = () => {
  const [isActive, setIsActive] = useState(false);

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <div className={styles.block}>
        <section className={`${styles.blockItem} ${styles.blockItemFirst}`}>
          <h2 className={styles.blockItemTitle}>У вас уже есть аккаунт?</h2>
          <button className={`${styles.blockItemBtn} ${styles.signinBtn}`} onClick={toggleForm}>Войти</button>
        </section>
        <section className={styles.blockItem}>
          <h2 className={styles.blockItemTitle}>У вас нет аккаунта?</h2>
          <button className={`${styles.blockItemBtn} ${styles.signupBtn}`} onClick={toggleForm}>Зарегистрироваться</button>
        </section>
      </div>

      <div className={`${styles.formBox} ${isActive ? styles.active : ''}`}>

        <form action="#" className={`${styles.form} ${styles.formSignin}`}>
          <h3 className={styles.formTitle}>Вход</h3>
          <p>
            <input type="text" className={styles.formInput} placeholder="Логин" />
          </p>
          <p>
            <input type="password" className={styles.formInput} placeholder="Пароль" />
          </p>
          <p>
            <button type="button" className={styles.formBtn}>Войти</button>
          </p>
          <p>
            <a href="#" className={styles.formForgot}>Восстановить пароль</a>
          </p>
        </form>


        <form action="#" className={`${styles.form} ${styles.formSignup}`}>
          <h3 className={styles.formTitle}>Регистрация</h3>
          <p>
            <input type="text" className={styles.formInput} placeholder="Логин" />
          </p>
          <p>
            <input type="email" className={styles.formInput} placeholder="Email" />
          </p>
          <p>
            <input type="password" className={styles.formInput} placeholder="Пароль" />
          </p>
          <p>
            <input type="password" className={styles.formInput} placeholder="Подтвердите пароль" />
          </p>
          <p>
            <button type="button" className={`${styles.formBtn} ${styles.formBtnSignup}`}>Зарегистрироваться</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Authorization; */




// import React, { useState } from 'react';
// import styles from './Authorization.module.scss';

// const Authorization = () => {
//   const [isActive, setIsActive] = useState(false);
//   const [loginData, setLoginData] = useState({
//     username: '',
//     password: '',
//   });
//   const [registrationData, setRegistrationData] = useState({
//     username: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//   });

//   const toggleForm = () => {
//     setIsActive(!isActive);
//   };

//   const handleLogin = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/login', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(loginData),
//       });

//       if (response.ok) {
//         // Authentication successful, handle the response accordingly
//         console.log('Authentication successful');
//       } else {
//         // Authentication failed, handle the error
//         console.error('Authentication failed');
//       }
//     } catch (error) {
//       console.error('Error during authentication:', error);
//     }
//   };

//   const handleRegistration = async () => {
//     try {
//       const response = await fetch('http://localhost:4000/signup', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(registrationData),
//       });

//       if (response.ok) {
//         // Registration successful, handle the response accordingly
//         console.log('Registration successful');
//       } else {
//         // Registration failed, handle the error
//         console.error('Registration failed');
//       }
//     } catch (error) {
//       console.error('Error during registration:', error);
//     }
//   };

//   const handleInputChange = (e, dataSetter) => {
//     const { name, value } = e.target;
//     dataSetter((prevData) => ({
//       ...prevData,
//       [name]: value,
//     }));
//   };

//   return (
//     <div>
//       {/* ... Your existing JSX code ... */}
//       <form action="#" className={`${styles.form} ${styles.formSignin}`}>
//         <h3 className={styles.formTitle}>Login</h3>
//         <p>
//           <input
//             type="text"
//             className={styles.formInput}
//             placeholder="Username"
//             name="username"
//             value={loginData.username}
//             onChange={(e) => handleInputChange(e, setLoginData)}
//           />
//         </p>
//         <p>
//           <input
//             type="password"
//             className={styles.formInput}
//             placeholder="Password"
//             name="password"
//             value={loginData.password}
//             onChange={(e) => handleInputChange(e, setLoginData)}
//           />
//         </p>
//         <p>
//           <button type="button" className={styles.formBtn} onClick={handleLogin}>
//             Login
//           </button>
//         </p>
//       </form>

//       {/* Registration Form */}
//       <form action="#" className={`${styles.form} ${styles.formSignup}`}>
//         <h3 className={styles.formTitle}>Registration</h3>
//         <p>
//           <input
//             type="text"
//             className={styles.formInput}
//             placeholder="Username"
//             name="username"
//             value={registrationData.username}
//             onChange={(e) => handleInputChange(e, setRegistrationData)}
//           />
//         </p>
//         <p>
//           <input
//             type="email"
//             className={styles.formInput}
//             placeholder="Email"
//             name="email"
//             value={registrationData.email}
//             onChange={(e) => handleInputChange(e, setRegistrationData)}
//           />
//         </p>
//         <p>
//           <input
//             type="password"
//             className={styles.formInput}
//             placeholder="Password"
//             name="password"
//             value={registrationData.password}
//             onChange={(e) => handleInputChange(e, setRegistrationData)}
//           />
//         </p>
//         <p>
//           <input
//             type="password"
//             className={styles.formInput}
//             placeholder="Confirm Password"
//             name="confirmPassword"
//             value={registrationData.confirmPassword}
//             onChange={(e) => handleInputChange(e, setRegistrationData)}
//           />
//         </p>
//         <p>
//           <button
//             type="button"
//             className={`${styles.formBtn} ${styles.formBtnSignup}`}
//             onClick={handleRegistration}
//           >
//             Register
//           </button>
//         </p>
//       </form>
//     </div>
//   );
// };

// export default Authorization;


import React, { useState } from 'react';
import styles from './Authorization.module.scss';

const Authorization = () => {

  
  //const [isActive, setIsActive] = useState(false);

  const [isActive, setIsActive] = useState(false);
  const [loginData, setLoginData] = useState({
    username: '',
    password: '',
  });
  const [registrationData, setRegistrationData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const toggleForm = () => {
    setIsActive(!isActive);
  };

  const handleLogin = async () => {
    try {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(loginData),
      });

      if (response.ok) {
        // Authentication successful, handle the response accordingly
        console.log('Authentication successful');
      } else {
        // Authentication failed, handle the error
        console.error('Authentication failed');
      }
    } catch (error) {
      console.error('Error during authentication:', error);
    }
  };

  const handleRegistration = async () => {
    try {
      const response = await fetch('http://localhost:4000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(registrationData),
      });

      if (response.ok) {
        // Registration successful, handle the response accordingly
        console.log('Registration successful');
      } else {
        // Registration failed, handle the error
        console.error('Registration failed');
      }
    } catch (error) {
      console.error('Error during registration:', error);
    }
  };

  const handleInputChange = (e, dataSetter) => {
    const { name, value } = e.target;
    dataSetter((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={`${styles.container} ${isActive ? styles.active : ''}`}>
      <div className={styles.block}>
        <section className={`${styles.blockItem} ${styles.blockItemFirst}`}>
          <h2 className={styles.blockItemTitle}>У вас уже есть аккаунт?</h2>
          <button className={`${styles.blockItemBtn} ${styles.signinBtn}`} onClick={toggleForm}>Войти</button>
        </section>
        <section className={styles.blockItem}>
          <h2 className={styles.blockItemTitle}>У вас нет аккаунта?</h2>
          <button className={`${styles.blockItemBtn} ${styles.signupBtn}`} onClick={toggleForm}>Зарегистрироваться</button>
        </section>
      </div>

      <div className={`${styles.formBox} ${isActive ? styles.active : ''}`}>

        <form action="#" className={`${styles.form} ${styles.formSignin}`}>
          <h3 className={styles.formTitle}>Вход</h3>
          <p>
            <input type="text" className={styles.formInput} onChange={(e) => handleInputChange(e, setLoginData)} placeholder="Логин" />
          </p>
          <p>
            <input type="password" className={styles.formInput} onChange={(e) => handleInputChange(e, setLoginData)} placeholder="Пароль" />
          </p>
          <p>
            <button type="button" className={styles.formBtn} onClick={handleLogin}>Войти</button>
          </p>
          <p>
            <a href="#" className={styles.formForgot}>Восстановить пароль</a>
          </p>
        </form>


        <form action="#" className={`${styles.form} ${styles.formSignup}`}>
          <h3 className={styles.formTitle}>Регистрация</h3>
          <p>
            <input type="text" className={styles.formInput} onChange={(e) => handleInputChange(e, setRegistrationData)} placeholder="Логин" />
          </p>
          <p>
            <input type="email" className={styles.formInput} onChange={(e) => handleInputChange(e, setRegistrationData)} placeholder="Email" />
          </p>
          <p>
            <input type="password" className={styles.formInput} onChange={(e) => handleInputChange(e, setRegistrationData)} placeholder="Пароль" />
          </p>
          <p>
            <input type="password" className={styles.formInput} onChange={(e) => handleInputChange(e, setRegistrationData)} placeholder="Подтвердите пароль" />
          </p>
          <p>
            <button type="button" className={`${styles.formBtn} ${styles.formBtnSignup}`} onClick={handleRegistration}>Зарегистрироваться</button>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Authorization;


