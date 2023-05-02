import React from 'react';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <div className="relative flex flex-col justify-center overflow-hidden">
                <div className="w-full p-6 m-auto bg-white rounded-md shadow-md lg:max-w-lg">
                    <h1 className="text-3xl font-semibold text-center text-purple-700">Registration please</h1>
                    <form className="space-y-4">
                        <div>
                            <label className="label">
                                <span className="text-base label-text">Name</span>
                            </label>
                            <input type="text" name='text' placeholder="Your Name" className="w-full input input-bordered input-primary" />
                        </div>
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
                        <p className="text-xs text-gray-600 hover:underline hover:text-blue-600">Already have an account on  chef koi? please  <Link to='/login'>Login</Link> </p>
                        <div>
                            <input type="submit" value="Register" className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Registration;