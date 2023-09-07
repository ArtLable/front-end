import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../bootstrap.css';
import {Navbar, Nav, Container} from 'react-bootstrap'

const Footer = () => {
  return(
    <footer>
      <Container>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Nav className="ml-auto">
              <Nav.Link>로고</Nav.Link>
            </Nav>
        <div style={{textAlign:'center'}}>
          Footer
        </div>
      </Container>
    </footer>
  )
}

export default Footer;