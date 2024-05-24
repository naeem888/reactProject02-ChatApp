import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import g1i1 from '../../resources/images/g1i1.png'
import g1i2 from '../../resources/images/g1i2.png'


export default class GetStarted extends Component {
  render() {
    return (
      <Fragment>
        <div className="getStartedContainer">
            <div className="getStartedInner">
             
                <Row>
                    <Col lg={6}>
                    <div className="getStartedLeft"> 
                    <h4>Ready to get started?</h4>
                    <p className='mt-3'>Create custom landing pages with Rareblocks that converts
                    more visitors than any website. With lots of unique blocks, 
                    you can easily build a page.</p>
                    <Button className='mt-3'>Try 14 Days Free</Button>

                    </div>
                    </Col>
                    <Col lg={6}>
                        <Row className='getStartedRight'>
                            
                            <Col lg={6} className='getSr1 p-3'>
                                <img src={g1i1} alt="" />
                                <p className='getSr1p1 mt-3'>Store data on cloud</p>
                                <p className='getSr1p2'>Create beautiful landing pages with Rareblocks that converts.</p>
                            </Col>
                            <Col lg={6} className='getSr1 ms-3 p-3'>
                                <img src={g1i2} alt="" />
                                <p className='getSr1p1 mt-3'>Connect dots smartly</p>
                                <p className='getSr1p2'>Create beautiful landing pages with Rareblocks that converts.</p>
                            
                            </Col>
                            
                            
                        </Row>
                    </Col>

                </Row>

            </div>
        </div>

      </Fragment>
    )
  }
}
