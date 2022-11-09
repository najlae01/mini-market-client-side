import * as ArticleApi from '../api/ArticleRequest';
import * as LigneCommandeApi from '../api/LigneCommandeRequest';
import * as CommandeApi from '../api/CommandeRequest';

export const addToCart = (id, qty) => async(dispatch, getState) => {
    
    const {data} =  await ArticleApi.getArticle(id)
    dispatch({
        type: "CART_ADD_ITEM",
        payload: {
            product: data.codeArticle,
            name: data.nomArticle,
            image: data.imageArticle,
            price: data.prixUnitaire,
            quantityInStock: data.quantite_stock,
            qty
        }
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}



export const removeFromCart = (id, numeroLigne) => async(dispatch, getState) => {
    const {data} =  await LigneCommandeApi.deleteLigneCommande(numeroLigne)
    dispatch({
        type: "CART_REMOVE_ITEM",
        payload: id
    })
    localStorage.setItem('cartItems', JSON.stringify(getState().cartReducer.cartItems))
}

export const addLigneCommande = (id, dt) => async(dispatch) => {
    dispatch({type: "ADD_LIGNE_COMMANDE_START"})
    try {
        const {data} =  await LigneCommandeApi.addLigneCommande(id, dt)
        dispatch({type: "ADD_LIGNE_COMMANDE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "ADD_LIGNE_COMMANDE_FAIL"})
    }
}

export const updateLigneCommande = (id, dt) => async(dispatch) => {
    dispatch({type: "UPDATE_LIGNE_COMMANDE_START"})
    try {
        const {data} =  await LigneCommandeApi.updateLigneCommande(id, dt)
        dispatch({type: "UPDATE_LIGNE_COMMANDE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "UPDATE_LIGNE_COMMANDE_FAIL"})
    }
}


export const getLigneCommande = (id) => async(dispatch) => {
    dispatch({type: "GET_LIGNE_COMMANDE_START"})
    try {
        const {data} =  await LigneCommandeApi.getLigneCommande(id)
        dispatch({type: "GET_LIGNE_COMMANDE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "GET_LIGNE_COMMANDE_FAIL"})
    }
}

export const listLigneCommande = () => async(dispatch) => {
    dispatch({type: "LIST_LIGNE_COMMANDE_START"})
    try {
        const {data} =  await LigneCommandeApi.getLigneCommandes()
        dispatch({type: "LIST_LIGNE_COMMANDE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "LIST_LIGNE_COMMANDE_FAIL"})
    }
}

export const deleteLigneCommande = (id) => async(dispatch) => {
    dispatch({type: "DELETE_LIGNE_COMMANDE_START"})
    try {
        const {data} =  await LigneCommandeApi.deleteLigneCommande(id)
        dispatch({type: "DELETE_LIGNE_COMMANDE_SUCCESS"})
    } catch (error) {
        console.log(error)
        dispatch({type: "DELETE_LIGNE_COMMANDE_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
}


export const addCommande = (dt) => async(dispatch) => {
    dispatch({type: "ADD_COMMANDE_START"})
    try {
        const {data} =  await CommandeApi.addCommande(dt)
        dispatch({type: "ADD_COMMANDE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "ADD_COMMANDE_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
}

export const listCommandeByClient = (id) => async(dispatch) => {
    dispatch({type: "LIST_COMMANDE_START"})
    try {
        const {data} =  await CommandeApi.listCommandeByClient(id)
        dispatch({type: "LIST_COMMANDE_SUCCESS", payload: data})
    } catch (error) {
        console.log(error)
        dispatch({type: "LIST_COMMANDE_FAIL",
        payload: error.response && error.response.data.message ?
        error.response.data.message : error.message
    })
    }
}

