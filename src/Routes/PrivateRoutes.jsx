import React, { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';
import { Grid } from 'react-loader-spinner';
import { Navigate } from 'react-router-dom';

const PrivateRoutes = ({ children }) => {
    const { user, loader } = useContext(AuthContext);
    if (loader) {
        return (
            <Grid
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        )
    }
    if (user?.email) {
        return children
    }
    return <Navigate to={'/login'} replace></Navigate>;
};

export default PrivateRoutes;