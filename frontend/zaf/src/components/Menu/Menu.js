

/*
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import Faq from '../FAQ/Faq';
//import Home from '../Home/Home';
import logo from './logo192.png';
import 'typeface-montserrat';

export default class Menu extends Component {
  handleMouseOver = (event) => {
    event.target.classList.add('hover-gray');
  }

  handleMouseOut = (event) => {
    event.target.classList.remove('hover-gray');
  }

  render() {
    return (
      <>
        <nav fixed="top" className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(135deg, #aebcbf 0%,#000000 0%,#000000 38%,#6b7475 38%,#6b7475 41%,#6b7475 42%,#6b7475 42%,#000000 42%,#000000 46%,#6b7475 46%,#6b7475 54%,#6b7475 54%,#6b7475 58%,#6b7475 58%,#6b7475 74%,#6b7475 74%,#6b7475 88%,#0a0e0a 88%,#0a0809 100%)' }}>
          <Navbar collapseOnSelect expand="md">
            <Container>
              <Navbar.Brand href="/" className="text-white d-flex align-items-center" style={{ marginLeft: '10%' }}>
                <img
                  src={logo}
                  height="50"
                  width="50"
                  className="d-inline-block align-top"
                  alt="Logo"
                /> 
                <h2 className="m-0 ml-2" style={{ paddingLeft: '30px' }}>
                  Название
                </h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ marginLeft: '85%' }}>
                  <Nav.Link href="/" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/Faq" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Документация
                  </Nav.Link>
                  <Nav.Link href="/VirtualDev" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    VirtualDev
                  </Nav.Link>
                  <Nav.Link href="/Autorization" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Регистрация
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </>
    );
  }
}
*/

/*
import React, { Component } from 'react';
import { Container, Nav , Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Faq from '../FAQ/Faq';
import Home from '../Home/Home';

import logo from './logo192.png';
import 'typeface-montserrat';

export default class Menu extends Component {
  handleMouseOver = (event) => {
    event.target.classList.add('hover-gray');
  };

  handleMouseOut = (event) => {
    event.target.classList.remove('hover-gray');
  };

  render() {
    return (
      <Router>
        <div>
          <nav fixed="top" className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(135deg, #aebcbf 0%,#000000 0%,#000000 38%,#6b7475 38%,#6b7475 41%,#6b7475 42%,#6b7475 42%,#000000 42%,#000000 46%,#6b7475 46%,#6b7475 54%,#6b7475 54%,#6b7475 58%,#6b7475 58%,#6b7475 74%,#6b7475 74%,#6b7475 88%,#0a0e0a 88%,#0a0809 100%)' }}>
            <Container>
              <Navbar.Brand as={Link} to="/" className="text-white d-flex align-items-center" style={{ marginLeft: '10%' }}>
                <img
                  src={logo}
                  height="50"
                  width="50"
                  className="d-inline-block align-top"
                  alt="Logo"
                />
                <h2 className="m-0 ml-2" style={{ paddingLeft: '30px' }}>
                  Название
                </h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ marginLeft: '85%' }}>
                  <Nav.Link as={Link} to="/" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Home
                  </Nav.Link>
                  <Nav.Link as={Link} to="/Faq" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Документация
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </nav>

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Faq" element={<Faq />} />
          </Routes>
        </div>
      </Router>
    );
  }
}*/



/*
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from './logo192.png';
import styles from './Menu.module.scss';

export default class Menu extends Component {
  handleMouseOver = (event) => {
    event.target.classList.add('hover-gray');
  };

  handleMouseOut = (event) => {
    event.target.classList.remove('hover-gray');
  };

  render() {
    return (
      <Navbar fixed="top" expand="md" className={styles.navbar}>
        <Container>
          <Navbar.Brand as={Link} to="/" className={styles.navbarBrand}>
            <img
              src={logo}
              height="50"
              width="50"
              className="d-inline-block align-top"
              alt="Logo"
            />
            <h2 className={styles.brandText}>
              Название
            </h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={styles.navLinks}>
              <Nav.Link as={Link} to="/" className={styles.navLink} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/Map" className={styles.navLink} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                Map
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}*/


/*
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo192.png';
import styles from './Menu.module.scss';

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="md" className={`${styles.navbar} navbar-light fixed-top`}>
      <Container>
        <Navbar.Brand as={Link} to="/" className={`text-white d-flex align-items-center ${styles.navbarBrand}`}>
          <img
            src={logo}
            height="50"
            width="50"
            className="d-inline-block align-top"
            alt="Logo"
          /> 
          <h2 className={`m-0 ml-2 ${styles.brandText}`}>
            Название
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className={`ml-auto ${styles.navLinks}`}>
            <Nav.Link as={Link} to="/" className={`text-white nav-link-hover ${styles.navLink}`}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Faq" className={`text-white nav-link-hover ${styles.navLink}`}>
              Документация
            </Nav.Link>
            <Nav.Link as={Link} to="/Map" className={`text-white nav-link-hover ${styles.navLink}`}>
              VirtualDev
            </Nav.Link>
            <Nav.Link as={Link} to="/Authorization" className={`text-white nav-link-hover ${styles.navLink}`}>
              Регистрация
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;

*/


/*
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
//import Faq from '../FAQ/Faq';
//import Home from '../Home/Home';
import logo from './logo192.png';
import 'typeface-montserrat';

export default class Menu extends Component {
  handleMouseOver = (event) => {
    event.target.classList.add('hover-gray');
  }

  handleMouseOut = (event) => {
    event.target.classList.remove('hover-gray');
  }

  render() {
    return (
      <>
        <nav fixed="top" className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(135deg, #aebcbf 0%,#000000 0%,#000000 38%,#6b7475 38%,#6b7475 41%,#6b7475 42%,#6b7475 42%,#000000 42%,#000000 46%,#6b7475 46%,#6b7475 54%,#6b7475 54%,#6b7475 58%,#6b7475 58%,#6b7475 74%,#6b7475 74%,#6b7475 88%,#0a0e0a 88%,#0a0809 100%)' }}>
          <Navbar collapseOnSelect expand="md">
            <Container>
              <Navbar.Brand href="/" className="text-white d-flex align-items-center" style={{ marginLeft: '10%' }}>
                <img
                  src={logo}
                  height="50"
                  width="50"
                  className="d-inline-block align-top"
                  alt="Logo"
                /> 
                <h2 className="m-0 ml-2" style={{ paddingLeft: '30px' }}>
                  Название
                </h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ marginLeft: '85%' }}>
                  <Nav.Link href="/" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/Faq" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Документация
                  </Nav.Link>
                  <Nav.Link href="/VirtualDev" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    VirtualDev
                  </Nav.Link>
                  <Nav.Link href="/Autorization" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Регистрация
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </>
    );
  }
}*/

//import styles from './Menu.module.scss';

// Menu.js
/*
import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';
import logo from './logo192.png';
import './Menu.module.scss'; // Импортируйте стили

const Menu = () => {
  return (
    <Navbar collapseOnSelect expand="md" className="custom-navbar">
      <Container>
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            height="50"
            width="50"
            className="d-inline-block align-top"
            alt="Logo"
          /> 
          <h2>
            Название
          </h2>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/Faq">
              Документация
            </Nav.Link>
            <Nav.Link as={Link} to="/Map">
              VirtualDev
            </Nav.Link>
            <Nav.Link as={Link} to="/Authorization">
              Регистрация
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Menu;
*/

/*
import './Menu.module.scss';
import React, { Component } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import logo from './logo192.png';
import 'typeface-montserrat';

export default class Menu extends Component {
  handleMouseOver = (event) => {
    event.target.classList.add('hover-gray');
  }

  handleMouseOut = (event) => {
    event.target.classList.remove('hover-gray');
  }

  render() {
    return (
      <>
        <nav fixed="top" className="navbar navbar-expand-lg navbar-light" style={{ background: 'linear-gradient(135deg, #aebcbf 0%,#000000 0%,#000000 38%,#6b7475 38%,#6b7475 41%,#6b7475 42%,#6b7475 42%,#000000 42%,#000000 46%,#6b7475 46%,#6b7475 54%,#6b7475 54%,#6b7475 58%,#6b7475 58%,#6b7475 74%,#6b7475 74%,#6b7475 88%,#0a0e0a 88%,#0a0809 100%)' }}>
          <Navbar collapseOnSelect expand="md">
            <Container>
              <Navbar.Brand href="/" className="text-white d-flex align-items-center" style={{ marginLeft: '10%' }}>
                <img
                  src={logo}
                  height="50"
                  width="50"
                  className="d-inline-block align-top"
                  alt="Logo"
                /> 
                <h2 className="m-0 ml-2" style={{ paddingLeft: '30px' }}>
                  Название
                </h2>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="responsive-navbar-nav" />
              <Navbar.Collapse id="responsive-navbar-nav">
                <Nav style={{ marginLeft: '85%' }}>
                  <Nav.Link href="/" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Home
                  </Nav.Link>
                  <Nav.Link href="/Faq" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Документация
                  </Nav.Link>
                  <Nav.Link href="/VirtualDev" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    VirtualDev
                  </Nav.Link>
                  <Nav.Link href="/Autorization" className="text-white nav-link-hover" style={{ fontSize: '1.2em' }} onMouseOver={this.handleMouseOver} onMouseOut={this.handleMouseOut}>
                    Регистрация
                  </Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </nav>
      </>
    );
  }
}*/

import React from 'react';
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
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light" style={styles.customNavbar}>
        <Container style={styles.container}>
          <Navbar.Brand href="/" className="text-white d-flex align-items-center" style={styles.brand}>
            <img src={logo} height="50" width="50" className="d-inline-block align-top" alt="Logo" style={styles.brandImg} />
            <h2 className="m-0 ml-2" style={styles.brandText}>
              <NavLink to="/" style={styles.brandLink}>
                Русский нарко картель
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
            <NavLink to="/virtualdev" className="nav-link" activeClassName="active" style={styles.navLink}>
              VirtualDev
            </NavLink>
            <NavLink to="/authorization" className="nav-link" activeClassName="active" style={styles.navLink}>
              Регистрация
            </NavLink>
          </Nav>
        </Container>
      </nav>
    </>
  );
};

export default Menu;
