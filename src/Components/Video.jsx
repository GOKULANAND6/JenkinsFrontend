import React from 'react';
import './VideoStyle.css';
import { Link } from 'react-router-dom';

import spaceVideo from './saloon.mp4'

function Video() {
  return (
    <div className='hero'>

        <video autoPlay loop muted id="video">
            <source src={spaceVideo} type='video/mp4' />
        </video>

        <div className='content'>
            <h1 role="heading">Be a part of India's Fastest Growing Saloon Chain</h1>
            <p>10,00,000+ Successful Customers</p>
        <div>
            <Link to="/login" className='btn'>LOGIN</Link>
            <Link to="/signup" className='btn btn-light'>SIGN UP</Link>
        </div>
        </div>
    </div>
  )
}

export default Video
