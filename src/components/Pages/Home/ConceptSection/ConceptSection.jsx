import React from 'react';

import leftImage from '../../../../assets/all-images/concept-left-image.png';
import rightImage from '../../../../assets/all-images/concept-right-image.png';
import { Fade, Slide } from 'react-awesome-reveal';


const ConceptSection = () => {
    return (
        <div className='bg-[#4c5653] md:h-[578px] h-[250px] 2xl:py-[140px] text-center grid grid-cols-8 justify-between items-center'>
            <div className='md:col-span-2 col-span-1'>
                <Slide>
                    <img src={leftImage} alt="" />
                </Slide>
            </div>
            <div className='md:col-span-4 col-span-6 md:space-y-[50px] space-y-4'>
                <Fade>
                    <h3 className='text-[#979694] 2xl:text-3xl md:text-xl' >Sustainable designs for you.</h3>
                    <h1 className='text-[#dbdad8] 2xl:text-8xl md:text-5xl text-3xl' >THE CONCEPT</h1>
                    <p className='text-[#979694] 2xl:text-xl md:text-lg text-xs' >
                        Sustainable furniture design is an effort to address the environmental impact of fur
                        niture products on by considering all aspects of the design and manufacturing pro
                        cess. Considerations can include using recycled materials in the manufacturing.
                        process and using products that can be disassembled and recycled after their useful life.
                    </p>
                </Fade>
            </div>
            <div className='ms-auto md:col-span-2 col-span-1'>
                <Slide direction='right' >
                    <img src={rightImage} alt="" />
                </Slide>
            </div>
        </div>
    );
};

export default ConceptSection;