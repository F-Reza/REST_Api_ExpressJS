import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Menu = () => {
    return (
        <div>
            <NavLink to='/'>
                    {({isActive}) => (
                        <button className={isActive ? 'btn btn-active' : 'btn'}>
                        Home
                        </button>
                    )}
            </NavLink>
            <NavLink to='/about'>
                {({isActive}) => (
                    <button className={isActive ? 'btn btn-active' : 'btn'}>
                    About
                    </button>
                )} 
            </NavLink>
            <NavLink to='/contact'>
                {({isActive}) => (
                    <button className={isActive ? 'btn btn-active' : 'btn'}>
                    Contact
                    </button>
                )} 
            </NavLink>
            <NavLink to='/register'>
                {({isActive}) => (
                    <button className={isActive ? 'btn btn-active' : 'btn'}>
                    Register
                    </button>
                )} 
            </NavLink>
            <NavLink to='/profile/101/Arko/Dhaka'>
                {({isActive}) => (
                    <button className={isActive ? 'btn btn-active' : 'btn'}>
                    Profile
                    </button>
                )}
            </NavLink>
        
        </div>
    );
};

export default Menu;