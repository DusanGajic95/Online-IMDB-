import axios from 'axios';

const api = axios.create({
  baseURL: 'https://vivifyacademy-movie-api.vivifyideas.com/api',
});

export default api;
