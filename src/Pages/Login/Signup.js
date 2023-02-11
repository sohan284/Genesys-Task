import React, { useState } from 'react';
import { useAuthState, useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import Footer from '../../Shared/Footer/Footer';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [createUserWithEmailAndPassword , loading , error] = useCreateUserWithEmailAndPassword(auth);
 let errorMessage;
    const handleCreateUser = () =>{
        createUserWithEmailAndPassword(email, password)
        
    }
    if (error) {
        errorMessage = <p className='text-[red] font-semibold my-3 text-sm'>Please enter valid information.</p>
      }
      

    return (
        <div className='App  bg-white pt-24'>
        <div className='pb-[144px] w-[50%] mx-auto'>
        <h1 className='text-2xl mb-4'>CREATE ACCOUNT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis,</p>
             <div class="mb-6 mt-12">
                <input
                  type="text"
                  class="w-full border border-black pl-3 p-1"
                  id="exampleFormControlInput2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                />
              </div>
             <div class="mb-6">
                <input
                  type="text"
                  class="w-full border border-black pl-3 p-1"
                  id="exampleFormControlInput2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
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
             <button onClick={() => createUserWithEmailAndPassword(email, password)} className='w-full bg-[#4E4534] text-base-200 p-2'>LOGIN</button>
             {errorMessage}
            <div className='mt-2'>
                <p href="/signup">Already have an account?  <a href="/login" className=' border-b border-black'> Back to Login</a> </p>
            </div>
    
    
         
        </div>
    
             <Footer></Footer> 
        </div>
    );
};

export default Signup;