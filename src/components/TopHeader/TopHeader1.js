import React, { Component,Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { IoIosSearch } from "react-icons/io";

import { FaArrowRight } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

import headLeft from '../../resources/images/headerLeftimg.svg'
import vectorHead from '../../resources/images/VectorHead.png'

import Card from 'react-bootstrap/Card';
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
export default class TopHeader1 extends Component {
  render() {
   
    return (
      <Fragment>

        <Container className='containerHeader'>
          <Container className='HeaderInner'>
         <Row>
            <Col lg={6} sm={12} className='headerLeftInner'>
               <div className='headImgLeft'>
                <img src={headLeft} alt="" />

               </div>
                
            </Col >

            <Col lg={6} sm={12} className='headerRightInner'>

                <div className='headerRightImg'> 
                <p className='headerTextTop'>Ensuring maximum security</p>
                  <h2 className='HeaderTitle'>
                  Protect all your data with strong security access
                  </h2>
                <p className='headerTextBot'>This is software that protects all your data,
                    including strong security access. Use data as 
                    needed and provide security.</p>
                <Button type="submit" className='btnHead d-flex mt-5'><p className='ms-2 mt-3'><IoIosSearch /></p> 
                <p className='ms-2 mt-3'> Scan Your Website - Free</p></Button>

              
                </div>
             

            </Col>

        </Row>
       
        </Container>
        

        </Container>

      </Fragment>
      
    )
  }
}
