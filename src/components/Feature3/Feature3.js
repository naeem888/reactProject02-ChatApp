import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f3i1 from '../../resources/images/f3i1.png'

import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
export default class Feature3 extends Component {
  render() {
    return (
      <Fragment>
        <div className="feature3Container">
            
            <div className="feature3InnerContainer">
                <Row>
                    <Col md={9} className='f2left'>
                        
                        <img src={f3i1} alt="" />
                        
                            
                    </Col>

                    <Col md={3} className='f2right'>
                    <h2>Data exchange is the most secure</h2>
                    <p>Data security refers to the process of protecting 
                        all data from unauthorized access and data corruption
                        throughout its lifecycle.</p>
                    </Col>
                </Row>
            
            </div>

        </div>
      </Fragment>
    )
  }
}
