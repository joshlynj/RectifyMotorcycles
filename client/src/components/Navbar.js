import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';
import './navbar.css';
import { Button } from './button';
import Services from '../pages/Services.js';
import Login from '../pages/Login.js';
import Register from '../pages/Register.js';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () =>setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false)
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);
    window.addEventListener('resize', showButton);

    return (
<>
    <nav className="navbar">
        <div className = "navbar-container">
            <Link to="/" className="navbar-logo" onClick = {closeMobileMenu}>
                Rectify Motorworks
            </Link>
            <div className='menu-icon' onClick={handleClick}>
                <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
            </div>
            <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                <li className='nav-item'>
                    <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                        About Me
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/my-builds' className='nav-links' onClick={closeMobileMenu}>
                        My Builds
                    </Link>
                </li>
                <li className='nav-item'>
                    <Link to='/Services' className='nav-links' onClick={<Services />}>
                        Services
                    </Link>
                </li>

                <li>
                    <Link to='/login'
                    className='nav-links-mobile'
                    onClick={<Login /> }>
                       Log In / Sign Up
                    </Link>
            </li>
          </ul>
            {button && <Button buttonStyle='btn--outline'>Log In/Sign Up</Button>}
        </div>
    </nav>
</>
    );
}

export default Navbar;
