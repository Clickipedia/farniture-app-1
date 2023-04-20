import React from 'react';

import bgImage from '../../../../assets/all-images/design-bg-image.png';

import img1 from '../../../../assets/all-images/design-image1.png';
import img2 from '../../../../assets/all-images/design-image2.png';
import img3 from '../../../../assets/all-images/design-image3.png';
import { Fade, Slide } from 'react-awesome-reveal';


const DesignSection = () => {
    return (
        <div className='bg-[#4b5552] 2xl:ps-[132px] md:ps-[50px] ps-[20px] relative overflow-hidden' >
            <Fade duration={2000} >
                <div className='2xl:space-y-[34px] space-y-[24px] 2xl:w-[780px] md:w-[60%] 2xl:py-[120px] py-[60px]'>
                    <h3 className='text-2xl text-[#979694]' >THE MINIMALIST LOOK:</h3>
                    <h1 className='md:text-7xl text-5xl font-semibold text-[#979694]' >
                        Sustainable <br />
                        Furniture
                    </h1>
                    <p className='md:text-xl md:w-[80%] text-[#979694]'>
                        Sustainable furniture design is an effort to address the environmental impact of furniture products on by con
                        sidering all aspects of the design and manufacturing.
                        manufacturing process. Design considerations can include using recycled materials in the manufacturing process and using products that can be disassembled and recycled after their useful life.
                    </p>
                    <div className='space-x-5'>
                        <button className='md:text-lg text-[10px] md:px-6 px-2 md:py-3 py-1 border-2 bg-[#dbdad8] text-[#4c5653] font-semibold duration-100 hover:bg-[#4c5653] hover:text-[#dbdad8] hover:outline'>
                            GET YOURS NOW
                        </button>
                        <button className='md:text-lg text-[10px] md:px-6 px-2 md:py-3 py-1 border-2 border-[#dbdad8] text-[#dbdad8] font-semibold  duration-100 hover:bg-[#dbdad8] hover:text-[#4c5653]'>
                            DISCOVER MORE
                        </button>
                    </div>
                    <div className='flex gap-5 pt-[32px]'>
                        <img src={img1} alt="" />
                        <img src={img2} alt="" />
                        <img src={img3} alt="" />
                    </div>
                </div>
            </Fade>
            <div className='absolute z-10 2xl:top-[130px] top-[100px] right-0 '>
                <Fade>
                    <img className='2xl:w-full md:block hidden w-[35rem]' src={bgImage} alt="" />
                </Fade>
            </div>
            <div className='absolute 2xl:top-[50px] top-[20px] 2xl:right-[420px] right-[340px]'>
                <Slide direction='right' duration={1500}>
                    <Fade>

                        <p className='2xl:text-[18rem] md:block hidden text-[15rem] font-bold text-[#6c7471]' >01</p>
                    </Fade>
                </Slide>
            </div>
        </div>
    );
};

export default DesignSection;