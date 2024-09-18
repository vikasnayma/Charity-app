import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.jpg'; 
import { useNavigate } from "react-router-dom"
import SignUp from './SignUp';

function Header() {

  const navigation = useNavigate();

  const handleNavigation = ()=>{
    navigation("/SignUp");
  }

  return (
    <>
      <header>
        <nav className='bg-white pt-4 px-8 shadow-xl py-2 sticky top-0 z-50'>
          <div className='flex items-center justify-between'>
            
            {/* Logo Section */}
            <div className='flex items-center'>
              <img src={logo} alt='Logo' className='h-16 w-16 object-contain' />
              <h1 className='text-2xl font-bold text-blue-900 ml-4'>Charity</h1>
            </div>

            {/* Navigation Links */}
            <div className='hidden md:flex space-x-10 text-black'>
              <ul className='flex items-center space-x-8 text-md font-semibold'>
                <li className='relative group'>
                  <NavLink 
                    to="/" 
                    end 
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    Home
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>
                <li className='relative group'>
                  <NavLink 
                    to="/Projects" 
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    Projects
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>
                <li className='relative group'>
                  <NavLink 
                    to="/Gallery" 
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    Gallery
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>
                <li className='relative group'>
                  <NavLink 
                    to="/About" 
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    About Us
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>
                <li className='relative group'>
                  <NavLink 
                    to="/Contact" 
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    Contact
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>
                <li className='relative group'>
                  <NavLink 
                    to="/DashBoard" 
                    className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>
                    Dashboard
                  </NavLink>
                  <div className='absolute left-0 bottom-0 w-full h-0.5 bg-blue-800 scale-x-0 group-hover:scale-x-100 transition-transform duration-300'></div>
                </li>
              </ul>
            </div>

            {/* Login Button */}
            <div className='flex items-center'>
              <button className='border border-blue-900 rounded-lg shadow-lg text-lg text-black px-6 py-1 hover:bg-blue-950 hover:text-white transition-all duration-300 ease-in-out' onClick={handleNavigation}>
                Login
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className='md:hidden mt-4 flex justify-center'>
            <ul className='flex flex-col space-y-4 text-lg font-semibold'>
              <li className='hover:text-blue-800'>
                <NavLink to="/" end className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>Home</NavLink>
              </li>
              <li className='hover:text-blue-800'>
                <NavLink to="/Projects" className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>Projects</NavLink>
              </li>
              <li className='hover:text-blue-800'>
                <NavLink to="/Gallery" className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>Gallery</NavLink>
              </li>
              <li className='hover:text-blue-800'>
                <NavLink to="/About" className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>About Us</NavLink>
              </li>
              <li className='hover:text-blue-800'>
                <NavLink to="/Contact" className={({ isActive }) => isActive ? 'text-blue-800' : 'text-gray-700'}>Contact</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
