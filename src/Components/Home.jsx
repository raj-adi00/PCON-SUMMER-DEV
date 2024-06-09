import React from 'react'
import Header from './Header'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div>
            <Header />
            <div className="bg-gradient-to-r from-blue-500 to-purple-600 min-h-screen flex flex-col justify-center items-center p-4">
                <h1 className="text-white text-6xl font-extrabold mb-8 font-sans">Welcome to GameMaster</h1>
                <p className="text-white text-2xl mb-10 text-center max-w-3xl font-light">
                    GameMaster is your ultimate gaming hub! Whether you're a casual gamer or a hardcore enthusiast, we have everything you need.
                    From engaging single-player games to competitive multiplayer experiences, our platform offers a diverse range of gaming options.
                    Track your progress, compete with friends, and stay updated with the latest in the gaming world.
                </p>
                <Link to='/services'>
                    <button className="bg-white text-blue-500 py-3 px-8 rounded-full shadow-lg hover:bg-blue-500 hover:text-white transition duration-300 ease-in-out text-xl font-semibold">
                        Explore Our Services
                    </button>
                </Link>
            </div>
        </div>
    )
}

export default Home