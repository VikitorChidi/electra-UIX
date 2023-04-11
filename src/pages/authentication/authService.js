import axios from '../../config/axios';

export const loginAuth = (params) => axios.post('/auth/signin', params);

export const registerAuth = (payload) => axios.post('/auth/signup', payload);
