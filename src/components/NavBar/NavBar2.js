import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../resources/images/Logo.png'
import Button from 'react-bootstrap/Button';

export default class NavBar2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="navBar2Container">
            <div className="navBar2ContainerInner bg-light">
      <Navbar expand="lg" className="bg-body-tertiary bg-light">
      
      <Container>
        <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="navMenu">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <Nav.Link href="#demos">Demos</Nav.Link>
            <Nav.Link href="#about">About</Nav.Link>
            <Nav.Link href="#blog">Blog</Nav.Link>
            <Nav.Link href="#pages">Pages</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
            <Nav className='mt-0'>

            </Nav>
            <Nav className='mt-0 btnLogin1'>
            <Nav.Link href="#login">Login<Button className='ms-0' type="submit">Get Started Free</Button></Nav.Link>
            </Nav>
           

        
            
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
