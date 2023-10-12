import axios from "axios";

const baseURL = "https://something.onrender.com";

const axiosInstance = axios.create({
  baseURL,
  timeout: 10000,
});

// request interceptor
axiosInstance.interceptors.request.use(async (config) => {
  // let tokens;

  return config;
});

// response interceptor
axiosInstance.interceptors.response.use(
  (res) => res,
  async (error) => {
    const store = require("@/redux/store");

    const originalRequest = error.config;
    if (error.response?.status == 401 && !originalRequest._retry) {
      originalRequest._retry = true;
      try {
        // user.accessToken = user.refreshToken
        const newAccessToken = await axiosInstance.post(
          "/api/v1/auth/refresh-token"
        );
        //   set the access and refresh tokens again
        localStorage.setItem("tokens", newAccessToken.data.access_token);
        return axiosInstance(originalRequest);
      } catch (error) {
        store.dispatch(logout);
        throw new Error(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
