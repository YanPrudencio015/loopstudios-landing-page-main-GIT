import React, { useContext, useEffect, useState } from 'react'
import './header.css'

import Navbar from './Navbar'
import HeroImageDesk from '../../Images/images/desktop/image-hero.jpg' 
import HeroImageMob from '../../Images/images/mobile/image-hero.jpg'

import {windowSizeContext} from '../../windowSizeContext'

import MobileMenu from './MobileMenu'


function Header(props){


    const [windowSize, setWindowSize] = useContext(windowSizeContext)

    
    return(
        <div className='header'>
                <img  className='bgImg'src={windowSize <= 1440 && windowSize >=501 ? HeroImageDesk: HeroImageMob }/>
                    <Navbar size={windowSize}/>
                <div className='board'>
                    <p>Immersive experiences that deliver</p>
                </div> 
                <MobileMenu/>
            </div>
    )
}



export default Header;