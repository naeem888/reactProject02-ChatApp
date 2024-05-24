import React, { Component, Fragment } from 'react'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FaArrowRight } from "react-icons/fa6";

export default class TopHeader extends Component {
  render() {

    return (
      <Fragment>
        <Container  className='containerHeader'>
        <Row className='rowPadding'>
            <Col md={6} sm={6}>
                <h2>from here</h2>
            </Col>

            <Col md={6} sm={6}>
                <h1>from h1</h1>
            </Col>

        </Row>
       
            
     
        </Container>
      </Fragment>
    )
  }
}
