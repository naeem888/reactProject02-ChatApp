import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Card from 'react-bootstrap/Card';
import callImg from '../../resources/images/calling.png';
import callImg2 from '../../resources/images/calling2.png';
import msgJulia from '../../resources/images/msgJulia.png';
import dots from '../../resources/images/dots.png';
import f2 from '../../resources/images/f11.gif';
import Form from 'react-bootstrap/Form';

export default class Features2 extends Component {
  render() {
    return (
      <Fragment>
        <div className="feature2Container">
            <div className="feature2InnerContainer">
                <Row>
                    <Col>
                    <div className="feat2left">
                     <h2>We take care of your website</h2>
                     <p>We secure websites by automatically finding and fixing threats. Website security software 
                        protects your data website from malicious cyber threats. </p>
                    </div>
                    </Col>

                    <Col className="feat2right mt-5">
                        <img src={f2} alt="" />

                    </Col>
                </Row>

            </div>

        </div>
      </Fragment>
    )
  }
}
