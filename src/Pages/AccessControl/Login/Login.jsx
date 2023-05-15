import React, { useContext } from 'react';
import { FaGoogle } from "react-icons/fa";
import img from '../../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../Providers/AuthProvider';
const Login = () => {

    const { emailLogin } = useContext(AuthContext);

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        emailLogin(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='grid lg:grid-cols-2 items-center my-10'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className='border p-12 rounded-lg  '>
                <h1 className='text-4xl text-center font-bold'>Login</h1>
                <form onSubmit={handleLogin}>
                    <div className='space-y-1'>
                        <label htmlFor="email" className='text-xl'>Email</label>
                        <br />
                        <input type="text" placeholder='Your Email' name='email' className='border px-3 py-2 rounded-lg w-full' />
                    </div>
                    <div className='space-y-1 my-8'>
                        <label htmlFor="password" className='text-xl'>Password</label>
                        <br />
                        <input type="text" placeholder='Your Password' name='password' className='border px-3 py-2 rounded-lg w-full' />
                    </div>
                    <input type="submit" value="Sign In" className='btn btn-warning w-full' />
                    <div className="text-center space-y-3 mt-5" >
                        <p>Or Signin With</p>
                        <span className='grid justify-center'>
                            <FaGoogle className='flex justify-center text-2xl cursor-pointer'></FaGoogle>
                        </span>
                    </div>
                </form>
                <p className='text-center mt-6'>
                    Don't Have an account? <Link to={'/registration'} className='text-warning font-bold'>Sign Up</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;