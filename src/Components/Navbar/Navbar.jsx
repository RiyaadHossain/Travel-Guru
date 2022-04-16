import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import toast from 'react-hot-toast';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from '../../Assets/Logo/travelGuru-removebg.png'
import auth from '../../Firebase/Firebase.init';
import './Navbar.css'

const Navbar = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate()
    const logOut = () => {
        signOut(auth).then(() => {
            toast.success('Logged Out')
          }).catch((error) => {
            toast.error('An Error Occurred')
          });
    }
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
                {
                    user ? <button onClick={logOut} className='button'>Log Out</button> : <NavLink className=' button' to='/login'>Login</NavLink>
                }
            </nav>
        </div>
    );
};

export default Navbar;