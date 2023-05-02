import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <div className=' bg-gray-600 p-5'>
            <div className=' text-white  mx-10 py-4 flex items-center justify-between'>
                <h1 className='text-3xl font-mono font-bold'>Chef Koi</h1>
                <div className='flex gap-5'>
                    <Link to='/'>Home</Link>
                    <Link to='/login'>Login</Link>
                    <Link to='/registration'>Registration</Link>
                    <Link to='/blog'>Blog</Link>
                </div>
            </div>
        </div>
    );
};

export default Header;