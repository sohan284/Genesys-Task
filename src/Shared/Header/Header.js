import React from 'react';
import { AiOutlineUser } from 'react-icons/ai';
import { FiSearch, FiShoppingCart } from 'react-icons/fi';



const Header = () => {
    return (
        <div>
            <div className="navbar ">
                <div className="navbar-start">
                    <div>
                        <ul className='flex pl-[91px] hidden lg:flex'>
                            <li>
                                <a href="/" className="block mr-3 py-2 pl-3 pr-4 text-[14px] uppercase text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="/login" className="block mx-3 text-[14px] uppercase py-2 pl-3 pr-4 text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">shop</a>
                            </li>
                            <li>
                                <a href="/signup" className="block mx-3 text-[14px] uppercase py-2 pl-3 pr-4 text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">about us</a>
                            </li>
                            <li>
                                <a href="/userlist" className="block ml-3 text-[14px] uppercase py-2 pl-3 pr-4 text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a href='/'>HOME</a></li>
                            <li><a>SHOP</a></li>
                            <li><a>ABOUT US</a></li>
                            <li><a>CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                
                    <a className="btn btn-ghost normal-case text-xl"><img className='w-[50px]' src="https://i.ibb.co/zbHv8t4/images-removebg-preview-3.png" alt="" /> <span className='text-sm'>Genesys</span> </a>
                </div>
                <div className="navbar-end  lg:pr-24">
                   
                    <button className="">
                       <FiSearch className='text-xl'></FiSearch>
                    </button>
                    <button  className="mx-3">
                    <a href='/login'><AiOutlineUser className='text-xl'>  </AiOutlineUser></a>
                    
                    </button>
                    <button className="">
                       <FiShoppingCart className='text-xl'></FiShoppingCart>
                    </button>
                 
                </div>
            </div>



        </div>
    );
};

export default Header;