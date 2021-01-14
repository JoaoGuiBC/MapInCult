import axios from 'axios';

const api = axios.create({
  baseURL: `https://map-in-cult.herokuapp.com`,
});

export default api;
