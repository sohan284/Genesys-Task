
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import Footer from '../../Shared/Footer/Footer';
import auth from './../../firebase.init';
import { useNavigate } from 'react-router-dom';



const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [signInWithGoogle, loading, error] = useSignInWithGoogle(auth);
    const [password, setPassword] = useState('');
    const signInWithEmailAndPassword = useSignInWithEmailAndPassword(auth);
    


    return (
        <div className='App  bg-white pt-24'>
            <div className='pb-[144px] w-[50%] mx-auto'>
                <h1 className='text-2xl mb-12'>LOGIN</h1>
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
                <button onClick={()=>signInWithEmailAndPassword(email,password)} className='w-full bg-[#4E4534] text-base-200 p-2'>LOGIN</button>
                <div className='mt-2'>
                    <a href="/signup">Create account </a><span className='mx-2'> / </span><a href="/recover"> Forgot your password</a>
                </div>



            </div>

            <Footer></Footer>
        </div>
    );
};

export default Login;