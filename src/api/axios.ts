import axios, { AxiosInstance } from "axios";

// axios 인스턴스 생성
const instance: AxiosInstance = axios.create({
    baseURL: "https://api.example.com/",
    timeout: 5000,
    headers: { Authorization: "Bearer TOKEN" },
});
