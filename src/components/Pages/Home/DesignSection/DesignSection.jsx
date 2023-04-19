import React from 'react';

import bgImage from '../../../../assets/all-images/design-bg-image.png';

import img1 from '../../../../assets/all-images/design-image1.png';
import img2 from '../../../../assets/all-images/design-image2.png';
import img3 from '../../../../assets/all-images/design-image3.png';


const DesignSection = () => {
    return (
        <div className='bg-[#4b5552] ps-[132px] relative overflow-hidden' >
            <div className='space-y-[34px] w-[780px] py-[120px]'>
                <h3 className='text-2xl text-[#979694]' >THE MINIMALIST LOOK:</h3>
                <h1 className='text-7xl font-semibold text-[#979694]' >
                    Sustainable <br />
                    Furniture
                </h1>
                <p className='text-xl w-[80%] text-[#979694]'>
                    Sustainable furniture design is an effort to address the environmental impact of furniture products on by con
                    sidering all aspects of the design and manufacturing.
                    manufacturing process. Design considerations can include using recycled materials in the manufacturing process and using products that can be disassembled and recycled after their useful life.
                </p>
                <div className='space-x-5'>
                    <button className='text-lg px-6 py-3 bg-[#dbdad8] text-[#4c5653] font-semibold'>
                        GET YOURS NOW
                    </button>
                    <button className='text-lg px-6 py-3 border-2 border-[#dbdad8] text-[#dbdad8] font-semibold'>
                        DISCOVER MORE
                    </button>
                </div>
                <div className='flex gap-5 pt-[32px]'>
                    <img src={img1} alt="" />
                    <img src={img2} alt="" />
                    <img src={img3} alt="" />
                </div>
            </div>
            <div className='absolute z-10 -bottom-[120px] right-0 '>
                <img src={bgImage} alt="" />
            </div>
            <div className='absolute top-[50px] right-[420px]'>
                <p className='text-[18rem] font-bold text-[#6c7471]' >01</p>
            </div>
        </div>
    );
};

export default DesignSection;