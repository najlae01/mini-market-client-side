import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

export const getArticles = () => API.get('/get/articles')

export const getArticle = (id) => API.get(`/get/article/${id}`)