import axios, { AxiosRequestConfig } from 'axios';

const baseURL = process.env.BASE_URL || process.env.NEXT_PUBLIC_BASE_URL;

const axiosDefaultConfigs: AxiosRequestConfig = {
  baseURL,
};

const axiosInstance = axios.create(axiosDefaultConfigs);

export default axiosInstance;
