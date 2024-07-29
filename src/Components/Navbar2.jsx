import React, {useState} from 'react'
import './NavbarStyles.css';
import { Link } from 'react-router-dom';
import {FaBars, FaTimes} from 'react-icons/fa';

function Navbar2() {

    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click)

  return (
    <div className='header'>
      <h1></h1>
      <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li>
                <Link to="/insertbooking">Insert Service</Link>
            </li>
            <li>
                <Link to="/updatebooking">Update Service</Link>
            </li>
            <li>
                <Link to="/viewbooking">View Service</Link>
            </li>

      </ul>
      <div className='hamburger' onClick={handleClick}>
        {click ? (<FaTimes size={20} style={{color: "#fff"}} />) : (<FaBars size={20} style={{color: "#fff"}} />)}
            
      </div>

    </div>
  )
}

export default Navbar2
