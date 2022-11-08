
import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})


export const getProfile = (id) => API.get(`/auth/profile/${id}`)

export const updateProfile = (user) => API.put('/auth/profile', user,
{headers: {
    "Content-Type": "application/json",
}}
)
