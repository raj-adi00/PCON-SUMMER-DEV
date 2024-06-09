import React, { useContext, useState } from 'react'
import { Account, ID } from "appwrite";
import conf from '../conf/conf';
import Usercontext from '../Context/UserContext';
import { account } from '../appwrite/Appwrite';
import { Navigate, useNavigate } from 'react-router-dom';


function Register() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
     const navigate=useNavigate()

    const signupfunc = async (e) => {
        e.preventDefault()
        const signuppromis = account.create(
            ID.unique(), email, password, name
        )
        signuppromis.then((res) => {
            alert("successful registration!! Please Log in");
            navigate("/login", { replace: true })
        })
            .catch((err) => { alert("unsuccessful attemp.. Please try again") })
    }

    return (
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col justify-center items-center">
            <h2 className="text-white text-2xl font-semibold mb-4">Create an Account</h2>
            <form onSubmit={signupfunc} className="bg-white p-6 rounded-lg shadow-md  w-screen sm:w-1/2 lg:w-1/4">
                <div className="mb-4">
                    <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
                    <input value={name} onChange={(e) => { setname(e.target.value) }} type="text" id="name" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email Address</label>
                    <input value={email} onChange={(e) => setemail(e.target.value)} type="email" id="email" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="mb-4">
                    <label htmlFor="password" className="block text-gray-700 font-bold mb-2">Password</label>
                    <input value={password} onChange={(e) => { setpassword(e.target.value) }} type="password" id="password" className="w-full border rounded-md py-2 px-3 focus:outline-none focus:border-blue-500" />
                </div>
                <button type="submit" className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300 ease-in-out">Register</button>
            </form>
        </div>
    )
}

export default Register