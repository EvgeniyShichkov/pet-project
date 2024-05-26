import axios, { AxiosResponse, AxiosInstance } from "axios";

type Method = {
  method: "GET" | "POST" | "PATCH" | "PUT" | "DELETE";
};

const BASE_URL = "https://jsonplaceholder.typicode.com/";

const axiosInstance: AxiosInstance = axios.create({
  baseURL: BASE_URL,
  withCredentials: true
});

const axiosRequest = <T>(method: Method["method"], url: string, data?: null | T | T[]): Promise<AxiosResponse<T>> => {
  try {
    const response = axiosInstance({
      method,
      url,
      data
    });
    return response;
  } catch (error) {
    throw error;
  }
};

export default axiosRequest;
