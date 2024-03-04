import React, { useContext } from "react";

import { faXmark } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import {MobileMenuContext} from '../../MobileMenuContext'


function MobileMenu(props){


    const[closeMenu, setCloseMenu] = useContext(MobileMenuContext)
    return(
        <section className={closeMenu ? "mobileMenu" : "mobileMenuClose"}>

            <div className="menuMobileHeader">
                <h4>Loopstudios</h4>
                <FontAwesomeIcon className="closeMobileMenuIcon" onClick={() => setCloseMenu(false)} icon={faXmark} />

            </div>
            <div className="mobileMenuNavbar">
                <a>About</a>
                <a>Careers</a>
                <a>Events</a>
                <a>Products</a>
                <a>Support</a>

            </div>
        </section>
    )
}



export default MobileMenu;