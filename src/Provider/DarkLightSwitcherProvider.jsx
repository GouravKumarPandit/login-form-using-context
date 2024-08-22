import React, { useState } from 'react'
import DarkLightSwitcherContext from '../Context/DarkLightSwitcherContext'

const DarkLightSwitcherProvider = ({children}) => {
    const [userInfo, setUserInfo] = useState(null);    

    return (
        <DarkLightSwitcherContext.Provider value={{userInfo, setUserInfo}}>
            {children}
        </DarkLightSwitcherContext.Provider>
    )
}

export default DarkLightSwitcherProvider