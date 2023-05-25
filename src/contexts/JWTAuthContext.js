import { createContext, useEffect } from 'react';
import axios from '../config/axios';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import useClosableSnackbar from '../hook/useClosableSnackbar';
import { setAuthenticated, setLoading, setUser } from '../store/reducers/auth';
import { getAccessToken, setSession } from '../config/token';
import { loginAuth, registerAuth } from '../pages/authentication/authService';
import jwtDecode from 'jwt-decode';

export const setAuthHeader = (token) => {
    if (token) axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    else delete axios.defaults.headers.common['Authorization'];
};

const AuthContext = createContext({
    method: 'JWT',
    login: () => Promise.resolve(),
    register: () => Promise.resolve(),
    logout: {}
});

export const AuthProvider = ({ children }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { enqueueSnackbar } = useClosableSnackbar();

    const handleAuthSuccess = (user, token, toDashboard = true) => {
        setLoading(false);
        dispatch(setUser(user));
        dispatch(setAuthenticated(true));
        setSession(token);
        setAuthHeader(token);
        if (toDashboard) navigate('/dashboard/default');
    };

    const handleAuthFailure = (toWelcome = true) => {
        dispatch(setLoading(false));
        dispatch(setAuthenticated(false));
        setAuthHeader(null);
        if (toWelcome) navigate('/welcome');
    };

    const login = ({ username, password }) => {
        dispatch(setLoading(true));
        loginAuth({ username, password })
            .then((res) => {
                const { token } = res.data;
                const decodedToken = jwtDecode(token);
                const user = { ...decodedToken };
                handleAuthSuccess(user, token);
                enqueueSnackbar(`Welcome, ${user.firstName}`, { variant: 'success' });
            })
            .catch((err) => {
                const errorMessage = `${err?.message ?? err?.error ?? 'Something went wrong!'} 🙁`;
                enqueueSnackbar(errorMessage, { variant: 'error' });
                handleAuthFailure();
            });
    };

    const register = (payload) => {
        dispatch(setLoading(true));
        registerAuth(payload)
            .then((res) => {
                dispatch(setLoading(false));
                navigate('/session/signin');
            })
            .catch((err) => {
                console.warn(err);
                dispatch(setLoading(false));
            });
    };

    const logout = () => {
        setAuthHeader(null);
        setSession(null);
        dispatch(setUser({}));
        navigate('/welcome');
    };

    const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

    useEffect(() => {
        //Reload page successfully if token is valid
        const recoveredToken = getAccessToken();
        if (recoveredToken) {
            try {
                const decodeRecoveredToken = jwtDecode(recoveredToken);
                const { email, firstName, lastName } = decodeRecoveredToken;
                const principal = { email, firstName, lastName };
                if (principal) {
                    handleAuthSuccess(principal, recoveredToken, true);
                } else {
                    handleAuthFailure();
                }
            } catch (err) {
                handleAuthFailure();
            }
        } else handleAuthFailure();
    }, []);

    return (
        <AuthContext.Provider
            value={{
                method: 'JWT',
                login,
                logout,
                register,
                user,
                isAuthenticated,
                loading
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

export default AuthContext;
