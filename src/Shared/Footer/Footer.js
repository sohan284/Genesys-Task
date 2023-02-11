import React from 'react';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';
import img1 from './visa 1.png'
import img2 from './Vector (2).png'
import img3 from './paypal 1.png'
import img4 from './Vector (3).png'


const Footer = () => {
  return (
    <div>
      <footer className="footer p-10 container mx-auto text-base-content">
        <div>
          <div  className=' mb-8 w-[80px] h-[80px]'>
          <img className='w-full h-full' src="https://i.ibb.co/zbHv8t4/images-removebg-preview-3.png" alt="" /> 
          <h1 className='font-bold text-center'>Genesys</h1>
          </div>
      
          <p>By completing this form you're signing<br />up to receive our emails and<br />can unsubscribe at any time</p>
        </div>
        <div>
          <span className="font-semibold text-black">MENU</span>
          <a className="link link-hover">Home</a>
          <a className="link link-hover">Gift Card</a>
          <a className="link link-hover">Seasonal</a>
          <a className="link link-hover">Kid & Nursery</a>
          <a className="link link-hover">Pet</a>
          <a className="link link-hover">Gift Registry</a>
        </div>
        <div>
          <span className="font-semibold text-black">CUSTOMER CARE</span>
          <a className="link link-hover">Shipping Policy</a>
          <a className="link link-hover">Returns Policy</a>
          <a className="link link-hover">Privacy Policy</a>
          <a className="link link-hover">Press kit</a>
        </div>
        <div>
          <span className="font-semibold text-black">ABOUT US</span>
          <a className="link link-hover">Our Story</a>
          <a className="link link-hover">Terms Of Services</a>
          <a className="link link-hover">Articles</a>
        </div>
        <div>
          <span className="font-semibold text-black">SUBSCRIBE TO OUR NEWSLETTER</span>
          <div className="form-control w-80">
            <label className="label">
              <span className="label-text">Signup for our newsletter to stay up to date on sales and events</span>
            </label>
            <div className="relative">
              <input type="text" placeholder="Email" className="input rounded-none bg-transparent border border-black w-full pr-16" />
              <button className="btn bg-black absolute rounded-none py-3 px-9 top-0 right-0 ">Join</button>
            </div>
            <label className="label">
              <span className="label-text">By completing this form you're signing up to receive our emails and can unsubscribe at any time</span>
            </label>
          </div>
        </div>
      </footer>
      <div className=' border-b mx-10 '>
        <div  className='flex justify-between pb-2 border-b mx-20  border-black mb-3'>
          <div className='flex p-3'>
            <FaFacebookF></FaFacebookF>
            <AiOutlineTwitter className='mx-2'></AiOutlineTwitter>
            <AiFillInstagram></AiFillInstagram>
          </div>
          <div>
            <div>
            <select name="" id="" className='border p-2 border-black bg-[#F0F0F0]'>
              <option value="United States (USD $)">United States (USD $)</option>
            </select>
            </div>
            <div className='flex pt-2  justify-end'>
<img src={img1} className="px-1"  alt="" />
<img src={img2} className="px-1"  alt="" />
<img src={img3} className="px-1"  alt="" />
<img src={img4} className="px-1"  alt="" />
            </div>
          </div>
        </div>
        <p className='text-center pb-10'>Copyright © 2023 by cole & Son - All right reserved</p>
      </div>
    </div>
  );
};

export default Footer;