import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import toast from 'react-hot-toast';
import { FaBeer, FaGithub, FaGoogle } from 'react-icons/fa';
const Registration = () => {


    const handleRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const name = form.text.value;
        const email = form.email.value;
        const password = form.password.value;
        const img = form.imgurl.value;
        // console.log(name, email, password, img);
        setError(null);
        createUser(email, password)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser, img);
            })
            .catch(e => {
                setError(e.message);
            })
    }
    return (
        <div className='mt-5'>
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">Registration please</h1>

                    <form className="space-y-4" onSubmit={handleRegister}>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Name</span>
                            </label>
                            <input type="text" name='text' placeholder="Your Name" className="w-full input input-bordered input-primary" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Email</span>
                            </label>
                            <input type="text" name='email' placeholder="Email Address" className="w-full input input-bordered input-primary" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Password</span>
                            </label>
                            <input type="password" placeholder="Enter Password" name='password'
                                className="w-full input input-bordered input-primary" required />
                        </div>
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Image Url</span>
                            </label>
                            <input type="file" name='imgurl' placeholder="Your Name" className="w-full input input-bordered input-primary" />
                        </div>
                        <p className="text-xs text-gray-600 hover:underline hover:text-blue-600">Already have an account on  chef koi? please  <Link to='/login'>Login</Link> </p>
                        <div className='text-center'>
                            <input type="submit" value="Register" className='btn btn-primary' />
                        </div>
                    </form>

                </div>
            </div>
        </div>
    );
};

export default Registration;