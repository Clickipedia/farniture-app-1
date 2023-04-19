import React from 'react';

import {FaSearch} from 'react-icons/fa';
import {AiOutlineShoppingCart} from 'react-icons/ai';

import logo from '../../../assets/all-images/logo.png'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='bg-[#dbdad8] w-full flex justify-between px-[134px] py-[18px] shadow-md'>
            <div className='flex items-center gap-[45px]'>
                <img src={logo} alt="" />
                <div className='space-x-[45px] text-[#4c5653] font-[600] text-lg'>
                    <Link to='/' >Home</Link>
                    <Link to='' >About</Link>
                    <Link to='' >Shop</Link>
                    <Link to='' >Contact Us</Link>
                </div>
            </div>
            <div className='flex items-center gap-[35px]'>
                <div className='border-4 border-[#4c5653]'>
                    <input className='bg-[#dbdad8] px-3 pt-1 focus::border-0 outline-none' type="text" placeholder='SEARCH HERE' />
                    <button className='mx-3'><FaSearch className='-mb-1 text-[1.2rem]'/></button>
                </div>
               
                    <AiOutlineShoppingCart className='text-[2.2rem]'/>
                
            </div>
        </div>
    );
};

export default Header;