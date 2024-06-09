
import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-solid-svg-icons'
import Usercontext from '../Context/UserContext';

function Header() {
    const { userinfo } = useContext(Usercontext)
    console.log(userinfo)
    return (
        <header className="bg-blue-500 py-4 px-4 sticky top-0">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className=" bg-red-900/20 p-2 rounded text-white text-3xl font-semibold">GameMaster</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <NavLink
                                to="/home"
                                className={({ isActive }) =>
                                    `text-xl font-semibold hover:text-blue-200 ${isActive ? 'ttext-black' : 'text-white'}`
                                }
                            >
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/leaderboard"
                                className={({ isActive }) =>
                                    `text-xl font-semibold hover:text-blue-200 ${isActive ? 'ttext-black' : 'text-white'}`
                                }
                            >
                                Leaderboard
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/services"
                                className={({ isActive }) =>
                                    ` text-xl font-semibold hover:text-blue-200 ${isActive ? 'text-black' : 'text-white'}`
                                }
                            >
                                Services
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                    `text-xl font-semibold hover:text-blue-200 ${isActive ? 'text-black' : 'text-white'}`
                                }
                            >
                                Contact
                            </NavLink>
                        </li>
                        <li>
                            <NavLink
                                to="/profile"
                                className={({ isActive }) =>
                                    `hover:text-blue-200 border-2 rounded-sm p-2 ${isActive ? 'text-black' : 'text-white'}`
                                }
                            >
                                <FontAwesomeIcon icon={faUser} size='lg' className='hover:cursor-pointer mx-2' />{userinfo.name}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}

export default Header;
