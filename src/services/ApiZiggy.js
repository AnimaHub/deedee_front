import CONFIG from "./Config"
import axios from "axios"

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

