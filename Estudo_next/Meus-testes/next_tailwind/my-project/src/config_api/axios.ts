import axios from "axios";
import Axios, { AxiosInstance } from 'axios';
import Cookies from 'js-cookie'

axios.defaults.withCredentials = true;

const axiosInstance  = Axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URLDJANGO,
});

axiosInstance.interceptors.request.use((config:any) => {
  const token = Cookies.get("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`.replace(/\"/g, "");
  }
  return config;
});

export const httpClientDJango: AxiosInstance = axiosInstance;
