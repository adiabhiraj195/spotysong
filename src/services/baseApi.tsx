import axios from "axios";

export const BASE_URL = "https://api.spotify.com/v1";

export const API = axios.create({
    baseURL: BASE_URL,
    headers:{
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});