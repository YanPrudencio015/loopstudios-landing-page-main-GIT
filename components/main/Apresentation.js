import React from "react";


import image1Desk from '../../Images/images/desktop/image-interactive.jpg'
import image1Mobile from '../../Images/images/mobile/image-interactive.jpg'

export default function Apresentation(props){
    return(
        <section className='container Apresentation'>
                <div className='imageSquad'>
                    <img className='apresentationImage' 
                    src={props.windowSize >= 1440 && props.windowSize <= 501? image1Desk: image1Mobile } />
                </div>
                    <div className='ApresentationDesc'>
                        <h1>
                            The leader in interactive VR
                        </h1>
                        <h3>
                            Founded in 2011, Loopstudios has been producing world-class virtual reality 
                            projects for some of the best companies around the globe. Our award-winning 
                            creations have transformed businesses through digital experiences that bind 
                            to their brand.
                        </h3>
                    </div>
            </section>
    )
}