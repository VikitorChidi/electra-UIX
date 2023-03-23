import { createContext, useEffect, useReducer } from 'react';
import { useNavigate } from 'react-router';
import axios from '../config/axios';
import PropTypes from 'prop-types';
import { getAccessToken, setAccessToken, setSession } from '../config/token';

const initialAuthState = {
    isAuthenticated: false,
    isInitialized: false,
    user: null
};

const handlers = {
    INITIALIZE: (state, action) => {
        const { isAuthenticated, user } = action.payload;

        return {
            ...state,
            isAuthenticated,
            isInitialized: true,
            user
        };
    },

    LOGIN: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    },

    LOGOUT: (state) => ({
        ...state,
        isAuthenticated: false,
        user: null
    }),

    REGISTER: (state, action) => {
        const { user } = action.payload;

        return {
            ...state,
            isAuthenticated: true,
            user
        };
    }
};

const reducer = (state, action) => (handlers[action.type] ? handlers[action.type](state, action) : state);

const AuthContext = createContext({
    ...initialAuthState,
    method: 'JWT',
    login: () => Promise.resolve(),
    logout: () => Promise.resolve(),
    register: () => Promise.resolve(),
    dispatchUser: () => Promise.resolve()
});

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {
    const navigate = useNavigate();
    const [state, dispatch] = useReducer(reducer, initialAuthState);

    useEffect(() => {
        const initialize = async () => {
            try {
                const accessToken = getAccessToken();
                if (accessToken) {
                    setSession(accessToken);
                    const response = await axios.get('/login');
                    const { user } = response.data;

                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: true,
                            user
                        }
                    });
                } else {
                    dispatch({
                        type: 'INITIALIZE',
                        payload: {
                            isAuthenticated: false,
                            user: null
                        }
                    });
                }
            } catch (err) {
                console.error(err);
                dispatch({
                    type: 'INITIALIZE',
                    payload: {
                        isAuthenticated: false,
                        user: null
                    }
                });
            }
        };
        initialize().then((res) => console.log('from JWTAuthContext >>>', res));
    }, []);

    const login = async (email, password) => {
        try {
            const response = await axios.post('/login', { email, password });
            const { accessToken, user } = response.data;

            setSession(accessToken);
            navigate('/dashboard/default');
            dispatch({
                type: 'LOGIN',
                payload: {
                    user
                }
            });
        } catch (err) {
            console.error(err);
            navigate('/session/signin');
        }
    };

    const logout = async () => {
        setSession(null);
        navigate('/session/signin');
        dispatch({
            type: 'LOGOUT'
        });
    };

    const register = async (email, firstName, lastName, password) => {
        const response = await axios.post('/signup', { email, firstName, lastName, password });
        const { accessToken, user } = response.data;
        setAccessToken(accessToken);
        dispatch({
            type: 'REGISTER',
            payload: {
                user
            }
        });
    };

    const dispatchUser = async (user) => {
        dispatch({
            type: 'LOGIN',
            payload: {
                user
            }
        });
    };

    return (
        <AuthContext.Provider
            value={{
                ...state,
                method: 'JWT',
                login,
                logout,
                register,
                dispatchUser
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.protoType = {
    children: PropTypes.node
};
export default AuthContext;
