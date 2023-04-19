import React from 'react';
import './FarnitureSection.css'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import img1 from '../../../../assets/all-images/lamp-image.png';
import img2 from '../../../../assets/all-images/desk-image.png';
import img3 from '../../../../assets/all-images/mini-table-image.png';


const FarnitureSection = () => {

    const data= [
        {
            id:1,
            name:'Our Lamp Collection',
            image: img1
        },
        {
            id:2,
            name:'Designer’s Desks',
            image: img2
        },
        {
            id:3,
            name:'Mini Tables',
            image: img3
        },
        {
            id:1,
            name:'Our Lamp Collection',
            image: img1
        },
        {
            id:2,
            name:'Designer’s Desks',
            image: img2
        },
        {
            id:3,
            name:'Mini Tables',
            image: img3
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
        <div className='bg-[#4b5552] py-[85px]'>

            <div className='text-center'>
                <h1 className='text-6xl text-[#dbdad8] font-semibold' >Made for you, Made by you.</h1>
                <p className='text-[#9e9d9b] mt-5 w-[40%] mx-auto' >Sustainable furniture design strives to create a closed-loop cycle in which materials and products are perpetually recycled and designed.</p>
            </div>

            <div className='mt-[70px] w-3/4 h-auto mx-auto'>
                <Carousel
                    responsive={responsive}
                    arrows={false}
                    showDots
                    customDot={<CustomDot/>}
                    // renderDotsOutside
                    dotListClass=''
                    containerClass='pb-32'
                >
                        {
                            data.map(item=><FarnitureCard item={item} />)
                        }
                </Carousel>
            </div>


        </div>
    );
};


const FarnitureCard = ({item}) => {
    return (
        <div className='bg-[#dbdad8] w-[335px] mx-auto space-y-1'>
            <img className='w-full object-contain h-[360px] p-10' src={item.image} alt="" />
            <p className='mt-auto text-xl font-semibold bg-white px-5 py-5 pb-10' >{item.name}</p>
        </div>
    )
}


const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={`ms-2 cursor-pointer text-xl font-semibold ${active ? "active text-[#e3e2e1] " : "inactive text-[#9e9d9b]"}`}
        onClick={() => onClick()}
      >
        {index + 1}
      </li>
    );
  };




export default FarnitureSection;