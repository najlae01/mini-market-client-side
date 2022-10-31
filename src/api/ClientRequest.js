import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.stringify(localStorage.getItem("profile").token)}`
    }
    return req
})

export const addClient = (formData) => API.post('/addClient', formData)

export const getClient = (userId) => API.get(`/getClient/${userId}`)

export const updateClient = (id, formData) => API.put(`/updateClient/${id}`, formData)

export const deleteClient = (userId) => API.delete(`/deleteClient/${userId}`)

export const getAllClient = () => API.get('/clients')