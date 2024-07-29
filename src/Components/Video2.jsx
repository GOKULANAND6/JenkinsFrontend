import React from 'react';
import {Link} from 'react-router-dom';
import './VideoStyle.css';

import spaceVideo from './saloon2.mp4'
import ViewCustomer from './ViewCustomer';

function Video2() {
  return (
    <div className='hero'>

        <video autoPlay loop muted id="video">
            <source src={spaceVideo} type='video/mp4' />
        </video>

        <div className='content'>
            <ViewCustomer />
        </div>
    </div>
  )
}

export default Video2
