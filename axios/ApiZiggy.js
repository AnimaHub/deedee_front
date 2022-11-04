import axios from 'axios'
import CONFIG from "./Config"

const apiZiggy = axios.create(
    {
        baseURL: CONFIG.baseUrl,
        withCredentials: false,
        headers: {
            accept: "application/json",
            "Content-type": "application/json"
        }
    }
)

export default apiZiggy

