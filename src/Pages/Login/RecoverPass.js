import React, { useState } from 'react';
import Footer from './../../Shared/Footer/Footer';

const RecoverPass = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
   
    return (
        <div className='App  bg-white pt-24'>
            <div className='pb-[144px] w-[50%] mx-auto'>
                <div className='mb-6'>
                <h1 className='text-2xl mb-5'>RECOVER PASSWORD</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus, </p>
                </div>
                <div class="mb-6">
                    <input
                        type="text"
                        class="w-full border border-black pl-3 p-1"
                        id="exampleFormControlInput2"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div class="mb-6">
                    <input
                        type="password"
                        class="w-full border border-black pl-3 p-1"
                        id="exampleFormControlInput2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button className='w-full bg-[#4E4534] text-base-200 p-2'>LOGIN</button>
                <div className='mt-2'>
                    <a href="/signup">Remember Password? </a><span className='mx-2'> / </span><a className='border-b border-black' href="/login"> Back to Login</a>
                </div>



            </div>

            <Footer></Footer>
        </div>
    );
};

export default RecoverPass;