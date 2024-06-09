import React, { useContext, useEffect, useState } from "react";
import Usercontext from "./UserContext";
import { account } from "../appwrite/Appwrite";
import { useNavigate } from "react-router-dom";




const UserContextProvider = ({ children }) => {
    const [userinfo, setuserinfo] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const navigator = useNavigate()
    useEffect(() => {
        const info = account.get()
        info.then((res) => { setuserinfo(res) })
            .catch((err) => { console.log(err) })
    }, [])
    return (
        <Usercontext.Provider value={{ userinfo, setuserinfo }}>
            {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider
