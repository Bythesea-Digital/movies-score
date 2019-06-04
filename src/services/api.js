import axios from 'axios';

const api = axios.create({ baseURL: `http://www.omdbapi.com/?apikey=${process.env.REACT_APP_OMDB_API}`, defaultInterceptors:true});

export default api;