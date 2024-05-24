import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
export default class Pricing extends Component {
  render() {
    return (
      <Fragment>
          <div className='pricingContainer'>
            <div className='pricingInner'>
            <div className="priceTitle text-center text-white">
                <h2 >Affordable plans for our customers</h2>
                <p>Try free for 30 Days</p>
                </div> 
                <div className='priceCard'>
                <Row>
                    <Col md={4} className='priceCardLeft text-center mt-4 ms-3'>
                        <p>1 Week</p>
                        {/* <h2>$4</h2> */}
                        <h2 className='countNumber d-flex ms-5'>$ <CountUp start={0} end={4}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp> 
                  </h2>
                        <p> <p className='font-bold mb-0'>Less than $1 a day</p> Billed every week Cancel anytime</p>
                    </Col>
                    <Col md={4} className='priceCardLeft text-center mt-4 ms-3'>
                        <p>1 Month</p>
                        
                        <h2 className='countNumber d-flex ms-5'>$ <CountUp start={0} end={19}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp> 
                  </h2>
                        <p> <p className='font-bold mb-0'>Less than $5 a week</p> Blled every month Cancel anytime</p>
                    </Col>
                    <Col md={4} className='priceCardLeft text-center mt-4 ms-3'>
                        <p>1 Year</p>
                        {/* <h2>$99</h2> */}
                        <h2 className='countNumber d-flex ms-5'>$ <CountUp start={0} end={99}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp> 
                            </h2>
                        <p> <p className='font-bold mb-0'>Less than $2 a week</p> Billed every year Cancel anytime</p>
                    </Col>
                   
                </Row>
                <div className="priceBtn mt-2">
                <Button >Get started now</Button>
                </div>
                

                </div>
            </div>
            </div>

      </Fragment>
    )
  }
}
