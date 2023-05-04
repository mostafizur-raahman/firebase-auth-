import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import { FaGithub, FaGoogle } from 'react-icons/fa';

const Login = () => {


    const [error, setError] = useState(null);
    const { createUser, handleGoogle, loginUser, HandleGithub } = useContext(AuthContext);
    const navigate = useNavigate();
    const signInWithGoogle = () => {
        handleGoogle();
        navigate('/')
    }
    const signInWithGithub = () => {
        HandleGithub();
        navigate('/')
    }

    const handleLOgIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.text.value;
        const password = form.password.value;
        setError("");
        loginUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                navigate('/')
            })
            .catch(e => {
                setError(e.message);
                console.log(e.message);
            })

    }
    return (
        <div>
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">Log in</h1>
                    <p className='text-red-500'>{error}</p>
                    <form className="space-y-4" onSubmit={handleLOgIn}>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" name='text' placeholder="Email Address" className="w-full input input-bordered input-primary" />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password" name='password'
                                className="w-full input input-bordered input-primary" />
                        </div>
                        <p className="text-xs text-gray-600 hover:underline hover:text-blue-600"> <Link to='/registration'>New to chef koi? Register</Link> </p>
                        <div>
                            <input type="submit" value="Login" className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
            <div className='w-[400px] h-[300px] mx-auto'>
                <div className='input input-bordered mb-5 input-success w-full max-w-xs flex items-center gap-5 mt-5'>
                    <FaGoogle className='text-3xl' />
                    <button className='text-xl' onClick={signInWithGoogle}> sign in with Gmail</button>
                </div>
                <div className='input input-bordered input-success w-full max-w-xs flex items-center gap-5'>
                    <FaGithub className='text-black-500 text-3xl' />
                    <button className='text-xl' onClick={signInWithGithub}>Sign in with Github</button>
                </div>
            </div>
        </div>
    );
};

export default Login;