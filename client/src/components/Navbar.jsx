import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <>
            <header>
                <div className="container">
                    <div className="logo-brand">
                        <NavLink to='/'> NextDigit </NavLink>
                    </div>
                    <nav>
                        <ul>
                            <li>
                                <NavLink to='/'>
                                    {({isActive}) => (
                                        <button className={isActive ? 'btn btn-active' : 'btn'}>
                                        Home
                                        </button>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/about'>
                                    {({isActive}) => (
                                        <button className={isActive ? 'btn btn-active' : 'btn'}>
                                        About
                                        </button>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/contact'>
                                    {({isActive}) => (
                                        <button className={isActive ? 'btn btn-active' : 'btn'}>
                                        Contact
                                        </button>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/register'>
                                    {({isActive}) => (
                                        <button className={isActive ? 'btn btn-active' : 'btn'}>
                                        Register
                                        </button>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/login'>
                                    {({isActive}) => (
                                        <button className={isActive ? 'btn btn-active' : 'btn'}>
                                        Login
                                        </button>
                                    )}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to='/profile/101/Arko/Dhaka'>
                                    {({isActive}) => (
                                        <button className={isActive ? 'btn btn-active' : 'btn'}>
                                        Profile
                                        </button>
                                    )}
                                </NavLink></li>
                        </ul>
                    </nav>
                </div>
            </header>
        </>
    );
};

export default Navbar;