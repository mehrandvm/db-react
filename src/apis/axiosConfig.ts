import axios, { AxiosRequestConfig } from 'axios';

const baseURL = `${process.env.REACT_APP_BASE_URL}/api/panel`;

const axiosDefaultConfigs: AxiosRequestConfig = {
  baseURL,
};

const axiosInstance = axios.create(axiosDefaultConfigs);

export default axiosInstance;
