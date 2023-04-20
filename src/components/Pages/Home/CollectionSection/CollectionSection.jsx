import React, { useState } from 'react';
import image1 from '../../../../assets/all-images/collection-image1.png'
import image2 from '../../../../assets/all-images/collection-image2.png'

import miniImage1 from '../../../../assets/all-images/collection-mini-image1.png';
import miniImage2 from '../../../../assets/all-images/collection-mini-image2.png';
import miniImage3 from '../../../../assets/all-images/collection-mini-image3.png';
import { Fade, Slide } from 'react-awesome-reveal';




const CollectionSection = () => {

    const image3 = 'https://5.imimg.com/data5/SELLER/Default/2021/10/FC/WR/KH/127126251/designer-u-shape-fabric-luxury-furniture-sofa-set-1000x1000.jpg'
    const image4 = 'https://cdn.home-designing.com/wp-content/uploads/2022/06/modern-swivel-chair-low-profile-living-room-furniture-for-sale-online-designer-seating-ideas-white-boucle-fabric-upholstery-trend-bedroom-library-reading-nook-lounge.jpg';


    const [image, setImage] = useState(image1);


    return (
        <div className='grid md:grid-cols-2 grid-cols-1 bg-[#dbdad8] '>
            <Slide>
                <div>
                    <img className='w-full h-[45rem] object-cover' src={image} alt="" />
                </div>
            </Slide>
            <Fade duration={2000} >
                <div className='flex items-center justify-between 2xl:px-[76px] px-[40px] 2xl:py-[120px] py-[50px] 2xl:gap-[65px]'>
                    <div className='2xl:space-y-[34px] space-y-[20px]'>
                        <h3 className='md:text-2xl text-[#979694]' >INTRODUCING:</h3>
                        <h1 className='2xl:text-7xl md:text-5xl text-2xl font-semibold text-[#4b5552]' >Our Minimalist <br />
                            Collection</h1>
                        <p className='md:text-xl text-sm w-[80%] text-[#979694]'>
                            We strive to bring you quality products with a minimal approach of design.
                        </p>
                        <button className='md:text-lg text-xs md:px-6 px-2 md:py-3 py-2 bg-[#4c5653] text-[#dbdad8] duration-100 hover:outline hover:bg-transparent hover:border-[#4c5653] hover:text-[#4c5653]'>
                            VIEW FULL COLLECTION
                        </button>
                    </div>
                    <div className='space-y-5'>
                        <img onClick={() => setImage(image1)} className='bg-[#c0bfbe] 2xl:rounded-xl cursor-pointer hover:opacity-75 duration-200 md:rounded-md rounded-sm 2xl:h-32 h-16 md:w-20 w-28 2xl:w-32 object-contain 2xl:p-3 p-2' src={miniImage1} alt="" />
                        <img onClick={() => setImage(image3)} className='bg-[#c0bfbe] 2xl:rounded-xl cursor-pointer hover:opacity-75 duration-200 md:rounded-md rounded-sm 2xl:h-32 h-16 md:w-20 w-28 2xl:w-32 object-contain 2xl:p-3 p-2' src={miniImage2} alt="" />
                        <img onClick={() => setImage(image4)} className='bg-[#c0bfbe] 2xl:rounded-xl cursor-pointer hover:opacity-75 duration-200 md:rounded-md rounded-sm 2xl:h-32 h-16 md:w-20 w-28 2xl:w-32 object-contain 2xl:p-3 p-2' src={miniImage3} alt="" />
                    </div>

                </div>
            </Fade>
            <Fade duration={2000} >
                <div className='2xl:px-[115px] px-[40px] 2xl:py-[120px] py-[50px]' >
                    <div className='2xl:space-y-[34px] space-y-[20px]'>
                        <h3 className='md:text-2xl text-[#979694]' >CHECK OUT OUR FAVORITES!</h3>
                        <h1 className='2xl:text-7xl md:text-5xl text-2xl font-semibold text-[#4b5552]' >
                            Designer’s Choice
                        </h1>
                        <p className='text-xl md:w-[80%] text-[#979694]'>
                            Our works are 100% made by our craftsmen using sustainable resources with quality.
                        </p>
                        <button className='md:text-lg text-xs font-semibold md:px-6 px-2 md:py-3 py-2 md:border-[4px] border-[1px] border-[#4c5653] text-[#4c5653] duration-100 hover:bg-[#4c5653] hover:text-[#dbdad8]'>
                            VIEW FULL COLLECTION
                        </button>
                    </div>
                    <div className='flex md:mt-[90px] mt-[30px] items-center'>
                        <p className='md:text-xl text-sm font-semibold text-[#4c5653]' >Available in:</p>
                        <div className='md:space-x-5 space-x-3 ms-5'>
                            <span className='w-5 h-5 md:px-4 px-2 md:py-2 bg-[#4b5552] rounded-[50%] cursor-pointer hover:shadow-xl active:outline active:outline-white' ></span>
                            <span className='w-5 h-5 md:px-4 px-2 md:py-2 bg-[#4b4d55] rounded-[50%] cursor-pointer hover:shadow-xl active:outline active:outline-white' ></span>
                            <span className='w-5 h-5 md:px-4 px-2 md:py-2 bg-[#b39fa3] rounded-[50%] cursor-pointer hover:shadow-xl active:outline active:outline-white' ></span>
                            <span className='w-5 h-5 md:px-4 px-2 md:py-2 bg-[#b39fa3] rounded-[50%] cursor-pointer hover:shadow-xl active:outline active:outline-white' ></span>
                        </div>
                    </div>
                </div>
            </Fade>
            <Slide direction='right' >
                <div>
                    <img className='w-full' src={image2} alt="" />
                </div>
            </Slide>
        </div>
    );
};

export default CollectionSection;