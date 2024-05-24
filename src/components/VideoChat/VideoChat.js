import React, { Component, Fragment } from 'react'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import videoChat from '../../resources/images/videoChat.png'
import YouTube from 'react-youtube';

export default class VideoChat extends Component {
  render() {
    const opts = {
      height: '346',
      width: '541',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
    return (
      <Fragment>
        <div className='videoChatContainer'>
            <div className='videoChatInner'>
                <Row>
                    <Col lg={5} className='videoChat p-0'>
                        {/* <img src={videoChat} alt="" /> */}
                        <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;

                        
                    </Col>
                    <Col lg={7} className='videoChatText'>
                        <h2>Meet your customers, with live video chat</h2>
                        <p className='videoChatText1'>Proin faucibus nibh et sagittis a. Lacinia purus ac amet pellentesque aliquam enim.</p>
                        <p className='videoChatText2'>Lorem ipsum dolor sit amet, consectetur adipis elit. Sit enim nec, proin faucibus nibh et sagittis a. Lacinia purus 
                            ac amet pellentesque aliquam enim.</p>
                    </Col>

                </Row>

            </div>

        </div>
      </Fragment>
    )
  }
}
