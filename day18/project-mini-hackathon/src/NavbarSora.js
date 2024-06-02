import React from 'react';
import './homeSora.css';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavbarSora() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary" id='navbar'>
      <Container fluid className='navbar'>
        <Navbar.Brand href="#home"><img src='./assets/logo.jpg' alt='logo'/></Navbar.Brand> 
        <Navbar.Toggle aria-controls="navbar-menu" />
          <Navbar.Collapse id="navbar-menu">
            <Nav className="ml-auto" id="navbar-menu">
              <Nav.Item>
                <Nav.Link href="/">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>   
                <Nav.Link href="/ProductsRazmanR">Product</Nav.Link>
              </Nav.Item>  
                <Nav.Link href="/services_william">Services</Nav.Link>
                <Nav.Link href="/contactAlex">Contact Us</Nav.Link>
            </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    
  )
}

export default NavbarSora