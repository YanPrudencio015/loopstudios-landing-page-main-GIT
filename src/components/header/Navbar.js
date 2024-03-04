import React, { useContext } from "react";
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {MobileMenuContext} from '../../MobileMenuContext'


function Navbar(props){

    const [menuOpen, setMenuOpen] = useContext(MobileMenuContext)

    return( <nav className='navbar'>
    <h1 className='headertitle'>LoopStudious</h1>
    <ul className='userOptions'>
        <li><a>About</a></li>
        <li><a>Careers</a></li>
        <li><a>Events</a></li>
        <li><a>Products</a></li>
        <li><a>Support</a></li>
        <FontAwesomeIcon icon={faBars} className="menuMobileIcon" onClick={() => setMenuOpen(true)} />

    </ul>
</nav>)
}


export default Navbar;