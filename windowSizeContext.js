

import React, { createContext, useEffect, useState } from "react"

export const windowSizeContext = createContext();






export  function WindowSizeProvider(props){
    const [ windowSizeValue, setWindowSizeValue] = useState(window.innerWidth);

    useEffect(()=>{
        const handleSize = () =>{
            setWindowSizeValue(window.innerWidth)
        }

        window.addEventListener("resize", handleSize);
        return () =>{
        window.removeEventListener("resize", handleSize);        
        }

    },[])




    return(
        <windowSizeContext.Provider value={[ windowSizeValue, setWindowSizeValue]}>
            {props.children}
        </windowSizeContext.Provider>
    )
}
