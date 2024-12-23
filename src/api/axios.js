import axios from 'axios';

axios.defaults.withCredentials = true;
const instance = axios.create({
  baseURL: 'https://my-e-shop-web-backend.onrender.com/api/v1', //http://localhost:4000
  withCredentials: true,
  
});

export default instance;
