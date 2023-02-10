import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10  text-base-content">
            <div>
    <svg width="50" height="50" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fillRule="evenodd" clipRule="evenodd" className="fill-current"><path d="M22.672 15.226l-2.432.811.841 2.515c.33 1.019-.209 2.127-1.23 2.456-1.15.325-2.148-.321-2.463-1.226l-.84-2.518-5.013 1.677.84 2.517c.391 1.203-.434 2.542-1.831 2.542-.88 0-1.601-.564-1.86-1.314l-.842-2.516-2.431.809c-1.135.328-2.145-.317-2.463-1.229-.329-1.018.211-2.127 1.231-2.456l2.432-.809-1.621-4.823-2.432.808c-1.355.384-2.558-.59-2.558-1.839 0-.817.509-1.582 1.327-1.846l2.433-.809-.842-2.515c-.33-1.02.211-2.129 1.232-2.458 1.02-.329 2.13.209 2.461 1.229l.842 2.515 5.011-1.677-.839-2.517c-.403-1.238.484-2.553 1.843-2.553.819 0 1.585.509 1.85 1.326l.841 2.517 2.431-.81c1.02-.33 2.131.211 2.461 1.229.332 1.018-.21 2.126-1.23 2.456l-2.433.809 1.622 4.823 2.433-.809c1.242-.401 2.557.484 2.557 1.838 0 .819-.51 1.583-1.328 1.847m-8.992-6.428l-5.01 1.675 1.619 4.828 5.011-1.674-1.62-4.829z"></path></svg>
    <p>By completing this form you're signing<br/>up to receive our emails and<br />can unsubscribe at any time</p>
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

        </div>
    );
};

export default Footer;