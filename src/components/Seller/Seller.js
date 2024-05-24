import React, { Component, Fragment } from 'react'
import YouTube from 'react-youtube';
// import CountUp from 'react-countup'
import CountUp from 'react-countup'
import VisibilitySensor from 'react-visibility-sensor'
export default class Seller extends Component {
  render() {
    const opts = {
      height: '400',
      width: '300',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };

    return (
      
      <Fragment>
        <div className="sellerContainer">
            <h2>From Seller</h2>
            <div className='youtubeVideo'>
            <YouTube videoId="2g811Eo7K8U" opts={opts} onReady={this._onReady} />;
            </div>
            <div className="count">
            <h1 className='countNumber'> <CountUp start={0} end={100}>
                            {({ countUpRef, start }) => (
                                <div>
                                    <VisibilitySensor onChange={start}>
                                    <span ref={countUpRef} />


                                    </VisibilitySensor>
                                </div>
                            )}
                            </CountUp> 
            </h1>
            </div>

        </div>
      </Fragment>
    )
  }
}
