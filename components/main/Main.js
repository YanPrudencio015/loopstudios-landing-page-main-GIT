import React, { useContext } from 'react'
import "./main.css"
import Apresentation from './Apresentation'
import Creations from './Creations'

import {windowSizeContext} from '../../windowSizeContext'






function Main (props){

    const [windowSize, setWindowSize] = useContext(windowSizeContext)
    return(
        <div className='main'>
            <Apresentation windowSize={windowSize}/>
            <Creations window={windowSize}/>            
        </div>
    )
}



export default Main;