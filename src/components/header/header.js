import { Link, NavLink } from 'react-router-dom';
import './header.css';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';

function Header() {

const [menuExpanded, setMenuExpanded] = useState(false);


function toggleMenu() {
    setMenuExpanded(!menuExpanded)
}


    return (
        <header>
            
            <nav>
                <Link to='/' className='logo' id='header-logo'>Theory 23</Link>
                <div id='menu-wrapper' style={{height: menuExpanded ? '80vh' : 0, width: menuExpanded ? '50vw' : 0}} onMouseEnter={toggleMenu} onMouseLeave={toggleMenu}>
                <button id='open-menu-btn' className={menuExpanded ? 'white-border' : ''}>
                    ME<br></br>NU
                </button>
                {
                    menuExpanded ? <div id='menu-content-wrapper'>
                        <ul id='menu-list'>
                            <li><NavLink to='/'>Home</NavLink></li>
                            <li><NavLink to='/our-work'>Our Work</NavLink></li>
                            <li><NavLink to='/services'>Services</NavLink></li>
                            <li><NavLink to='/tacos'>Home</NavLink></li>
                            <li><NavLink to='/contact'>Contact</NavLink></li>
                        </ul>
                        <ul id='menu-social-list'>
                            <li>
                                <a href='http://www.apple.com'>FB</a>
                            </li>
                            <li>
                                <a href='http://www.apple.com'>TW</a>
                            </li>
                            <li>
                                <a href='http://www.apple.com'>IG</a>
                            </li>
                            <li>
                                <a href='http://www.apple.com'>LI</a>
                            </li>
                        </ul>
                    </div> : <></>
                }
                </div>
            </nav>
        </header>
    )
}

export default Header;