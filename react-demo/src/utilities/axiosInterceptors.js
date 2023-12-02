import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "https://localhost:7285/api/",
    withCredentials: true
});

axiosInstance.interceptors.request.use((config) => {
    // ...
    config.headers.Authorization = "Bearer " + localStorage.getItem("token");
    return config;
})

axiosInstance.interceptors.response.use((response) => {
    console.log("CEVAP GELDİ!")
    return response;
}, (error) => {
    console.log("HATALI CEVAP GELDİ:", error);
    return Promise.reject(error);
})

export default axiosInstance;