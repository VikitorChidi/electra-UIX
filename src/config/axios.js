import axios from 'axios';
import { createBrowserHistory } from 'history';
import { getAccessToken, isValidToken } from './token';

const history = createBrowserHistory();
const axiosInstance = axios.create({
    baseURL: process.env.REACT_APP_SERVER_BASE_ADDRESS,
    withCredentials: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*'
    }
});

const successInterceptor = (response) => response;
const failureInterceptor = (error) => Promise.reject((error.response && error.response.data) || { message: 'Something went wrong!' });

axiosInstance.interceptors.request.use((req) => {
    const token = getAccessToken();
    if (
        req?.url?.includes('/auth') ||
        req?.url?.includes('api/auth') ||
        req?.url?.includes('api/anonymous') ||
        isValidToken(token) ||
        req?.url?.includes('/')
    ) {
        return req;
    } else {
        history.push({
            pathname: '/welcome',
            state: { sessionExpired: true }
        });
        window.location.reload();
    }
});

axiosInstance.interceptors.response.use(successInterceptor, failureInterceptor);

export default axiosInstance;
