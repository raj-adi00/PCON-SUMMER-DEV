import React, { useContext } from 'react'
import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom'
import { account } from '../appwrite/Appwrite';
import { Navigate } from 'react-router-dom';
import Usercontext from '../Context/UserContext';
function WelcomePage() {
    const navigate = useNavigate()
    const { userinfo, setuserinfo } = useContext(Usercontext)
    // useEffect(async () => {
    //     const info = account.get()
    //     info.then()
    //     if (account.get()) {
    //         info.then((res) => { setuserinfo(res) })
    //             .catch((err) => { console.log(err) })
    //         navigate("/home");
    //         return;
    //     }
    // }, [])
    const check = () => {
        const info = account.get()
        info.then((res) => {
            console.log(res)
            setuserinfo(res)
            navigate("/home")
        }).catch((err) => { console.log(err) })
    }
    check();
    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-white text-4xl font-bold mb-8">Welcome to My Website</h1>
            <div className="flex space-x-4">
                <Link to='/login'><button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-lg">Login</button></Link>
                <Link to='/register'><button className="bg-white text-blue-500 py-2 px-4 rounded-lg shadow-md hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-lg">Create New Account</button></Link>
            </div>
        </div>
    )
}

export default WelcomePage