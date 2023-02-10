import React from 'react';
import imgC1 from '../../images/Rectangle 16.png'
import imgC2 from '../../images/Rectangle 20.png'
import imgC3 from '../../images/Rectangle 17.png'

const Collection = () => {
    return (
        <div className=' mt-24 container mb-24 mx-auto'>
            <h1 className='pb-12 pl-10 text-2xl'>OUR COLLECTION</h1>
            <div className='flex justify-center'>
            <div className=' grid grid-cols-1 gap-6 lg:grid-cols-3'>
                <div>
                    <div className=" w-96 text-center">
                        <figure><img src={`${imgC1}`} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className='text-xl'>Flower</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus. </p>

                        </div>
                    </div>
                </div>

                <div>
<div className=" w-96 text-center">
                        <figure><img src={`${imgC2}`} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className='text-xl'>Candles</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus. </p>
                        </div>
                    </div>
                </div>

                <div>
<div className=" w-96 text-center">
                        <figure><img src={`${imgC3}`} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className='text-xl'>Lamp Shade</h2>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis, voluptatibus. </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Collection;