import React, { useContext, useEffect, useState } from 'react'
import { account } from '../appwrite/Appwrite'
import { Navigate, useNavigate } from 'react-router-dom';
import { getLoggedInUser } from '../appwrite/Appwrite';
import Usercontext from '../Context/UserContext';

function Login() {
    const navigate = useNavigate()
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const { setuserinfo } = useContext(Usercontext)
    // useEffect(async() => {
    //     console.log(1)
    //     if (await account.get()) {
    //         navigate("/home");
    //     }
    // }, [])
    const loginfunc = async (e) => {
        e.preventDefault();
        const val = await account.createEmailPasswordSession(email, password);
        navigate("/home")
    }





    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl font-semibold mb-4 ">Login to My App</h2>
            <form className="bg-white p-6 rounded-lg shadow-md w-screen sm:w-1/2 lg:w-1/4" onSubmit={loginfunc}>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" id="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" id="password" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Login</button>
            </form>
        </div>
    )
}

export default Login