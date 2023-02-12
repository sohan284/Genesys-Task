
import { useState } from 'react';
import { useSignInWithEmailAndPassword, useSignInWithGoogle, useAuthState } from 'react-firebase-hooks/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import Footer from '../../Shared/Footer/Footer';
import auth from './../../firebase.init';



const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [signInWithGoogle] = useSignInWithGoogle(auth);
    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useSignInWithEmailAndPassword(auth);


    const handleLogin = (event) => {
        event.preventDefault();
        const email = event.target.email.value;
        const password = event.target.password.value;
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch()
        setEmail('');
        setPassword('');
    }



    return (
        <div className='App  bg-white pt-24'>
            <button onClick={()=> signInWithGoogle()}>SIGN IN GOOGLE</button>
            <form onSubmit={()=>signInWithEmailAndPassword(email,password)} className='pb-[144px] w-[50%] mx-auto'>
                <h1 className='text-2xl mb-12'>LOGIN</h1>
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
                        required
                        className="w-full border border-black pl-3 p-1"
                        id="exampleFormControlInput2"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        placeholder="Password"
                    />
                </div>
                <button className='w-full bg-[#4E4534] text-base-200 p-2'>LOGIN</button>
                <div className='mt-2'>
                    <a href="/signup">Create account </a><span className='mx-2'> / </span><a href="/recover"> Forgot your password</a>
                </div>
            </form>

            <Footer></Footer>
        </div>
    );
};

export default Login;