import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.stringify(localStorage.getItem("profile").token)}`
    }
    return req
})

export const addClient = (formData) => API.post('/add/client', formData)

export const getClientByUserId = (userId) => API.get(`/get/client/user/${userId}`)

export const getClient = (userId) => API.get(`/get/client/${userId}`)

export const updateClient = (id, formData) => API.put(`/update/client/${id}`, formData)

export const deleteClient = (userId) => API.delete(`/delete/client/${userId}`)

export const getAllClient = () => API.get('/get/clients')