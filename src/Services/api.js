import axios from "axios";

const api = axios.create({
    baseURL: 'http://3.22.178.76:9000/api/receivefile',
    // baseURL: 'https://localhost:5001/api/receivefile',
    timeout: 9999999
    
  });

export default api;