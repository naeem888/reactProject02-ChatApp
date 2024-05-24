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
    <Container  className='containerWidth'>
        <Nav expand="lg" className='NavBar'>

           <Navbar bg="" data-bs-theme="light" className='NavPadding'>
            <Container >
            <Navbar.Brand href="#home"><img src={logo} alt="" /></Navbar.Brand>
            <Nav className='menuPadding'>
                <Nav.Link className='me-3' href="#demos">Demos</Nav.Link>
                <Nav.Link className='me-3' href="#about">About</Nav.Link>
                <Nav.Link className='me-3' href="#blog">Blog</Nav.Link>
                <Nav.Link className='me-3' href="#pages">Pages</Nav.Link>
                <Nav.Link className='me-0' href="#contact">Contact</Nav.Link>


            </Nav>
            <Container className='navLogin mt-3'>
                    <Nav>
                    <p className='text-center mt-3 me-3 ms-5'>Login</p>
                    <Button type="submit" className='btnLogin'>Get Started Free</Button>
                    </Nav>
                </Container>

            </Container>

        </Navbar>
        </Nav>
        </Container>

    </Fragment>
    )
  }
}
