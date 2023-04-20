import React from 'react';

import image1 from '../../../../assets/all-images/product-image1.png';
import image2 from '../../../../assets/all-images/product-image2.png';
import image3 from '../../../../assets/all-images/product-image3.png';
import image4 from '../../../../assets/all-images/product-image4.png';

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { BsFillCartCheckFill } from 'react-icons/bs'

const ProductSection = () => {

    const data = [
        {
            id: '01',
            name: 'The Wooden Set',
            price: 300,
            img: image1
        },
        {
            id: '02',
            name: 'Minimalist Set',
            price: 450,
            img: image2
        },
        {
            id: '03',
            name: `Craftsman's Favorite`,
            price: 250,
            img: image3
        },
        {
            id: '04',
            name: `Designer's Pick`,
            price: 550,
            img: image4
        },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='bg-[#dcdbd9] md:py-[40px] py-[40px] md:px-[132px] px-[20px]'>
            <div className='md:w-[650px] px-2 w-full mx-auto text-center mb-[10px]'>
                <h1 className='md:text-6xl text-3xl font-bold text-[#4b5552] mb-[30px]' >Our Products</h1>
                <p className='text-[#a1a09e] md:text-xl' >Sustainable furniture design strives to create a closed-loop cycle in which materials and products are perpetually recycled and designed.</p>
            </div>

            <div className='md:w-[80%] w-full mx-auto'>

                <Carousel
                    responsive={responsive}
                    containerClass='py-20 px-5'
                    arrows={false}
                    showDots
                    customDot={<CustomDot />}
                >
                    {
                        data.map((item, i) => <ProductCard key={item.id} item={item} i={i} />)
                    }
                </Carousel>


            </div>
        </div>
    );
};


const ProductCard = ({ item, i }) => {

    return (

        <div className={`mx-auto w-full relative`}>
            <img className='w-[80%] mx-auto' src={item.img} alt="" />
            <div className='w-[80%] mx-auto md:flex justify-between items-center md:px-[20px] px-[5px] md:py-[28px] py-[5px] bg-[#4b5552] md:text-2xl text-xs font-semibold'>
                <p className='text-[#dbdad8]' >{item.name}</p>
                <div className='flex flex-col gap-1'>
                    <button className='bg-[#dbdad8]  md:text-lg text-[10px] text-[#4b5552] md:px-5 px-[15px] py-[1px]'>
                        ${item.price}
                    </button>
                    <button className='bg-[#dbdad8] md:text-xl text-[10px] text-[#4b5552] md:px-1 px-[15px] py-[5px] flex justify-center gap-1'>
                        <BsFillCartCheckFill /> <span className='text-sm' >Cart</span>
                    </button>
                </div>
            </div>
            <span className='font-bold md:text-8xl text-5xl text-[#989795] absolute md:-top-10 -top-8 -left-2' >{item.id}</span>
        </div>
    )
}

const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
        <li
            className={`ms-2 2xl:mb-8 md:mb-4 mb-2 p-[2px] w-12 cursor-pointer ${active ? "active bg-black " : "inactive bg-[#9e9d9b] "}`}
            onClick={() => onClick()}
        >

        </li>
    );
};


export default ProductSection;