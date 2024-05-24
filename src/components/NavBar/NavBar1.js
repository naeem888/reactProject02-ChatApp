import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../../resources/css/bootstrap.min.css';
import '../../resources/css/style.css';
import logo from '../../resources/images/Logo.png'
import Button from 'react-bootstrap/Button';

export default class NavBar extends Component {
  render() {
    return (
    <Fragment>
      <div className='navContainer'>
        <div className="navContainerInner">
    <Navbar expand="lg"  className="">
      <Container className='NavcontainerWidth NavPadding'>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav ">
          <Nav className="nav22">
          <Nav.Link className='me-3 mt-3 navLogin1' href="#demos">Demos</Nav.Link>
          <Nav.Link className='me-3 mt-3 navLogin1' href="#about">About</Nav.Link>
          <Nav.Link className='me-3 mt-3 navLogin1' href="#blog">Blog</Nav.Link>
          <Nav.Link className='me-3 mt-3 navLogin1' href="#pages">Pages</Nav.Link>
          <Nav.Link className='me-0 mt-3 navLogin1' href="#contact">Contact</Nav.Link>
          {/* <Nav.Link className='me-3 navLogin mt-3' href="#login">Login</Nav.Link> */}
          {/* <p className='me-3 navLogin mt-3 d-flex '>Login</p> */}
          <Nav.Link className='me-5 navLogin mt-3 d-flex ' href="#login">Login</Nav.Link>

          <Button type="submit" >Get Started Free</Button>
            

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
    </div>
    </Fragment>
    )
  }
}
