import React from 'react';

import { AiFillStar } from 'react-icons/ai'

import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { Slide } from 'react-awesome-reveal';

const ReviewSection = () => {

    const reviews = [
        {
            id: 1,
            name: 'Rohit Shrama',
            age: 36,
            job: 'Cricket Player',
            image: 'https://opt.toiimg.com/recuperator/img/toi/m-69257289/69257289.jpg',
            msg: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate accusantium nostrum velit commodi atque ipsam repellat dicta cumque nemo nulla.'
        },
        {
            id: 2,
            name: 'Virat Kohli',
            age: 34,
            job: 'Doctor',
            image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/316600/316605.png',
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus cupiditate quaerat in nemo perspiciatis ut nostrum vitae nulla dolorum accusantium.'
        },
        {
            id: 3,
            name: 'Vijay Sankar',
            age: 28,
            job: 'Student',
            image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322613.png',
            msg: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error nemo eveniet explicabo eius iure officia consequuntur placeat deserunt voluptates ipsum?'
        },
        {
            id: 4,
            name: 'Kedar Jadav',
            job: 'Mafia',
            age: 30,
            image: 'https://icccricketschedule.gumlet.io/wp-content/uploads/2018/04/kedar-jadav.jpg?compress=true&quality=80&w=640&dpr=2.6',
            msg: ' Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed ex ad enim placeat dolor laborum tempora cum id aperiam inventore!'
        },
        {
            id: 5,
            name: 'Munaf Patel',
            age: 42,
            job: 'Robber',
            image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322600/322625.png',
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi esse corrupti cupiditate placeat voluptates quidem fugit, laboriosam blanditiis.'
        },
        {
            id: 6,
            name: 'Piyush Chawla',
            age: 53,
            job: 'Businessman',
            image: 'https://img1.hscicdn.com/image/upload/f_auto,t_ds_square_w_320,q_50/lsci/db/PICTURES/CMS/322200/322272.png',
            msg: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure minima asperiores sequi voluptatibus incidunt ut est ab, illo mollitia doloremque!'
        },
    ]

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <div className='my-20 w-full'>

            <div className='md:w-[650px] px-2 w-full mx-auto text-center mb-[75px]'>
                <h1 className='md:text-6xl text-3xl font-bold text-[#4b5552] mb-[30px]' >Testimonials</h1>
                <p className='text-[#a1a09e] md:text-xl' >Sustainable furniture design strives to create a closed-loop cycle in which materials and products are perpetually recycled and designed.</p>
            </div>

            <div className='px-[10rem] mx-auto'>
                <Slide direction='down'>
                    <Carousel
                        responsive={responsive}
                        // autoPlay
                        // autoPlaySpeed={2000}
                        showDots
                        containerClass='pb-20'
                        itemClass='p-5'
                        rewind
                        rewindWithAnimation
                        arrows={false}
                    >
                        {
                            reviews.map(person => <ReviewCard key={person.id} person={person} />)
                        }
                    </Carousel>
                </Slide>
            </div>

        </div>
    );
};


const ReviewCard = ({ person }) => {

    return (

        <div>
            <Slide direction='up'>

                <div className='relative mx-auto bg-slate-50 space-y-3 rounded-xl text-lg text-center shadow-xl w-[25rem] h-[20rem]'>
                    <div className='bg-[#4b5552] py-4 px-5 gap-5 flex justify-between items-center rounded-t-xl'>
                        <img className='md:w-20 w-12 md:h-20 h-12 border-4 object-top border-white bg-white object-cover shadow-xl rounded-[50%]' src={person.image} alt="" />
                        <div className='w-full grid grid-cols-2 items-center justify-between gap-2 text-lg'>
                            <h1 className='font-semibold text-white text-left'>{person.name}</h1>
                            <h1 className='font-semibold text-white text-right'>Age: {person.age}</h1>

                            <div className='flex text-2xl text-yellow-200'>
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                                <AiFillStar />
                            </div>
                            <h1 className='text-sm font-normal text-white text-right'>({person.job})</h1>
                        </div>
                    </div>
                    <p className='md:text-lg text-sm px-5 py-5 text-[#a1a09e]' >{person.msg}</p>
                </div>
            </Slide>
        </div>

    )
}



export default ReviewSection;