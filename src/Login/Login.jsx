import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';

const Login = () => {

    const [error, setError] = useState(null);
    const { loginUser } = useContext(AuthContext);



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
                        <p className="text-xs text-gray-600 hover:underline hover:text-blue-600">New to chef koi? <Link to='/registration'>Register</Link> </p>
                        <div>
                            <input type="submit" value="Login" className='btn btn-primary' />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;