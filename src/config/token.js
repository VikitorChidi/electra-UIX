import jwtDecode from 'jwt-decode';
import axios from '../config/axios';

export const isValidToken = (accessToken) => {
    if (!accessToken) return false;

    const decodedToken = jwtDecode(accessToken);
    let currentTime = Date.now() / 1000;

    return decodedToken.exp > currentTime;
};

export const setSession = (accessToken) => {
    if (accessToken) {
        localStorage.setItem('erToken', accessToken);
        axios.defaults.headers.common.Authorization = `Bearer ${accessToken}`;
    } else {
        localStorage.removeItem('erToken');
        delete axios.defaults.headers.common.Authorization;
    }
};

export const getTemporarySession = () => window.sessionStorage.getItem('erToken');

export const getSession = () => window.localStorage.getItem('erToken');

export const getAccessToken = () => getSession() ?? getTemporarySession();

export const setAccessToken = (token) => setSession(token);
