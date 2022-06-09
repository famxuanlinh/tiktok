import axios from 'axios';

const httpRequest = axios.create({
    baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, optins = {}) => {
    const response = await httpRequest.get(path, optins);
    return response.data;
};

export default httpRequest;
