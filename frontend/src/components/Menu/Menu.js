import React, { useEffect, useState } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import logo from './logo192.png';

const styles = {
  customNavbar: {
    background: 'linear-gradient(135deg, #aebcbf 0%, #000000 0%, #000000 38%, #6b7475 38%, #6b7475 41%, #6b7475 42%, #6b7475 42%, #6b7475 42%, #000000 42%, #000000 46%, #6b7475 46%, #6b7475 54%, #6b7475 54%, #6b7475 58%, #6b7475 58%, #6b7475 74%, #6b7475 74%, #6b7475 88%, #0a0e0a 88%, #0a0809 100%)',
    width: '100%', // добавлено
    marginTop: 0, // добавлено
  },
  container: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  brand: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '15%',
  },
  brandImg: {
    marginRight: '10px',
  },
  brandText: {
    paddingLeft: '30px',
  },
  brandLink: {
    textDecoration: 'none',
    color: 'white',
  },
  navLinks: {
    marginLeft: 'auto',
    display: 'flex',
    alignItems: 'center',
    marginRight: '20%', // добавлено
  },
  navLink: {
    color: 'white',
    fontSize: '1.2em',
    marginLeft: '15px',
    textDecoration: 'none',
  },
  hoverGray: {
    backgroundColor: '#6b7475',
  },
  activeNavLink: {
    backgroundColor: '#6b7475',
  },
};

const Menu = () => {
  const [isAuth, setIsAuth] = useState(localStorage.getItem('isAuth'));
  const [email, setEmail] = useState(localStorage.getItem('email'));

  const isReady = () => {
    localStorage.getItem('isAuth')
    localStorage.getItem('email')
  }

  const Logout = () => {
    localStorage.clear();
    window.location.reload();
  }

  useEffect(() => {
    isReady();
  }, []);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={styles.customNavbar}>
        <Container style={styles.container}>
          <Navbar.Brand href="/" className="text-white d-flex align-items-center" style={styles.brand}>
            <img src={logo} height="50" width="50" className="d-inline-block align-top" alt="Logo" style={styles.brandImg} />
            <h2 className="m-0 ml-2" style={styles.brandText}>
              <NavLink to="/" style={styles.brandLink}>
                Название
              </NavLink>
            </h2>
          </Navbar.Brand>
          <Nav className="ml-auto" style={styles.navLinks}>
            <NavLink to="/" className="nav-link" activeClassName="active" style={styles.navLink}>
              Home
            </NavLink>
            <NavLink to="/faq" className="nav-link" activeClassName="active" style={styles.navLink}>
              Документация
            </NavLink>
            

            {!isAuth && (
              <NavLink to="/panelInactiv" className="nav-link" activeClassName="active" style={styles.navLink}>
              Панель Управления
            </NavLink>
            )}
            {isAuth && (
              <>

            <NavLink to="/panel" className="nav-link" activeClassName="active" style={styles.navLink}>
              Панель Управления
            </NavLink>
              </>
            )}


            {!isAuth && (
              <NavLink to="/authorization" className="nav-link" activeClassName="active" style={styles.navLink}>
                Регистрация
              </NavLink>
            )}
            {isAuth && (
              <>
              <NavLink to="/user/id" className="nav-link" activeClassName="active" style={styles.navLink}>
                {email}
              </NavLink>

              <NavLink to="/" className="nav-link" activeClassName="active" style={styles.navLink} onClick={Logout}>
              Выйти
              </NavLink>
              </>
            )}


          </Nav>
        </Container>
      </nav>
    </>
  );
};

export default Menu;
