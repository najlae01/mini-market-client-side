import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

API.interceptors.request.use((req)=> {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.stringify(localStorage.getItem("profile").token)}`
    }
    return req
})

export const addFournisseur = (formData) => API.post('/add/fournisseur', formData)

export const getFournisseurByUserId = (userId) => API.get(`/get/fournisseur/user/${userId}`)

export const getFournisseur = (userId) => API.get(`/get/fournisseur/${userId}`)

export const updateFournisseur = (id, formData) => API.put(`/update/fournisseur/${id}`, formData)

export const deleteFournisseur = (userId) => API.delete(`/delete/fournisseur/${userId}`)

export const getAllFournisseur = () => API.get('/get/fournisseurs')