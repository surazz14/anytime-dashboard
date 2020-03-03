import axios from "axios";
const token = localStorage.getItem("auth");
axios.interceptors.request.use(
  config => {
    if (token) {
      console.log("I have token");
      config.headers["Authorization"] = "Bearer " + token;
    }
    // config.headers['Content-Type'] = 'application/json';
    return config;
  },
  error => {
    Promise.reject(error);
  }
);
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// setting base url
var axiosInstance = axios.create({
  baseURL: "https://anytimenepal.herokuapp.com/api",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default axiosInstance;
