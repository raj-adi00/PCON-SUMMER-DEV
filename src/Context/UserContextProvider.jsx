import React, { useContext, useEffect, useState } from "react";
import Usercontext from "./UserContext";
import { account } from "../appwrite/Appwrite";
import { useNavigate } from "react-router-dom";
import { Client, Databases } from 'appwrite'



const UserContextProvider = ({ children }) => {
    const [details, setdetails] = useState([]);
    const [userinfo, setuserinfo] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const navigator = useNavigate()
    useEffect(() => {

        const client = new Client();
        const databases = new Databases(client, '66643e450033fd160bcc');
        client
            .setEndpoint("https://cloud.appwrite.io/v1")
            .setProject("66643bd1003d6c970924")

        const promise = databases.listDocuments("66643e450033fd160bcc", '6664925200043bb2ccfd')
        promise.then(function (response) {
            console.log(response.documents); // Success
            for (let i = 0; i < response.documents.length; i++) {
                let m = i;
                for (let j = i + 1; j < response.documents.length; j++) {
                    if (response.documents[j].gamer > response.documents[m].gamer)
                        m = j;
                }
                let t = response.documents[i];
                response.documents[i] = response.documents[m];
                response.documents[m] = t;
            }
            setdetails(response.documents)

        }, function (error) {
            alert("it will be updated");
        });
    }, [])
    useEffect(() => {
        const info = account.get()
        info.then((res) => { setuserinfo(res) })
            .catch((err) => { console.log(err) })
    }, [])
    return (
        <Usercontext.Provider value={{ userinfo, setuserinfo, details, setdetails }}>
            {children}
        </Usercontext.Provider>
    )
}

export default UserContextProvider
