// import React from 'react';
// import styles from './Home.module.scss';

// const Home = () => {
//   return (
//     <div className='map'>
//       <img src="/mapsvg/Centralniy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Uralskiy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Centralno-chernozemniy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Dalnevostochniy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Osobaya_ekonomicheskaya_zona.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Povolzhskiy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Severo-kavkazskiy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Severo-zapadniy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Volgo-vyatskiy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Vostochno_sibirskiy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Zapadno-sibirskiy.svg" alt="" className='Under'/>
//       <img src="/mapsvg/Severniy.svg" alt="" className='Under'/>
//     </div>
//   );
// };

// export default Home;

// import React, { useState } from 'react';
// import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import geojson from 'geojson';

// const Map = () => {
//   const [selectedRegion, setSelectedRegion] = useState(null);

//   const handleRegionClick = (event) => {
//     const layer = event.target;
//     layer.setStyle({ color: 'red' });

//     const regionName = layer.feature.properties.Регион;
//     setSelectedRegion(regionName);

//     // Отправьте запрос на сервер с выбранным регионом
//     // Тут можете использовать fetch или библиотеку axios
//     // fetch(`/api/your-endpoint?region=${regionName}`)
//     //   .then(response => response.json())
//     //   .then(data => console.log(data))
//     //   .catch(error => console.error('Error:', error));
//   };

//   const handleRegionMouseOut = (event) => {
//     const layer = event.target;
//     layer.setStyle({ color: 'blue' }); // Установите цвет по умолчанию при уходе мыши с региона
//   };

//   const geojsonFeature = geojson.parse(
//     [
//       {
//         "type": "Feature",
//         "properties": {
//           "Индекс": "385200",
//           "Тип региона": "Респ",
//           "Регион": "Адыгея",
//           "Тип района": "",
//           "Район": "",
//           "Тип города": "г",
//           "Город": "Адыгейск",
//           "Тип н/п": "",
//           "Н/п": "",
//           "Код КЛАДР": "0100000200000",
//           "Код ФИАС": "ccdfd496-8108-4655-aadd-bd228747306d",
//           "Уровень по ФИАС": "4: город",
//           "Признак центра района или региона": "0",
//           "Код ОКАТО": "79403000000",
//           "Код ОКТМО": "79703000001",
//           "Код ИФНС": "0107",
//           "Часовой пояс": "UTC+3",
//           "Широта": "44.8783715",
//           "Долгота": "39.190172",
//           "Федеральный округ": "Южный",
//           "Население": "12689"
//         },
//         "geometry": {
//           "type": "Point",
//           "coordinates": [39.190172, 44.8783715]
//         }
//       }
//     ],
//     { Point: ['Широта', 'Долгота'] }
//   );
//   console.log(geojsonFeature);

//   return (
//     <MapContainer
//       center={[55.7558, 37.6176]}
//       zoom={5}
//       style={{ height: '500px', width: '100%' }}
//     >
//       <TileLayer
//         url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//       />
//       <GeoJSON
//         data={geojsonFeature}
//         onEachFeature={(feature, layer) => {
//           layer.on({
//             mouseover: handleRegionClick,
//             mouseout: handleRegionMouseOut,
//           });
//         }}
//       />
//     </MapContainer>
//   );
// };

// export default Map;


import React from 'react';
import styles from './Home.module.scss';

const Home = () => {
  const regions = [
    'Centralniy',
    'Uralskiy',
    'Centralno-chernozemniy',
    'Dalnevostochniy',
    'Osobaya_ekonomicheskaya_zona',
    'Povolzhskiy',
    'Severo-kavkazskiy',
    'Severo-zapadniy',
    'Volgo-vyatskiy',
    'Vostochno_sibirskiy',
    'Zapadno-sibirskiy',
    'Severniy',
  ];

  return (
    <div className={styles.map}>
      {regions.map((region) => (
        <img
          key={region}
          src={`/mapsvg/${region}.svg`}
          alt={`Map of ${region}`}
          className={styles.regionImage}
        />
      ))}
    </div>
  );
};

export default Home;

