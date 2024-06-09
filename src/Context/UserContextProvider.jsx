import React, { useContext, useEffect, useState } from "react";
import Usercontext from "./UserContext";
import { account } from "../appwrite/Appwrite";




const UserContextProvider = ({ children }) => {
    const [userinfo, setuserinfo] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    useEffect(() => {
        const info = account.get()
        info.then((res) => { setuserinfo(res) })
            .catch((err) => { console.log(err) })
    }, [])
    return (
        <Usercontext.Provider value={{ userinfo }}>
            {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider
