import React from 'react';
import bannerImage from '../../../../assets/all-images/banner image.png'
import { Fade } from 'react-awesome-reveal';

const BannerCarousel = () => {
    return (
        <div className=' bg-no-repeat -bg-right-[50px] bg-cover bg-[#dbdad8] w-full 2xl:h-[88vh] h-[80vh] flex md:items-center'
        style={{
            backgroundImage:`url('${bannerImage}')`,
            backgroundPositionY:'-160px'
        }} >
            <Fade>
            <div className='2xl:w-[50%] md:w-[45%] w-full 2xl:p-[136px] p-8 text-[#9e9d9b] 2xl:space-y-[40px] space-y-4'>
                <h3 className='text-2xl'>OUR WOODEN CONCEPTS:</h3>
                <h1 className='2xl:text-8xl md:text-5xl text-4xl font-bold text-[#4c5653]'>
                    Designer’s <br/>
                    Collection
                </h1>
                <p className='text-lg'>
                    Sustainable furniture design is an effort to address the environmental impact of furniture products on by considering all aspects of the design & quality.
                    manufacturing process. Design considerations can include using recycled materials in the manufacturing process and using products that can be disassembled and recycled after their useful life.
                </p>
                <button className=' uppercase text-lg px-6 py-3 bg-[#4c5653] font-[500] text-[#dbdad8] duration-100 hover:outline hover:bg-transparent hover:border-[#4c5653] hover:text-[#4c5653]'>
                    Discover More
                </button>
            </div>
            </Fade>
        </div>
    );
};

export default BannerCarousel;