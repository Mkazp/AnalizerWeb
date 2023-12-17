// Faq.js
/*
import React, { Component } from 'react';
import { Container, Nav, Col, Tab, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './Faq.module.scss';

export default class Faq extends Component {
  render() {
    return (
      <div>
        <Container>
          <Tab.Container id="left-tabs" defaultActiveKey="first">
            <Row>
              <Col sm={3}>
                <Nav variant="pills" className={`flex-column mt-2 ${styles.navColumn}`}>
                  <Nav.Item>
                    <Nav.Link as={Link} to="/Faq" eventKey="first" className={styles.navLink}>
                      <h1>Описание</h1>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Faq" eventKey="second" className={styles.navLink}>
                      <h1>Получение Доступа</h1>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Faq" eventKey="third" className={styles.navLink}>
                      <h1>Описание Api</h1>
                    </Nav.Link>
                    <Nav.Link as={Link} to="/Faq" eventKey="fourth" className={styles.navLink}>
                      <h1>Таблица Районов и Регионов</h1>
                    </Nav.Link>
                  </Nav.Item>
                </Nav>
              </Col>
              <Col sm={9}>
                <Tab.Container>
                  <Tab.Pane eventKey="first">
                    <p>
                      Сервис предоставляет API для получения статистики по завершенным закупкам.
                      База данных содержит данные по закупкам 44ФЗ и 223ФЗ с 2020 года. (Учитываются только закупки, содержащие товары с кодом класса okpd/ktru, количеством товара и ценой)
                    </p>
                    <p>
                      <strong>Состав проекта:</strong>
                      <ul>
                        <li><a href="url-проекта">Сайт проекта</a></li>
                        <li><a href="url-api">Api url</a></li>
                        <li><a href="url-swagger">Swagger</a></li>
                      </ul>
                    </p>
                    <p>
                      <strong>Виды таблиц/графиков в получаемом отчете:</strong>
                      <ul>
                        <li>Результаты поиска (категория товара, название товара, OKEI)</li>
                        <li>Количество закупок (все время, текущий год)</li>
                        <li>Распределение закупок по регионам (все время, текущий год)</li>
                        <li>Количество закупаемого товара (все время, текущий год)</li>
                        <li>Цены (Средняя цена за позицию товара, среднее кол-во товара в закупке, максимальная и минимальная цена)</li>
                      </ul>
                    </p>
                    <p>
                      Статистика предоставляется по всем природно-хозяйственным районам РФ вместе и отдельно для каждого района.
                    </p>
                  </Tab.Pane>

                </Tab.Container>
              </Col>
            </Row>
          </Tab.Container>
        </Container>
      </div>
    );
  }
}

*/



/*
import React from 'react';

const Faq = () => {
  return (
    <div>
      <h2>Faq Page</h2>
      <p>This is the Faq page content.</p>
    </div>
  );
};

export default Faq;

*/



// Faq.js
// Faq.js
import React, { useState } from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import styles from './Faq.module.scss';

const Faq = () => {
  const [selectedTab, setSelectedTab] = useState('description');

  const tabData = [
    { id: 'description', title: 'Описание' },
    { id: 'access', title: 'Получение Доступа' },
    { id: 'api', title: 'Описание API' },
    { id: 'regions', title: 'Таблица Районов и Регионов' },
  ];

  const renderTabContent = () => {
    switch (selectedTab) {
      case 'description':
  return (
    <>
      <p>
        Сервис предоставляет API для получения статистики по завершенным закупкам.
        База данных содержит данные по закупкам 44ФЗ и 223ФЗ с 2020 года. (Учитываются только закупки, содержащие товары с кодом класса okpd/ktru, количеством товара и ценой)
      </p>
      <p>
        <strong>Состав проекта:</strong>
        <ul>
          <li><a href="url-проекта">Сайт проекта</a></li>
          <li><a href="url-api">Api url</a></li>
          <li><a href="url-swagger">Swagger</a></li>
        </ul>
      </p>
      <p>
        <strong>Виды таблиц/графиков в получаемом отчете:</strong>
        <ul>
          <li>Результаты поиска (категория товара, название товара, OKEI)</li>
          <li>Количество закупок (все время, текущий год)</li>
          <li>Распределение закупок по регионам (все время, текущий год)</li>
          <li>Количество закупаемого товара (все время, текущий год)</li>
          <li>Цены (Средняя цена за позицию товара, среднее кол-во товара в закупке, максимальная и минимальная цена)</li>
        </ul>
      </p>
      <p>
        Статистика предоставляется по всем природно-хозяйственным районам РФ вместе и отдельно для каждого района.
      </p>
    </>
  );
      case 'access':
        return (
          <p>
            Сервис предоставляет API для получения статистики по завершенным закупкам.
          </p>
        );
      case 'api':
        return (
          <>
            <h1>Получение отчета по введенному товару/товарам</h1>
        
            <h2>Формат запроса</h2>
            <p>
              Запрос отправляется в формате текстовой строки, содержащей только русские буквы и спец. символы в кодировке UTF-8.
            </p>
            <p>
              Поисковый запрос оформляется в таком формате:
              <ul>
                <li>Искать данное слово</li>
                <li>Исключать данное слово</li>
              </ul>
              Например: “+сыр+Гауда” или “+сыр-Гауда”. В первом случае получаем результаты, содержащие сыр Гауда, во втором все сыры, кроме гауды.
            </p>
            <p>
              Api допускает поиск сразу нескольких товаров, например «+сыр,+сыры».  Для запроса через запятую данные для таблиц суммируются (без дублирования). Рекомендуется для каждого товара писать запрос в виде: «+товар_в_единственном_числе,+товар_во_множественном_числе»
              (Подавать в api без кавычек)
            </p>
        
            <h2>Время формирования отчета</h2>
            <p>
              Время формирования отчета напрямую зависит от количества товаров в одном запросе и количества найденных по искомым товарам соответствиям.
            </p>
        
            <h2>Фильтры</h2>
            <ul>
              <li><strong>Обычный поиск.</strong> Поиск на наличие конкретного слова/слов в названии и описании товара закупки. Имеет погрешность в точности и может требовать дополнительные запросы, исключающие неподходящие результаты поиска.</li>
              <li><strong>Поиск по okpd2, ktru.</strong> Рекомендуется использовать поиск по коду товара, при использовании такого вида поиска вероятность получить неверные результаты и, соответственно, неверную статистику минимальна.
                <ul>
                  <li>Перечень товаров ktru: <a href="https://zakupki.gov.ru/epz/ktru/start/startPage.html">zakupki.gov.ru</a></li>
                  <li>Классификатор okpd2: <a href="https://classifikators.ru/okpd">classifikators.ru</a></li>
                </ul>
              </li>
              <li><strong>44фз/223фз.</strong> Для 223 фз если qty = null - товар не учитывается. Все товары закупки соответствуют поиску. Исключает закупки, содержащие другие товары, помимо искомого.</li>
            </ul>
          </>
        );
        
      case 'regions':
        return (
          <p>
            Сервис предоставляет API для получения статистики по завершенным закупкам.
          </p>
        );
      default:
        return null;
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col sm={3} className={`pt-3 ${styles.navColumn}`}>
          <Nav className="flex-column">
            {tabData.map((tab) => (
              <Nav.Item key={tab.id} className={styles.navItem}>
                <Nav.Link
                  href={`#${tab.id}`}
                  onClick={() => setSelectedTab(tab.id)}
                  className={`${styles.navLink} ${selectedTab === tab.id ? styles.activeNavLink : ''}`}
                >
                  {tab.title}
                </Nav.Link>
              </Nav.Item>
            ))}
          </Nav>
        </Col>
        <Col sm={9} className={`pt-3 ${styles.contentColumn}`}>
          {renderTabContent()}
        </Col>
      </Row>
    </Container>
  );
};

export default Faq;
