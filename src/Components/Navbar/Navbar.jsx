import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Logo/travelGuru-removebg.png'
import './Navbar.css'

const Navbar = () => {
    const navigate = useNavigate()
    return (
        <div className='flex h-20 items-center justify-between container mx-auto'>
            <div>
                <img onClick={() => navigate('/')} className='w-24 ' src={Logo} alt="" />
            </div>
            <nav>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/news'>News</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/destination'>Destination</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/blog'>Blog</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/contact'>Contact</NavLink>
                <NavLink className={({ isActive }) => isActive ? 'active-link' : 'link'} to='/login'>Login</NavLink>
            </nav>
        </div>
    );
};

export default Navbar;