import React from 'react';
import bannerImage from '../../../../assets/all-images/banner image.png'

const BannerCarousel = () => {
    return (
        <div className=' bg-no-repeat bg-cover w-full h-[90vh] flex items-center'
        style={{
            backgroundImage:`url('${bannerImage}')`,
            backgroundPositionY:'-140px'
        }} >
            <div className='w-[50%] p-[136px] text-[#9e9d9b] space-y-[40px]'>
                <h3 className='text-2xl'>OUR WOODEN CONCEPTS:</h3>
                <h1 className='text-8xl font-bold text-[#4c5653]'>
                    Designer’s <br />
                    Collection
                </h1>
                <p className='text-lg'>
                    Sustainable furniture design is an effort to address the environmental impact of furniture products on by considering all aspects of the design & quality.
                    manufacturing process. Design considerations can include using recycled materials in the manufacturing process and using products that can be disassembled and recycled after their useful life.
                </p>
                <button className='duration-100 uppercase text-lg px-6 py-3 bg-[#4c5653] font-[500] text-[#dbdad8] hover:outline hover:bg-transparent hover:border-[#4c5653] hover:text-[#4c5653]'>
                    Discover More
                </button>
            </div>
        </div>
    );
};

export default BannerCarousel;