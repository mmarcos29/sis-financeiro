import axios from "axios";

const api = axios.create({
    baseURL: 'http://52.14.100.212:9000/api/receivefile',
    timeout: 9999999
    
  });

export default api;