import React from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

import BannerCarousel from './BannerCarousel';


const BannerSection = () => {

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };



    return (
        <div>
           <Carousel
           responsive={responsive}
           showDots
           customDot={<CustomDot/>}
           arrows={false}
           autoPlay
           autoPlaySpeed={3000}
           rewind
           rewindWithAnimation
           infinite={true}
           containerClass='flex justify-start'
           >
                <BannerCarousel/>
                <BannerCarousel/>
                <BannerCarousel/>
                <BannerCarousel/>
           </Carousel>
        </div>
    );
};

const CustomDot = ({ onMove, index, onClick, active }) => {
    // onMove means if dragging or swiping in progress.
    // active is provided by this lib for checking if the item is active or not.
    return (
      <li
        className={`ms-2 mb-8 p-2 rounded-[50%] cursor-pointer border-2 ${active ? "active bg-[#9e9d9b] " : "inactive bg-[#e3e2e1] "}`}
        onClick={() => onClick()}
      >
        
      </li>
    );
  };


export default BannerSection;