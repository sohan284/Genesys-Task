import React, { useState } from 'react';
import { createUserWithEmailAndPassword , getAuth, sendEmailVerification, updateProfile } from 'firebase/auth';
import Footer from '../../Shared/Footer/Footer';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';

const Signup = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    

   
 const handleCreateUser = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        const name = event.target.firstName.value;
       

        createUserWithEmailAndPassword(auth, email, password)
        .then(result => {
            const user = result.user;
            verifyEmail();
            updateUserName(name);
        })
        
        const verifyEmail = () => {
            sendEmailVerification(auth.currentUser)
                .then(() => {
                    alert('A verification request send to your email ')
                })
        }
        const updateUserName = (name) => {
            updateProfile(auth.currentUser, {
                displayName: name
            })
            .then( () => {
                
            })
            .catch(error =>{
               
            })
        }
       setEmail('')
       setPassword('')
       setFirstName('')
       setLastName('');
    }
    
    
      

    return (
        <div className='App  bg-white pt-24'>
    
        <form onSubmit={handleCreateUser} className='pb-[144px] w-[50%] mx-auto'>
        <h1 className='text-2xl mb-4'>CREATE ACCOUNT</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa blanditiis,</p>
                <div className="mb-6 mt-12">
                <input
                  type="text"
                  name='firstName'
                  required
                  className="w-full border border-black pl-3 p-1"
                  id="exampleFormControlInput2"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                />
              </div>
             <div className="mb-6">
                <input
                  type="text"
                  name='lastName'
                  className="w-full border border-black pl-3 p-1"
                  id="exampleFormControlInput2"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  placeholder="Last name"
                />
              </div>
             <div className="mb-6">
                <input
                  type="text"
                  name='email'
                  required
                  className="w-full border border-black pl-3 p-1"
                  id="exampleFormControlInput2"
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
                <button className='w-full bg-[#4E4534] text-base-200 p-2'>CREATE</button>
                
                <div className='mt-2'>
                <p>Already have an account?  <a href="/login" className=' border-b border-black'> Back to Login</a> </p>
            </div>
            </form>
    
             <Footer></Footer> 
        </div>
    );
};

export default Signup;