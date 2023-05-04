import React, { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../Providers/AuthProviders';
import './Header.css'
const Header = () => {
    const { user, logOut } = useContext(AuthContext);
    // console.log(user);
    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }
    return (
        <div className='bg-black p-5'>
            <div className=' text-white  mx-10 py-4 lg:flex sm:p-3 items-center justify-between'>
                <h1 className='text-6xl font-mono font-bold  text-yellow-400'>Chef Koi</h1>
                <div className='flex gap-5 items-center'>
                    <NavLink to='/' activeClassName='active'>Home</NavLink>
                    <NavLink to='/blog' activeClassName='active'>Blog</NavLink>
                    {/* <p>{
                        user && <div className=''> <p src={user.displayName} alt="" /></div>
                    }</p> */}

                    {
                        user ? <div className='flex gap-5'>
                            <img src={user?.photoURL} alt="User photo" className='rounded-full w-[50px] h-[50px]' />
                            <p><button onClick={handleLogout} className='btn btn-warning'>Logout</button></p>
                        </div> : <div className='flex gap-3'>
                            <p><NavLink activeClassName='active' to='/login'>Login</NavLink></p>
                            <p><NavLink to='/registration' activeClassName='active'>Registartion</NavLink></p>
                        </div>
                    }

                </div>
            </div>
        </div>
    );
};

export default Header;