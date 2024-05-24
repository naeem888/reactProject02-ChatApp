import React, { Component } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import f1i1 from '../../resources/images/f1i1.png'
import f1i2 from '../../resources/images/f1i2.png'
import f1i3 from '../../resources/images/f1i3.png'

export default class Feature1 extends Component {
  render() {
    return (
        <div className='feature1Container'>
            
                <div className='feature1ContInner'>
                           
                 <Row>
                    <Col lg={4} sm={12} className='card1f1'>
                        <img src={f1i1} alt="" />
                        <h4 className='mt-5'>Solve Problems Real Time</h4>
                        <p className='mt-3'>Real-time problem solving is not just about time,
                        it's about time. This allows you to solve problems within
                        a specified time problem has a solution.</p>
                    </Col>
        
                  
                    
                   

                    <Col lg={4} sm={12} className='card1f1 ms-5'>
                        <img src={f1i2} alt="" />
                        <h4 className='mt-5'>Secured & Safe Payments</h4>
                        <p className='mt-3'>By and large, credit cards are easily 
                           the most secure and safe payment method
                           to use when you shop online. credit cards most secure.</p>
                    </Col>
                   
                    
                    

                    <Col lg={4} sm={12} className='card1f1 ms-5'>
                        <img src={f1i3} alt="" />
                        <h4 className='mt-5'>24//7 Customer Support</h4>
                        <p className='mt-3'>The biggest benefit of offering 24/7 support
                            is that you provide a more convenient service
                            for your customers providing clock support.</p>
                    </Col>
            
                </Row>
            
                </div>

        </div>

    )
  }
}
