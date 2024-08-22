import React, { useContext } from 'react'
import LoginForm from "./LoginForm"
import UserDetail from "./UserDetail"
import DarkLightSwitcherContext from '../Context/DarkLightSwitcherContext'

function HomeComponent() {
    const {userInfo} = useContext(DarkLightSwitcherContext);
    return (
        <>
            {userInfo ?  <UserDetail /> : <LoginForm />} 
        </>
    )
}

export default HomeComponent