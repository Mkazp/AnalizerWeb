import React, { useEffect, useState } from 'react';
import styles from './Panel.module.scss';
import { Link } from 'react-router-dom';

const Panel = () => {
  const [id, setId] = useState(localStorage.getItem('id'));
  const [apps, setApps] = useState([]);

  useEffect(() => {
    // Вызывается при монтировании компонента
    handleGetApps();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  const handleGetApps = async () => {
    try {
      const response = await fetch(`http://213.171.8.164:5001/ZakupkiWebApi/user/${id}/apps`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const appsData = await response.json();
        setApps(appsData);
      } else {
        console.error('Failed to fetch apps');
      }
    } catch (error) {
      console.error('Error during fetching apps:', error);
    }
  }

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
        <h1 className={styles.AppTitle}>Приложения</h1>
        {apps.length > 0 ? (
          <ul className={styles.appList}>
            {apps.map((app, index) => (
              <li key={index} className={styles.appItem}>
                <Link className={styles.link}>
                  <p>{app.Name}</p>
                  <p>Количество запросов: {app.Queries}</p>
                </Link>
                <Link to={`/arg?App_id=${app.App_id}`} className={styles.link}>
                  Редактировать
                </Link>
              </li>
            ))}
          </ul>
        ) : (
          <h3 className={styles.AppDesk}>
            У Вас пока нет ни одного приложения...
          </h3>
        )}
      </div>
      <Link to="/create" className={styles.blueButton}>
        Добавить приложение
      </Link>
    </div>
  );
};

export default Panel;


/* <div className={styles.Apps}>
        <h1 className={styles.AppTitle}>
          Приложения
        </h1>
        {apps.length > 0 ? (
          // Если есть приложения, отобразите их
          <ul className={styles.appList}>
            {apps.map((app, index) => (
              <li key={index} className={styles.appItem}>
                <p>{app.Name}</p>
                <p>Количество запросов: {app.Queries}</p>
              </li>
            ))}
          </ul>
        ) : (
          // Если нет приложений, отобразите сообщение
          <h3 className={styles.AppDesk}>
            У Вас пока нет ни одного приложения...
          </h3>
        )}
      </div>
      <Link to="/create" className={styles.blueButton}>
        Добавить приложение
      </Link>
    </div> */

//     import React, { useEffect, useState } from 'react';
//     import { Link } from 'react-router-dom';
//     import styles from './Panel.module.scss';

// const Panel = () => {
//   const [id, setId] = useState(localStorage.getItem('id'));
//   const [apps, setApps] = useState([]);

//   useEffect(() => {
//     // Вызывается при монтировании компонента
//     handleGetApps();
//     // eslint-disable-next-line react-hooks/exhaustive-deps
//   }, []);


//   const handleGetApps = async () => {
//     try {
//       const response = await fetch(`http://213.171.8.164:5001/ZakupkiWebApi/user/${id}/apps`, {
//         method: 'GET',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });

//       if (response.ok) {
//         const appsData = await response.json();
//         setApps(appsData);
//       } else {
//         console.error('Failed to fetch apps');
//       }
//     } catch (error) {
//       console.error('Error during fetching apps:', error);
//     }
//   }

//   return (
//     <div className={styles.panel}>
//       <div>
//         <h1 className={styles.panelTitle}>Панель Управления</h1>
//         <div className={styles.panelTariff}>
//           <div className={styles.Ttitle}>
//             <p>Тариф</p>
//           </div>
//           <div>
//             <div className={styles.Tariff}>
//               <h3>Free</h3>
//             </div>
//             <p className={styles.time}>срок действия не ограничен</p>
//             <div className={styles.data}>
//               <div className={styles.dataItem}>
//                 <p>Окончание отчетного периода</p>
//                 <b>17 января 2024</b>
//               </div>
//               <div className={styles.line1}></div>
//               <div className={styles.dataItem}>
//                 <p>Запросы (в месяц)</p>
//                 <b>0 / 1000</b>
//               </div>
//               <div className={styles.line2}></div>
//               <div className={styles.dataItem}>
//                 <p>Приложения</p>
//                 <b>0 / 1</b>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className={styles.Apps}>
//         <h1 className={styles.AppTitle}>
//           Приложения
//         </h1>
//         {apps.length > 0 ? (
//           // Если есть приложения, отобразите их
//           <ul className={styles.appList}>
//             {apps.map((app, index) => (
//               <li key={index} className={styles.appItem}>
//                 <p>{app.Name}</p>
//                 <p>Количество запросов: {app.Queries}</p>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           // Если нет приложений, отобразите сообщение
//           <h3 className={styles.AppDesk}>
//             У Вас пока нет ни одного приложения...
//           </h3>
//         )}
//       </div>
//       <Link to="/create" className={styles.blueButton}>
//         Добавить приложение
//       </Link>
//     </div>
//   );
// };

// export default Panel;