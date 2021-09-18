import axios, { AxiosError, AxiosResponse } from "axios";

const request = (apiBase: string, options: {}) => {
  const client = axios.create({
    baseURL: apiBase,
  });

  const onSuccess = (response: AxiosResponse) => {
    return response;
  };

  const onError = (error: AxiosError) => {
    console.log("Request Failed:", error.config);
    if (error.response) {
      console.log("Status:", error.response.status);
      console.log("Data:", error.response.data);
      console.log("Headers:", error.response.headers);
    } else {
      console.log("Error Message:", error.message);
    }
    return Promise.reject(error.response || error.message);
  };

  return client(options).then(onSuccess).catch(onError);
};

export default request;