import axios from 'axios'
import { erroInterceptor, responseInterceptor } from './interceptors';

 const Api = axios.create({
  baseURL: 'http://localhost:3334',
});

const Dvr = axios.create({
	baseURL: 'http://localhost:3000/api/',
//  headers: {
//     'Content-Type': 'application/json'
//  }

})



Api.interceptors.response.use(
	(response) => responseInterceptor(response),
    (error) => erroInterceptor(error)
);

export { Api , Dvr }
