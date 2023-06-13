import Axios, { AxiosInstance } from 'axios';


// const tokenHeader = `Bearer ${token}`.replace(/\"/g, "");

const axiosInstance = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

const axiosInstance1  = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URLDJANGO,
});

axiosInstance.interceptors.request.use((config) => {
  return config;
});

axiosInstance1.interceptors.request.use((config) => {
  return config;
});

export const httpClient: AxiosInstance = axiosInstance;
export const httpClientDJango: AxiosInstance = axiosInstance1;


// export const httpClient: AxiosInstance = Axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URL,
//   headers: {
//     Authorization: tokenHeader
//   }
// });



// export const httpClientDJango: AxiosInstance = Axios.create({
//   baseURL: process.env.NEXT_PUBLIC_API_URLDJANGO,
//   headers: {
//     Authorization: tokenHeader
//   }
// });
