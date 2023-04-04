import { useNavigate } from 'react-router';
import useAuth from '../hook/useAuth';
import { useEffect } from 'react';

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const { isInitialized, isAuthenticated, user } = useAuth();

    useEffect(() => {
        if (!isInitialized && !isAuthenticated) navigate('/welcome');
    }, [isInitialized, isAuthenticated, user]);

    return <>{isInitialized && isAuthenticated && children}</>;
};

export default AuthGuard;
