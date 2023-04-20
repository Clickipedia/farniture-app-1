import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgMenu } from 'react-icons/cg';
import { RxCross2 } from 'react-icons/rx';

import { FaSearch } from 'react-icons/fa';
import { AiOutlineShoppingCart } from 'react-icons/ai';

import logo from '../../../assets/all-images/logo.png'

const Header = () => {

    const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (
        <nav>
            <div className='bg-white lg:flex hidden w-full justify-between px-[60px] 2xl:px-[134px] py-[18px] shadow-lg'>
                <div className='flex items-center gap-[45px]'>
                    <img src={logo} alt="" />
                    <div className='space-x-[45px] text-[#4c5653] font-[600] text-lg'>
                        <Link className='duration-200 hover:text-black' to='/' >Home</Link>
                        <Link className='duration-200 hover:text-black' to='' >About</Link>
                        <Link className='duration-200 hover:text-black' to='' >Shop</Link>
                        <Link className='duration-200 hover:text-black' to='' >Contact Us</Link>
                    </div>
                </div>
                <div className='flex items-center gap-[35px]'>
                    <div className='border-4 border-[#4c5653]'>
                        <input className='bg-white px-3 pt-1 focus::border-0 outline-none' type="text" placeholder='SEARCH HERE' />
                        <button className='mx-3'><FaSearch className='-mb-1 text-[1.2rem]' /></button>
                    </div>

                    <AiOutlineShoppingCart className='duration-200 text-[2.2rem] cursor-pointer text-[#4c5653] hover:text-black' />

                </div>
            </div>

            {/* Mobile Navbar Section */}
            <div className='lg:hidden bg-[#e3e2e1] -mt-8 text-right shadow-lg'>
                {/* Dropdown Open Button */}
                <button
                    aria-label='Open Menu'
                    title='Open Menu'
                    onClick={() => setIsMenuOpen(true)}
                    className='px-2 py-3'
                >
                    <CgMenu className='w-5 text-gray-600' />
                </button>
                {isMenuOpen && (
                    <div className='absolute top-0 left-0 w-full z-10 text-center'>
                        <div className='p-5 bg-white border rounded shadow-sm'>
                            {/* Logo & Button section */}
                            <div className='flex items-center justify-between mb-4'>
                                <div>
                                    <Link to='/' className='inline-flex items-center'>
                                        {/* <BoltIcon className='h-6 w-6 text-blue-500' /> */}
                                        {/* <img src="book.png" className='w-6' alt="" /> */}
                                        <span className='ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase'>
                                            <img className='w-10' src={logo} alt="" />
                                        </span>
                                    </Link>
                                </div>
                                {/* Dropdown menu close button */}
                                <div>
                                    <button
                                        aria-label='Close Menu'
                                        title='Close Menu'
                                        onClick={() => setIsMenuOpen(false)}
                                    >
                                        <RxCross2 className='w-5 text-gray-600' />
                                    </button>
                                </div>
                            </div>
                            {/* Mobile Nav Items Section */}
                            <nav>
                                <ul className='space-y-4'>
                                    <li>
                                        <Link to='/' className='default'>
                                            Home
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to=''
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            About
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to=''
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Shop
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to=''
                                            className='font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-blue-400'
                                        >
                                            Contact Us
                                        </Link>
                                    </li>
                                    <li>
                                        <Link
                                            to=''
                                            className='font-medium text-gray-700 transition-colors flex justify-center duration-200 hover:text-blue-400'
                                        >

                                            <AiOutlineShoppingCart className='duration-200 text-[1.2rem] cursor-pointer text-[#4c5653] hover:text-black' />
                                        </Link>
                                    </li>
                                    <li>
                                        <div className='border-2 flex justify-between'>
                                            <input className='px-3 pt-1 focus::border-0 outline-none' type="text" placeholder='SEARCH HERE' />
                                            <button className='mx-3'><FaSearch className='-mb-1 text-[1.2rem]' /></button>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                )}
            </div>
        </nav>
    );
};

export default Header;