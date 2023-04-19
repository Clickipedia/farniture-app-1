import React from 'react';

import leftImage from '../../../../assets/all-images/concept-left-image.png';
import rightImage from '../../../../assets/all-images/concept-right-image.png';


const ConceptSection = () => {
    return (
        <div className='bg-[#4c5653] h-[578px] py-[140px] text-center grid grid-cols-8 justify-between items-center'>
            <div className='col-span-2'>
                <img src={leftImage} alt="" />
            </div>
            <div className='col-span-4 space-y-[50px]'>
            <h3 className='text-[#979694] text-3xl' >Sustainable designs for you.</h3>
            <h1 className='text-[#dbdad8] text-8xl' >THE CONCEPT</h1>
            <p className='text-[#979694] text-xl' >
                Sustainable furniture design is an effort to address the environmental impact of fur
                niture products on by considering all aspects of the design and manufacturing pro
                cess. Considerations can include using recycled materials in the manufacturing.
                process and using products that can be disassembled and recycled after their useful life.
            </p>
            </div>
            <div className='ms-auto col-span-2'>
            <img src={rightImage} alt="" />
            </div>
        </div>
    );
};

export default ConceptSection;