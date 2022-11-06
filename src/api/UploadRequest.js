import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

export const uploadImage = (data) => API.post('/upload', data)

export const uploadArticle = (data) => API.post('/add/article', data)