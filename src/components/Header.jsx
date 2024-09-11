import React from 'react'
import {Link, NavLink} from 'react-router-dom'
import logo from '../assets/logo.jpg'; 

function Header() {
  return (
    <>
      <header className=''>
        <nav className='bg-white pt-2 px-8 shadow-xl py-1'>
            <div className='flex flex-wrap justify-between'>
                <div>
                <img src={logo} alt='Logo' className='h-14 w-16 object-contain'/>
                </div>
                <div className='text-black text-sm'>
                    <ul className='flex flex-wrap justify-around mt-4'>
                        <li className='px-6 hover:text-blue-800 duration-300'> 
                            <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
                        </li>
                        <li className='px-6 hover:text-blue-700 duration-300'>
                            <NavLink to="/Projects" className={({ isActive }) => isActive ? 'active' : ''}>Projects</NavLink>
                        </li>
                        <li className='px-6 hover:text-blue-700 duration-300'>
                            <NavLink to="/About" className={({ isActive }) => isActive ? 'active' : ''}>About us</NavLink>
                        </li>
                        <li className='px-6 hover:text-blue-700 duration-300'>
                            <NavLink to="/Contact" className={({ isActive }) => isActive ? 'active' : ''}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <button className='border border-blue-900 rounded-md shadow-md text-black text-sm px-5 py-1 mt-3 hover:bg-blue-950 duration-300 hover:text-white'>Login</button>
                </div>
            </div>
        </nav>
      </header>
    </>
  )
}

export default Header
