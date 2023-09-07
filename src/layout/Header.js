import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../bootstrap.css';
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
                    <button type="submit" class="btn btn-outline-success">Search</button>
                </form>
            </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;