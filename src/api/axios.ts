import axios from "axios";

// axios 인스턴스 생성
export const LoginInstance = axios.create({
    baseURL: "http://192.168.0.140:8686",
});

export const HeaderInstance = axios.create({
    baseURL: "http://192.168.0.140:8686",
    headers: {
        "Content-Type": "application/json",
    },
});

HeaderInstance.interceptors.request.use(
    (config) => {
        const accessToken = window.localStorage.getItem("token");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);
