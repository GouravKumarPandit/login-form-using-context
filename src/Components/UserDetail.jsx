import React, { useCallback, useContext, useEffect, useState } from 'react'
import DarkLightSwitcherContext from '../Context/DarkLightSwitcherContext'

function UserDetail() {
    const {userInfo, setUserInfo} = useContext(DarkLightSwitcherContext);
    const [userData, setUserData] = useState("");    
    
    const getUserData = useCallback(async () => {
        const response = await fetch("https://api.github.com/users/" + userInfo.userName).then(result => result.json());
        setUserData(response);
    }, [userInfo])

    useEffect(() => {
        getUserData();
    }, [userInfo])

    const loggedOut = () => {
        setUserInfo("");
    }
    
    return (
        <div>
            <p className='py-3 bg-pink-300 mb-5 text-center text-xl font-semibold'>Hello {userInfo.userName} !!</p>
            <p className="text-3xl sm:text-4xl text-gray-800 font-extrabold tracking-tight text-center">My Name: {userData.name} ❤</p>
            <img className='my-3 mx-auto' src={userData.avatar_url} alt="Git picture" width={300} />
            <p className='text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2 text-center'>My ID: {userData.id}</p>
            <p className='text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2 text-center'>My Followers: {userData.followers}</p>
            {userData.company ? 
            <p className='text-normal text-lg sm:text-xl font-medium text-gray-600 mt-2 text-center'>I am working for: {userData?.company.toUpperCase()}</p> : "" }

            <div className='w-full text-center mt-5'>
                <button className='bg-green-300 px-5 mt-4 py-2 font-semibold rounded shadow-sm border-green-900' onClick={loggedOut}>Log Out</button>
            </div>
        </div>
    )
}

export default UserDetail