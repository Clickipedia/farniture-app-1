import React from 'react';

import image1 from '../../../../assets/all-images/post-image1.png';
import image2 from '../../../../assets/all-images/post-image2.png';
import image3 from '../../../../assets/all-images/post-image3.png';
import image4 from '../../../../assets/all-images/post-image4.png';



const PostSection = () => {

    const data = [
        {
            id: 1,
            title: 'THE MINIMALIST TREND',
            desc: 'Lorem ipsum dolor sit amet, consectetur.',
            img: image1
        },
        {
            id: 2,
            title: 'THE WOODEN CONCEPT',
            desc: 'Lorem ipsum dolor sit amet, consectetur.',
            img: image2
        },
        {
            id: 3,
            title: 'CHOOSING YOUR FURNITURE',
            desc: 'Lorem ipsum dolor sit amet, consectetur.',
            img: image3
        },
        {
            id: 4,
            title: 'THE ART OF MINIMALISM',
            desc: 'Lorem ipsum dolor sit amet, consectetur.',
            img: image4
        }
    ]



    return (
        <div className='w-full md:py-[78px] py-[30px] px-5 bg-[#dbdad8]'>

            <div className='md:w-[650px] px-2 w-full mx-auto text-center mb-[75px]'>
                <h1 className='md:text-6xl text-3xl font-bold text-[#4b5552] mb-[30px]' >Recent Posts</h1>
                <p className='text-[#a1a09e] md:text-xl' >Sustainable furniture design strives to create a closed-loop cycle in which materials and products are perpetually recycled and designed.</p>
            </div>

            <div className='grid md:grid-cols-2 grid-cols-1 gap-[66px] md:w-[1178px] mx-auto'>
                {

                    data.map(post=><PostCard key={post.id} post={post} />)
                }
            </div>

        </div>
    );
};


const PostCard = ({post})=>{

    return(
        <div className='mx-auto'>
            <img className='h-[260px] object-cover' src={post.img} alt="" />
            <div className='bg-[#e3e2e1] p-5'>
                <h1 className='text-2xl font-semibold text-[#4b5552]'>{post.title}</h1>
                <p className='text-[#a1a09e] text-lg' >{post.desc}</p>
            </div>
        </div>
    )
}


export default PostSection;