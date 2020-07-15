import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ws.audioscrobbler.com',
});

export default api;
