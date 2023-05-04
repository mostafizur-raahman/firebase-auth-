import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProviders';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const location = useLocation();
    // loadind fixed
    if (loading) return <div className='text-center p-10'>
        <button className="btn loading"></button>
    </div>
    if (user) return children;

    return <Navigate state={{ from: location.pathname }} to='/login'></Navigate >
};

export default PrivateRoute;