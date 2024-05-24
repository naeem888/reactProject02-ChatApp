import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import headLeft from '../../resources/images/headerLeftimg.svg'
import vectHead from '../../resources/images/VectorHead.png'
// import heroimg from '../../resources/images/heroImg.gif'
import heroimg from '../../resources/images/heroimg2.gif'

import { IoIosSearch } from "react-icons/io";



export default class Hero extends Component {
  render() {
    return (
      <Fragment>
        <div className="heroContainer">
            <div className="heroContainerInner">
            <Row>
            <Col lg={6} sm={12} className='headerLeftInner'>
               <div className='headImgLeft'>
                <img src={heroimg} alt="" />

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
            <div className="vectorH">
                <img src={vectHead} alt="" />
            </div>
        </Row>

            </div>
            
        </div>
      </Fragment>
    )
  }
}
