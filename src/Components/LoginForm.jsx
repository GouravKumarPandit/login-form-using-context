import React from 'react'
import { useContext } from 'react'
import DarkLightSwitcherContext from '../Context/DarkLightSwitcherContext';
import { useState } from 'react';

function LoginForm() {
    const {setUserInfo} = useContext(DarkLightSwitcherContext);
    const [userName, setUserName] = useState("");
    const [userPassword, setUserPassword] = useState("");

    const loggedIn = () => {
        const loggedInData = {
            userName,
            userPassword
        }
        if(userName !== "" && userPassword !== ""){
            setUserName("");
            setUserPassword("");
            setUserInfo(loggedInData);
        }
    }

    return (
        <>
            
            <p className='py-3 bg-pink-300 mb-5 text-center text-xl font-semibold'>Login Form</p>
            <div className=' py-5 text-center'>
                <div className=''>
                    <input type="text" 
                        className='py-2 px-3 mx-5 rounded bg-lime-50 w-96  shadow-sm'
                        value={userName} 
                        onChange={(event) => setUserName(event.target.value)} 
                        placeholder='User Name' 
                    />
                    <br />
                    <input type="password" 
                        className='py-2 px-3 mt-4 mx-5 rounded bg-lime-50 w-96  shadow-sm'
                        value={userPassword} 
                        onChange={(event) => setUserPassword(event.target.value)} 
                        placeholder='User Password' 
                    />
                    <br />
                    <button className='bg-green-300 px-5 mt-4  mx-5 py-2 font-semibold rounded shadow-sm' onClick={loggedIn}>Login</button>
                </div>
            </div>
        </>
    )
}

export default LoginForm