import React from 'react';
import { NavLink } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <nav>
            <NavLink className={({isActive}) => isActive ? 'red' : ''} to='/'>Home</NavLink>
            <NavLink className={({isActive}) => isActive ? 'red' : ''} to='/orders'>Order Review</NavLink>
            <NavLink className={({isActive}) => isActive ? 'red' : ''} to='/about'>About</NavLink>
            <NavLink className={({isActive}) => isActive ? 'red' : ''} to='/contact'>Contact</NavLink>
        </nav>
    );
};

export default Header;