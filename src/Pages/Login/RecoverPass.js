import { sendPasswordResetEmail } from 'firebase/auth';
import React, { useState } from 'react';
import auth from './../../firebase.init';
import Footer from './../../Shared/Footer/Footer';

const RecoverPass = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit=(event)=>{
        event.preventDefault()

        const email = event.target.email.value ;

        sendPasswordResetEmail(auth,email)
        .then(()=>{
            alert('Rocover request sent to your email')
        })
        .catch()
    }


   
    return (
        <div className='App  bg-white pt-24'>
             <form onSubmit={handleSubmit} className='pb-[144px] w-[50%] mx-auto'>
                <h1 className='text-2xl mb-3'>RECOVER PASSWORD</h1>
               <p className='mb-6'>White your email to send password reset request</p>
               <div className="mb-6">
                    <input
                        type="text"
                        required
                        className="w-full border border-black pl-3 p-1"
                        id="exampleFormControlInput2"
                        name='email'
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="Email"
                    />
                </div>
                <div className="mb-6">
                    <input
                        type="password"
                        name='password'
                        className="w-full border border-black pl-3 p-1"
                        id="exampleFormControlInput2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button className='w-full bg-[#4E4534] text-base-200 p-2'>SUBMIT</button>
                <div className='mt-2'>
                    <p className='inline'>Remember password? </p><span className='mx-2'> / </span><a className='border-b border-black' href="/login"> Back to Login</a>
                </div>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default RecoverPass;