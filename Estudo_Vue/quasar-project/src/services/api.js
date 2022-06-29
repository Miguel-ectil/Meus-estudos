import axios from 'axios'

const api = axios.create({
    baseURL: 'https://pokeapi.co/api/v2',
    timeout: 3000,
    headers: {'X-Custom-Header': 'foobar'}
  });

  export default api;