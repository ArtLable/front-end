import { React, useState } from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import '../bootstrap.css';
import { Link } from 'react-router-dom';
import Login from '../pages/Login';
import Regist from '../pages/Regist';


function Header() {

  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isRegistOpen, setIsRegistOpen] = useState(false);

  const openLoginModal = () => setIsLoginOpen(true);
  const closeLoginModal = () => setIsLoginOpen(false);

  const openRegistModal = () => setIsRegistOpen(true);
  const closeRegistModal = () => setIsRegistOpen(false);
  
  return(
    <header>
      <Navbar bg="light" expand="lg">
        <Container className="headerBar">
          <Navbar.Brand><Link to="/" className="nav-link">TOONMAKER</Link></Navbar.Brand>
            <Nav className="ml-auto">
              <button onClick={openLoginModal} className="header-button">LOGIN</button>
              {isLoginOpen && (<Login isOpen={isLoginOpen} closeModal={closeLoginModal}/>)}
              <button onClick={openRegistModal} className="header-button">SIGN UP</button>
              {isRegistOpen && (<Regist isOpen={isRegistOpen} closeModal={closeRegistModal}/>)}
                <form className="d-flex">
                    <input class="form-control me-sm-2 search" type="search" placeholder="Search"/>
                    <button type="submit" className="">Search</button>
                </form>
            </Nav>
        </Container>
      </Navbar>
    </header>
  )
}

export default Header;