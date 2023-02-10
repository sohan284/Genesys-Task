import React from 'react';
import Collection from './Collection';
import Blog from './Blog';
import Footer from '../../Shared/Footer/Footer';

const Home = () => {
    return (
       <div>
         <div className='relative'>
            <img src="https://i.ibb.co/nDNpHvV/Frame-613.png" alt="" />
           <div className=' bottom-0 text-white  ml-24 text-start absolute'>
           <h1 className=' text-4xl mb-3'>Welcome to <br/> Genesys Furniture </h1>
           <p className='mb-8'>Here you can find your best furniture</p>
           <button className='bg-[#BCB2A0] mb-[15%] hidden lg:block text-black py-3 px-12'>SHOP NOW</button>
           </div>
        </div>

        <Collection></Collection>

        <div className='relative'>
            <img className=' lg:h-full h-56' src="https://i.ibb.co/QF28gCH/Frame-40.png" alt="" />
           <div className=' bottom-0 lg:ml-[40%] ml-[25%] text-white  ml-24 text-center absolute'>
           <h1 className=' text-4xl mb-3'>20% OFF</h1>
           <p className='mb-8'>And extra 50% off sale styles code FORCE20</p>
           <button className='bg-transparent lg:mb-[15%] border text-white py-3 px-12'>VIEW ALL</button>
           </div>
        </div>
        <Blog></Blog>
        <Footer></Footer>
       </div>
        
    );
};

export default Home;