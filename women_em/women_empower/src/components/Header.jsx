import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Button from 'react-bootstrap/Button';
import './Header.css';

function Header() {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">feature</Nav.Link>
            <NavDropdown title="Dashboard" id="collapsible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sakti vatsalya</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Register complaint</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              contact Us
            </Nav.Link>
          </Nav>
          <div className="button-group">
          <Button variant="outline-primary">Login/Signup</Button>{' '}
            {/* <Button variant="outline-danger">Register</Button>{' '} */}
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;