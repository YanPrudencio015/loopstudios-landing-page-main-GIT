import React from "react";

import MobileImage1 from '../../Images/images/mobile/image-deep-earth.jpg'
import MobileImage2 from '../../Images/images/mobile/image-night-arcade.jpg'
import MobileImage3 from "../../Images/images/mobile/image-soccer-team.jpg"
import MobileImage4 from "../../Images/images/mobile/image-grid.jpg"
import MobileImage5 from "../../Images/images/mobile/image-from-above.jpg"
import MobileImage6 from "../../Images/images/mobile/image-pocket-borealis.jpg"
import MobileImage7 from "../../Images/images/mobile/image-curiosity.jpg"
import MobileImage8 from "../../Images/images/mobile/image-fisheye.jpg"

import DesktopImage1 from "../../Images/images/desktop/image-deep-earth.jpg"
import DesktopImage2 from "../../Images/images/desktop/image-night-arcade.jpg"
import DesktopImage3 from "../../Images/images/desktop/image-soccer-team.jpg"
import DesktopImage4 from "../../Images/images/desktop/image-grid.jpg"
import DesktopImage5 from "../../Images/images/desktop/image-from-above.jpg"
import DesktopImage6 from "../../Images/images/desktop/image-pocket-borealis.jpg"
import DesktopImage7 from "../../Images/images/desktop/image-curiosity.jpg"
import DesktopImage8 from "../../Images/images/desktop/image-fisheye.jpg"


const creationsArray = [
    { 
        MobileImage:MobileImage1, 
        DesktopImage:DesktopImage1,
        title:"Deep earth",
    },

    { 
        MobileImage:MobileImage2, 
        DesktopImage:DesktopImage2,
        title:"Night arcade",
    },

    { 
        MobileImage:MobileImage3, 
        DesktopImage:DesktopImage3,
        title:"Soccer team VR",
    },

    { 
        MobileImage:MobileImage4, 
        DesktopImage:DesktopImage4,
        title:"The grid",
    },

    { 
        MobileImage:MobileImage5, 
        DesktopImage:DesktopImage5,
        title:"From up above VR",
    },

    { 
        MobileImage:MobileImage6, 
        DesktopImage:DesktopImage6,
        title:"Pocket borealis",
    },
    
    { 
        MobileImage:MobileImage7, 
    DesktopImage:DesktopImage7,
    title:"The curiosity",
},
    { 
        MobileImage:MobileImage8, 
    DesktopImage:DesktopImage8,
    title:"Make it fisheye",
},





]







export default function Creations(props) {
    return (
        <section className='container OurCreations'>
            <div className='titleColumn'>
                <h1 className='title'>Our creations</h1>
                <button className='createButton'>See all</button>
            </div>
            <div className='sectionCard'>
                {creationsArray.map((card, index) => (
                    <div key={index} className='card'>
                        <img className='cardImage' 
                            src={props.window <= 1440 && props.window >= 501? card.DesktopImage: card.MobileImage } 
                            alt={`Creation ${index + 1}`} />
                        <div className='cardTitle'>{card.title}</div>
                    </div>
                ))}
            </div>
        </section>
    );
}
