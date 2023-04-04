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
        const refreshToken = window.localStorage.getItem("token2");
        if (accessToken) {
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

setInterval(() => {
    const accessTokenExp = window.localStorage.getItem("exp");
    if (accessTokenExp && new Date(accessTokenExp) < new Date()) {
        const refreshToken = window.localStorage.getItem("token2");
        const body = { refresh: refreshToken };
        HeaderInstance.post("/api/member/refresh", body)
            .then((res) => {
                const { token } = res.data;
                window.localStorage.setItem("token", token);
                window.localStorage.setItem(
                    "exp",

                    new Date(Date.now() + 3600 * 1000).toString()
                );
            })
            .catch((error) => {
                console.error("refresh token error: ", error);
            });
    }
}, 1000 * 60 * 5);
