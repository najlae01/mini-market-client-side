import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

export const getLigneCommandes = () => API.get('/get/lignecommandes')

export const getLigneCommande = (id) => API.get(`/get/lignecommande/${id}`)

export const addLigneCommande = (id, data) => API.post(`/add/lignecommande/${id}`, data)

export const updateLigneCommande = (id, data) => API.put(`/update/lignecommande/${id}`, data)

export const deleteLigneCommande = (id) => API.delete(`/delete/lignecommande/${id}`)