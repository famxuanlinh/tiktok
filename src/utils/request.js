import axios from 'axios';

const request = axios.create({
    baseURL: 'https://tiktok.fullstack.edu.vn/api/',
});

export const get = async (path, optins = {}) => {
    const response = await request.get(path, optins);
    return response.data;
};

export default request;
