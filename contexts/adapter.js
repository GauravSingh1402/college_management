import axios from 'axios';
const SERVER = process.env.NEXT_PUBLIC_SERVER_URL;

let api = axios.create({
    baseURL: SERVER,
    headers: {
        Content: "application/json",
    },
    credentials: "include"
})

export default api;