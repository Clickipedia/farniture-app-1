import React from 'react';

import image1 from '../../../../assets/all-images/product-image1.png';
import image2 from '../../../../assets/all-images/product-image2.png';
import image3 from '../../../../assets/all-images/product-image3.png';
import image4 from '../../../../assets/all-images/product-image4.png';


const ProductSection = () => {

    const data = [
        {
            id:'01',
            name:'The Wooden Set',
            price:300,
            img:image1
        },
        {
            id:'02',
            name:'Minimalist Set',
            price:450,
            img:image2
        },
        {
            id:'03',
            name:`Craftsman's Favorite`,
            price:250,
            img:image3
        },
        {
            id:'04',
            name:`Designer's Pick`,
            price:550,
            img:image4
        },
    ]


    return (
        <div className='bg-[#dcdbd9]'>
            <div className='md:w-[80%] w-full mx-auto grid grid-cols-2 md:gap-[63px] gap-1 md:py-[140px] py-[40px] md:px-[132px] px-[20px]'>
            {
                data.map((item,i)=><ProductCard key={item.id} item={item} i={i} />)
            }
        </div>
        </div>
    );
};


const ProductCard = ({item, i})=>{

    return(
        <div className={`mx-auto w-full relative ${i%2==0?'':'md:mt-16 mt-10'} `}>
            <img className='w-[80%] mx-auto' src={item.img} alt="" />
            <div className='w-[80%] mx-auto md:flex justify-between items-center md:px-[48px] px-[5px] md:py-[58px] py-[5px] bg-[#4b5552] md:text-xl text-xs font-semibold'>
                <p className='text-[#dbdad8]' >{item.name}</p>
                <button className='bg-[#dbdad8]  md:text-lg text-[10px] text-[#4b5552] md:px-5 px-[15px] md:py-1 py-[1px]'>
                    ${item.price}
                </button>
            </div>
            <span className='font-bold md:text-8xl text-5xl text-[#989795] absolute md:-top-10 -top-8 -left-2' >{item.id}</span>
        </div>
    )
}



export default ProductSection;