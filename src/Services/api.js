import axios from 'axios';

const api = axios.create({
    baseURL: 'http://52.14.100.212:9000/api/receivefile'
    //baseURL: 'https://44ad5eefdfc0.ngrok.io/api/'
});

export default api;