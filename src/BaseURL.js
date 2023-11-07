import axios from 'axios';

const axiosInstance = axios.create({

  //server api

  // baseURL: '', 

//local api

  baseURL: 'http://localhost:4000/petshop_api', 

  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance