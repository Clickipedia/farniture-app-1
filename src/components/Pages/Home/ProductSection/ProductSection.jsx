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
            <div className='w-[80%] mx-auto grid grid-cols-2 gap-[63px] py-[140px] px-[132px]'>
            {
                data.map((item,i)=><ProductCard key={item.id} item={item} i={i} />)
            }
        </div>
        </div>
    );
};


const ProductCard = ({item, i})=>{

    return(
        <div className={`mx-auto relative ${i%2==0?'':'mt-16'} `}>
            <img src={item.img} alt="" />
            <div className='flex justify-between items-center px-[48px] py-[58px] bg-[#4b5552] text-xl font-semibold'>
                <p className='text-[#dbdad8]' >{item.name}</p>
                <button className='bg-[#dbdad8] text-[#4b5552] px-5 py-1'>
                    ${item.price}
                </button>
            </div>
            <span className='font-bold text-8xl text-[#989795] absolute -top-10 -left-2' >{item.id}</span>
        </div>
    )
}



export default ProductSection;