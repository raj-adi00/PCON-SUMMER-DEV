import React, { useContext, useEffect } from 'react'
import Usercontext from '../Context/UserContext'
import { Link } from 'react-router-dom'
import { Client, Databases } from 'appwrite'
function Leaderboard() {
    const { details, setdetails } = useContext(Usercontext)
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
    // console.log(details)
    return (
        <div className="container mx-auto mt-8">
            <Link to='/home'><button className='text-xl font-semibold text-black bg-white px-2 py-1 rounded-md fixed right-1 top-2 hover:bg-gray-500 hover:text-white duration-100'>Back to home</button></Link>
            <h2 className="text-3xl font-bold text-center mb-6">Leaderboard</h2>
            <ul className="space-y-4 ranking">
                <li className="flex justify-between items-center my-8 head p-4 rounded-lg shadow-md"><span className="text-lg font-semibold">Id</span><span className="text-lg font-semibold">User</span><span className="text-lg font-semibold">rating</span></li>
                {details.map((ele, index) => (
                    <li key={index} className="flex justify-between items-center bg-white p-4 rounded-lg shadow-md">
                        <span className="text-lg font-semibold">{ele.email}</span>
                        <span className="text-lg">{ele.user}</span>
                        <span className={`text-lg font-bold score ${ele.gamer < 100 ? 'text-gray-500' :
                            ele.gamer < 500 ? 'text-green-500' :
                                'text-red-500'}`}>
                            {ele.gamer}
                        </span>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default Leaderboard