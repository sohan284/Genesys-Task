import React from 'react';
import imgB1 from '../../images/Group 8.png'
import imgB2 from '../../images/Group 8 (1).png'
import imgB3 from '../../images/Rectangle 3.png'
import imgB4 from '../../images/Rectangle 3 (1).png'

const Blog = () => {
    return (
        <div className='mt-24 pb-24 container mx-auto'>
            <h1 className='text-2xl pb-12 text-center'>OUR BLOG</h1>

            <div className='grid lg:grid-cols-2'>
                <div className='pb-5'>
                    <div className=" pr-3 lg:border-r border-[#80808075]  ">
                       <div className='lg:h-[743px] '>
                       <img className='h-full' src={`${imgB1}`} alt="" />
                       </div>
                        <div className='pt-3'>
                            <h2 className=''>16 May, 2022</h2>
                            <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita   </p>
                        </div>
                    </div>
                </div>
                <div className='lg:ml-3'>
                    <div className="card rounded-none mb-5 card-side">
                       <img  className='h-[234px] w-[351px]' src={imgB2} alt="Movie" />
                        <div className="ml-6">
                            <p>16 May, 2022</p>
                            <p className='text-[17px] mt-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit ipsa sed. </p>
                            
                        </div>
                    </div>
                    <div className="card rounded-none mb-5 card-side">
                        <img className=' h-[234px] w-[351px]'  src={imgB3}  alt="Movie" />
                        <div className="ml-6">
                            <p>16 May, 2022</p>
                            <p className='text-[17px] mt-2 font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime expedita   </p>
                            
                        </div>
                    </div>
                    <div className="card rounded-none card-side">
                        <img className=' h-[234px] w-[351px]'  src={imgB4} alt="Movie" />
                        <div className="ml-6">
                            <p>16 May, 2022</p>
                            <p className='text-[17px] mt-2 font-semibold'>Lorem ipsum  amet consectetur adipisicing elit. Maxime expedita ipsa sed  </p>
                            
                        </div>
                    </div>
                </div>
            </div>

           <div className='text-center mt-4'>
           <button className=' border border-black py-3 px-12'>VIEW ALL BLOG</button>
         
           </div>
        </div>
    );
};

export default Blog;