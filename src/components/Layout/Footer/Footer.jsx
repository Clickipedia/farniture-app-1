import React from 'react';

import { AiFillFacebook } from 'react-icons/ai';
import { GrInstagram } from 'react-icons/gr';
import { BsTwitter } from 'react-icons/bs';

const Footer = () => {
    return (
        <div className='bg-[#4c5653] md:py-[100px] py-[40px] md:px-[134px] px-10 text-[#a1a09e]' >

            <div className='grid md:grid-cols-4 grid-cols-1 md:gap-[108px] gap-[50px]' >

                <div className='' >
                    <h3 className='text-2xl text-[#dbdad8] font-semibold mb-4' >OUR SERVICES</h3>
                    <ul className='text-xl space-y-1 ' >
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">2021's Bestsellers</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">How to Order</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">Payment Method</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">Order Status</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">New Promos</a></li>
                    </ul>
                </div>

                <div className='' >
                    <h3 className='text-2xl text-[#dbdad8] font-semibold mb-4' >OUR TEAM</h3>






                    <ul className='text-xl space-y-1 ' >
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">The Studio</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">Craftsmanship</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">Our Sources</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">Sustainability</a></li>
                    </ul>
                </div>

                <div className='' >
                    <h3 className='text-2xl text-[#dbdad8] font-semibold mb-4' >LEGAL</h3>

                    <ul className='text-xl space-y-1 ' >
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#"> Privacy Policy</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">Our Promise</a></li>
                        <li className='hover:text-white duration-200 hover:translate-x-1' ><a href="#">More Information</a></li>
                    </ul>
                </div>

                <div className='text-xl' >
                    <h3 className='text-2xl text-[#dbdad8] font-semibold mb-4' >NEWSLETTER</h3>
                    <div className='space-y-5'>
                    <p className='' >Join our newsletter for updates.</p>
                    <input className='border-2 px-4 w-full py-2 outline-none bg-[#4c5653] text-sm text-white' type="text" placeholder='youremail@mail.com' />
                    <button className='duration-150 px-4 py-2 text-[#4c5653] bg-[#dbdad8] hover:bg-[#bebebc] 2xl:text-lg text-sm font-semibold'>
                    SUBSCRIBE NOW
                    </button>
                    </div>
                </div>



            </div>

            <div className='md:flex md:space-y-0 space-y-5 justify-between items-center mt-[60px]'>

                <p className='text-lg'>Copyright 2021 <span className='font-bold text-[#dbdad8]' >Designer Furnitures & Co.</span> All Rights Reserved.</p>
                <div className='flex gap-5 md:text-3xl text-2xl text-[#dbdad8]'>
                    <button className='hover:text-white' > <AiFillFacebook /></button>
                    <button className='hover:text-white' > <GrInstagram /></button>
                    <button className='hover:text-white' > <BsTwitter /></button>
                </div>
            </div>
        </div>
    );
};

export default Footer;