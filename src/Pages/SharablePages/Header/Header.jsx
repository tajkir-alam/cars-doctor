import React, { useContext } from 'react';
import logo from '../../../assets/logo.svg'
import { Link, NavLink } from 'react-router-dom';
import { HiOutlineMagnifyingGlass, HiOutlineShoppingBag } from "react-icons/hi2";
import { AuthContext } from '../../../Providers/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
        .then(result => {})
        .catch(error => {
            console.log(error.message)
        })
    }

    const navItem = <>
        <li className='font-semibold text-md'><NavLink to={'/'} >Home</NavLink></li>
        <li className='font-semibold text-md'><NavLink to={'/about'} >About</NavLink></li>
        <li className='font-semibold text-md'><NavLink to={'/services'} >Services</NavLink></li>
        <li className='font-semibold text-md'><NavLink to={'/blog'} >Blog</NavLink></li>
        <li className='font-semibold text-md'><NavLink to={'/contact'} >Contact</NavLink></li>
        {user ?
            <>
                <li className='font-semibold text-md'><NavLink to={'/bookings'} >My Bookings</NavLink></li>
                <li className='font-semibold text-md' onClick={handleLogout}><NavLink to={'/login'} >Log Out</NavLink></li>
            </>
            : <li className='font-semibold text-md'><NavLink to={'/login'} >Login</NavLink></li>
        }

    </>

    return (
        <div className="navbar bg-base-100 my-3">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navItem}
                    </ul>
                </div>
                <Link to={'/'}><img src={logo} alt="" /></Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItem}
                </ul>
            </div>
            <div className="navbar-end gap-5">
                <HiOutlineShoppingBag className='text-2xl cursor-pointer'></HiOutlineShoppingBag>
                <HiOutlineMagnifyingGlass className='text-2xl cursor-pointer'></HiOutlineMagnifyingGlass>
                <a className="btn btn-outline btn-warning border-2 font-bold tracking-wider">Appointment</a>
            </div>
        </div>
    );
};

export default Header;