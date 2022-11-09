import axios from "axios";

const API = axios.create({baseURL: "http://localhost:8080"})

export const getCommandes = () => API.get('/get/commandes')

export const getCommande = (id) => API.get(`/get/commande/${id}`)

export const listCommandeByClient = (id) => API.get(`/get/commandes/${id}`)

export const addCommande = (data) => API.post('/add/commande', data)