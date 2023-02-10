import React from 'react';
import { CiSearch } from 'react-icons/ci';
import {FiShoppingCart , FiSearch} from 'react-icons/fi';
import { AiOutlineSearch, AiOutlineUser } from 'react-icons/ai';


const Header = () => {
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div>
                        <ul className='flex pl-[91px] hidden lg:flex'>
                            <li>
                                <a href="#" class="block mr-3 py-2 pl-3 pr-4 text-[14px] uppercase text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   " aria-current="page">Home</a>
                            </li>
                            <li>
                                <a href="#" class="block mx-3 text-[14px] uppercase py-2 pl-3 pr-4 text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">shop</a>
                            </li>
                            <li>
                                <a href="#" class="block mx-3 text-[14px] uppercase py-2 pl-3 pr-4 text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">about us</a>
                            </li>
                            <li>
                                <a href="#" class="block ml-3 text-[14px] uppercase py-2 pl-3 pr-4 text-[rgba(45, 41, 41, 1)] text-gray-700 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0   ">contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div className="dropdown lg:hidden">
                        <label tabIndex={0} className="btn btn-ghost btn-circle">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <li><a>HOME</a></li>
                            <li><a>SHOP</a></li>
                            <li><a>ABOUT US</a></li>
                            <li><a>CONTACT US</a></li>
                        </ul>
                    </div>
                </div>
                <div className="navbar-center">
                    <a className="btn btn-ghost normal-case text-xl">Genesys</a>
                </div>
                <div className="navbar-end  lg:pr-24">
                   
                    <button className="">
                       <FiSearch className='text-xl'></FiSearch>
                    </button>
                    <button className="mx-3">
                    <AiOutlineUser className='text-xl'></AiOutlineUser>
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