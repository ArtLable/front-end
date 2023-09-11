import { React, useState } from 'react';
import {Navbar, Nav, Container, NavDropdown} from 'react-bootstrap'
import '../bootstrap.css';
import { Link } from 'react-router-dom';


function Header(props) {

  const [show, setShow] = useState(false);
  const showDropdown = (e)=>{
      setShow(!show);
  }
  const hideDropdown = e => {
      setShow(false);
  }
  
  return(
    <header>
      <Navbar bg="light" expand="lg">
        <Container className="headerBar">
          <Navbar.Brand><Link to="/" className="nav-link">TOONMAKER</Link></Navbar.Brand>
            <Nav className="ml-auto">
            <NavDropdown title="CREATE A NEW DRAWING" id="basic-nav-dropdown">
              <NavDropdown.Item><Link to="" className="dropMenu">Compose the composition</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item><Link to="" className="dropMenu">Web Novel illustrations</Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/" className="nav-link">HOME</Link>
              <Link to="/Login" className="nav-link">LOGIN</Link>
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