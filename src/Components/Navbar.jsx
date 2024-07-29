import React, {useState} from 'react'
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <h1 role="heading"></h1>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to="/">Services</Link>
            </li>
            <li>
                <Link to="/">Bridal</Link>
            </li>
            <li>
                <Link to="/">Shop Products</Link>
            </li>
            <li>
                <Link to="/">Offers</Link>
            </li>
            <li>
                <Link to="/insertcustomer">Book Appointment</Link>
            </li>
      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
            
      </div>

    </div>
  )
}

export default Navbar
