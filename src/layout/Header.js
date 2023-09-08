import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../bootstrap.css';
import './Resources/assets/css/main.css';
import './Resources/assets/css/fontawesome-all.min.css';
import './Resources/assets/css/noscript.css';
import {Navbar, Nav, Container} from 'react-bootstrap'

const Header = () => {
  return(
    <header>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>TOONMAKER</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
            <Nav className="ml-auto">
              <Nav.Link>NEW MAKE</Nav.Link>
              <Nav.Link>LOGIN</Nav.Link>
                <form class="d-flex">
                    <input class="form-control me-sm-2" type="search" placeholder="Search"/>
                    <button type="submit" class="btn btn-outline-info">Search</button>
                </form>
            </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;