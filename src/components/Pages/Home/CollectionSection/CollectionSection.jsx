import React from 'react';
import image1 from '../../../../assets/all-images/collection-image1.png'
import image2 from '../../../../assets/all-images/collection-image2.png'

import miniImage1 from '../../../../assets/all-images/collection-mini-image1.png';
import miniImage2 from '../../../../assets/all-images/collection-mini-image2.png';
import miniImage3 from '../../../../assets/all-images/collection-mini-image3.png';



const CollectionSection = () => {
    return (
        <div className='grid grid-cols-2 bg-[#dbdad8]'>
            <div>
                <img className='w-full' src={image1} alt="" />
            </div>
            <div className='flex px-[76px] py-[120px] gap-[65px]'>
                <div className='space-y-[34px]'>
                    <h3 className='text-2xl text-[#979694]' >INTRODUCING:</h3>
                    <h1 className='text-7xl font-semibold text-[#4b5552]' >Our Minimalist <br />
                        Collection</h1>
                    <p className='text-xl w-[80%] text-[#979694]'>
                        We strive to bring you quality products with a minimal approach of design.
                    </p>
                    <button className='text-lg px-6 py-3 bg-[#4c5653] text-[#dbdad8]'>
                        VIEW FULL COLLECTION
                    </button>
                </div>
                <div className='space-y-5'>
                    <img className='bg-[#c0bfbe] rounded-xl h-32 w-32 object-contain p-3' src={miniImage1} alt="" />
                    <img className='bg-[#c0bfbe] rounded-xl h-32 w-32 object-contain p-3' src={miniImage2} alt="" />
                    <img className='bg-[#c0bfbe] rounded-xl h-32 w-32 object-contain p-3' src={miniImage3} alt="" />
                </div>

            </div>
            <div className='px-[115px] py-[120px]' >
                <div className='space-y-[34px]'>
                    <h3 className='text-2xl text-[#979694]' >CHECK OUT OUR FAVORITES!</h3>
                    <h1 className='text-7xl font-semibold text-[#4b5552]' >
                        Designer’s Choice
                    </h1>
                    <p className='text-xl w-[80%] text-[#979694]'>
                        Our works are 100% made by our craftsmen using sustainable resources with quality.
                    </p>
                    <button className='text-lg px-6 py-3 border-[4px] border-[#4c5653] text-[#4c5653]'>
                        VIEW FULL COLLECTION
                    </button>
                </div>
                <div className='flex mt-[90px] items-center'>
                    <p className='text-xl font-semibold text-[#4c5653]' >Available in:</p>
                    <div className='space-x-5 ms-5'>
                        <span className='w-5 h-5 px-4 py-2 bg-[#4b5552] rounded-[50%]' ></span>
                        <span className='w-5 h-5 px-4 py-2 bg-[#4b4d55] rounded-[50%]' ></span>
                        <span className='w-5 h-5 px-4 py-2 bg-[#b39fa3] rounded-[50%]' ></span>
                        <span className='w-5 h-5 px-4 py-2 bg-[#b39fa3] rounded-[50%]' ></span>
                    </div>
                </div>
            </div>
            <div>
                <img className='w-full' src={image2} alt="" />
            </div>
        </div>
    );
};

export default CollectionSection;