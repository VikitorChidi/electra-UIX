import { useEffect } from 'react';
import { useNavigate } from 'react-router';
import useAuth from '../hook/useAuth';

// eslint-disable-next-line react/prop-types
const AuthGuard = ({ children }) => {
    const navigate = useNavigate();
    const { isInitialized, isAuthenticated, user } = useAuth();

    useEffect(() => {
        if (isInitialized && !isAuthenticated) navigate('/session/signin');
    }, [isInitialized, isAuthenticated, user, navigate]);

    return <>{isInitialized && isAuthenticated && children}</>;
};

export default AuthGuard;
