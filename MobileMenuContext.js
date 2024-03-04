import React, { createContext, useState } from "react";




export const MobileMenuContext = createContext();



export function MobileMenuProvider(props){
const [isOpen, setisOpen] = useState(false);

return(
    <MobileMenuContext.Provider value={[isOpen, setisOpen]}>
        {props.children}
    </MobileMenuContext.Provider>

)

}