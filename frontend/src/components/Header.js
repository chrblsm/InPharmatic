import React from 'react';
import {Container,Row} from 'react-bootstrap';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Header() {
  return (
    <header>
      <Navbar bg="primary" variant='dark' expand="lg" collapseOnSelect>
        <Container>
          <Navbar.Brand href="/">InPharmaric</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              
              <NavDropdown title="Categories" id="basic-nav-dropdown">
                <NavDropdown.Item href="New">New In</NavDropdown.Item>
                <NavDropdown.Item href="All">All Products</NavDropdown.Item>
                <NavDropdown.Item href="Sale">Sale</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="/login"><i className='fas fa-user'></i> Log in</Nav.Link>
              <Nav.Link href="/cart"><i className="fa-sharp fa-solid fa-cart-plus"></i> Cart</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
}

export default Header;