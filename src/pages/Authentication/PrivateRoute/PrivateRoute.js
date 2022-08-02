import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const PrivateRoute = ({ children }) => {
    const { parlourUser, loading } = useFirebase();

    let location = useLocation();

    if (loading) {
        return (
            <div className='text-center my-6'>
                <i className="fa-solid fa-3x fa-spinner"></i>
            </div>
        )
    }

    if (parlourUser?.email) {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }
    } replace />;

};

export default PrivateRoute;