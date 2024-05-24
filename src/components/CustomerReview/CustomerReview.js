import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";
import slack from '../../resources/images/slack-1.png'
import trivago from '../../resources/images/trivago.png'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
export default class CustomerReview extends Component {
  render() {
    return (
      <Fragment>
        <div className='customerRevContainer'>
            <div className='customerRevInner'>
              <div className="revTitle text-white text-center d-flex mb-5">
                <h2 className='countNumber'> Trusted by  <h2 className='d-flex'>             
                <CountUp start={0} end={1200}> 
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp> + world class business  
                  </h2>  </h2>
                {/* <h2 className='countNumber'> Trusted by              
                <CountUp start={0} end={1200}> 
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp>  
                  </h2>*/}
                </div>  
            <Row>
                <Col md={6}>
                    <div className="revLeft text-center">
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <p className='mt-3 mb-5'>“I just wanted to share a quick note and 
                    let you know that you guys do a really good job.
                    I'm glad I decided to work with you. It's really
                    great how easy your websites are to update and manage."</p>
                    <img src={slack} alt="" />

                    </div>
                </Col>
                <Col md={6}>
                    <div className="revRight text-center ms-5">
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <FaStar className='star'/>
                    <p className='mt-3 mb-5 '>
                    “I just wanted to share a quick note and let you 
                    know that you guys do a really good job. I'm glad I
                     decided to work with you. It's really great how easy 
                     your websites are to update and manage."
                    </p>
                    <img src={trivago} alt="" />


                    </div>
                </Col>
            </Row>

            </div>

        </div>
      </Fragment>
    )
  }
}
