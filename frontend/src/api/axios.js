import axios from 'axios';


const API = axios.create({
  baseURL: 'https://fashion-ecommerce-fullstack.onrender.com',
})


export default API;