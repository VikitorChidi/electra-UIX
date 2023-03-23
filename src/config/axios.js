import axios from 'axios';
import { backendConfig } from '../config';

const defaultInstance = axios.create({
    baseURL: backendConfig.portal
});

defaultInstance.defaults.headers['content-type'] = 'application/json';

defaultInstance.interceptors.response.use(
    (response) => response,
    (error) => Promise.reject((error?.response && error?.response?.data) || 'There is an error!')
);

export default defaultInstance;
