import React, { Component, Fragment } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import '../../resources/css/bootstrap.min.css';
import logo2 from '../../resources/images/Logo2.png'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";


export default class Footer extends Component {
  render() {
    return (
      <Fragment>
        
        <div className='footerContainer'>
           <div className="footerInner d-flex">
            <Row className='footerItems'>
              {/* <Col md={3} className='footerL1'>
                <p className="foottitle">Company</p>

                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>
              </Col> */}
              <Col md={3} className='footerL2'>
                <p className="foottitle">Company</p>
                
                <p>About</p>
                <p>Features</p>
                <p>Works</p>
                <p>Career</p>                   
                
              </Col>
              <Col md={3} className='footerL2'>
                <p className="foottitle">Help</p>
                
                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>                    
                
              </Col>

              <Col md={3} className='footerL3'>
                <p className="foottitle">Resources</p>

                <p>Free eBooks</p>
                <p>Development Tutorial</p>
                <p>How to - Blog</p>
                <p>Youtube Playlist</p>
              </Col>
              <Col md={3} className='footerL4'>
                <p className="foottitle">Extra Links</p>

                <p>Customer Support</p>
                <p>Delivery Details</p>
                <p>Terms & Conditions</p>
                <p>Privacy Policy</p>
              </Col>

            
            </Row>
          
           </div>
           <div className="footerBottom mt-5">
              <div className="footerIcon">
                <img src={logo2} alt="" />
              </div>
              <div className="copyRight">
                <p>© Copyright 2021, All Rights Reserved by Postcraft</p>
              </div>
            <div className="footerIcon d-flex">
             
            <FaTwitter  className='ms-3 me-3' />
             
            
            <FaFacebookF className='ms-3 me-3'/>
            
            <FaInstagram className='ms-3 me-3'/>
            <FaGithub className='ms-3 me-3'/>
              </div>
            </div>
        </div>
      </Fragment>
    )
  }
}
